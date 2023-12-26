from django.shortcuts import render
from .models import *
from .serializers import TodoSerializer,HistorySerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import views
from rest_framework import status


#api_view is to define the method which we are going to use 
@api_view(['GET','POST'])
def todoView(request):
    if request.method == 'GET':
        queryset = Todo.objects.all()   #here we get the data present in our db
        serializer = TodoSerializer(queryset, many = True) #to serialize our data i.e to convert into json form
        return Response(serializer.data) #serializers contains the data inside the data i.e. serializer.data

    elif request.method == 'POST':
        serializer = TodoSerializer(data=request.data) #Getting data from the server
        if serializer.is_valid():
            serializer.save()   #saving the data into our database
            return Response(serializer.data, status=status.HTTP_201_CREATED)    #status of success
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  #status of error


@api_view(['GET','PUT','PATCH','DELETE'])
def todoEdit(request,pk):
    task = Todo.objects.get(id=pk) #This could be taken also by get_object_or_404(Todo, id=id)
    if request.method == 'GET':
        serializer = TodoSerializer(task)
        return Response(serializer.data)
    
    if request.method == 'PATCH':
        task.complete = True
        serializer = TodoSerializer(task)
        task.save()
        if serializer.is_valid():
            serializer.save()
            print('data saved',serializer.data)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['PATCH'])
def redoEdit(request,pk):
    task = Todo.objects.get(id=pk)
    if request.method == 'PATCH':
        task.complete = False
        serializer = TodoSerializer(task)
        task.save()
        if serializer.is_valid():
            serializer.save()
            print('data saved',serializer.data)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)





@api_view(['GET'])
def historyView(request):
    if request.method == 'GET':
        queryset = History.objects.all()   #here we get the data present in our db
        serializer = HistorySerializer(queryset, many = True) #to serialize our data i.e to convert into json form
        return Response(serializer.data)



@api_view(['POST','DELETE'])
def historyAdd(request,id):
    if request.method == 'POST':
        task = Todo.objects.get(id = id)
        History.objects.create(title=task.title,desc=task.desc,complete=task.complete)
        return Response(status=status.HTTP_201_CREATED)  #status of error
    
    elif request.method == 'DELETE':
        item = History.objects.get(id=id)
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['DELETE'])
def deleteHistory(request):
    if request.method == 'DELETE':
        History.objects.all().delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



@api_view(['POST'])
def restore(request,id):
    if request.method == 'POST':
        task = History.objects.get(id = id)
        Todo.objects.create(title=task.title,desc=task.desc,complete=task.complete)
        return Response(status=status.HTTP_201_CREATED)





# @api_view(['GET']) #This is not needed for the class based view
# class TodoView(views.APIView):
#     def get(self,request):
#         queryset = Todo.objects.all()  
#         serializer = TodoSerializer(queryset, many = True) 
#         return Response(serializer.data) 
    
#     def post(self, request):
#         serializer = TodoSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
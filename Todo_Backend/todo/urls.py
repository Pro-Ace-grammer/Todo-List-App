from django.urls import path
from . import views


urlpatterns = [
    path('todo',views.todoView, name = 'todo'),
    path('todos/<int:pk>',views.todoEdit, name='edit'),
    path('todo/redo/<int:pk>',views.redoEdit, name = 'todo'),
    path('history',views.historyView, name='history'),
    path('history/<int:id>',views.historyAdd, name='history'),
    path('historyclear',views.deleteHistory, name='delHistory'),
    path('history/task/<int:id>',views.restore, name='clearAll')
]
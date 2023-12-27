from rest_framework import serializers
from .models import *


class TodoSerializer(serializers.ModelSerializer):
    # title = serializers.CharField(max_length=50, required=False)
    # desc = serializers.CharField(style={'base_template': 'textarea.html'})
    class Meta:
        model = Todo
        fields = ['title','desc','complete','id']

class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = History
        fields = ['title','desc','complete','id']
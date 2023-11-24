from django.contrib import admin
from .models import *

class HistoryAdmin(admin.ModelAdmin):
    list_display = ['id','title','desc','complete','created']

class TodoAdmin(admin.ModelAdmin):
    list_display = ['id','title','desc','complete','created','updated']

admin.site.register(Todo,TodoAdmin)
admin.site.register(History, HistoryAdmin)
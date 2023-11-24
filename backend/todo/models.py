from django.db import models

# Create your models here.

class History(models.Model):
    title =models.CharField( max_length=50)
    desc = models.TextField()
    complete = models.BooleanField(default=True)
    created = models.TimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.title} {self.complete}'
    


class Todo(models.Model):
    title =models.CharField( max_length=50)
    desc = models.TextField()
    complete = models.BooleanField(default=False)
    created = models.TimeField(auto_now_add=True)
    updated = models.TimeField(auto_now=True)

    def __str__(self):
        return f'{self.title} {self.complete}'
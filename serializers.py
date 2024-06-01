from rest_framework import serializers
from .models import App, Task
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class AppSerializer(serializers.ModelSerializer):
    class Meta:
        model = App
        fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    app = AppSerializer(read_only=True)

    class Meta:
        model = Task
        fields = '__all__'

from django.contrib.auth.models import User, Group
from rest_framework import serializers
#from rest_framework import serializers
from .models import Posts


class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ("title", "description","source","img_link","url")

# C:\Users\User\compmark\g02\backend\api\serializers.py

from rest_framework import serializers
from .models import User1

class User1LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

class User1RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User1
        fields = ['firstName', 'lastName', 'address', 'telephoneNo', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user1 = User1.objects.create_user(**validated_data)
        return user1

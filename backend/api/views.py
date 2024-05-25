# C:\Users\User\compmark\g02\backend\api\views.py

from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import User1
from .serializers import User1LoginSerializer, User1RegistrationSerializer

import pandas as pd

class User1LoginView(generics.GenericAPIView):
    serializer_class = User1LoginSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data.get('email')
        password = serializer.validated_data.get('password')
        user = User1.objects.filter(email=email).first()

        if user is None or not user.check_password(password):
            return Response({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)

        refresh = RefreshToken.for_user(user)
        return Response({
            'email': email,
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }, status=status.HTTP_200_OK)

class User1RegisterView(generics.CreateAPIView):
    queryset = User1.objects.all()
    serializer_class = User1RegistrationSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }, status=status.HTTP_201_CREATED)

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = User1LoginSerializer

class UserDataAPIView(generics.RetrieveAPIView):
    queryset = User1.objects.all()
    serializer_class = User1RegistrationSerializer
    permission_classes = (permissions.AllowAny,)

    def get(self, request, email):
        try:
            user = User1.objects.get(email=email)
            data = {
                'email': user.email,
            }
            return Response(data, status=status.HTTP_200_OK)
        except User1.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

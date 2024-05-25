# C:\Users\User\a1\backend\api\urls.py

from django.urls import path
from .views import User1RegisterView, User1LoginView, UserDataAPIView

from . import views

urlpatterns = [
    path('user1register/', User1RegisterView.as_view(), name='user1register'),
    path('user1login/', User1LoginView.as_view(), name='user1login'),
    path('user-data/<str:email>/', UserDataAPIView.as_view(), name='user-data'), 

]


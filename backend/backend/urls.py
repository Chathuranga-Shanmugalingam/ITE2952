# C:\Users\User\a1\backend\backend\urls.py

from django.contrib import admin
from django.urls import path, include
from api.views import MyTokenObtainPairView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]

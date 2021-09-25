from django.urls import path
from . import views


urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    path('send/', views.SendMessageView.as_view(), name='send')
]
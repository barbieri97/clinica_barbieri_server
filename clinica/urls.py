from django.urls import path
from . import views

app_name = 'cardapio'

urlpatterns = [
    path('', views.index, name='index'),
]
from django.urls import path
from . import views

app_name = 'cardapio'

urlpatterns = [
    path('', views.index, name='index'),
    path('contato/agradecimento/<int:id>', views.agradecimento, name='agradecimento'),
    path('contato/', views.contato, name='contato'),
    path('orientacao/', views.orientacao, name='orientacao'),
    path('psicoadolescente/', views.psicoadolescente, name='psicoadolescente'),
    path('psicoadulto', views.psicoadulto, name='psicoadulto'),
    path('psicoidoso', views.psicoidoso, name='psicoidoso'),
    path('psicoinfantil', views.psicoinfantil, name='psicoinfantil'),
    path('sobre', views.sobre, name='sobre'),
]
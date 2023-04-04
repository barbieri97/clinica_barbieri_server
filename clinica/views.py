from django.shortcuts import render
from django.http import Http404

# Create your views here.

def index(request) :
    return render(request, 'clinica/index.html')

def agradecimento(request, id):
    if id == 1:
        return render(request, 'clinica/agradecimentos1.html')
    elif id == 2:
        return render(request, 'clinica/agradecimentos2.html')
    else:
        raise Http404('Página não encontrada')
    
def contato(request):
    return render(request, 'clinica/contato.html')

def orientacao(request):
    return render(request, 'clinica/orientacao.html')

def psicoinfantil(request):
    return render(request, 'clinica/psicoinfantil.html')

def psicoadolescente(request):
    return render(request, 'clinica/psicoadolescente.html')

def psicoadulto(request):
    return render(request, 'clinica/psicoadulto.html')

def psicoidoso(request):
    return render(request, 'clinica/psicoidoso.html')

def sobre(request):
    return render(request, 'clinica/sobre.html')
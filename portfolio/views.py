from django.shortcuts import render


def home(request):
    context = {}

    return render(request, 'portfolio/home.html', context)
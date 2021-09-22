from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import FileResponse


class HomeView(TemplateView):
    template_name = 'portfolio/home.html'

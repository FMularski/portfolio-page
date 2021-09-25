from django.views.generic import TemplateView
from django.core.mail import send_mail
from django.conf import settings
from django.views.generic.base import View
from django.http import JsonResponse
from smtplib import SMTPException


class HomeView(TemplateView):
    template_name = 'portfolio/home.html'


class SendMessageView(View):
    def post(self, request):
        message = request.POST.get('message')
        user_email = request.POST.get('email')
        message += f'\n\nFrom: {user_email}'

        try:
            send_mail(
                'New message from portfolio website!',
                message,
                settings.EMAIL_HOST_USER,
                ['mularskif@gmail.com'],
                fail_silently=False,
            )

            return JsonResponse({'code': 200})

        except SMTPException as e:
            return JsonResponse({'code': 502, 'errorText': str(e)})

    

    
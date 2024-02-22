from django.urls import path
from .views import *

urlpatterns = [
    path('account/', account, name='account'), ##http://127.0.0.1:8000/master/account/?id=123
    path('dashboard/', dashboard, name='dashboard'), ##http://127.0.0.1:8000/master/dashboard/
    path('schedule/', schedule, name='schedule'), ##http://127.0.0.1:8000/master/schedule/
    path('analytics/', analytics, name='analytics'), ##http://127.0.0.1:8000/master/analytics/
    path('services/', services, name='services'), ##http://127.0.0.1:8000/master/services/
]
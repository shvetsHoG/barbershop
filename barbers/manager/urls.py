from django.urls import path
from .views import *

urlpatterns = [
    path('account/', account, name='account'), #http://127.0.0.1:8000/manager/account/?id=123
    path('dashboard/', dashboard, name='dashboard'), ##http://127.0.0.1:8000/manager/dashboard/
    path('masters/', masters, name='masters'), #http://127.0.0.1:8000/manager/masters/
    path('create/order/', create_order, name='create_order'), #http://127.0.0.1:8000/manager/create_order/
    path('analytics/', analytics, name='analytics'), #http://127.0.0.1:8000/manager/analytics/
    path('services/', services, name='services'), #http://127.0.0.1:8000/manager/services/
    path('customers/', customers, name='customers') #http://127.0.0.1:8000/manager/customers/
]
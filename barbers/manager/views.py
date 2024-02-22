from django.http import HttpResponse
from django.shortcuts import render

def account(request): #todo
    manager_id = request.GET['id']

    return HttpResponse(f"This is manager account\nYour id: {manager_id}")

def dashboard(request): #todo
    barbershop_id = None
    appointments = set()

    return HttpResponse(f"This is dashboard for manager")

def masters(requests): #todo
    masters = set()

    return HttpResponse(f"This is list with masters for manage them")

def create_order(requests): #todo

    return HttpResponse(f"Creating order.\nPlease, input information about service!")
# Create your views here.

def analytics(requests): #todo

    return HttpResponse(f"Analytics barbershop")


def services(requests): #todo

    return HttpResponse(f"This is page for manage prices and services")

def customers(request): #todo

    return HttpResponse(f"This is page for monitoring clients data")
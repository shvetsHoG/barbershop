from django.http import HttpResponse
from django.shortcuts import render

def account(request): #todo
    master_id = request.GET['id']
    return HttpResponse(f"Master account\nid={master_id}")

def dashboard(request): #todo

    return HttpResponse(f"Dashboard for master")

def schedule(request): #todo

    return HttpResponse(f"On this page master can update his schedule")

def analytics(request): #todo

    return HttpResponse(f"master analytics")

def services(request): #todo

    return HttpResponse(f"This is page for manage masters prices and services")

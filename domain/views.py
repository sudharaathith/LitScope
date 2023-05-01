from django.shortcuts import render
from Scraper.Creater import save_domine, get_domine_info

from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.views.decorators.csrf import csrf_exempt

# Create your views here.
@csrf_exempt
@api_view(['POST'])
def Save_domine(request):
    print(request.headers)
    data = request.data
    print(data)
    if save_domine(data):
        return Response(data, status=200)
    else:
        return Response(data, status=500)
    

@api_view(['GET'])
def get_domain(request):
    return Response(get_domine_info())


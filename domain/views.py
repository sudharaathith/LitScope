from django.shortcuts import render
from Scraper.Creater import save_domine

from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['POST'])
def Save_domine(request):
    data = request.data
    print(data)
    if save_domine(data):
        return Response(data, status=200)
    else:
        return Response(data, status=500)
    

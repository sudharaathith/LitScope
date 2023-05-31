from django.shortcuts import render
from Scraper.Creater import save_domine, get_domine_info, get_domine_config
from Search.keyword_search import extract_keywords
from Scraper.Manager import summaHandler
from Search.summarize import main_summarize

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


@api_view(['GET'])
def edit(request,name):
    return Response(get_domine_config(name))

@csrf_exempt
@api_view(['POST'])
def getToken(request):
    data = request.data
    token = data['value']
    res = extract_keywords(token)
    return Response(res, status=200)

@csrf_exempt
@api_view(['POST'])
def search(request):
    data = request.data
    token = data['value']
    print(token)
    res = []
    if token[0] == '':
        return Response(res, status=200)
    for i in token:
        res += summaHandler(i)
    return Response(list(set(res)), status=200)

@csrf_exempt
@api_view(['POST'])
def summarize(request):
    data = request.data
    token = data['url']
    print(type(token))
    res = main_summarize(token)
    return Response(res, status=200)
    


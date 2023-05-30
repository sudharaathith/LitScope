
from django.urls import path
from .views import Save_domine, get_domain, edit, getToken, search

urlpatterns = [
    path('create/', Save_domine),
    path('domains/', get_domain),
    path('edit/<str:name>', edit),
    path('keywords/', getToken),
    path('search/', search),
]

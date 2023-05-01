
from django.urls import path
from .views import Save_domine, get_domain

urlpatterns = [
    path('create/', Save_domine),
    path('domains/', get_domain)
]


from django.urls import path
from .views import Save_domine

urlpatterns = [
    path('create/', Save_domine)
]


from django.urls import path
from .views import Save_domine, get_domain, edit

urlpatterns = [
    path('create/', Save_domine),
    path('domains/', get_domain),
    path('edit/<str:name>', edit)
]

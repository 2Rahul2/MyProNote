from django.urls import path

from . import views

urlpatterns = [
    path('' ,views.getRoute , name="routes"),
    path('notes/' , views.notes , name="notes"),
    path('notes/<str:pk>/update/' , views.update , name="update"),
    path('notes/<str:pk>/delete/' , views.deletenote , name="delete"),
    path('notes/create/' , views.createnote , name="createNote"),


    path('notes/<str:pk>/' , views.note , name="note"),
]
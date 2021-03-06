from django.urls import path

from . import views

urlpatterns = [
  path('', views.ListReferral.as_view()),
  path('<int:pk>', views.DetailReferral.as_view()),
  path('count/<int:pk>', views.DetailCount.as_view()),
]
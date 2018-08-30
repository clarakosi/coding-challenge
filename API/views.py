from rest_framework import generics
from .models import Referral
from .serializers import ReferralSerializer, DetailReferralSerializer

class ListReferral(generics.ListCreateAPIView):
  queryset = Referral.objects.all()
  serializer_class = ReferralSerializer

class DetailReferral(generics.RetrieveUpdateDestroyAPIView):
  queryset = Referral.objects.all()
  serializer_class = DetailReferralSerializer
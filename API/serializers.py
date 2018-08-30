from rest_framework import serializers, viewsets
from .models import Referral

class ReferralSerializer(serializers.ModelSerializer):
  class Meta:
    model = Referral
    fields = ('id', 'title', 'count', )

class DetailReferralSerializer(serializers.ModelSerializer):
  class Meta:
    model = Referral
    fields = ('title', )

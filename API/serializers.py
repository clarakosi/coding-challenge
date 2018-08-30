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

class CountSerializer(serializers.ModelSerializer):
  class Meta:
    model = Referral
    fields = ('count', )

  def update(self, instance, validated_data):
    instance.count = validated_data.get('count', instance.count)
    instance.count += 1
    instance.save()
    return instance

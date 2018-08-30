from django.db import models

# Create your models here.
class Referral(models.Model):
  title = models.CharField(max_length=200)
  count = models.IntegerField(default=0)
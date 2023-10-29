from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Review(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    stars = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    store = models.ForeignKey('Store', on_delete=models.CASCADE)

class LocalRegion(models.Model):
    name = models.CharField(max_length=255)
    ordinal = models.IntegerField()
    store = models.ManyToManyField('Store')

class Store(models.Model):
    LOW = "$"
    MID_LOW = "$$"
    MID_HIGH = "$$$"
    HIGH = "$$$$"

    PRICE_CHOICES = [
        (LOW, 'Very Cheap'),
        (MID_LOW, 'Cheap'),
        (MID_HIGH, 'Moderate'),
        (HIGH, 'Expensive'),
    ]

    name = models.CharField(max_length=255)
    description = models.TextField()
    price_range = models.CharField(max_length=10, choices=PRICE_CHOICES, default=MID_LOW)
    region = models.CharField(max_length=255)
    street_address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=50)
    postal_code = models.CharField(max_length=50)
    url = models.URLField(max_length=255)
    phone = models.CharField(max_length=255)
    hours = models.CharField(max_length=255)
from django.contrib.auth.models import User, Group
from rest_framework import viewsets, permissions
from store_directory.serializers import UserSerializer, GroupSerializer, ReviewSerializer, StoreSerializer, LocalRegionSerializer
from store_directory.models import Review, Store, LocalRegion

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class StoreViewSet(viewsets.ModelViewSet):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class LocalRegionViewSet(viewsets.ModelViewSet):
    queryset = LocalRegion.objects.all()
    serializer_class = LocalRegionSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]



from django.contrib.auth.models import User, Group
from rest_framework import serializers
from store_directory.models import Store, Review, LocalRegion

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class ReviewSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class LocalRegionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = LocalRegion
        fields = '__all__'

class StoreSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Store
        fields = '__all__'
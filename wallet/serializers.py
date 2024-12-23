from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Wallet

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model: User
        fields = ['id', 'username', 'email']

class WalletSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Wallet
        fields = ['user', 'balance']

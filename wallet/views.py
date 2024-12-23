from rest_framework import generics
from .models import Wallet
from .serializers import WalletSerializer

class WalletListCreate(generics.ListCreateAPIView):
    queryset = Wallet.objects.all()
    serializer_class = WalletSerializer

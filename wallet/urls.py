from django.urls import path
from .views import WalletListCreate

urlpatterns = [
    path('wallets/', WalletListCreate.as_view(), name='wallet-list-create'),
]

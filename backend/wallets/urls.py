from django.urls import path
from . import views

urlpatterns = [
    path('deposit/', views.WalletDepositView.as_view(), name='wallet-deposit'),
    path('withdraw/', views.WalletWithdrawView.as_view(), name='wallet-withdraw'),
    path('history/', views.WalletTransactionsView.as_view(), name='wallet-history'),
    path('info/', views.WalletInfoView.as_view(), name='wallet-info'),
]

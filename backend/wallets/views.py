from rest_framework import generics, permissions, status, views
from rest_framework.response import Response
from drf_spectacular.utils import extend_schema
from dj_wallet.models import Transaction
from .serializers import TransactionSerializer, WalletTransactionSerializer

@extend_schema(
    tags=['Wallet'], 
    summary="Lấy lịch sử giao dịch",
    responses={200: TransactionSerializer(many=True)}
)
class WalletTransactionsView(generics.ListAPIView):
    serializer_class = TransactionSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        # Lấy tất cả giao dịch thuộc về ví của người dùng hiện tại
        return Transaction.objects.filter(wallet=self.request.user.wallet).order_by('-created_at')

@extend_schema(
    tags=['Wallet'], 
    summary="Lấy số dư và thông tin ví hiện tại"
)
class WalletInfoView(views.APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        wallet = request.user.wallet
        return Response({
            "username": request.user.username,
            "balance": wallet.balance,
            "reward_points": request.user.reward_points,
            "wallet_slug": wallet.slug,
            "is_frozen": wallet.is_frozen
        }, status=status.HTTP_200_OK)

@extend_schema(
    tags=['Wallet'], 
    summary="Nạp tiền vào ví",
    request=WalletTransactionSerializer,
    responses={200: TransactionSerializer}
)
class WalletDepositView(views.APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        serializer = WalletTransactionSerializer(data=request.data)
        if serializer.is_valid():
            amount = serializer.validated_data['amount']
            meta = serializer.validated_data.get('meta', {})
            
            # Đảm bảo meta là một dictionary để tránh lỗi 'str' object assignment
            if not isinstance(meta, dict):
                meta = {}
                
            meta['source'] = 'API'
            
            transaction = request.user.deposit(amount, meta=meta)
            
            return Response({
                "message": "Nạp tiền thành công!",
                "transaction": TransactionSerializer(transaction).data,
                "current_balance": request.user.wallet.balance
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@extend_schema(
    tags=['Wallet'], 
    summary="Rút tiền từ ví",
    request=WalletTransactionSerializer,
    responses={200: TransactionSerializer}
)
class WalletWithdrawView(views.APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        serializer = WalletTransactionSerializer(data=request.data)
        if serializer.is_valid():
            amount = serializer.validated_data['amount']
            
            if request.user.wallet.balance < amount:
                return Response({
                    "error": "Số dư không đủ để thực hiện giao dịch này."
                }, status=status.HTTP_400_BAD_REQUEST)

            meta = serializer.validated_data.get('meta', {})
            
            # Đảm bảo meta là một dictionary
            if not isinstance(meta, dict):
                meta = {}
                
            meta['source'] = 'API'
            
            transaction = request.user.withdraw(amount, meta=meta)
            
            return Response({
                "message": "Rút tiền thành công!",
                "transaction": TransactionSerializer(transaction).data,
                "current_balance": request.user.wallet.balance
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

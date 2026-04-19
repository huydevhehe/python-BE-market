from rest_framework import generics, permissions
from .serializers import UserSerializer, TransactionSerializer
from .models import User
from dj_wallet.models import Transaction

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.AllowAny,)

class UserProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_object(self):
        return self.request.user

class UserTransactionsView(generics.ListAPIView):
    serializer_class = TransactionSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        # Lấy tất cả giao dịch thuộc về ví của người dùng hiện tại
        return Transaction.objects.filter(wallet=self.request.user.wallet).order_by('-created_at')

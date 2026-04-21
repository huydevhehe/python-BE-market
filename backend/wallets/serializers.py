from rest_framework import serializers
from dj_wallet.models import Wallet, Transaction

class WalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wallet
        fields = ('slug', 'balance', 'is_frozen', 'created_at')

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ('uuid', 'type', 'amount', 'status', 'created_at', 'meta')

class WalletTransactionSerializer(serializers.Serializer):
    """
    Serializer dùng để nhận số tiền cho các API Nạp/Rút.
    """
    amount = serializers.DecimalField(
        max_digits=10, 
        decimal_places=2, 
        min_value=0.01,
        help_text="Số tiền thực hiện giao dịch (phải > 0)"
    )
    meta = serializers.JSONField(required=False, default=dict, help_text="Dữ liệu bổ sung (không bắt buộc)")

    def validate_amount(self, value):
        if value <= 0:
            raise serializers.ValidationError("Số tiền phải lớn hơn 0.")
        return value

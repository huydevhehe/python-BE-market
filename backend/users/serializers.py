from rest_framework import serializers
from .models import User
from wallets.serializers import WalletSerializer

class UserSerializer(serializers.ModelSerializer):
    wallet = WalletSerializer(read_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'role', 'password', 'wallet', 'reward_points')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class UserRegisterSerializer(serializers.ModelSerializer):
    """
    Serializer dành riêng cho việc đăng ký tài khoản mới kèm theo thông tin ví.
    """
    wallet = WalletSerializer(read_only=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'wallet')
        extra_kwargs = {
            'password': {'write_only': True},
            'email': {'required': True}
        }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

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

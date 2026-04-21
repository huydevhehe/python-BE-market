from rest_framework import generics, permissions
from drf_spectacular.utils import extend_schema
from .serializers import UserSerializer, UserRegisterSerializer
from .models import User

@extend_schema(tags=['Auth'], summary="Đăng ký tài khoản mới")
class UserRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer
    permission_classes = (permissions.AllowAny,)

@extend_schema(tags=['Auth'], summary="Xem hồ sơ người dùng")
class UserProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_object(self):
        return self.request.user

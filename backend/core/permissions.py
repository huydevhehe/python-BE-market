from rest_framework import permissions

class IsSellerOrReadOnly(permissions.BasePermission):
    """
    Quyền tùy chỉnh: Chỉ cho phép người bán (seller) sửa hoặc xóa sản phẩm của họ.
    Những người khác chỉ có quyền xem (Read-only).
    """
    def has_object_permission(self, request, view, obj):
        # Quyền xem (GET, HEAD, OPTIONS) được phép cho tất cả mọi người
        if request.method in permissions.SAFE_METHODS:
            return True

        # Quyền sửa/xóa chỉ dành cho chủ sở hữu (obj.seller)
        return obj.seller == request.user

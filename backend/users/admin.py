from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from unfold.admin import ModelAdmin
from django.utils.translation import gettext_lazy as _
from django.contrib import messages
from .models import User
from dj_wallet.models import Wallet, Transaction, Transfer
import dj_wallet.admin # Đảm bảo admin của thư viện đã được load

# Hủy đăng ký mặc định của dj-wallet để đăng ký lại với Unfold
if admin.site.is_registered(Wallet):
    admin.site.unregister(Wallet)
if admin.site.is_registered(Transaction):
    admin.site.unregister(Transaction)
if admin.site.is_registered(Transfer):
    admin.site.unregister(Transfer)

@admin.register(User)
class UserAdmin(ModelAdmin, BaseUserAdmin): # Đổi thứ tự: ModelAdmin lên trước
    list_display = ('username', 'email', 'get_wallet_balance', 'role', 'is_staff')
    list_filter = ('role', 'is_staff', 'is_superuser')
    actions = ['top_up_demo_50']

    fieldsets = BaseUserAdmin.fieldsets + (
        ('Role Info', {'fields': ('role',)}),
    )
    add_fieldsets = BaseUserAdmin.add_fieldsets + (
        ('Role Info', {'fields': ('role',)}),
    )

    def get_wallet_balance(self, obj):
        try:
            return f"${obj.balance}"
        except Exception:
            return "$0.00"
    get_wallet_balance.short_description = _("Luxury Balance")

    def top_up_demo_50(self, request, queryset):
        for user in queryset:
            user.deposit(50, meta={"reason": "Demo Top-up"})
        self.message_user(request, f"Đã nạp thành công 50$ vào ví của {queryset.count()} người dùng.", messages.SUCCESS)
    top_up_demo_50.short_description = _("🚀 Nạp $50 dùng thử")

@admin.register(Wallet)
class WalletAdmin(ModelAdmin):
    list_display = ("slug", "holder_info", "balance", "created_at")
    search_fields = ("slug", "uuid")
    readonly_fields = ("balance", "uuid")
    
    def holder_info(self, obj):
        return f"{obj.holder}"
    holder_info.short_description = _("Chủ sở hữu")

@admin.register(Transaction)
class TransactionAdmin(ModelAdmin):
    list_display = ("uuid", "wallet", "type", "amount", "confirmed", "created_at")
    list_filter = ("type", "confirmed", "created_at")
    search_fields = ("uuid", "wallet__slug")

@admin.register(Transfer)
class TransferAdmin(ModelAdmin):
    list_display = ("uuid", "status", "created_at")

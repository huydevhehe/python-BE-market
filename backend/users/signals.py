from django.db.models.signals import post_save
from django.dispatch import receiver
from dj_wallet.models import Transaction
from .models import User

@receiver(post_save, sender=Transaction)
def reward_points_on_deposit(sender, instance, created, **kwargs):
    """
    Tự động tặng điểm thưởng khi người dùng nạp tiền thành công.
    Tỷ lệ: 1$ = 10 điểm thưởng.
    """
    # Chỉ xử lý khi giao dịch đã hoàn tất (Completed) và là loại nạp tiền (Deposit)
    if instance.status == 'completed' and instance.type == 'deposit':
        # instance.wallet.holder là người sở hữu ví (trong trường hợp này là User)
        user = instance.wallet.holder
        
        # Kiểm tra xem holder có phải là thực thể User không
        if isinstance(user, User):
            # Tính toán điểm thưởng: 1$ = 10 điểm
            # u.amount là Decimal, ta chuyển sang int
            points_to_add = int(instance.amount * 10)
            
            if points_to_add > 0:
                user.reward_points += points_to_add
                # update_fields để tăng hiệu suất và tránh ghi đè dữ liệu khác
                user.save(update_fields=['reward_points'])
                
                # Log ra console để mày dễ theo dõi khi test shell
                print(f"🎁 LUXURY REWARD: Đã tặng {points_to_add} điểm cho {user.username}!")

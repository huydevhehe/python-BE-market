from django.db.models.signals import post_save
from django.dispatch import receiver
from dj_wallet.models import Transaction
from users.models import User

@receiver(post_save, sender=Transaction)
def reward_points_on_deposit(sender, instance, created, **kwargs):
    """
    Tự động tặng điểm thưởng khi người dùng nạp tiền thành công.
    Tỷ lệ: 1$ = 10 điểm thưởng.
    """
    if instance.status == 'completed' and instance.type == 'deposit':
        user = instance.wallet.holder
        
        if isinstance(user, User):
            points_to_add = int(instance.amount * 10)
            
            if points_to_add > 0:
                user.reward_points += points_to_add
                user.save(update_fields=['reward_points'])
                print(f"🎁 LUXURY REWARD (New System): Đã tặng {points_to_add} điểm cho {user.username}!")

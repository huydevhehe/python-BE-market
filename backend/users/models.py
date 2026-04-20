from django.contrib.auth.models import AbstractUser
from django.db import models
from dj_wallet.mixins import WalletMixin

class User(AbstractUser, WalletMixin):
    ROLE_CHOICES = (
        ('ADMIN', 'Admin'),
        ('USER', 'User'),
    )
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='USER')
    reward_points = models.IntegerField(default=0, verbose_name="Điểm thưởng Luxury")

    def __str__(self):
        return f"{self.username} ({self.role})"

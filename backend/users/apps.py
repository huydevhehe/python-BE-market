from django.apps import AppConfig

class UsersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'users'
    verbose_name = " " # Để một khoảng trắng để Django không tự hiển thị tên App ra sidebar

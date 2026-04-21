"""
Cấu hình Django cho dự án config.

Được tạo bởi lệnh 'django-admin startproject' dùng Django 6.0.3.

Để biết thêm thông tin, hãy xem tại:
https://docs.djangoproject.com/en/6.0/topics/settings/

Danh sách đầy đủ các thiết lập và giá trị của chúng, xem tại:
https://docs.djangoproject.com/en/6.0/ref/settings/
"""

from pathlib import Path
from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy as _
from django.templatetags.static import static

# Xây dựng các đường dẫn bên trong dự án như thế này: BASE_DIR / 'thư-mục-con'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Cấu hình phát triển nhanh - không phù hợp để đưa lên chạy thực tế (production)
# Xem: https://docs.djangoproject.com/en/6.0/howto/deployment/checklist/

# CẢNH BÁO BẢO MẬT: giữ bí mật khóa bí mật dùng trong sản xuất!
SECRET_KEY = 'django-insecure-f-!&=2p&m+b1+(r$1t9e10&g3(p+v$if)+fc5mj*mp1)k25bx+'

# CẢNH BÁO BẢO MẬT: đừng để DEBUG = True khi chạy thực tế!
DEBUG = True

ALLOWED_HOSTS = []


# Định nghĩa các Ứng dụng (Apps) trong hệ thống

INSTALLED_APPS = [
    'unfold',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',
    'rest_framework_simplejwt',

    'corsheaders',
    'drf_spectacular',

    'users',
    'categories',
    'products',
    'orders',
    'wallets',
    'dj_wallet',
]

AUTH_USER_MODEL = 'users.User'

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / "lib" / "unfold_luxury" / "templates"],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'


# Cơ sở dữ liệu (Database)
# https://docs.djangoproject.com/en/6.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'thuctappython',
        'USER': 'root',
        'PASSWORD': 'huydev',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}


# Kiểm tra độ mạnh của mật khẩu
# https://docs.djangoproject.com/en/6.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Cấu hình đa ngôn ngữ và thời gian
# https://docs.djangoproject.com/en/6.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Các file tĩnh (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/6.0/howto/static-files/

STATIC_URL = 'static/'
STATICFILES_DIRS = [
    BASE_DIR / "lib" / "unfold_luxury" / "static",
]

# Cấu hình CORS (Cho phép các domain khác truy cập API)
CORS_ALLOW_ALL_ORIGINS = True

# Cấu hình Django REST Framework (Dành cho việc viết API)
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
}

SPECTACULAR_SETTINGS = {
    'TITLE': 'Luxury Marketplace API',
    'DESCRIPTION': 'Hệ thống Backend chuẩn Clean Code cho Mini-Marketplace',
    'VERSION': '1.0.0',
    'SERVE_INCLUDE_SCHEMA': False,
}

# Cấu hình cho các file Media (ảnh sản phẩm, file upload...)
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# Cấu hình giao diện Admin Luxury (Unfold)
UNFOLD = {
    "SITE_TITLE": "Mini Market Luxury",
    "SITE_HEADER": "MINI MARKET ADMIN",
    "SITE_SYMBOL": "diamond",
    "SHOW_HISTORY": True,
    "SHOW_VIEW_ON_SITE": True,
    "COLORS": {
        "primary": {
            "50": "var(--color-primary-50)",
            "100": "var(--color-primary-100)",
            "200": "var(--color-primary-200)",
            "300": "var(--color-primary-300)",
            "400": "var(--color-primary-400)",
            "500": "var(--color-primary-500)",
            "600": "var(--color-primary-600)",
            "700": "var(--color-primary-700)",
            "800": "var(--color-primary-800)",
            "900": "var(--color-primary-900)",
            "950": "var(--color-primary-950)",
        },
    },
    "STYLES": [
        lambda request: static("css/admin_themes.css"),
    ],
    "SCRIPTS": [
        lambda request: static("js/theme_switcher.js"),
    ],
    "DASHBOARD_CALLBACK": "core.dashboard.dashboard_callback",
    "SIDEBAR": {
        "show_search": True,
        "show_all_applications": False,
        "navigation": [
            {
                "title": "Quản lý Cửa hàng",
                "separator": True,
                "items": [
                    {
                        "title": "Sản phẩm",
                        "link": "/admin/products/product/",
                    },
                    {
                        "title": "Danh mục",
                        "link": "/admin/categories/category/",
                    },
                    {
                        "title": "Đơn hàng",
                        "link": "/admin/orders/order/",
                    },
                ],
            },
            {
                "title": "Người dùng & Bảo mật",
                "separator": True,
                "items": [
                    {
                        "title": "Danh sách người dùng",
                        "link": "/admin/users/user/",
                    },
                    {
                        "title": "Phân quyền (Nhóm)",
                        "link": "/admin/auth/group/",
                    },
                ],
            },
            {
                "title": _("Quản lý Tài chính"),
                "separator": True,
                "items": [
                    {
                        "title": _("Danh sách Ví"),
                        "icon": "account_balance_wallet",
                        "link": reverse_lazy("admin:dj_wallet_wallet_changelist"),
                    },
                    {
                        "title": _("Lịch sử Giao dịch"),
                        "icon": "paid",
                        "link": reverse_lazy("admin:dj_wallet_transaction_changelist"),
                    },
                ],
            },
        ],
    },
}

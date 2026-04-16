from django.contrib.auth import get_user_model
from products.models import Product
from orders.models import Order
from django.db.models import Sum
from django.utils import timezone
from datetime import timedelta

User = get_user_model()

def dashboard_callback(request, context):
    # Statistics for the cards
    total_users = User.objects.count()
    total_products = Product.objects.count()
    total_orders = Order.objects.count()
    total_revenue = Order.objects.filter(status='PAID').aggregate(Sum('total_price'))['total_price__sum'] or 0

    # Chart data (Last 7 days revenue)
    labels = []
    revenue_data = []
    today = timezone.now().date()
    
    for i in range(6, -1, -1):
        date = today - timedelta(days=i)
        day_revenue = Order.objects.filter(
            status='PAID', 
            created_at__date=date
        ).aggregate(Sum('total_price'))['total_price__sum'] or 0
        
        labels.append(date.strftime('%d/%m'))
        revenue_data.append(float(day_revenue))

    context.update({
        "kpi": [
            {
                "title": "Người dùng",
                "metric": total_users,
                "footer": "Tổng số thành viên",
                "icon": "users",
            },
            {
                "title": "Sản phẩm",
                "metric": total_products,
                "footer": "Sản phẩm đang bán",
                "icon": "package",
            },
            {
                "title": "Đơn hàng",
                "metric": total_orders,
                "footer": "Đơn hàng hệ thống",
                "icon": "shopping-cart",
            },
            {
                "title": "Doanh thu",
                "metric": f"{total_revenue:,} VNĐ",
                "footer": "Tổng tiền đã thanh toán",
                "icon": "trending-up",
            },
        ],
        "chart_labels": labels,
        "chart_data": revenue_data,
    })

    return context

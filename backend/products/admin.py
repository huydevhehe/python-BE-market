from django.contrib import admin
from unfold.admin import ModelAdmin
from .models import Product

@admin.register(Product)
class ProductAdmin(ModelAdmin):
    list_display = ('name', 'price', 'stock', 'category', 'seller', 'created_at')
    list_filter = ('category', 'seller', 'created_at')
    search_fields = ('name', 'category__name', 'seller__username')
    list_editable = ('price', 'stock') # Edit directly from the list
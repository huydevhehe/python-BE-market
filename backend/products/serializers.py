from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField(source='category.name')
    seller_name = serializers.ReadOnlyField(source='seller.username')

    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'stock', 'category', 'category_name', 'image', 'seller', 'seller_name', 'created_at', 'updated_at')
        read_only_fields = ('seller',)
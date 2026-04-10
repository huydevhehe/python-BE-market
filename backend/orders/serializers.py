from rest_framework import serializers
from .models import Order, OrderItem
from products.models import Product

class OrderItemSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source='product.name', read_only=True)

    class Meta:
        model = OrderItem
        fields = ('id', 'product', 'product_name', 'price', 'quantity')
        read_only_fields = ('price',)

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = ('id', 'user', 'total_price', 'status', 'items', 'created_at')
        read_only_fields = ('user', 'total_price', 'status')

    def create(self, validated_data):
        items_data = validated_data.pop('items')
        order = Order.objects.create(**validated_data)
        
        total_price = 0
        for item_data in items_data:
            product = item_data['product']
            quantity = item_data['quantity']
            
            # Logic for stock deduction
            if product.stock < quantity:
                raise serializers.ValidationError(f"Not enough stock for {product.name}")
            
            product.stock -= quantity
            product.save()
            
            price = product.price
            OrderItem.objects.create(order=order, product=product, price=price, quantity=quantity)
            total_price += price * quantity
            
        order.total_price = total_price
        order.save()
        return order

import React, { useContext, useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, CreditCard, Loader2, CheckCircle2 } from 'lucide-react';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import api from '../../api/axios';
import Button from '../ui/Button';

const CartDrawer = () => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen, clearCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleCheckout = async () => {
        if (!user) {
            alert('Mày phải đăng nhập mới mua hàng được!');
            return;
        }
        
        setIsCheckoutLoading(true);
        try {
            const items = cartItems.map(item => ({
                product: item.id,
                quantity: item.quantity
            }));
            
            await api.post('orders/', { items });
            
            setIsSuccess(true);
            setTimeout(() => {
                clearCart();
                setIsCartOpen(false);
                setIsSuccess(false);
            }, 3000);
        } catch (err) {
            alert('Thanh toán lỗi rồi: ' + (err.response?.data?.detail || 'Lỗi không xác định'));
        } finally {
            setIsCheckoutLoading(false);
        }
    };

    if (!isCartOpen) return null;

    if (isSuccess) {
        return (
            <div className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
                <div className="bg-white rounded-[40px] p-16 text-center shadow-2xl animate-in zoom-in duration-500 max-w-sm mx-8">
                    <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                        <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">Thành công rực rỡ!</h2>
                    <p className="text-slate-500 font-medium leading-relaxed">Đơn hàng của mày đã được ghi nhận. Chúng tao sẽ giao hàng sớm nhất có thể.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-[150] overflow-hidden">
            {/* Overlay */}
            <div 
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-500"
                onClick={() => setIsCartOpen(false)}
            />

            <div className="absolute inset-y-0 right-0 max-w-full flex">
                <div className="w-screen max-w-md animate-in slide-in-from-right duration-500">
                    <div className="h-full flex flex-col bg-white shadow-2xl rounded-l-[40px] overflow-hidden">
                        {/* Header */}
                        <div className="px-8 py-8 border-b border-slate-50 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <ShoppingBag className="text-indigo-600" size={24} />
                                <h2 className="text-2xl font-black text-slate-900 tracking-tighter">Giỏ hàng của mày</h2>
                            </div>
                            <button 
                                onClick={() => setIsCartOpen(false)}
                                className="p-3 bg-slate-50 hover:bg-slate-100 rounded-2xl text-slate-400 hover:text-slate-900 transition-all"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* List */}
                        <div className="flex-1 overflow-y-auto px-8 py-4 space-y-6">
                            {cartItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-6">
                                        <ShoppingBag size={40} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">Giỏ hàng trống trơn</h3>
                                    <p className="text-slate-400 text-sm font-medium">Chọn một vài sản phẩm xịn xò <br/> rồi quay lại đây nhé!</p>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={item.id} className="group flex items-center space-x-6 p-4 bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 rounded-3xl transition-all duration-300">
                                        <div className="w-24 h-24 shrink-0 overflow-hidden bg-slate-100 rounded-2xl">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-black text-slate-800 line-clamp-1 mb-1">{item.name}</h4>
                                            <p className="text-indigo-600 font-black text-base tracking-tight mb-3">${item.price}</p>
                                            
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm">
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="p-1 px-2 hover:bg-slate-50 text-slate-400 hover:text-slate-900"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="text-xs font-black text-slate-800 px-2 min-w-[20px] text-center">{item.quantity}</span>
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="p-1 px-2 hover:bg-slate-50 text-slate-400 hover:text-slate-900"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                                <button 
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="px-8 py-8 bg-slate-50/50 border-t border-slate-50 space-y-6">
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-slate-400 font-bold text-xs uppercase tracking-widest">
                                        <span>Tạm tính</span>
                                        <span>${cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-slate-900">
                                        <span className="text-lg font-black tracking-tighter">Tổng thanh toán</span>
                                        <span className="text-3xl font-black tracking-tighter">${cartTotal.toFixed(2)}</span>
                                    </div>
                                </div>

                                <Button 
                                    className="w-full py-5 text-lg shadow-2xl shadow-indigo-100 flex items-center space-x-3" 
                                    onClick={handleCheckout}
                                    disabled={isCheckoutLoading}
                                >
                                    {isCheckoutLoading ? (
                                        <Loader2 className="animate-spin" size={24} />
                                    ) : (
                                        <>
                                            <CreditCard size={24} />
                                            <span>Thanh toán ngay</span>
                                        </>
                                    )}
                                </Button>
                                
                                <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">
                                    Thanh toán an toàn & bảo mật 100%
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;

import React, { useContext } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import Badge from './Badge';
import { CartContext } from '../../context/CartContext';
import { formatCurrency } from '../../utils/format';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.1)] transition-all duration-500 border border-slate-100/50">
      {/* Product Image Area */}
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
        <img 
          src={product.image || 'https://via.placeholder.com/600x800?text=Premium+Item'} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        
        {/* Floating Actions */}
        <div className="absolute top-5 right-5 flex flex-col space-y-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-75">
          <button className="p-3 bg-white/90 backdrop-blur-md rounded-2xl text-slate-400 hover:text-rose-500 shadow-xl hover:scale-110 active:scale-95 transition-all">
            <Heart size={20} />
          </button>
        </div>

        <div className="absolute top-5 left-5">
           <Badge variant="primary">Mới về</Badge>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
            <span className="text-[11px] font-bold text-indigo-500 uppercase tracking-widest">{product.category_name || 'Electronics'}</span>
            <div className="flex items-center text-xs text-slate-400">
                ⭐ <span className="ml-1 text-slate-600 font-bold">4.8</span>
            </div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-800 mb-4 h-14 line-clamp-2 leading-tight group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between pt-2 border-t border-slate-50">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Giá bán</span>
            <span className="text-2xl font-extrabold text-slate-900 tracking-tight">{formatCurrency(product.price)}</span>
          </div>
          <button 
            onClick={() => addToCart(product)}
            className="bg-slate-900 hover:bg-indigo-600 text-white p-4 rounded-2xl transition-all duration-300 shadow-xl shadow-slate-100 hover:shadow-indigo-200 active:scale-90 overflow-hidden relative"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

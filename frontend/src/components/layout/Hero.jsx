import React from 'react';
import { ArrowRight, ShoppingBag, Sparkles, Heart } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FBFBFE]">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-br from-indigo-100/30 to-transparent rounded-full blur-3xl -z-10 animate-pulse"></div>
      
      <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-start space-y-8 z-10">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 px-4 py-2 rounded-2xl border border-indigo-100/50">
            <Sparkles size={16} className="text-indigo-600 animate-bounce" />
            <span className="text-xs font-black text-indigo-700 uppercase tracking-widest">Bộ sưu tập 2026</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight tracking-tighter">
            Trải nghiệm <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Luxury Ecommerce</span>
          </h1>

          <p className="text-lg text-slate-500 max-w-md font-medium">
            Khám phá những sản phẩm công nghệ tinh tuyển, mang đậm dấu ấn cá nhân và phong cách sống hiện đại.
          </p>

          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <Button size="lg" className="shadow-xl shadow-indigo-100 group">
              Mua sắm ngay
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="secondary">
              Xem thêm
            </Button>
          </div>

          <div className="flex items-center space-x-8 pt-4 opacity-50">
             <div className="flex flex-col">
                <span className="font-black text-xl text-slate-900 leading-none">50K+</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Khách hàng</span>
             </div>
             <div className="w-[1px] h-6 bg-slate-200"></div>
             <div className="flex flex-col">
                <span className="font-black text-xl text-slate-900 leading-none">120+</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Thương hiệu</span>
             </div>
          </div>
        </div>

        {/* Visual Element - Responsive and Fixed Layout */}
        <div className="relative flex justify-center lg:justify-end">
           <div className="relative z-10 w-full max-w-[550px] aspect-[4/5] bg-slate-900 rounded-[50px] shadow-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&q=80&w=1000" 
                alt="Main Hero" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-[12px] font-bold uppercase tracking-widest mb-3 opacity-60">Ưu đãi độc quyền</p>
                <h3 className="text-4xl font-black tracking-tight leading-none mb-6">Gương mặt mới</h3>
                <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                   <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                      <ShoppingBag size={20} />
                   </div>
                   <div className="flex flex-col leading-none">
                      <span className="text-[10px] font-bold opacity-60 uppercase mb-1">Giá từ</span>
                      <span className="text-xl font-black tracking-tight">$899.00</span>
                   </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

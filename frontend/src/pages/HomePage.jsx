import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import Hero from '../components/layout/Hero';
import ProductCard from '../components/ui/ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('products/')
            .then(res => setProducts(res.data))
            .finally(() => setLoading(false));
    }, []);

    const Shimmer = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-[40px] p-6 space-y-4 shadow-sm border border-slate-50">
                    <div className="aspect-[4/5] bg-slate-100 rounded-3xl animate-pulse"></div>
                    <div className="h-4 bg-slate-100 rounded-full w-2/3 animate-pulse"></div>
                    <div className="h-8 bg-slate-100 rounded-full w-full animate-pulse"></div>
                    <div className="flex justify-between items-center pt-4">
                        <div className="h-8 bg-slate-100 rounded-full w-1/3 animate-pulse"></div>
                        <div className="h-12 w-12 bg-slate-100 rounded-2xl animate-pulse"></div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="flex flex-col">
            <Hero />

            <section className="container mx-auto px-8 py-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
                    <div className="space-y-4">
                        <div className="inline-flex items-center space-x-2 text-indigo-600 font-black text-xs uppercase tracking-widest leading-none">
                           <Sparkles size={14} />
                           <span>Khám phá ngay</span>
                        </div>
                        <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-none">Sản phẩm <span className="text-indigo-600">Độc quyền</span></h2>
                        <p className="text-slate-400 font-medium max-w-md">Những thiết kế mới nhất vừa được cập nhật trong tuần này từ các thương hiệu hàng đầu thế giới.</p>
                    </div>
                    
                    <Button variant="secondary" className="group">
                        Xem tất cả
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>

                {loading ? (
                    <Shimmer />
                ) : products.length === 0 ? (
                    <div className="bg-white rounded-[40px] py-32 text-center shadow-[0_20px_60px_rgba(0,0,0,0.02)] border border-slate-50 flex flex-col items-center">
                        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-8">
                           <Sparkles size={48} />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-2">Chưa có sản phẩm nào</h3>
                        <p className="text-slate-400 font-medium">Chúng tôi đang chuẩn bị những sản phẩm tốt nhất cho bạn.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </section>

            {/* Newsletter Section */}
            <section className="container mx-auto px-8 mb-24">
                <div className="bg-indigo-600 rounded-[50px] p-12 lg:p-24 relative overflow-hidden flex flex-col items-center text-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                    
                    <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter mb-6 relative z-10 leading-none">Nhận thông tin <br/>Ưu đãi 20%</h2>
                    <p className="text-indigo-100 text-lg lg:text-xl font-medium mb-12 max-w-xl opacity-80 relative z-10">
                        Đăng ký nhận tin để không bỏ lỡ những bộ sưu tập giới hạn và các chương trình ưu đãi đặc quyền dành riêng cho thành viên.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-lg relative z-10">
                        <input 
                            type="email" 
                            placeholder="Địa chỉ email của bạn..." 
                            className="w-full px-8 py-4 bg-white rounded-3xl outline-none text-slate-900 font-bold placeholder:text-slate-400 shadow-2xl focus:ring-4 focus:ring-white/20 transition-all border-none"
                        />
                        <Button variant="secondary" size="lg" className="w-full sm:w-auto h-[60px] px-10 shadow-2xl">Tham gia ngay</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;

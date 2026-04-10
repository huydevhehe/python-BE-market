import React from 'react';
import { Globe, MessageCircle, Send, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-50 pt-24 pb-12">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Info */}
                    <div className="space-y-8">
                        <h3 className="text-3xl font-black tracking-tighter text-slate-900">
                            MINI<span className="text-indigo-600">MARKET</span>
                        </h3>
                        <p className="text-slate-400 font-medium leading-relaxed">
                            Cửa hàng công nghệ hàng đầu, mang đến những sản phẩm đột phá và trải nghiệm mua sắm đẳng cấp cho mọi người.
                        </p>
                        <div className="flex space-x-4">
                            {[Globe, MessageCircle, Send].map((Icon, i) => (
                                <div key={i} className="w-12 h-12 bg-slate-50 text-slate-400 hover:bg-indigo-600 hover:text-white rounded-2xl flex items-center justify-center transition-all cursor-pointer group shadow-sm hover:shadow-xl hover:shadow-indigo-200">
                                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">Sản phẩm</h4>
                        <ul className="space-y-4">
                            {['Điện thoại', 'Laptop', 'Phụ kiện', 'Smartwatch'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors flex items-center group">
                                        <span className="w-1 h-1 bg-transparent group-hover:bg-indigo-600 rounded-full mr-0 group-hover:mr-3 transition-all"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">Dịch vụ</h4>
                        <ul className="space-y-4">
                            {['Trung tâm trợ giúp', 'Vận chuyển', 'Đổi trả 30 ngày', 'Chính sách bảo mật'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors flex items-center group">
                                         <span className="w-1 h-1 bg-transparent group-hover:bg-indigo-600 rounded-full mr-0 group-hover:mr-3 transition-all"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">Liên hệ</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4">
                                <MapPin size={20} className="text-indigo-600 shrink-0" />
                                <span className="text-sm font-bold text-slate-500 leading-tight">123 Đường Công Nghệ, Quận 1, TP. Hồ Chí Minh</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Phone size={20} className="text-indigo-600 shrink-0" />
                                <span className="text-sm font-bold text-slate-500">+84 123 456 789</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Mail size={20} className="text-indigo-600 shrink-0" />
                                <span className="text-sm font-bold text-slate-500">support@minimarket.vn</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">
                        &copy; 2026 MiniMarket Project - Luxury Experience By Huy
                    </p>
                    <div className="flex space-x-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <span className="hover:text-indigo-600 cursor-pointer transition-colors">Điều khoản</span>
                        <span className="hover:text-indigo-600 cursor-pointer transition-colors">Bảo mật</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

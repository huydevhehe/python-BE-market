import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, LogOut, Search, Menu, X, Wallet } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';
import Button from '../ui/Button';
import { formatCurrency } from '../../utils/format';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const { cartCount, setIsCartOpen } = useContext(CartContext);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Trang chủ', path: '/' },
        { name: 'Bộ sưu tập', path: '/collections' },
        { name: 'Khuyến mãi', path: '/deals' },
    ];

    return (
        <header className={`
            fixed top-0 left-0 right-0 z-[100] transition-all duration-500
            ${isScrolled ? 'py-3 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.03)]' : 'py-6 bg-transparent'}
        `}>
            <div className="container mx-auto px-8 flex items-center justify-between">
                {/* Logo Area */}
                <div className="flex items-center space-x-12">
                    <Link to="/" className="text-3xl font-black tracking-tighter text-slate-900 group">
                        MINI<span className="text-indigo-600 group-hover:text-indigo-500 transition-colors">MARKET</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.path} 
                                to={link.path} 
                                className={`text-[13px] font-bold uppercase tracking-widest hover:text-indigo-600 transition-colors ${location.pathname === link.path ? 'text-indigo-600' : 'text-slate-500'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Right Actions */}
                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex items-center bg-slate-100/50 hover:bg-slate-100 px-4 py-2.5 rounded-2xl border border-transparent hover:border-slate-200 transition-all group">
                        <Search size={18} className="text-slate-400 group-focus-within:text-indigo-600" />
                        <input type="text" placeholder="Tìm kiếm sản phẩm..." className="bg-transparent border-none outline-none text-sm ml-3 w-40 font-medium placeholder:text-slate-400" />
                    </div>

                    <div className="flex items-center space-x-2">
                        <button 
                            onClick={() => setIsCartOpen(true)}
                            className="p-3 text-slate-600 hover:text-indigo-600 hover:bg-white rounded-2xl relative transition-all active:scale-95 group"
                        >
                            <ShoppingBag size={22} className="group-hover:rotate-12 transition-transform" />
                            {cartCount > 0 && (
                                <span className="absolute top-2 right-2 w-4 h-4 bg-indigo-600 text-white text-[9px] font-black rounded-full flex items-center justify-center border-2 border-white animate-in zoom-in duration-300">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        <div className="h-6 w-[1px] bg-slate-200 mx-2 hidden sm:block"></div>

                        {user ? (
                            <div className="flex items-center space-x-5">
                                <Link to="/profile" className="hidden sm:flex items-center space-x-3 bg-slate-50/80 hover:bg-indigo-50 px-4 py-2 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-all group">
                                    <div className="flex flex-col items-end">
                                        <span className="text-[9px] text-slate-400 font-black uppercase leading-none tracking-tighter">Số dư ví</span>
                                        <span className="text-xs font-black text-indigo-600">
                                            {formatCurrency(user.wallet?.balance || 0)}
                                        </span>
                                    </div>
                                    <div className="w-8 h-8 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-100 group-hover:scale-110 transition-transform">
                                        <Wallet size={14} className="text-white" />
                                    </div>
                                </Link>

                                <Link to="/profile" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                                    <div className="hidden lg:flex flex-col items-end">
                                        <span className="text-[10px] text-slate-400 font-bold uppercase leading-none">Tài khoản</span>
                                        <span className="text-xs font-black text-slate-800">{user.username}</span>
                                    </div>
                                    <div className="w-10 h-10 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400">
                                        <User size={20} />
                                    </div>
                                </Link>

                                <button onClick={logout} className="p-3 bg-slate-50 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-2xl transition-all shadow-sm">
                                    <LogOut size={20} />
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-2">
                                <Link to="/login">
                                    <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Đăng nhập</Button>
                                </Link>
                                <Link to="/register">
                                    <Button size="sm" className="shadow- indigo-200">Đăng ký</Button>
                                </Link>
                            </div>
                        )}
                    </div>
                    
                    <button className="lg:hidden p-2 text-slate-900">
                        <Menu size={28} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

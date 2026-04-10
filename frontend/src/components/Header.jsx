import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, LogOut, Package } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    MiniMarket
                </Link>

                {/* Navbar */}
                <nav className="flex items-center space-x-8">
                    <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Trang chủ</Link>
                    {user && (
                        <Link to="/orders" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 font-medium transition-colors">
                            <Package size={20} />
                            <span>Đơn hàng</span>
                        </Link>
                    )}
                </nav>

                {/* Actions */}
                <div className="flex items-center space-x-6">
                    <button className="relative text-gray-600 hover:text-blue-600 transition-colors">
                        <ShoppingBag size={24} />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
                    </button>

                    {user ? (
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                                <User size={18} className="text-blue-600" />
                                <span className="text-sm font-semibold text-blue-700">{user.username}</span>
                            </div>
                            <button 
                                onClick={logout}
                                className="text-gray-400 hover:text-red-500 transition-colors"
                                title="Đăng xuất"
                            >
                                <LogOut size={22} />
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-3">
                            <Link to="/login" className="text-gray-600 hover:text-blue-600 font-semibold px-4 py-2 transition-all">Đăng nhập</Link>
                            <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold shadow-md shadow-blue-200 transition-all">
                                Đăng ký
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;

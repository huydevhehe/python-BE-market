import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();

  // Tự động cuộn lên đầu trang mỗi khi chuyển trang
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Kiểm tra xem có đang ở trang login/register không để ẩn Header/Footer nếu muốn
  const isAuthPage = pathname === '/login' || pathname === '/register';

  return (
    <div className="min-h-screen bg-[#FBFBFE] flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {!isAuthPage && <Header />}
      <CartDrawer />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>

      {!isAuthPage && (
        <footer className="bg-white border-t border-slate-50 py-16">
          <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-black tracking-tighter text-slate-900">
                MINI<span className="text-indigo-600">MARKET</span>
              </h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                Nơi hội tụ những trải nghiệm công nghệ đỉnh cao và phong cách sống hiện đại.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">Sản phẩm</h4>
              <ul className="space-y-2 text-sm font-bold text-slate-500">
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">Điện thoại</li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">Laptop</li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">Phụ kiện</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">Hỗ trợ</h4>
              <ul className="space-y-2 text-sm font-bold text-slate-500">
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">Trung tâm trợ giúp</li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">Vận chuyển</li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors">Hoàn trả</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">Kết nối</h4>
              <div className="flex space-x-4">
                 <div className="w-10 h-10 bg-slate-100 rounded-xl hover:bg-indigo-100 hover:text-indigo-600 transition-all cursor-pointer"></div>
                 <div className="w-10 h-10 bg-slate-100 rounded-xl hover:bg-indigo-100 hover:text-indigo-600 transition-all cursor-pointer"></div>
                 <div className="w-10 h-10 bg-slate-100 rounded-xl hover:bg-indigo-100 hover:text-indigo-600 transition-all cursor-pointer"></div>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-8 mt-16 pt-8 border-t border-slate-50 text-center">
             <p className="text-[10px] font-bold text-slate-300 uppercase underline-offset-4 tracking-[0.3em]">&copy; 2026 MiniMarket Project - Luxury Experience</p>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;

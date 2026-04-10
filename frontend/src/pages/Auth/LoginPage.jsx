import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { LogIn, Lock, User, ArrowLeft, Loader2 } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        try {
            await login(username, password);
            navigate('/');
        } catch (err) {
            setError('Sai tài khoản hoặc mật khẩu!');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#FBFBFE] flex items-center justify-center px-8 py-20 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

            <div className="w-full max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-700">
                <Link to="/" className="inline-flex items-center text-slate-400 hover:text-indigo-600 font-bold mb-8 transition-colors group">
                   <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                   Trở về trang chủ
                </Link>

                <div className="bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-slate-100 p-12 lg:p-16">
                    <div className="mb-12">
                        <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">Chào mừng trở lại</h2>
                        <p className="text-slate-400 font-medium">Nhập thông tin bên dưới để tiếp tục trải nghiệm cùng MiniMarket.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <Input 
                            label="Tên đăng nhập"
                            icon={User}
                            placeholder="username của mày..."
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />

                        <div className="space-y-2">
                           <div className="flex justify-between items-center px-1">
                               <label className="text-sm font-semibold text-slate-700">Mật khẩu</label>
                               <Link to="#" className="text-xs font-bold text-indigo-600 hover:underline">Quên mật khẩu?</Link>
                           </div>
                           <Input 
                                type="password"
                                icon={Lock}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && (
                            <div className="bg-rose-50 border border-rose-100 p-4 rounded-2xl flex items-center space-x-3 text-rose-600 animate-in fade-in zoom-in duration-300">
                                <span className="font-bold text-sm">{error}</span>
                            </div>
                        )}

                        <Button 
                            className="w-full py-5 text-lg shadow-2xl shadow-indigo-100" 
                            disabled={isLoading}
                        >
                            {isLoading ? <Loader2 size={24} className="animate-spin" /> : 'Đăng nhập ngay'}
                        </Button>
                    </form>

                    <div className="mt-12 pt-8 border-t border-slate-50 text-center">
                        <p className="text-slate-400 font-medium">
                            Chưa có tài khoản? <Link to="/register" className="text-indigo-600 font-black hover:underline decoration-2 underline-offset-4 ml-1">Đăng ký miễn phí</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

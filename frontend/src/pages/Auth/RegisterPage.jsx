import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../api/axios';
import { UserPlus, User, Lock, Mail, Loader2, Target, ArrowLeft } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'USER'
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        try {
            await api.post('users/register/', formData);
            navigate('/login');
        } catch (err) {
            setError('Đăng ký thất bại! Tên đăng nhập đã tồn tại.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#FBFBFE] flex items-center justify-center px-8 py-20 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-50/50 rounded-full blur-[120px] -z-10 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-indigo-50/50 rounded-full blur-[100px] -z-10 translate-x-1/4 translate-y-1/4"></div>

            <div className="w-full max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
                <Link to="/" className="inline-flex items-center text-slate-400 hover:text-indigo-600 font-bold mb-8 transition-colors group">
                   <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                   Về trang chủ
                </Link>

                <div className="bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-slate-100 p-12 lg:p-16">
                    <div className="mb-12">
                        <div className="inline-flex items-center space-x-2 text-indigo-600 font-black text-xs uppercase tracking-widest leading-none mb-4">
                           <Target size={14} className="animate-pulse" />
                           <span>Tham gia ngay</span>
                        </div>
                        <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-4 leading-none">Tạo tài khoản mới</h2>
                        <p className="text-slate-400 font-medium">Khám phá thế giới công nghệ đẳng cấp cùng hàng triệu khách hàng khác.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="md:col-span-2">
                           <Input 
                                label="Tên đăng nhập"
                                icon={User}
                                placeholder="Ví dụ: nhochuy900"
                                value={formData.username}
                                onChange={(e) => setFormData({...formData, username: e.target.value})}
                                required
                            />
                        </div>

                        <div className="md:col-span-2">
                           <Input 
                                label="Địa chỉ Email"
                                type="email"
                                icon={Mail}
                                placeholder="email_cua_may@gmail.com"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                            />
                        </div>

                        <div className="md:col-span-2">
                           <Input 
                                label="Mật khẩu bảo mật"
                                type="password"
                                icon={Lock}
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                required
                            />
                        </div>

                        {error && (
                            <div className="md:col-span-2 bg-rose-50 border border-rose-100 p-4 rounded-2xl flex items-center space-x-3 text-rose-600 animate-in fade-in zoom-in duration-300">
                                <span className="font-bold text-sm tracking-tight">{error}</span>
                            </div>
                        )}

                        <div className="md:col-span-2 pt-4">
                            <Button className="w-full py-5 text-lg shadow-2xl shadow-indigo-100" disabled={isLoading}>
                                {isLoading ? <Loader2 size={24} className="animate-spin" /> : 'Đăng ký ngay'}
                            </Button>
                        </div>
                    </form>

                    <div className="mt-12 pt-8 border-t border-slate-50 text-center">
                        <p className="text-slate-400 font-medium">
                            Đã có tài khoản rồi? <Link to="/login" className="text-indigo-600 font-black hover:underline decoration-2 underline-offset-4 ml-1">Đăng nhập</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;

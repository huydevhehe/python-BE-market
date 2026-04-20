import { useState, useEffect } from 'react';
import api from '../api/axios';
import { Wallet, ArrowUpCircle, ArrowDownCircle, Clock, User, LogOut, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '../utils/format';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, transRes] = await Promise.all([
          api.get('users/profile/'),
          api.get('users/profile/transactions/')
        ]);
        setUserData(profileRes.data);
        setTransactions(transRes.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        if (error.response?.status === 401) {
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FBFBFE]">
        <div className="w-12 h-12 border-4 border-indigo-600/20 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBFBFE] pb-24">
      {/* Header Space */}
      <div className="h-48 bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-800 w-full absolute top-0 left-0 z-0"></div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 shadow-2xl shadow-indigo-100/50">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-[1.8rem] flex items-center justify-center mb-6 shadow-inner">
                  <User className="w-12 h-12 text-slate-400" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">{userData?.username}</h2>
                <p className="text-slate-400 font-bold text-sm uppercase tracking-widest mt-1">{userData?.role}</p>
                <p className="text-slate-500 mt-2 text-sm font-medium">{userData?.email}</p>
                
                <button 
                  onClick={handleLogout}
                  className="mt-8 w-full py-4 bg-slate-50 hover:bg-red-50 text-slate-500 hover:text-red-500 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center space-x-2 group"
                >
                  <LogOut className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span>Đăng xuất</span>
                </button>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 shadow-2xl shadow-indigo-100/50">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Menu nhanh</h3>
              <div className="space-y-2">
                {['Đơn hàng của tôi', 'Cài đặt tài khoản', 'Địa chỉ giao hàng'].map((item) => (
                  <button key={item} className="w-full flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-all group text-left">
                    <span className="text-sm font-bold text-slate-600 group-hover:text-indigo-600">{item}</span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Wallet Card */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 rounded-[2.5rem] p-10 shadow-3xl shadow-slate-900/40 text-white">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md">
                      <Wallet className="w-5 h-5 text-indigo-300" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-200/60">Tài khoản ví Luxury</span>
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-5xl font-black tracking-tighter text-white">
                      {loading ? '...' : formatCurrency(userData?.wallet?.balance || 0).replace('$', '')}
                    </span>
                    <span className="text-xl font-bold text-indigo-300/60">USD</span>
                  </div>
                </div>

                <div className="h-16 w-px bg-white/10 hidden md:block"></div>

                <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-amber-500/20 rounded-lg backdrop-blur-md">
                            <Sparkles className="w-5 h-5 text-amber-400" />
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-200/60">Điểm thưởng Luxury</span>
                    </div>
                    <div className="flex items-baseline space-x-2">
                        <span className="text-5xl font-black tracking-tighter text-amber-400">
                            {loading ? '...' : (userData?.reward_points || 0).toLocaleString()}
                        </span>
                        <span className="text-xl font-bold text-amber-400/40">PTS</span>
                    </div>
                </div>

                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-xl shadow-black/20">
                    Nạp thêm
                  </button>
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all">
                    Chuyển tiền
                  </button>
                </div>
              </div>
            </div>

            {/* Transaction History */}
            <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-10 shadow-2xl shadow-indigo-100/50">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Lịch sử giao dịch</h3>
                  <p className="text-slate-400 text-sm font-medium mt-1">Các hoạt động tài chính gần đây của mày</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl">
                  <Clock className="w-6 h-6 text-slate-400" />
                </div>
              </div>

              <div className="space-y-4">
                {transactions.length > 0 ? (
                  transactions.map((tx) => (
                    <div key={tx.uuid} className="flex items-center justify-between p-6 hover:bg-slate-50/50 rounded-3xl transition-all border border-transparent hover:border-slate-100 group">
                      <div className="flex items-center space-x-5">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${
                          tx.type === 'deposit' ? 'bg-emerald-50 text-emerald-500' : 'bg-red-50 text-red-500'
                        }`}>
                          {tx.type === 'deposit' ? <ArrowUpCircle className="w-7 h-7" /> : <ArrowDownCircle className="w-7 h-7" />}
                        </div>
                        <div>
                          <p className="font-black text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                            {tx.type === 'deposit' ? 'Nạp tiền vào ví' : 'Thanh toán đơn hàng'}
                          </p>
                          <p className="text-xs font-bold text-slate-400 mt-1">
                            {new Date(tx.created_at).toLocaleString('vi-VN')}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-lg font-black tracking-tight ${
                          tx.type === 'deposit' ? 'text-emerald-500' : 'text-red-500'
                        }`}>
                          {tx.type === 'deposit' ? '+' : '-'}{formatCurrency(tx.amount).replace('$', '')}
                        </p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mt-1">{tx.status}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-20 text-center">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 opacity-50">
                        <Wallet className="w-10 h-10 text-slate-400" />
                    </div>
                    <p className="text-slate-400 font-bold">Chưa có giao dịch nào được thực hiện.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

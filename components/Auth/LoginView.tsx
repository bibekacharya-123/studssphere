
import React, { useState } from 'react';

interface LoginViewProps {
  onSwitch: () => void;
  onSuccess: (user: { name: string; email: string; role: string }) => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onSwitch, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate successful login
    setTimeout(() => {
      onSuccess({
        name: 'Alex Smith',
        email: email,
        role: 'student'
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="animate-fadeInUp">
      <div className="flex items-center gap-2 text-2xl font-bold text-blue-600 mb-10">
        <i className="fa-solid fa-layer-group"></i>
        <span>StudSphere</span>
      </div>

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
        <p className="text-slate-500 font-medium">New to StudSphere? <button onClick={onSwitch} className="text-blue-600 font-bold hover:underline">Create Account</button></p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Email Address</label>
          <input 
            type="email" placeholder="example@mail.com" required
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all outline-none font-medium text-slate-900"
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest">Password</label>
            <button type="button" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Forgot?</button>
          </div>
          <input 
            type="password" placeholder="Enter your password" required
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all outline-none font-medium text-slate-900"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-bold rounded-lg shadow-xl shadow-blue-500/20 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
        >
          {loading ? <i className="fa-solid fa-spinner animate-spin"></i> : 'Sign In'}
        </button>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
          <div className="relative flex justify-center text-xs font-bold uppercase tracking-widest"><span className="bg-white px-4 text-slate-400">or continue with</span></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button type="button" className="flex items-center justify-center gap-3 py-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-all font-bold text-sm text-slate-700">
            <i className="fa-brands fa-google text-lg"></i> Google
          </button>
          <button type="button" className="flex items-center justify-center gap-3 py-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-all font-bold text-sm text-slate-700">
            <i className="fa-brands fa-linkedin text-blue-700 text-lg"></i> LinkedIn
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginView;

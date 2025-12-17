import React from 'react';
import { Heart, ShoppingBag, Sparkles, Menu, Store } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'planner' | 'saved') => void;
  onOpenAddVendor: () => void;
  cartCount: number;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenAddVendor, cartCount, currentView }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-rose-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="bg-rose-500 p-2 rounded-full text-white mr-2">
              <Heart size={20} fill="currentColor" />
            </div>
            <span className="font-serif text-2xl font-bold text-slate-800 tracking-tight">
              EternityPlanner | 永恒誓约
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors ${currentView === 'home' ? 'text-rose-600' : 'text-slate-600 hover:text-rose-500'}`}
            >
              婚庆市场
            </button>
            <button 
              onClick={() => onNavigate('planner')}
              className={`flex items-center text-sm font-medium transition-colors ${currentView === 'planner' ? 'text-rose-600' : 'text-slate-600 hover:text-rose-500'}`}
            >
              <Sparkles size={16} className="mr-1" />
              AI 备婚助手
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
             {/* Add Vendor Button */}
             <button 
              onClick={onOpenAddVendor}
              className="hidden md:flex items-center px-3 py-1.5 text-xs font-bold text-slate-700 border border-slate-300 rounded-full hover:bg-slate-50 hover:border-slate-400 transition-colors mr-2"
            >
              <Store size={14} className="mr-1" />
              商家入驻
            </button>

            <button 
              onClick={() => onNavigate('saved')}
              className="relative p-2 text-slate-600 hover:text-rose-500 transition-colors"
            >
              <div className="flex flex-col items-center">
                <ShoppingBag size={24} />
                <span className="text-[10px]">方案</span>
              </div>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-rose-500 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2 text-slate-600">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

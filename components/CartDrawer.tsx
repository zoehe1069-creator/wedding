import React from 'react';
import { Trash2, Phone, Calendar } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  items: CartItem[];
  onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ items, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <div className="inline-block p-6 bg-slate-50 rounded-full mb-4">
            <Calendar size={48} className="text-slate-300" />
        </div>
        <h2 className="text-2xl font-serif font-bold text-slate-800 mb-2">您的方案是空的</h2>
        <p className="text-slate-500">快去浏览市场，将心仪的商家加入您的梦幻婚礼计划吧。</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">您的婚礼/订婚方案</h2>
      
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="divide-y divide-slate-100">
          {items.map((item) => (
            <div key={`${item.id}-${item.addedAt}`} className="p-6 flex flex-col md:flex-row items-center">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-24 h-24 rounded-lg object-cover mb-4 md:mb-0 md:mr-6"
              />
              
              <div className="flex-grow text-center md:text-left">
                <div className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-1">{item.category}</div>
                <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>
                <div className="flex items-center justify-center md:justify-start text-sm text-slate-500 mt-1">
                    <Phone size={14} className="mr-1"/> {item.contact.phone}
                </div>
              </div>

              <div className="flex flex-col items-end min-w-[150px] mt-4 md:mt-0">
                <span className="text-xl font-bold text-slate-900 mb-2">¥{item.price.toLocaleString()}</span>
                <button 
                  onClick={() => onRemove(item.id)}
                  className="flex items-center text-sm text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 size={16} className="mr-1" /> 移除
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-slate-50 p-6 flex flex-col md:flex-row justify-between items-center border-t border-slate-100">
          <div className="mb-4 md:mb-0">
            <span className="text-slate-500">预估总费用</span>
            <div className="text-3xl font-bold text-rose-600">¥{total.toLocaleString()}</div>
          </div>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-bold shadow-lg transition-transform hover:scale-105 active:scale-95">
            生成预订单
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;

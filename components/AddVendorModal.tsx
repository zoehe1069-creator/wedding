import React, { useState } from 'react';
import { X, Store, Image as ImageIcon } from 'lucide-react';
import { Vendor, Category } from '../types';
import { PROVINCES } from '../constants';

interface AddVendorModalProps {
  onClose: () => void;
  onSubmit: (vendor: Vendor) => void;
}

const AddVendorModal: React.FC<AddVendorModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: Category.VENUE,
    price: '',
    locationProvince: PROVINCES[0],
    locationDetail: '',
    image: '',
    description: '',
    phone: '',
    feature1: '',
    feature2: '',
    feature3: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct new vendor object
    const newVendor: Vendor = {
      id: `custom-${Date.now()}`,
      name: formData.name,
      category: formData.category,
      location: `${formData.locationProvince}${formData.locationDetail ? '-' + formData.locationDetail : ''}`,
      price: Number(formData.price) || 0,
      rating: 5.0, // Default for new
      reviews: 0,
      image: formData.image || 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop', // Default placeholder
      description: formData.description,
      features: [formData.feature1, formData.feature2, formData.feature3].filter(Boolean),
      contact: {
        phone: formData.phone,
        email: 'contact@example.com'
      },
      // Initialize with empty arrays for advanced features to prevent errors
      styles: [],
      packages: []
    };

    onSubmit(newVendor);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 sm:px-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col animate-fade-in-up">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div className="flex items-center text-rose-600">
            <Store className="mr-2" />
            <h2 className="text-xl font-bold font-serif">商家入驻 / 添加店铺</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto p-6">
          <form id="add-vendor-form" onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">店铺名称 *</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all"
                  placeholder="例如：梦幻婚礼策划"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">服务类型 *</label>
                <select 
                  value={formData.category}
                  onChange={e => setFormData({...formData, category: e.target.value as Category})}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all bg-white"
                >
                  {Object.values(Category).map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">预估均价 (¥) *</label>
                <input 
                  required
                  type="number" 
                  value={formData.price}
                  onChange={e => setFormData({...formData, price: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all"
                  placeholder="20000"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">联系电话 *</label>
                <input 
                  required
                  type="tel" 
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all"
                  placeholder="13800000000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">省份</label>
                  <select 
                    value={formData.locationProvince}
                    onChange={e => setFormData({...formData, locationProvince: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all bg-white"
                  >
                    {PROVINCES.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
               </div>
               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">详细区域 (选填)</label>
                  <input 
                    type="text" 
                    value={formData.locationDetail}
                    onChange={e => setFormData({...formData, locationDetail: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all"
                    placeholder="例如：朝阳区 / 徐汇区"
                  />
               </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">封面图片链接 (URL)</label>
              <div className="flex">
                <div className="bg-slate-100 p-3 rounded-l-lg border border-r-0 border-slate-200 text-slate-500">
                  <ImageIcon size={20} />
                </div>
                <input 
                  type="text" 
                  value={formData.image}
                  onChange={e => setFormData({...formData, image: e.target.value})}
                  className="w-full px-4 py-2 rounded-r-lg border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all"
                  placeholder="https://example.com/image.jpg (留空使用默认图)"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">店铺介绍</label>
              <textarea 
                required
                rows={3}
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all"
                placeholder="请简要介绍您的服务特色和风格..."
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">服务标签 (最多3个)</label>
              <div className="grid grid-cols-3 gap-2">
                <input 
                  type="text" 
                  placeholder="标签1 (如: 免费试妆)"
                  value={formData.feature1}
                  onChange={e => setFormData({...formData, feature1: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm"
                />
                <input 
                  type="text" 
                  placeholder="标签2"
                  value={formData.feature2}
                  onChange={e => setFormData({...formData, feature2: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm"
                />
                <input 
                  type="text" 
                  placeholder="标签3"
                  value={formData.feature3}
                  onChange={e => setFormData({...formData, feature3: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm"
                />
              </div>
            </div>

          </form>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex justify-end space-x-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition-colors"
          >
            取消
          </button>
          <button 
            type="submit"
            form="add-vendor-form"
            className="px-6 py-2 rounded-lg bg-rose-600 text-white font-bold hover:bg-rose-700 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            确认入驻
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddVendorModal;

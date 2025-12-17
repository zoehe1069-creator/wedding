import React, { useState } from 'react';
import { X, Star, MapPin, Phone, MessageCircle, ShoppingBag, ExternalLink } from 'lucide-react';
import { Vendor } from '../types';

interface VendorDetailModalProps {
  vendor: Vendor;
  onClose: () => void;
  onAdd: (vendor: Vendor) => void;
}

const VendorDetailModal: React.FC<VendorDetailModalProps> = ({ vendor, onClose, onAdd }) => {
  const [activeTab, setActiveTab] = useState<'packages' | 'styles'>('styles');

  // Check if any external links actually exist to avoid rendering an empty container
  const hasExternalLinks = vendor.externalLinks && (
    vendor.externalLinks.meituan || 
    vendor.externalLinks.xiaohongshu || 
    vendor.externalLinks.douyin
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 sm:px-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-fade-in-up">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white text-slate-500 hover:text-slate-900 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Hero Image */}
        <div className="h-48 sm:h-64 relative flex-shrink-0">
          <img 
            src={vendor.image} 
            alt={vendor.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h2 className="text-3xl font-serif font-bold text-white mb-2">{vendor.name}</h2>
            <div className="flex items-center text-white/90 text-sm space-x-4">
              <div className="flex items-center">
                <Star size={16} className="text-yellow-400 fill-current mr-1" />
                <span className="font-bold">{vendor.rating}</span>
                <span className="ml-1 opacity-80">({vendor.reviews} 条评价)</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-1" />
                {vendor.location}
              </div>
              <div className="flex items-center bg-rose-500/20 px-2 py-0.5 rounded text-rose-200 border border-rose-500/30">
                {vendor.category}
              </div>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
          
          {/* Main Content */}
          <div className="flex-1 overflow-y-auto p-6">
            
            {/* External Links */}
            {hasExternalLinks && vendor.externalLinks && (
               <div className="flex flex-wrap gap-3 mb-8 pb-6 border-b border-slate-100">
                {vendor.externalLinks.meituan && (
                  <a href={vendor.externalLinks.meituan} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center px-4 py-2 bg-yellow-400/10 text-yellow-700 rounded-lg border border-yellow-400/20 hover:bg-yellow-400/20 transition-colors font-medium text-sm">
                    <ExternalLink size={16} className="mr-2" />
                    大众点评 / 美团
                  </a>
                )}
                {vendor.externalLinks.xiaohongshu && (
                  <a href={vendor.externalLinks.xiaohongshu} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center px-4 py-2 bg-red-500/10 text-red-600 rounded-lg border border-red-500/20 hover:bg-red-500/20 transition-colors font-medium text-sm">
                    <ExternalLink size={16} className="mr-2" />
                    小红书
                  </a>
                )}
                {vendor.externalLinks.douyin && (
                  <a href={vendor.externalLinks.douyin} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center px-4 py-2 bg-slate-900/5 text-slate-800 rounded-lg border border-slate-900/10 hover:bg-slate-900/10 transition-colors font-medium text-sm">
                    <ExternalLink size={16} className="mr-2" />
                    抖音
                  </a>
                )}
               </div>
            )}

            <p className="text-slate-600 mb-8 leading-relaxed">
              {vendor.description}
            </p>

            {/* Tabs */}
            <div className="flex border-b border-slate-200 mb-6">
              <button 
                onClick={() => setActiveTab('styles')}
                className={`pb-3 px-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'styles' ? 'border-rose-500 text-rose-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
              >
                客片 / 风格 ({vendor.styles?.length || 0})
              </button>
              <button 
                onClick={() => setActiveTab('packages')}
                className={`pb-3 px-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'packages' ? 'border-rose-500 text-rose-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
              >
                精选套餐 ({vendor.packages?.length || 0})
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'styles' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vendor.styles?.map((style, idx) => (
                  <div key={idx} className="group relative rounded-lg overflow-hidden aspect-[4/3] cursor-pointer bg-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <img src={style.image} alt={style.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <h4 className="text-white font-bold text-lg">{style.name}</h4>
                        {style.description && <p className="text-white/80 text-xs">{style.description}</p>}
                      </div>
                    </div>
                  </div>
                ))}
                {(!vendor.styles || vendor.styles.length === 0) && (
                  <div className="col-span-full py-10 text-center text-slate-400 italic bg-slate-50 rounded-lg border border-dashed border-slate-200">
                    暂无展示客片
                  </div>
                )}
              </div>
            )}

            {activeTab === 'packages' && (
              <div className="space-y-4">
                {vendor.packages?.map((pkg, idx) => (
                  <div key={idx} className="border border-slate-100 rounded-xl p-5 hover:shadow-md hover:border-rose-100 transition-all bg-slate-50/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg text-slate-800">{pkg.name}</h4>
                      <span className="text-rose-600 font-bold text-xl">¥{pkg.price.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-3">{pkg.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {pkg.features.map((feature, fIdx) => (
                        <span key={fIdx} className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                {(!vendor.packages || vendor.packages.length === 0) && (
                  <div className="col-span-full py-10 text-center text-slate-400 italic bg-slate-50 rounded-lg border border-dashed border-slate-200">
                    暂无套餐信息
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="md:w-72 bg-slate-50 border-t md:border-t-0 md:border-l border-slate-100 p-6 flex flex-col justify-between">
             <div>
                <h3 className="font-bold text-slate-900 mb-4">服务特色</h3>
                <ul className="space-y-3 mb-8">
                  {vendor.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-600">
                      <CheckCircleIcon className="w-5 h-5 text-rose-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
             </div>

             <div className="space-y-3">
               <button 
                onClick={() => onAdd(vendor)}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 px-4 rounded-lg font-bold flex items-center justify-center transition-colors shadow-lg shadow-slate-900/10"
               >
                 <ShoppingBag size={18} className="mr-2" />
                 加入方案
               </button>
               <button className="w-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 py-3 px-4 rounded-lg font-bold flex items-center justify-center transition-colors">
                 <MessageCircle size={18} className="mr-2" />
                 在线咨询
               </button>
               <div className="text-center text-xs text-slate-400 mt-2">
                  电话: {vendor.contact.phone}
               </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default VendorDetailModal;
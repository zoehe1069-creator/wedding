import React from 'react';
import { Star, MapPin, Plus, Phone } from 'lucide-react';
import { Vendor } from '../types';

interface VendorCardProps {
  vendor: Vendor;
  onAdd: (vendor: Vendor) => void;
  onContact: (vendor: Vendor) => void;
  onClick: (vendor: Vendor) => void;
}

const VendorCard: React.FC<VendorCardProps> = ({ vendor, onAdd, onContact, onClick }) => {
  return (
    <div 
      onClick={() => onClick(vendor)}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full cursor-pointer"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={vendor.image} 
          alt={vendor.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider text-rose-600 shadow-sm">
          {vendor.category}
        </div>
        {/* Style Count Badge if styles exist */}
        {vendor.styles && vendor.styles.length > 0 && (
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur text-xs text-white px-2 py-1 rounded">
             {vendor.styles.length} 套客片
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
            {vendor.name}
          </h3>
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded text-yellow-700">
            <Star size={14} fill="currentColor" className="mr-1" />
            <span className="text-xs font-bold">{vendor.rating}</span>
          </div>
        </div>

        <div className="flex items-center text-slate-500 text-sm mb-4">
          <MapPin size={14} className="mr-1" />
          {vendor.location}
        </div>

        <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">
          {vendor.description}
        </p>

        {/* Packages Preview */}
        {vendor.packages && vendor.packages.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
             {vendor.packages.slice(0, 2).map((pkg, i) => (
                <span key={i} className="text-xs bg-rose-50 text-rose-600 px-2 py-1 rounded border border-rose-100 truncate max-w-full">
                  {pkg.name}
                </span>
             ))}
          </div>
        )}

        <div className="flex items-baseline mb-4">
          <span className="text-2xl font-bold text-rose-600">¥{vendor.price.toLocaleString()}</span>
          <span className="text-slate-400 text-xs ml-2">均价/预估</span>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-auto">
          <button 
            onClick={(e) => { e.stopPropagation(); onContact(vendor); }}
            className="flex items-center justify-center py-2 px-4 border border-rose-200 text-rose-600 rounded-lg hover:bg-rose-50 font-medium text-sm transition-colors"
          >
            <Phone size={16} className="mr-2" />
            联系商家
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onAdd(vendor); }}
            className="flex items-center justify-center py-2 px-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 font-medium text-sm transition-colors"
          >
            <Plus size={16} className="mr-2" />
            加入方案
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;

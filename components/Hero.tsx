import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { CHINA_LOCATIONS, PROVINCES } from '../constants';

interface HeroProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedProvince: string;
  setSelectedProvince: (prov: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

const Hero: React.FC<HeroProps> = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedProvince, 
  setSelectedProvince,
  selectedCity,
  setSelectedCity
}) => {
  
  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProvince(e.target.value);
    setSelectedCity(""); // Reset city when province changes
  };

  const availableCities = selectedProvince ? CHINA_LOCATIONS[selectedProvince] : [];

  return (
    <div className="relative bg-rose-50 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/id/433/1920/600" 
          alt="Wedding Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100/80 to-transparent mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 drop-shadow-sm">
          策划您的完美订婚 <br/> 与梦幻婚礼
        </h1>
        <p className="text-lg md:text-xl text-slate-700 max-w-2xl mb-10 font-light">
          从婚宴酒楼菜单到豪华婚车，一站式婚礼筹备平台
        </p>

        {/* Search Bar */}
        <div className="bg-white p-2 rounded-xl md:rounded-full shadow-lg flex flex-col md:flex-row w-full max-w-4xl items-center md:space-x-2">
          
          {/* Province Selector */}
          <div className="flex items-center w-full md:w-1/4 px-4 py-2 border-b md:border-b-0 md:border-r border-slate-100">
            <MapPin className="text-rose-400 mr-2 flex-shrink-0" size={20} />
            <select 
              value={selectedProvince}
              onChange={handleProvinceChange}
              className="w-full bg-transparent focus:outline-none text-slate-700 cursor-pointer"
            >
              <option value="">全中国</option>
              {PROVINCES.map(prov => (
                <option key={prov} value={prov}>{prov}</option>
              ))}
            </select>
          </div>

          {/* City Selector (Dependent) */}
          <div className="flex items-center w-full md:w-1/4 px-4 py-2 border-b md:border-b-0 md:border-r border-slate-100">
            <select 
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              disabled={!selectedProvince}
              className="w-full bg-transparent focus:outline-none text-slate-700 cursor-pointer disabled:text-slate-300"
            >
              <option value="">{selectedProvince ? "所有城市/区" : "请先选省份"}</option>
              {availableCities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center w-full md:w-2/5 px-4 py-2">
            <Search className="text-rose-400 mr-2 flex-shrink-0" size={20} />
            <input 
              type="text" 
              placeholder="搜索：婚纱、摄影、酒楼..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent focus:outline-none text-slate-700 placeholder-slate-400"
            />
          </div>
          
          <button className="hidden md:block bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-medium transition-colors whitespace-nowrap">
            搜索
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VendorCard from './components/VendorCard';
import VendorDetailModal from './components/VendorDetailModal';
import AddVendorModal from './components/AddVendorModal';
import AIPlanner from './components/AIPlanner';
import CartDrawer from './components/CartDrawer';
import { MOCK_VENDORS } from './constants';
import { Vendor, CartItem, Category } from './types';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'planner' | 'saved'>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // State for vendors (initialized with mock data, but mutable)
  const [vendors, setVendors] = useState<Vendor[]>(MOCK_VENDORS);
  
  // New Location State
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  
  // Modals
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);
  const [isAddVendorOpen, setIsAddVendorOpen] = useState(false);

  const addToCart = (vendor: Vendor) => {
    if (!cart.find(item => item.id === vendor.id)) {
      setCart([...cart, { ...vendor, addedAt: Date.now() }]);
    } else {
        alert(`${vendor.name} 已经在您的方案中了！`);
    }
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleAddNewVendor = (newVendor: Vendor) => {
    setVendors([newVendor, ...vendors]); // Add to top of list
    setIsAddVendorOpen(false);
    alert('商家入驻成功！您现在可以在列表中看到您的店铺。');
  };

  const showContact = (vendor: Vendor) => {
    alert(`联系商家： ${vendor.name}\n电话: ${vendor.contact.phone}\n邮箱: ${vendor.contact.email}`);
  };

  const filteredVendors = useMemo(() => {
    return vendors.filter(vendor => {
      const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            vendor.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      let matchesLocation = true;
      if (selectedCity) {
        matchesLocation = vendor.location.includes(selectedCity);
      } else if (selectedProvince) {
        matchesLocation = vendor.location.includes(selectedProvince) || 
                          vendor.location.includes(selectedProvince.replace("省", "").replace("市", "")); 
      }

      const matchesCategory = selectedCategory !== 'All' ? vendor.category === selectedCategory : true;
      return matchesSearch && matchesLocation && matchesCategory;
    });
  }, [searchTerm, selectedProvince, selectedCity, selectedCategory, vendors]);

  return (
    <div className="min-h-screen pb-20">
      <Navbar 
        onNavigate={setCurrentView} 
        onOpenAddVendor={() => setIsAddVendorOpen(true)}
        cartCount={cart.length} 
        currentView={currentView}
      />

      {currentView === 'home' && (
        <>
          <Hero 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm}
            selectedProvince={selectedProvince}
            setSelectedProvince={setSelectedProvince}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
          />
          
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Category Filter Tabs */}
            <div className="flex overflow-x-auto pb-4 mb-8 space-x-2 scrollbar-hide">
              <button 
                onClick={() => setSelectedCategory('All')}
                className={`flex-shrink-0 px-6 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === 'All' ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 hover:bg-rose-50'}`}
              >
                全部
              </button>
              {Object.values(Category).map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex-shrink-0 px-6 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === cat ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 hover:bg-rose-50'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Results */}
            <div className="mb-4 text-slate-500 text-sm">
              显示 {filteredVendors.length} 个结果
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVendors.map(vendor => (
                <VendorCard 
                  key={vendor.id} 
                  vendor={vendor} 
                  onAdd={addToCart}
                  onContact={showContact}
                  onClick={(v) => setSelectedVendor(v)}
                />
              ))}
            </div>
            
            {filteredVendors.length === 0 && (
              <div className="text-center py-20 text-slate-400">
                没有找到符合条件的商家。
              </div>
            )}
          </main>
        </>
      )}

      {currentView === 'planner' && <AIPlanner />}
      
      {currentView === 'saved' && (
        <CartDrawer items={cart} onRemove={removeFromCart} />
      )}

      {/* Vendor Detail Modal */}
      {selectedVendor && (
        <VendorDetailModal 
          vendor={selectedVendor} 
          onClose={() => setSelectedVendor(null)}
          onAdd={(v) => {
            addToCart(v);
            setSelectedVendor(null);
          }}
        />
      )}

      {/* Add Vendor Modal */}
      {isAddVendorOpen && (
        <AddVendorModal 
          onClose={() => setIsAddVendorOpen(false)}
          onSubmit={handleAddNewVendor}
        />
      )}
    </div>
  );
}

export default App;

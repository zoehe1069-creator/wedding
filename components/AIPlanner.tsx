import React, { useState } from 'react';
import { Sparkles, Loader2, CheckCircle, RefreshCcw } from 'lucide-react';
import { generateWeddingPackage } from '../services/geminiService';
import { AIPackageSuggestion, Category } from '../types';
import { PROVINCES } from '../constants';

const AIPlanner: React.FC = () => {
  const [budget, setBudget] = useState(100000);
  const [location, setLocation] = useState(PROVINCES[0]);
  const [style, setStyle] = useState('经典浪漫 (Classic Romantic)');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<AIPackageSuggestion | null>(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    const result = await generateWeddingPackage(budget.toString(), location, style);
    setSuggestion(result);
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center p-3 bg-rose-100 rounded-full mb-4">
          <Sparkles className="text-rose-600" size={32} />
        </div>
        <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">AI 婚礼架构师</h2>
        <p className="text-slate-600 text-lg">告诉我们您的预算和梦想风格，AI 将为您生成专属婚礼方案。</p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        <div className="p-8 bg-slate-50 border-b border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-4 flex justify-between items-center">
                <span>预算范围</span>
                <span className="text-rose-600 text-lg">¥{budget.toLocaleString()}</span>
              </label>
              <input 
                type="range" 
                min="20000"
                max="1000000"
                step="5000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                <span>¥2万</span>
                <span>¥100万+</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">地点 (省份)</label>
              <select 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all bg-white"
              >
                {PROVINCES.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">风格/主题</label>
              <select 
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all bg-white"
              >
                <option>经典浪漫 (Classic Romantic)</option>
                <option>现代简约 (Modern Minimalist)</option>
                <option>中式喜庆 (Traditional Chinese)</option>
                <option>森系清新 (Bohemian Rustic)</option>
                <option>奢华宫廷 (Luxury Grand)</option>
              </select>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button 
              onClick={handleGenerate}
              disabled={isLoading}
              className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2" /> 正在规划中...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2" /> 生成方案
                </>
              )}
            </button>
          </div>
        </div>

        {suggestion && (
          <div className="p-8 animate-fade-in">
            <div className="flex justify-between items-start mb-6 border-b border-slate-100 pb-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-slate-800">{suggestion.title}</h3>
                <p className="text-slate-600 mt-1">{suggestion.description}</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-slate-500 uppercase font-bold tracking-wide">预估总价</div>
                <div className="text-3xl font-bold text-rose-600">¥{suggestion.totalEstimatedPrice.toLocaleString()}</div>
              </div>
            </div>

            <div className="space-y-4">
              {suggestion.items.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-white border border-slate-100 hover:border-rose-200 hover:shadow-md transition-all">
                  <div className="flex items-start mb-2 sm:mb-0">
                    <div className="bg-rose-100 p-2 rounded-lg text-rose-600 mr-4 mt-1">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-1">{item.category}</div>
                      <div className="font-bold text-slate-800 text-lg">{item.suggestion}</div>
                      <div className="text-sm text-slate-500 mt-1">{item.reason}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end min-w-[120px] pl-4 sm:border-l border-slate-100">
                     <span className="font-bold text-slate-700">¥{item.estimatedPrice.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center space-x-4">
                <button 
                    onClick={() => setSuggestion(null)}
                    className="flex items-center text-slate-500 hover:text-rose-600 font-medium"
                >
                    <RefreshCcw size={16} className="mr-2" /> 重置
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIPlanner;
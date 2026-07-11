import React, { useState, useEffect } from 'react';
import categoriesData from '../data/categories.json';

interface ButtonConfig {
  id: string;
  name: string;
  top: string;
  left: string;
  width: string;
  height: string;
}

interface ButtonPositions {
  mobile: ButtonConfig[];
  pc: ButtonConfig[];
}

const buttons: ButtonPositions = {
  mobile: [
    { id: 'uranai', name: '占い', top: "5%", left: "3%", width: "28%", height: "15%" },
    { id: 'iyashi', name: '癒やし', top: "5%", left: "72%", width: "25%", height: "15%" },
    { id: 'shop', name: 'ショップ', top: "38%", left: "3%", width: "32%", height: "18%" },
    { id: 'counseling', name: 'カウンセリング', top: "52%", left: "65%", width: "25%", height: "15%" },
    { id: 'meiso', name: '瞑想', top: "88%", left: "69%", width: "28%", height: "11%" }
  ],
  pc: [
    { id: 'uranai', name: '占い番地', top: "14%", left: "8.5%", width: "17%", height: "19%" },
    { id: 'iyashi', name: '癒やし番地', top: "13.5%", left: "43.5%", width: "16.5%", height: "15.5%" },
    { id: 'shop', name: 'ショップ番地', top: "67.5%", left: "5.5%", width: "17.5%", height: "19.5%" },
    { id: 'counseling', name: 'カウンセリング番地', top: "17%", left: "80.5%", width: "15%", height: "16%" },
    { id: 'meiso', name: '瞑想番地', top: "66.5%", left: "75%", width: "18%", height: "18%" }
  ]
};

const SpiritualTown = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<{ id: string; name: string } | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAddressClick = (id: string, name: string) => {
    setSelectedCategory({ id, name });
  };

  const currentButtons = isMobile ? buttons.mobile : buttons.pc;
  const activeData = categoriesData.items.find(item => item.id === selectedCategory?.id);

  return (
    <div className="relative w-full h-auto overflow-hidden rounded-2xl">
      {/* マップ画像 */}
      <img 
        src={isMobile ? "/town-map-mobile.png" : "/town-map.png"} 
        alt="Spiritual Town Map" 
        className="w-full h-auto block"
      />

      {/* クリックエリア（ボタン）のレンダリング */}
      {currentButtons.map((btn, index) => (
        <button
          key={index}
          className="absolute cursor-pointer z-40 transition-all duration-200 rounded-lg
                 bg-teal-500/0 hover:bg-teal-500/20 border border-transparent hover:border-teal-400 shadow-sm"
          style={{ top: btn.top, left: btn.left, width: btn.width, height: btn.height }}
          onClick={() => handleAddressClick(btn.id, btn.name)}
          title={btn.name}
        />
      ))}

      {/* 案内板ポップアップ（モーダル） */}
      {selectedCategory && activeData && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity animate-fade-in" onClick={() => setSelectedCategory(null)}>
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-xl text-center border border-slate-100 relative" onClick={(e) => e.stopPropagation()}>
            
            <div className="text-5xl mb-4">{activeData.icon}</div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              {activeData.name}へようこそ
            </h2>
            
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              {activeData.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                className="px-4 py-2.5 text-sm font-medium text-slate-500 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors order-2 sm:order-1"
                onClick={() => setSelectedCategory(null)}
              >
                街に戻る
              </button>
              <a 
                href={`/category/${activeData.id}`}
                className="px-5 py-2.5 text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-md shadow-teal-600/10 transition-colors inline-flex items-center justify-center gap-1 order-1 sm:order-2"
              >
                このエリアを散策する →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpiritualTown;
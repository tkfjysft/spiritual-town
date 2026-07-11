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
    { id: 'fortune', name: '占い', top: "15%", left: "5%", width: "28%", height: "12%" },
    { id: 'healing', name: '癒やし', top: "12%", left: "70%", width: "25%", height: "10%" },
    { id: 'shop', name: 'ショップ', top: "47%", left: "4.5%", width: "32%", height: "12%" },
    { id: 'counseling', name: 'カウンセリング', top: "55%", left: "72%", width: "25%", height: "12%" },
    { id: 'meditation', name: '瞑想', top: "86%", left: "69%", width: "28%", height: "11%" }
  ],
  pc: [
    { id: 'fortune', name: '占い番地', top: "12%", left: "6%", width: "17%", height: "19%" },
    { id: 'healing', name: '癒やし番地', top: "10.5%", left: "43.5%", width: "16.5%", height: "15.5%" },
    { id: 'shop', name: 'ショップ番地', top: "72%", left: "3.5%", width: "17.5%", height: "19.5%" },
    { id: 'counseling', name: 'カウンセリング番地', top: "16%", left: "81%", width: "15%", height: "16%" },
    { id: 'meditation', name: '瞑想番地', top: "70.5%", left: "80%", width: "18%", height: "18%" }
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
    <div className="relative w-full h-auto overflow-hidden rounded-2xl select-none group/map">
      {/* マップ画像 */}
      <img 
        src={isMobile ? "/town-map-mobile.avif" : "/town-map.avif"} 
        alt="Spiritual Town Map"
		width={isMobile ? "1228" : "2201"} 
		height={isMobile ? "2203" : "1228"} 
        className={`w-full h-auto block
			${isMobile ? "aspect-[1228/2203]" : "aspect-[2201/1228]"}
			`}
      />

      {/* クリックエリア ＆ キャプションテキスト */}
      {currentButtons.map((btn, index) => (
        <div
          key={index}
          className="absolute z-40 flex flex-col items-center justify-center"
          style={{ top: btn.top, left: btn.left, width: btn.width, height: btn.height }}
        >
          {/* 【新設】看板の上に浮かぶ文字キャプション */}
          <span className="absolute -top-7 px-2 py-0.5 text-[11px] md:text-xs font-bold text-slate-700 bg-white/90 backdrop-blur-[2px] rounded-md shadow-sm border border-slate-200/60 pointer-events-none whitespace-nowrap transition-transform duration-200 scale-95 group-hover/map:scale-100">
            {btn.name}
          </span>

          {/* クリック判定ボタン本体 */}
          <button
            className="w-full h-full cursor-pointer rounded-lg transition-all duration-200
                   bg-teal-500/0 hover:bg-teal-500/15 border border-transparent hover:border-teal-400/60 shadow-sm"
            onClick={() => handleAddressClick(btn.id, btn.name)}
            title={btn.name}
          />
        </div>
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
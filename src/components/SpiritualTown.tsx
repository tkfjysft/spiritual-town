import React, { useState, useEffect } from 'react';
import { townCategoryInfo as jpCategoriesData } from '@/data/jp/townCategoryInfo';
import { townCategoryInfo as enCategoriesData } from '@/data/en/townCategoryInfo';

import { jpButtons } from '@/data/jp/index/townMapButtons';
import { enButtons } from '@/data/en/index/townMapButtons';

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

// 修正1: lang と prefix を受け取れるように型定義を追加
interface SpiritualTownProps {
  lang?: string;
  prefix?: string;
}

const SpiritualTown: React.FC<SpiritualTownProps> = ({ lang = 'jp', prefix = '' }) => {
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

  const buttons = lang === 'en' ? enButtons : jpButtons;

  const currentButtons = isMobile ? buttons.mobile : buttons.pc;
  const modalText = isMobile ? buttons.mobile : buttons.pc;
  
  // 言語に応じてデータを切り替え
  const categoriesData = lang === 'en' ? enCategoriesData : jpCategoriesData;
  const activeData = categoriesData.categories.find(item => item.id === selectedCategory?.id);


  return (
    <div className="relative w-full h-auto overflow-hidden rounded-2xl select-none group/map">
      {/* マップ画像 */}
      <img 
        src="/images/town-map-mobile.avif" 
        alt="Spiritual Town Map"
        width="660" 
        height="1184" 
        className="w-full h-auto block md:hidden aspect-[660/1184]"
        loading="lazy"
      />

      <img 
        src="/images/town-map.avif" 
        alt="Spiritual Town Map"
        width="2201" 
        height="1228" 
        className="w-full h-auto hidden md:block aspect-[2201/1228]"
        loading="lazy"
      />

      {/* クリックエリア ＆ キャプションテキスト */}
      {currentButtons.map((btn, index) => (
        <div
          key={index}
          className="absolute z-40 flex flex-col items-center justify-center"
          style={{ top: btn.top, left: btn.left, width: btn.width, height: btn.height }}
        >
          <span className="absolute -top-7 px-2 py-0.5 text-[11px] md:text-xs font-bold text-slate-700 bg-white/90 backdrop-blur-[2px] rounded-md shadow-sm border border-slate-200/60 pointer-events-none whitespace-nowrap transition-transform duration-200 scale-95 group-hover/map:scale-100">
            {btn.name}
          </span>

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
              {activeData.TranslationOfWelcome}
            </h2>
            
            <p className="text-slate-500 text-base leading-relaxed mb-6">
              {activeData.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                className="px-4 py-2.5 text-base font-medium text-slate-500 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors order-2 sm:order-1"
                onClick={() => setSelectedCategory(null)}
              >
                {buttons.textA}
              </button>
              {/* 言語プレフィックス付きのURL（例: /jp/category/fortune）に変更 */}
              <a 
                href={`${prefix}/category/${activeData.id}`}
                className="px-5 py-2.5 text-base font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-md shadow-teal-600/10 transition-colors inline-flex items-center justify-center gap-1 order-1 sm:order-2"
              >
                {buttons.textB} →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpiritualTown;
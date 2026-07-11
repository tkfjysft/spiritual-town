import React, { useState, useEffect } from 'react';

const buttons = {
  // スマホ用の座標設定
  mobile: [
    { name: '占い', top: "5%", left: "3%", width: "28%", height: "15%" },
    { name: '癒やし', top: "5%", left: "72%", width: "25%", height: "15%" },
    { name: 'ショップ', top: "38%", left: "3%", width: "32%", height: "18%" },
    { name: 'カウンセリング', top: "52%", left: "65%", width: "25%", height: "15%" },
    { name: '瞑想', top: "88%", left: "69%", width: "28%", height: "11%" }
  ],
  // PC用の座標設定（※適宜数値を調整してください）
  pc: [
    { name: '占い', top: "10%", left: "10%", width: "15%", height: "10%" },
    { name: '癒やし', top: "10%", left: "70%", width: "15%", height: "10%" },
    { name: 'ショップ', top: "40%", left: "10%", width: "15%", height: "10%" },
    { name: 'カウンセリング', top: "40%", left: "70%", width: "15%", height: "10%" },
    { name: '瞑想', top: "80%", left: "40%", width: "15%", height: "10%" }
  ]
};

const SpiritualTown = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menu, setMenu] = useState({ visible: false, title: "" });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAddressClick = (name) => {
    setMenu({ visible: true, title: name });
  };

  const styles = {
    container: { position: "relative", width: "100%", height: "auto" },
    mapImage: { width: "100%", height: "auto", display: "block" },
    clickableArea: {
      position: "absolute",
      backgroundColor: "rgba(255, 0, 0, 0.2)", //transparent 調整時は "rgba(255, 0, 0, 0.2)" に変更
      border: "1px solid red",                 //none 調整時は "1px solid red" に変更
      cursor: "pointer",
      zIndex: 100
    },
    menu: {
      position: "fixed",
      top: "20%",
      left: "10%",
      width: "80%",
      padding: "20px",
      backgroundColor: "white",
      border: "2px solid #333",
      borderRadius: "10px",
      zIndex: 200,
      textAlign: "center"
    }
  };

  const currentButtons = isMobile ? buttons.mobile : buttons.pc;

  return (
    <div style={styles.container}>
      <img 
        src={isMobile ? "/town-map-mobile.png" : "/town-map.png"} 
        alt="Map" 
        style={styles.mapImage} 
      />

      {currentButtons.map((btn, index) => (
        <button
          key={index}
          style={{ ...styles.clickableArea, top: btn.top, left: btn.left, width: btn.width, height: btn.height }}
          onClick={() => handleAddressClick(btn.name)}
        />
      ))}

      {menu.visible && (
        <div style={styles.menu}>
          <h2>{menu.title}へようこそ</h2>
          <button onClick={() => setMenu({ ...menu, visible: false })}>閉じる</button>
        </div>
      )}
    </div>
  );
};

export default SpiritualTown;
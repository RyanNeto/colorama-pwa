import React, { useState } from 'react';

const colors = {
  blue: ['#0000FF', '#00008B', '#0000CD', '#1E90FF', '#4169E1', '#6495ED', '#87CEEB', '#ADD8E6', '#B0C4DE', '#B0E0E6'],
  green: ['#008000', '#006400', '#228B22', '#32CD32', '#3CB371', '#66CDAA', '#90EE90', '#98FB98', '#ADFF2F', '#00FF00'],
  red: ['#FF0000', '#8B0000', '#A52A2A', '#B22222', '#CD5C5C', '#DC143C', '#FF6347', '#FF7F50', '#FFA07A', '#FFC0CB'],
  yellow: ['#FFFF00', '#808000', '#BDB76B', '#DAA520', '#F0E68C', '#F5DEB3', '#FFFACD', '#FAFAD2', '#FFFFE0', '#FFFFF0'],
  orange: ['#FFA500','#FF8C00','#FF7F50','#FF6347','#FF4500','#FFD700','#EE7600','#CD6600','#8B4500','#FFA07A'],
  pink: ['#FFC0CB','#FF69B4','#FF1493','#DB7093','#C71585','#DA70D6','#D8BFD8','#DDA0DD','#EE82EE','#FF00FF']
};

function App() {
  const [color, setColor] = useState('#FFFFFF');

  function Trocar() {
    const colorList = Object.values(colors).flat();
    const randomColor = colorList[Math.floor(Math.random() * colorList.length)];
    setColor(randomColor);
  }

  return (
    <div style={{ backgroundColor: color, height: '100vh'}}>
      <h1 style={{ textAlign: 'center' }}>{color}</h1>
      <button onClick={Trocar} style={{ display: 'block', margin: 'auto' }}>
        Trocar cor
      </button>
    </div>
  );
}

export default App;


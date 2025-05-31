import React, { useState } from 'react';

const Tabs = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              padding: '10px 20px',
              border: '1px solid lightgray',
              borderBottom: activeIndex === index ? 'none' : '1px solid lightgray',
              backgroundColor: activeIndex === index ? 'black' : 'white',
              color: activeIndex === index ? 'white' : 'black',
              cursor: 'pointer'
              
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div style={{
        marginTop: '40px',          
        padding: '20px',
        border: '2px solid ',
        borderTop: 'none',
        fontSize: '18px',           
        minHeight: '120px'          
      }}>
        {items[activeIndex].content}
      </div>
    </div>
  );
};

export default Tabs;

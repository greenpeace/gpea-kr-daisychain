import React, { useState, useRef, useEffect } from 'react';

const AccordionItem = ({ title, content, onToggle, isOpen }) => { 
  const contentRef = useRef(null);

  useEffect(() => {
    const element = contentRef.current;
    if (isOpen) {
      element.style.maxHeight = `${element.scrollHeight}px`;
    } else {
      element.style.maxHeight = '0px';
    }
  }, [isOpen]);

  return (
    <div style={{marginBottom:'8px'}}>
      <button onClick={() => onToggle(title)} style={{fontWeight:'bold', textAlign:'left'}}>
        <span style={{ margin:'0 10px', display:'inline-block', width:'12px', textAlign:'center' }}>
          {isOpen ? '-' : '+'}
        </span>
        {title}
      </button>
      <div
        ref={contentRef}
        style={{
          overflow: 'hidden',
          transition: 'max-height 0.3s ease-out',
          maxHeight: '0',
          margin:'0 27px'
        }}
      >
        {content}
      </div>
    </div>
  );
};

const Accordion = ({ headerTitle, items }) => {
  const [openItem, setOpenItem] = useState('');

  const handleToggle = (title) => {
    if (openItem === title) {
      setOpenItem('');
    } else {
      setOpenItem(title);
    }
  };

  return (
    <div>
        {headerTitle}
        <div>
        {items.map((item, index) => (
            <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            onToggle={handleToggle}
            isOpen={openItem === item.title}
            />
        ))}
        </div>
    </div>
  );
};

export default Accordion;

import React, { forwardRef, useEffect, useRef, useState } from 'react';

// เนื้อหาค่อยๆ โผล่เมื่อเลื่อนมาถึง — from: 'up' | 'left' | 'right' | 'zoom'
export const Reveal = forwardRef(function Reveal({ as: Tag = 'div', from = 'up', delay = 0, className = '', children, ...rest }, outerRef) {
  const ref = useRef(null);
  const setRef = (el) => {
    ref.current = el;
    if (typeof outerRef === 'function') outerRef(el);
    else if (outerRef) outerRef.current = el;
  };
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return setShown(true);
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={setRef}
      className={`rv rv-${from}${shown ? ' in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  );
});

// ตัวเลขนับขึ้นเมื่อเลื่อนมาถึง
export function CountUp({ to }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    let timer;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      let v = 0;
      timer = setInterval(() => { v += 1; setN(v); if (v >= to) clearInterval(timer); }, 700 / to);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); clearInterval(timer); };
  }, [to]);
  return <span ref={ref}>{n}</span>;
}

// ข้อความพิมพ์เองสลับคำ
export function Typed({ words }) {
  const [text, setText] = useState('');
  useEffect(() => {
    let w = 0, i = 0, del = false, timer;
    const loop = () => {
      const word = words[w];
      setText(word.slice(0, i));
      if (!del && i === word.length) { del = true; timer = setTimeout(loop, 1600); return; }
      if (del && i === 0) { del = false; w = (w + 1) % words.length; }
      i += del ? -1 : 1;
      timer = setTimeout(loop, del ? 45 : 90);
    };
    loop();
    return () => clearTimeout(timer);
  }, [words]);
  return <span className="typed">{text}</span>;
}

export function SectionHead({ eyebrow, title, sub }) {
  return (
    <Reveal className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {sub && <p className="sub">{sub}</p>}
    </Reveal>
  );
}

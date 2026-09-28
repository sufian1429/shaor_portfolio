import React, { useCallback, useEffect, useState } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './styles.css';
import { t } from './content';
import { Splash, Nav, Hero, About, Portfolio, Contact } from './sections/Sections';

function initialLang() {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'th') return saved;
  } catch (e) { /* storage blocked */ }
  return 'en';
}

function App() {
  const [lang, setLang] = useState(initialLang);
  const [ready, setReady] = useState(false);
  const onSplashDone = useCallback(() => setReady(true), []);
  const tx = t[lang];

  // เลื่อนหน้าแบบลื่น (Lenis) — ปิดเมื่อผู้ใช้ตั้งค่าลดการเคลื่อนไหว, บนจอสัมผัสใช้การเลื่อนปกติของเครื่อง
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const lenis = new Lenis({ autoRaf: true, lerp: 0.12, wheelMultiplier: 1, anchors: { offset: -68 } });
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem('lang', lang); } catch (e) { /* storage blocked */ }
  }, [lang]);

  return (
    <>
      <Splash tx={tx} onDone={onSplashDone} />
      <Nav tx={tx} lang={lang} setLang={setLang} />
      <main>
        <Hero tx={tx} ready={ready} />
        <About tx={tx} lang={lang} />
        <Portfolio tx={tx} lang={lang} />
        <Contact tx={tx} />
      </main>
      <footer>© {new Date().getFullYear()} Sufian Maseng · {tx.footer}</footer>
    </>
  );
}

export default App;

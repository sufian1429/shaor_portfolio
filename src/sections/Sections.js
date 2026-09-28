import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram, FaLine, FaArrowRight, FaArrowUpRightFromSquare, FaBars, FaXmark, FaCode, FaUser, FaDisplay } from 'react-icons/fa6';
import { profile, projects, certificates, tech, experience, skills } from '../content';
import { Reveal, CountUp, Typed, SectionHead } from './ui';
import Mock from './Mock';

const ICON = { github: FaGithub, linkedin: FaLinkedinIn, facebook: FaFacebookF, instagram: FaInstagram };
const SECTIONS = ['home', 'about', 'portfolio', 'contact'];

// ---------- Welcome splash ----------
export function Splash({ tx, onDone }) {
  const [url, setUrl] = useState('');
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const full = window.location.host || 'portfolio-shaor.netlify.app';
    let i = 0, typer;
    const start = setTimeout(() => {
      typer = setInterval(() => { i += 1; setUrl(full.slice(0, i)); if (i >= full.length) clearInterval(typer); }, 40);
    }, 800);
    const out = setTimeout(() => { setHide(true); onDone(); }, 2800);
    return () => { clearTimeout(start); clearTimeout(out); clearInterval(typer); };
  }, [onDone]);
  return (
    <div className={`splash${hide ? ' hide' : ''}`} aria-hidden={hide}>
      <div className="splash-in">
        <div className="splash-icons"><span><FaCode /></span><span><FaUser /></span><span><FaDisplay /></span></div>
        <h1 className="splash-title">{tx.welcome[0]} <em>{tx.welcome[1]}</em></h1>
        <div className="splash-url">{url && <>🌐 {url}</>}</div>
        <div className="splash-bar"><i /></div>
      </div>
    </div>
  );
}

// ---------- Nav ----------
export function Nav({ tx, lang, setLang }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      let cur = 'home';
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) cur = id;
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap nav-in">
        <a className="logo" href="#home">Sufian<b>.</b></a>
        <div className={`links${open ? ' open' : ''}`}>
          {SECTIONS.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>
              {tx.nav[id]}
            </a>
          ))}
          <button className="lang" onClick={() => setLang(lang === 'en' ? 'th' : 'en')} aria-label="Switch language">
            <b className={lang === 'en' ? 'on' : ''}>EN</b> / <b className={lang === 'th' ? 'on' : ''}>TH</b>
          </button>
        </div>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <FaXmark /> : <FaBars />}</button>
      </div>
    </nav>
  );
}

function Socials() {
  return (
    <div className="socials">
      {profile.socials.map(({ key, label, href }) => {
        const Icon = ICON[key];
        return <a key={key} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon /></a>;
      })}
    </div>
  );
}

// ---------- Hero ----------
export function Hero({ tx, ready }) {
  return (
    <section id="home" className="hero-wrap">
      <div className={`wrap hero${ready ? ' ready' : ''}`}>
        <div>
          <Reveal><span className="chip"><i className="dot" />{tx.avail}</span></Reveal>
          <Reveal as="h1" delay={0.1}>Web &amp; App<br />{ready && <Typed words={tx.roles} />}</Reveal>
          <Reveal as="p" delay={0.2} className="lead">{tx.heroP}</Reveal>
          <Reveal delay={0.3} className="tags">{['React', 'Flutter', 'Supabase', 'JavaScript'].map((x) => <span key={x}>{x}</span>)}</Reveal>
          <Reveal delay={0.4} className="row">
            <a className="btn dark" href="#portfolio">{tx.cta1} <FaArrowRight /></a>
            <a className="btn light" href="#contact">{tx.cta2}</a>
          </Reveal>
          <Reveal delay={0.5}><Socials /></Reveal>
        </div>
        <Reveal from="zoom" delay={0.2} className="hero-art">
          <div className="blob" />
          <img className="hero-photo" src={profile.photo} alt={profile.name} />
          <div className="float-card fc1"><b>170+</b>{tx.float[0]}</div>
          <div className="float-card fc2"><b>4+</b>{tx.float[1]}</div>
          <div className="float-card fc3">&lt;React /&gt;</div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- About ----------
export function About({ tx, lang }) {
  const years = new Date().getFullYear() - 2024;
  return (
    <section id="about">
      <div className="wrap">
        <SectionHead eyebrow={tx.aboutEyebrow} title={tx.aboutTitle} />
        <div className="about">
          <Reveal from="left">
            <h3>{tx.hello}<br /><span>{profile.name}</span></h3>
            <p>{tx.aboutP}</p>
            <div className="row">
              <a className="btn dark" href="#contact">{tx.cta2}</a>
              <a className="btn light" href="#portfolio">{tx.cta1}</a>
            </div>
          </Reveal>
          <Reveal from="right"><div className="photo"><img src={profile.photo} alt={profile.name} /></div></Reveal>
        </div>

        <div className="stats">
          {[[<FaCode />, projects.length, tx.stats[0]], ['✓', certificates.length, tx.stats[1]], ['◷', years, tx.stats[2]]].map(([ic, n, label], i) => (
            <Reveal key={label} delay={i * 0.1} className="stat">
              <div><span className="stat-ic">{ic}</span><small>{label}</small></div>
              <span className="num"><CountUp to={n} /></span>
            </Reveal>
          ))}
        </div>

        <div className="cv">
          <Reveal from="left">
            <h4 className="cv-title">{tx.expTitle}</h4>
            <ol className="timeline">
              {experience.map((e) => (
                <li key={e.years + e.en.role}>
                  <span className="tl-year">{e.years}</span>
                  <div>
                    <b>{e[lang].role}</b>
                    <span className="tl-org">{e[lang].org}</span>
                    {e[lang].desc && <p>{e[lang].desc}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal from="right">
            <h4 className="cv-title">{tx.skillsTitle}</h4>
            <div className="skills">
              {skills[lang].map(([title, list]) => (
                <div className="skill" key={title}><b>{title}</b><p>{list}</p></div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ---------- Portfolio (tabs) ----------
export function Portfolio({ tx, lang }) {
  const [tab, setTab] = useState(0);
  const [pill, setPill] = useState({ left: 5, width: 0 });
  const btns = useRef([]);
  useEffect(() => {
    const place = () => {
      const b = btns.current[tab];
      if (b) setPill({ left: b.offsetLeft, width: b.offsetWidth });
    };
    place();
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, [tab, lang]);

  return (
    <section id="portfolio">
      <div className="wrap center">
        <SectionHead eyebrow={tx.pfEyebrow} title={tx.pfTitle} sub={tx.pfSub} />
        <Reveal className="tabs-wrap">
          <div className="tabs" role="tablist">
            <span className="pill" style={pill} />
            {tx.tabs.map((label, i) => (
              <button key={i} ref={(el) => (btns.current[i] = el)} role="tab" aria-selected={tab === i}
                className={tab === i ? 'on' : ''} onClick={() => setTab(i)}>{label}</button>
            ))}
          </div>
        </Reveal>

        {tab === 0 && (
          <div className="grid3" key={`p-${lang}`}>
            {projects.map((p, i) => (
              <article className="proj pop" style={{ animationDelay: `${i * 0.06}s` }} key={p.id}>
                <div className="thumb">
                  {p.image ? <img src={p.image} alt={p[lang].title} loading="lazy" /> : <Mock kind={p.mock} url={p.url} />}
                </div>
                <div className="body">
                  <h4>{p[lang].title}</h4>
                  <p>{p[lang].desc}</p>
                  <div className="ptags">{p.tags.map((x) => <span key={x}>{x}</span>)}</div>
                  <div className="foot">
                    {p.url
                      ? <a href={p.url} target="_blank" rel="noopener noreferrer">{tx.live} <FaArrowUpRightFromSquare /></a>
                      : <span className="muted">{p.mock ? tx.preview : ''}</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div className="grid3 certs">
            {certificates.map((c, i) => (
              <figure className="proj pop" style={{ animationDelay: `${i * 0.06}s` }} key={c.en}>
                <div className="thumb"><img src={c.image} alt={c[lang]} loading="lazy" /></div>
                <figcaption className="body"><h4>{c[lang]}</h4></figcaption>
              </figure>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div className="tech">
            {tech.map((x, i) => <div className="pop" style={{ animationDelay: `${i * 0.04}s` }} key={x}>{x}</div>)}
          </div>
        )}
      </div>
    </section>
  );
}

// ---------- Contact ----------
export function Contact({ tx }) {
  const form = useRef();
  const [status, setStatus] = useState('idle');
  const send = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.sendForm('service_km0vczl', 'template_hx0vli5', form.current, 'STMo1O8ZbLg00aF60')
      .then(() => { setStatus('ok'); form.current.reset(); }, () => setStatus('fail'));
  };
  const channels = [
    profile.line && { label: 'LINE · 0869651800', href: profile.line, icon: <FaLine /> },
    { label: profile.email, href: `mailto:${profile.email}` },
    { label: profile.phone, href: profile.phoneHref },
    ...profile.socials.map((s) => ({ label: s.label, href: s.href })),
  ].filter(Boolean);

  return (
    <section id="contact">
      <div className="wrap center">
        <SectionHead eyebrow={tx.ctEyebrow} title={tx.ctTitle} sub={tx.ctSub} />
        <div className="contact">
          <Reveal as="form" from="left" className="box" ref={form} onSubmit={send}>
            <h4>{tx.form.title}</h4>
            <p className="muted">{tx.form.sub}</p>
            <input className="field" name="name" placeholder={tx.form.name} required />
            <input className="field" type="email" name="email" placeholder={tx.form.email} required />
            <input className="field" name="subject" placeholder={tx.form.subject} required />
            <textarea className="field" name="message" rows="5" placeholder={tx.form.message} required />
            <button className="btn dark block" disabled={status === 'sending'}>
              {status === 'sending' ? tx.form.sending : tx.form.send}
            </button>
            {status === 'ok' && <p className="note ok">{tx.form.ok}</p>}
            {status === 'fail' && <p className="note fail">{tx.form.fail}</p>}
          </Reveal>
          <Reveal from="right" className="box">
            <h4>{tx.connect}</h4>
            <p className="muted">{tx.connectSub}</p>
            <div className="channels">
              {channels.map((c) => (
                <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  <span>{c.icon} {c.label}</span><FaArrowRight />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

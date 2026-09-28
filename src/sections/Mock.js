import React from 'react';

// ภาพจำลองหน้าจอ (ใช้จนกว่าจะมีภาพจริงของผลงาน) — วาดด้วย CSS ล้วน
const bar = (w, extra = '') => <i className={`mk-bar ${extra}`} style={{ width: w }} />;

function Booking() {
  return (
    <div className="mk-body mk-dark">
      <div className="mk-brand">BRAVO<br /><small>CUTS</small></div>
      <div className="mk-row">
        <span className="mk-btn mk-gold">Walk-in</span>
        <span className="mk-btn mk-ghost">Book</span>
      </div>
      <div className="mk-slots">
        {['10:00', '10:30', '11:00', '11:30', '13:00', '13:30'].map((s, i) => (
          <span key={s} className={i === 2 ? 'on' : ''}>{s}</span>
        ))}
      </div>
    </div>
  );
}

function Pos() {
  return (
    <div className="mk-body mk-split">
      <div className="mk-grid4">
        {Array.from({ length: 8 }, (_, i) => <span key={i} className={i % 3 === 0 ? 'busy' : ''}>T{i + 1}</span>)}
      </div>
      <div className="mk-side">
        {bar('70%')}{bar('55%')}{bar('62%')}
        <div className="mk-total">฿1,240</div>
      </div>
    </div>
  );
}

function Attendance() {
  return (
    <div className="mk-body">
      {['Anan', 'Bee', 'Chai', 'Dao', 'Earn'].map((n, i) => (
        <div className="mk-line" key={n}>
          <span className="mk-avatar" />{n}
          <span className={`mk-tag ${i === 3 ? 'absent' : ''}`}>{i === 3 ? 'Absent' : 'Present'}</span>
        </div>
      ))}
    </div>
  );
}

function Dashboard() {
  const h = [40, 65, 50, 80, 58, 92, 70];
  return (
    <div className="mk-body">
      <div className="mk-kpis">
        <span><b>฿84k</b>Expenses</span><span><b>2</b>Companies</span><span><b>+12%</b>MoM</span>
      </div>
      <div className="mk-chart">{h.map((v, i) => <i key={i} style={{ height: `${v}%` }} />)}</div>
    </div>
  );
}

const KINDS = { booking: Booking, pos: Pos, attendance: Attendance, dashboard: Dashboard };

export default function Mock({ kind, url }) {
  const Body = KINDS[kind];
  return (
    <div className="mock">
      <div className="mk-chrome"><i /><i /><i /><span>{url ? url.replace(/^https?:\/\/(www\.)?|\/$/g, '') : 'preview'}</span></div>
      <Body />
    </div>
  );
}

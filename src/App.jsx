import React, { useState } from 'react';
import './index.css';

const Dashboard = ({ onEnterMeetingHub }) => (
  <div className="dashboard-view">
    <header style={{ marginBottom: '2rem' }}>
      <h1>Executive Overview</h1>
      <p style={{ color: 'var(--text-muted)' }}>Good morning, Arthur. Here's your strategic focus for today.</p>
    </header>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
      <section className="glass-card" style={{ padding: '1.5rem' }}>
        <h3>Upcoming Meeting</h3>
        <div style={{ marginTop: '1rem' }}>
          <span className="badge badge-upcoming">In 2 Hours</span>
          <h2 style={{ margin: '0.5rem 0' }}>Q1 Strategy & Risk Assessment</h2>
          <p style={{ color: 'var(--text-muted)' }}>Location: Boardroom A / Zoom</p>
          <button className="btn-primary" style={{ marginTop: '1rem' }} onClick={onEnterMeetingHub}>Enter Meeting Hub</button>
        </div>
      </section>

      <section className="glass-card" style={{ padding: '1.5rem' }}>
        <h3>Pending Action Items</h3>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
          {[
            { id: 1, task: "Approve Sustainability Report", due: "Tomorrow" },
            { id: 2, task: "Review CEO Succession Plan", due: "Mar 10" },
            { id: 3, task: "Sign Audit Engagement Letter", due: "Mar 12" }
          ].map(item => (
            <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--border)' }}>
              <span>{item.task}</span>
              <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{item.due}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </div>
);

const MeetingHub = () => {
  const [activeItem, setActiveItem] = useState(1);
  const agenda = [
    { id: 1, title: "Q1 Financial Performance", time: "20 min", speaker: "CFO", status: "Active" },
    { id: 2, title: "Governance Compliance Review", time: "15 min", speaker: "Sec", status: "Pending" },
    { id: 3, title: "Risk Appetite Framework", time: "30 min", speaker: "CRO", status: "Pending" }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: '1.5rem', height: '100%' }}>
      <section className="glass-card" style={{ padding: '1.5rem', overflowY: 'auto' }}>
        <h3>Agenda</h3>
        <div style={{ marginTop: '1.5rem' }}>
          {agenda.map(item => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              style={{
                padding: '1rem',
                borderRadius: '12px',
                marginBottom: '0.75rem',
                cursor: 'pointer',
                background: activeItem === item.id ? 'var(--primary-glow)' : 'transparent',
                border: activeItem === item.id ? '1px solid var(--primary)' : '1px solid transparent'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <span>{item.time}</span>
                <span>{item.speaker}</span>
              </div>
              <h4 style={{ margin: '0.25rem 0' }}>{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2>{agenda.find(i => i.id === activeItem)?.title}</h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="btn-primary" onClick={() => alert('Voting system initialized...')}>Vote Now</button>
            <button className="btn-primary" style={{ background: 'var(--accent)' }} onClick={() => alert('Note captured for current agenda item.')}>Capture Note</button>
          </div>
        </div>
        <div style={{ flex: 1, background: 'rgba(0,0,0,0.2)', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--text-muted)' }}>
          [ Document Preview Area: Financial_Pack_Q1.pdf ]
        </div>
        <div style={{ marginTop: '1.5rem', padding: '1rem', borderTop: '1px solid var(--border)' }}>
          <h4 style={{ marginBottom: '0.5rem' }}>Live Resolutions</h4>
          <p style={{ fontSize: '0.9rem' }}>Resolution 24.1: Be it resolved that the board approves the Q1 earnings guidance as presented.</p>
        </div>
      </section>
    </div>
  );
};

const ActionCenter = () => (
  <div className="glass-card" style={{ padding: '2rem' }}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
      <h2>Action Management</h2>
      <button className="btn-primary" onClick={() => alert('New Action Creation Modal would open here.')}>+ Create Action</button>
    </header>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ textAlign: 'left', borderBottom: '2px solid var(--border)' }}>
          <th style={{ padding: '1rem' }}>Task</th>
          <th style={{ padding: '1rem' }}>Owner</th>
          <th style={{ padding: '1rem' }}>Due</th>
          <th style={{ padding: '1rem' }}>Status</th>
        </tr>
      </thead>
      <tbody>
        {[
          { task: "Revise ESG Policy", owner: "Committee", due: "Apr 01", status: "In Progress" },
          { task: "Executive Compensation Audit", owner: "Sarah J.", due: "Mar 15", status: "Review" },
          { task: "Update Bylaws Section 4", owner: "Arthur L.", due: "Mar 20", status: "Pending" }
        ].map((row, idx) => (
          <tr key={idx} style={{ borderBottom: '1px solid var(--border)' }}>
            <td style={{ padding: '1rem' }}>{row.task}</td>
            <td style={{ padding: '1rem' }}>{row.owner}</td>
            <td style={{ padding: '1rem' }}>{row.due}</td>
            <td style={{ padding: '1rem' }}>
              <select
                className="status-select"
                defaultValue={row.status.toUpperCase().replace(' ', '_')}
                style={{
                  background: 'var(--bg-surface)',
                  color: 'var(--text-main)',
                  border: '1px solid var(--border)',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.85rem'
                }}
              >
                <option value="PENDING">PENDING</option>
                <option value="IN_PROGRESS">IN PROGRESS</option>
                <option value="REVIEW">REVIEW</option>
                <option value="DONE">DONE</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <div className="brand" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '3rem', color: 'var(--primary)', letterSpacing: '2px' }}>
          STEWARDSHIP
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {[
            { id: 'dashboard', label: 'Dashboard' },
            { id: 'meetings', label: 'Meetings' },
            { id: 'actions', label: 'Actions' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: 'none',
                border: 'none',
                color: activeTab === tab.id ? 'var(--primary)' : 'white',
                textAlign: 'left',
                cursor: 'pointer',
                fontSize: '1.1rem',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                background: activeTab === tab.id ? 'var(--primary-glow)' : 'transparent',
                fontWeight: activeTab === tab.id ? 600 : 400
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="main-content">
        <img src="/src/assets/boardroom_hero.png" className="hero-bg" alt="Boardroom" />
        {activeTab === 'dashboard' && <Dashboard onEnterMeetingHub={() => setActiveTab('meetings')} />}
        {activeTab === 'meetings' && <MeetingHub />}
        {activeTab === 'actions' && <ActionCenter />}
      </main>
    </div>
  );
};

export default App;

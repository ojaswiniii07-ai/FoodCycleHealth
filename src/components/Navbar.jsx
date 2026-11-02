import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/leftover', label: '🍽️ Leftover Recipe' },
    { to: '/wellness', label: '🥗 Wellness Guide' },
    { to: '/waste', label: '♻️ Food Waste' },
    { to: '/foodlink', label: '🔗 Food Link' },
  ];

  return (
    <nav style={{
      background: 'white',
      boxShadow: '0 1px 20px rgba(0,0,0,0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px', height: '36px',
            background: 'linear-gradient(135deg, #1A56DB, #F97316)',
            borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '18px'
          }}>🌱</div>
          <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#1A56DB' }}>
            FoodCycle<span style={{ color: '#F97316' }}>Health</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="desktop-nav">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                textDecoration: 'none',
                padding: '8px 14px',
                borderRadius: '10px',
                fontSize: '0.85rem',
                fontWeight: 500,
                color: location.pathname === link.to ? '#1A56DB' : '#64748B',
                background: location.pathname === link.to ? '#EFF6FF' : 'transparent',
                transition: 'all 0.2s ease',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem', color: '#1E293B' }}
          className="mobile-menu-btn"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileOpen && (
        <div style={{ padding: '12px 24px 16px', background: 'white', borderTop: '1px solid #F1F5F9' }}>
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                textDecoration: 'none',
                padding: '10px 14px',
                borderRadius: '10px',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: location.pathname === link.to ? '#1A56DB' : '#64748B',
                background: location.pathname === link.to ? '#EFF6FF' : 'transparent',
                marginBottom: '4px',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}


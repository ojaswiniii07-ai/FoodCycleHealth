import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      background: '#0F172A',
      color: '#94A3B8',
      padding: '48px 24px 24px',
      marginTop: '80px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #1A56DB, #F97316)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>🌱</div>
              <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'white' }}>FoodCycle<span style={{ color: '#F97316' }}>Health</span></span>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: '#64748B' }}>
              Eat Better. Waste Less. Live Healthier.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '16px', fontSize: '0.9rem' }}>Features</h4>
            {[
              { to: '/leftover', label: '🍽️ Leftover Recipes' },
              { to: '/wellness', label: '🥗 Wellness Guide' },
              { to: '/waste', label: '♻️ Food Waste Reuse' },
              { to: '/foodlink', label: '🔗 Food Link Analysis' },
            ].map(l => (
              <Link key={l.to} to={l.to} style={{ display: 'block', color: '#64748B', textDecoration: 'none', fontSize: '0.85rem', marginBottom: '8px', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#94A3B8'}
                onMouseLeave={e => e.target.style.color = '#64748B'}
              >{l.label}</Link>
            ))}
          </div>
          <div>
            <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '16px', fontSize: '0.9rem' }}>Our Mission</h4>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: '#64748B' }}>
              Make every meal smarter, every leftover useful, and every food choice more conscious.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'white', fontWeight: 600, marginBottom: '16px', fontSize: '0.9rem' }}>Disclaimer</h4>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.7, color: '#64748B' }}>
              FoodCycle Health provides general wellness guidance only. Always consult a qualified healthcare professional for medical concerns.
            </p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #1E293B', paddingTop: '24px', textAlign: 'center', fontSize: '0.8rem' }}>
          © 2026 FoodCycle Health. Eat Better. Waste Less. Live Healthier.
        </div>
      </div>
    </footer>
  );
}


import { Link } from 'react-router-dom';

export default function ModuleCard({ to, emoji, title, description, gradient, tag }) {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <div className="card-hover" style={{
        background: 'white',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        border: '1px solid #F1F5F9',
        height: '100%',
      }}>
        <div style={{ background: gradient, padding: '32px 24px' }}>
          <div style={{ fontSize: '2.8rem', marginBottom: '8px' }}>{emoji}</div>
          <span className="tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
            {tag}
          </span>
        </div>
        <div style={{ padding: '24px' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1E293B', marginBottom: '10px' }}>{title}</h3>
          <p style={{ color: '#64748B', fontSize: '0.88rem', lineHeight: 1.6 }}>{description}</p>
          <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px', color: '#1A56DB', fontWeight: 600, fontSize: '0.85rem' }}>
            Get Started <span>→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}


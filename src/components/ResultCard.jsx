export default function ResultCard({ title, items = [], color = '#1A56DB', emoji = '✅', description = '' }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
      border: '1px solid #F1F5F9',
      marginBottom: '16px',
    }} className="fade-in-up">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
        <span style={{ fontSize: '1.4rem' }}>{emoji}</span>
        <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#1E293B' }}>{title}</h3>
      </div>
      {description && <p style={{ color: '#64748B', fontSize: '0.88rem', marginBottom: '16px', lineHeight: 1.6 }}>{description}</p>}
      {items.length > 0 && (
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {items.map((item, i) => (
            <li key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: '10px',
              padding: '10px 14px',
              background: '#F8FAFC',
              borderRadius: '10px',
              fontSize: '0.88rem',
              color: '#334155',
              lineHeight: 1.5,
            }}>
              <span style={{ color, fontWeight: 700, flexShrink: 0 }}>•</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


export default function LoadingSpinner({ message = "Analyzing..." }) {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <div style={{
        width: '56px', height: '56px',
        border: '4px solid #E2E8F0',
        borderTop: '4px solid #1A56DB',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto 20px',
      }} />
      <p style={{ color: '#64748B', fontWeight: 500, fontSize: '0.95rem' }}>{message}</p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}


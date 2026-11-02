import { Link } from 'react-router-dom';

const modules = [
  {
    to: '/leftover',
    emoji: '🍽️',
    title: 'Leftover Recipe Generator',
    description: "Transform yesterday's leftovers into delicious new dishes. Upload a photo or type the food name.",
    gradient: 'linear-gradient(135deg, #F97316, #EA580C)',
    tag: 'Reduce Waste',
  },
  {
    to: '/wellness',
    emoji: '🥗',
    title: 'Wellness & Skin Food Guide',
    description: 'Discover foods that support your skin and overall wellness. Get AI-powered dietary guidance.',
    gradient: 'linear-gradient(135deg, #1A56DB, #1E3A8A)',
    tag: 'Health First',
  },
  {
    to: '/waste',
    emoji: '♻️',
    title: 'Food Waste Utilizer',
    description: 'Learn practical ways to compost, garden, or repurpose suitable organic food waste.',
    gradient: 'linear-gradient(135deg, #16A34A, #15803D)',
    tag: 'Eco-Friendly',
  },
  {
    to: '/foodlink',
    emoji: '🔗',
    title: 'Food Link Nutrition Insights',
    description: 'Paste any food delivery link. Get instant nutritional insights and healthier alternatives.',
    gradient: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
    tag: 'Smart Choices',
  },
];

const stats = [
  { value: '50K+', label: 'Recipes Generated', emoji: '🍳' },
  { value: '2T+', label: 'Food Saved from Waste', emoji: '♻️' },
  { value: '10K+', label: 'Active Users', emoji: '👥' },
  { value: '4.9★', label: 'User Rating', emoji: '⭐' },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero" style={{ padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', padding: '8px 18px', marginBottom: '24px', border: '1px solid rgba(255,255,255,0.2)' }}>
            <span>🌱</span>
            <span style={{ color: '#BAE6FD', fontSize: '0.85rem', fontWeight: 600 }}>AI-Powered Food & Wellness Platform</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'white', lineHeight: 1.15, marginBottom: '20px' }}>
            Eat Better.{' '}
            <span style={{ color: '#FCD34D' }}>Waste Less.</span>{' '}
            Live Healthier.
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#BAE6FD', lineHeight: 1.7, marginBottom: '36px', maxWidth: '600px', margin: '0 auto 36px' }}>
            Transform leftovers into recipes, get wellness guidance, reuse food waste, and analyze your food choices — all in one place.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/leftover">
              <button className="btn-orange" style={{ padding: '14px 28px', fontSize: '1rem' }}>
                🍽️ Start With Leftovers
              </button>
            </Link>
            <Link to="/wellness">
              <button style={{
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.3)',
                borderRadius: '12px',
                padding: '14px 28px',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'all 0.2s ease',
              }}>
                🥗 Get Wellness Guide
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ maxWidth: '1200px', margin: '-30px auto 0', padding: '0 24px', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
          {stats.map(s => (
            <div key={s.label} style={{
              background: 'white',
              borderRadius: '16px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
              border: '1px solid #F1F5F9',
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '4px' }}>{s.emoji}</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1E293B' }}>{s.value}</div>
              <div style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Modules */}
      <section style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#1E293B', marginBottom: '12px' }}>
            What would you like to do?
          </h2>
          <p style={{ color: '#64748B', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
            Choose a feature and let AI guide your food and wellness journey.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {modules.map(mod => (
            <Link key={mod.to} to={mod.to} style={{ textDecoration: 'none' }}>
              <div className="card-hover" style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                border: '1px solid #F1F5F9',
                height: '100%',
              }}>
                <div style={{ background: mod.gradient, padding: '32px 24px', position: 'relative' }}>
                  <div style={{ fontSize: '2.8rem', marginBottom: '8px' }}>{mod.emoji}</div>
                  <span className="tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
                    {mod.tag}
                  </span>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1E293B', marginBottom: '10px' }}>{mod.title}</h3>
                  <p style={{ color: '#64748B', fontSize: '0.88rem', lineHeight: 1.6 }}>{mod.description}</p>
                  <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px', color: '#1A56DB', fontWeight: 600, fontSize: '0.85rem' }}>
                    Get Started <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: '#EFF6FF', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#1E293B', marginBottom: '12px' }}>How It Works</h2>
            <p style={{ color: '#64748B' }}>Four simple steps to smarter food choices</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {[
              { step: '01', title: 'Choose Your Goal', desc: 'Pick from leftover recipes, wellness guidance, waste reuse, or food link analysis.', emoji: '🎯' },
              { step: '02', title: 'Provide Input', desc: 'Type food name, upload a photo, describe a concern, or paste a delivery link.', emoji: '📝' },
              { step: '03', title: 'AI Processing', desc: 'Our AI analyzes your input and generates personalized suggestions in seconds.', emoji: '🤖' },
              { step: '04', title: 'Get Results', desc: 'Receive practical recipes, wellness tips, reuse ideas, or nutritional insights.', emoji: '✨' },
            ].map(item => (
              <div key={item.step} style={{
                background: 'white',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{item.emoji}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1A56DB', letterSpacing: '0.1em', marginBottom: '8px' }}>STEP {item.step}</div>
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1E293B', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 24px' }}>
        <div className="gradient-hero" style={{ borderRadius: '24px', padding: '60px 40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>
            Ready to Make Every Meal Smarter?
          </h2>
          <p style={{ color: '#BAE6FD', marginBottom: '32px', fontSize: '1rem' }}>
            Join thousands making smarter food choices every day.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/leftover"><button className="btn-orange" style={{ padding: '14px 28px' }}>🍽️ Try Leftover Recipes</button></Link>
            <Link to="/waste"><button className="btn-primary" style={{ background: 'rgba(255,255,255,0.15)', padding: '14px 28px', border: '2px solid rgba(255,255,255,0.3)' }}>♻️ Explore Waste Reuse</button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}


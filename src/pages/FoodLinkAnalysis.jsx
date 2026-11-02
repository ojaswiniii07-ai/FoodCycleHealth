import { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import ResultCard from '../components/ResultCard';

const MOCK_FOOD_ANALYSIS = {
  default: {
    name: 'Butter Chicken with Naan',
    platform: 'Swiggy / Zomato',
    nutrition: {
      calories: '~650 kcal',
      protein: '~28g',
      carbs: '~55g',
      fat: '~32g',
      sodium: '~1100mg',
      fiber: '~3g',
    },
    insights: [
      'High in saturated fat from cream and butter — moderate portion size recommended',
      'Sodium content is on the higher side for one meal (aim for <2300mg daily)',
      'Good protein source from chicken',
      'Refined carbs from naan — consider whole wheat naan if available',
    ],
    healthScore: 5.5,
    alternatives: [
      { name: 'Tandoori Chicken', reason: 'Grilled, lower fat, same protein', improvement: '~40% less fat' },
      { name: 'Dal Makhani (smaller portion)', reason: 'Plant protein, high fiber', improvement: 'More fiber' },
      { name: 'Palak Paneer', reason: 'Iron-rich spinach, moderate fat', improvement: 'Better micronutrients' },
    ],
    tips: [
      'Ask for gravy on the side to control the amount',
      'Pair with raita instead of more naan for a lighter meal',
      'Balance this meal with a lighter breakfast or dinner',
    ],
  },
};

function parseUrl(url) {
  if (!url.trim()) return null;
  if (url.includes('swiggy') || url.includes('zomato') || url.includes('dominos') || url.includes('pizza') || url.includes('kfc') || url.includes('mcdonalds')) {
    return MOCK_FOOD_ANALYSIS.default;
  }
  return MOCK_FOOD_ANALYSIS.default;
}

const exampleLinks = [
  'https://www.zomato.com/order/butter-chicken',
  'https://www.swiggy.com/restaurants/biryani',
  'https://www.dominos.co.in/pizza',
];

export default function FoodLinkAnalysis() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [manualFood, setManualFood] = useState('');

  const handleAnalyze = () => {
    const input = url.trim() || manualFood.trim();
    if (!input) return;
    setLoading(true);
    setResults(null);
    setTimeout(() => {
      setResults(MOCK_FOOD_ANALYSIS.default);
      setLoading(false);
    }, 2500);
  };

  const getScoreColor = (score) => {
    if (score >= 7) return '#16A34A';
    if (score >= 5) return '#D97706';
    return '#DC2626';
  };

  const getScoreLabel = (score) => {
    if (score >= 7) return 'Good Choice';
    if (score >= 5) return 'Moderate';
    return 'Treat Mindfully';
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg, #7C3AED, #5B21B6)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>🔗</div>
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1E293B' }}>Food Link Nutrition Insights</h1>
            <p style={{ color: '#64748B', fontSize: '0.9rem' }}>Paste a food delivery link or type a food name to get nutritional analysis</p>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div style={{ background: '#F5F3FF', border: '1px solid #DDD6FE', borderRadius: '12px', padding: '14px 18px', marginBottom: '24px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '1.2rem' }}>💡</span>
        <p style={{ color: '#5B21B6', fontSize: '0.85rem', lineHeight: 1.6 }}>
          <strong>How it works:</strong> Paste a Zomato, Swiggy, or other food delivery link, or simply type a food item name. Our system analyzes the dish's nutritional profile and suggests healthier alternatives.
        </p>
      </div>

      <div style={{ background: 'white', borderRadius: '20px', padding: '28px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #F1F5F9', marginBottom: '32px' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: '#1E293B', marginBottom: '8px' }}>
            🔗 Paste Food Delivery Link
          </label>
          <input
            type="url"
            className="input-field"
            placeholder="https://www.zomato.com/... or https://www.swiggy.com/..."
            value={url}
            onChange={e => setUrl(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleAnalyze()}
          />
          <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            <span style={{ fontSize: '0.78rem', color: '#94A3B8', paddingTop: '3px' }}>Try example:</span>
            {exampleLinks.map(link => (
              <button
                key={link}
                onClick={() => setUrl(link)}
                style={{
                  padding: '3px 10px',
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  color: '#475569',
                }}
              >{link.split('/')[2]}</button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '20px 0' }}>
          <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
          <span style={{ color: '#94A3B8', fontSize: '0.82rem', fontWeight: 600 }}>OR</span>
          <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: '#1E293B', marginBottom: '8px' }}>
            🍽️ Type a Food Item Name
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="e.g., Butter Chicken, Margherita Pizza, Chicken Burger..."
            value={manualFood}
            onChange={e => setManualFood(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleAnalyze()}
          />
        </div>

        <button
          onClick={handleAnalyze}
          style={{
            width: '100%',
            padding: '14px',
            background: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '0.95rem',
            transition: 'all 0.2s ease',
          }}
          disabled={loading || (!url.trim() && !manualFood.trim())}
        >
          {loading ? '🔍 Analyzing Nutrition...' : '🔗 Analyze Food'}
        </button>
      </div>

      {loading && <LoadingSpinner message="Analyzing nutritional profile of your food..." />}

      {results && (
        <div className="fade-in-up">
          {/* Food Header */}
          <div style={{ background: 'white', borderRadius: '20px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #F1F5F9', marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h2 style={{ fontWeight: 800, fontSize: '1.4rem', color: '#1E293B', marginBottom: '4px' }}>{results.name}</h2>
                <p style={{ color: '#64748B', fontSize: '0.88rem' }}>Source: {results.platform}</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '72px', height: '72px',
                  borderRadius: '50%',
                  border: `4px solid ${getScoreColor(results.healthScore)}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexDirection: 'column',
                }}>
                  <span style={{ fontSize: '1.3rem', fontWeight: 800, color: getScoreColor(results.healthScore) }}>{results.healthScore}</span>
                  <span style={{ fontSize: '0.6rem', color: '#94A3B8' }}>/10</span>
                </div>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: getScoreColor(results.healthScore), marginTop: '4px' }}>
                  {getScoreLabel(results.healthScore)}
                </p>
              </div>
            </div>

            {/* Nutrition Grid */}
            <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '12px' }}>
              {Object.entries(results.nutrition).map(([key, val]) => (
                <div key={key} style={{ background: '#F8FAFC', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B' }}>{val}</div>
                  <div style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'capitalize', marginTop: '2px' }}>{key}</div>
                </div>
              ))}
            </div>
          </div>

          <ResultCard
            title="Nutritional Insights"
            emoji="📊"
            color="#7C3AED"
            description="Key observations about this food's nutritional profile:"
            items={results.insights}
          />

          {/* Healthier Alternatives */}
          <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #F1F5F9', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ fontSize: '1.4rem' }}>🥗</span>
              <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#1E293B' }}>Healthier Alternatives</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {results.alternatives.map((alt, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '12px 16px',
                  background: '#F8FAFC',
                  borderRadius: '10px',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#1E293B' }}>{alt.name}</div>
                    <div style={{ fontSize: '0.82rem', color: '#64748B' }}>{alt.reason}</div>
                  </div>
                  <span style={{ background: '#F0FDF4', color: '#16A34A', padding: '4px 12px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
                    {alt.improvement}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <ResultCard
            title="Smart Eating Tips"
            emoji="💡"
            color="#1A56DB"
            description="Make this meal work better for your health:"
            items={results.tips}
          />

          <div style={{ background: '#F5F3FF', border: '1px solid #DDD6FE', borderRadius: '12px', padding: '16px 20px', marginTop: '8px' }}>
            <p style={{ color: '#5B21B6', fontSize: '0.82rem', lineHeight: 1.6 }}>
              ⚠️ <strong>Disclaimer:</strong> Nutritional values are approximate estimates based on typical preparations. Actual values vary by restaurant, portion size, and preparation method. This is not medical dietary advice.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}


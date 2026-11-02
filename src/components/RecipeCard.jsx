import { useState } from 'react';

export default function RecipeCard({ recipe }) {
  const [expanded, setExpanded] = useState(false);

  const difficultyColor = {
    'Easy': '#16A34A',
    'Medium': '#D97706',
    'Hard': '#DC2626',
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      border: '1px solid #F1F5F9',
      marginBottom: '16px',
      transition: 'transform 0.2s ease',
    }} className="card-hover fade-in-up">
      <div style={{ padding: '20px 24px', borderBottom: expanded ? '1px solid #F1F5F9' : 'none' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1E293B', marginBottom: '8px' }}>
              {recipe.emoji} {recipe.name}
            </h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span className="tag" style={{ background: '#EFF6FF', color: '#1A56DB' }}>⏱ {recipe.time}</span>
              <span className="tag" style={{ background: `${difficultyColor[recipe.difficulty]}20`, color: difficultyColor[recipe.difficulty] }}>
                {recipe.difficulty}
              </span>
              <span className="tag" style={{ background: '#F0FDF4', color: '#16A34A' }}>
                ~{recipe.calories} kcal
              </span>
            </div>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: expanded ? '#1A56DB' : '#EFF6FF',
              color: expanded ? 'white' : '#1A56DB',
              border: 'none', borderRadius: '8px',
              padding: '8px 14px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.82rem',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            {expanded ? '▲ Less' : '▼ More'}
          </button>
        </div>
      </div>

      {expanded && (
        <div style={{ padding: '20px 24px' }} className="fade-in-up">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <h4 style={{ fontWeight: 600, fontSize: '0.85rem', color: '#64748B', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                🛒 Ingredients
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} style={{ fontSize: '0.87rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: '#F97316' }}>◆</span> {ing}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 600, fontSize: '0.85rem', color: '#64748B', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                📊 Nutrition (approx.)
              </h4>
              {Object.entries(recipe.nutrition).map(([key, val]) => (
                <div key={key} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', padding: '4px 0', borderBottom: '1px solid #F1F5F9', color: '#475569' }}>
                  <span style={{ textTransform: 'capitalize' }}>{key}</span>
                  <span style={{ fontWeight: 600, color: '#1E293B' }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 600, fontSize: '0.85rem', color: '#64748B', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              👨‍🍳 Steps
            </h4>
            <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {recipe.steps.map((step, i) => (
                <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{
                    background: '#1A56DB', color: 'white',
                    borderRadius: '50%', width: '24px', height: '24px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.75rem', fontWeight: 700, flexShrink: 0,
                  }}>{i + 1}</span>
                  <span style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div style={{ marginTop: '16px', padding: '12px 16px', background: '#FFF7ED', borderRadius: '10px', border: '1px solid #FED7AA' }}>
            <p style={{ fontSize: '0.82rem', color: '#9A3412' }}>
              ⚠️ <strong>Food Safety:</strong> Ensure leftovers have been stored properly (refrigerated within 2 hours). Discard food showing signs of spoilage.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}


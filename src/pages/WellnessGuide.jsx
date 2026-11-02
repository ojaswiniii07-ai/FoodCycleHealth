import { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import ResultCard from '../components/ResultCard';

const concerns = [
  { id: 'acne', label: 'Acne & Pimples', emoji: '😣' },
  { id: 'oily', label: 'Oily Skin', emoji: '💧' },
  { id: 'dry', label: 'Dry Skin', emoji: '🏜️' },
  { id: 'hair_dry', label: 'Dry/Brittle Hair', emoji: '💇' },
  { id: 'hair_general', label: 'General Hair Wellness', emoji: '✨' },
  { id: 'general', label: 'General Wellness', emoji: '🌿' },
];

const MOCK_RESULTS = {
  acne: {
    title: 'Acne & Skin Wellness Guidance',
    sections: [
      {
        title: 'Foods to Consider Including',
        emoji: '✅',
        color: '#16A34A',
        description: 'These foods are generally associated with anti-inflammatory properties that may support skin health:',
        items: [
          'Fruits rich in antioxidants — berries, oranges, papaya',
          'Leafy green vegetables — spinach, kale, methi',
          'Foods with healthy fats — avocado, walnuts, flaxseeds',
          'Zinc-rich foods — pumpkin seeds, legumes, chickpeas',
          'Probiotic-rich foods — yogurt, fermented vegetables',
          'Adequate water — aim for 8–10 glasses daily',
        ],
      },
      {
        title: 'Foods to Monitor or Limit',
        emoji: '⚠️',
        color: '#D97706',
        description: 'Some individuals notice these foods may trigger or worsen skin concerns:',
        items: [
          'High glycemic foods — white bread, sugary beverages, pastries',
          'Dairy products (some individuals are sensitive — observe personal reactions)',
          'Heavily processed or fried foods',
          'Foods high in refined sugar',
        ],
      },
      {
        title: 'Hydration & Lifestyle Tips',
        emoji: '💧',
        color: '#1A56DB',
        description: '',
        items: [
          'Stay well-hydrated throughout the day',
          'Aim for 7–8 hours of quality sleep',
          'Manage stress through light exercise, breathing exercises, or meditation',
          'Avoid touching your face frequently',
          'Maintain a consistent skincare routine using gentle products',
        ],
      },
    ],
    disclaimer: '⚕️ This is general wellness guidance only. For persistent or severe acne, please consult a qualified dermatologist.',
  },
  dry: {
    title: 'Dry Skin Food & Wellness Guidance',
    sections: [
      {
        title: 'Foods to Support Skin Hydration',
        emoji: '✅',
        color: '#16A34A',
        description: "These foods may help support the skin's natural moisture barrier:",
        items: [
          'Foods rich in omega-3 fatty acids — fatty fish, flaxseeds, chia seeds, walnuts',
          'Vitamin E sources — sunflower seeds, almonds, spinach',
          'Hydrating fruits and vegetables — cucumber, watermelon, oranges',
          'Vitamin A-rich foods — carrots, sweet potato, papaya',
          'Adequate water intake throughout the day',
        ],
      },
      {
        title: 'Hydration & Lifestyle',
        emoji: '💧',
        color: '#1A56DB',
        description: '',
        items: [
          'Drink 8–10 glasses of water daily',
          'Use a humidifier in dry environments',
          'Avoid long hot showers that strip natural oils',
          'Use a gentle, fragrance-free moisturizer after bathing',
        ],
      },
    ],
    disclaimer: '⚕️ If dry skin is severe, persistent, or associated with other symptoms, consult a dermatologist.',
  },
  general: {
    title: 'General Wellness Food Guidance',
    sections: [
      {
        title: 'Balanced Nutrition Principles',
        emoji: '✅',
        color: '#16A34A',
        description: 'A balanced diet is the foundation of overall wellness:',
        items: [
          'Include a variety of colorful fruits and vegetables daily',
          'Choose whole grains over refined carbohydrates',
          'Include quality protein sources — legumes, eggs, lean meats, dairy',
          'Incorporate healthy fats — nuts, seeds, olive oil',
          'Stay adequately hydrated',
        ],
      },
      {
        title: 'Lifestyle Habits',
        emoji: '🌿',
        color: '#16A34A',
        description: '',
        items: [
          'Maintain regular physical activity — at least 30 minutes most days',
          'Prioritize quality sleep',
          'Manage stress through mindfulness or hobbies',
          'Limit alcohol and avoid smoking',
          'Eat mindfully and avoid skipping meals',
        ],
      },
    ],
    disclaimer: '⚕️ This is general wellness information. Always consult a healthcare professional for personalized advice.',
  },
};

MOCK_RESULTS.oily = MOCK_RESULTS.acne;
MOCK_RESULTS.hair_dry = {
  title: 'Dry & Brittle Hair Wellness Guide',
  sections: [
    {
      title: 'Nutrients That Support Hair Health',
      emoji: '✅',
      color: '#16A34A',
      description: 'These nutrients are commonly associated with healthy hair:',
      items: [
        'Biotin sources — eggs, nuts, whole grains, legumes',
        'Iron-rich foods — spinach, lentils, pomegranate',
        'Omega-3 rich foods — walnuts, flaxseeds, fatty fish',
        'Vitamin D sources — sunlight exposure, eggs, fortified foods',
        'Protein-rich foods for keratin support — eggs, legumes, dairy',
      ],
    },
    {
      title: 'Hydration & Hair Care Tips',
      emoji: '💧',
      color: '#1A56DB',
      description: '',
      items: [
        'Stay well-hydrated',
        'Avoid excessive heat styling',
        'Use gentle, sulfate-free shampoo',
        'Regular oiling with coconut or sesame oil can help',
      ],
    },
  ],
  disclaimer: '⚕️ For significant hair loss or scalp conditions, consult a dermatologist or trichologist.',
};
MOCK_RESULTS.hair_general = MOCK_RESULTS.hair_dry;

export default function WellnessGuide() {
  const [selectedConcern, setSelectedConcern] = useState('');
  const [description, setDescription] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleAnalyze = () => {
    if (!selectedConcern) return;
    setLoading(true);
    setResults(null);
    setTimeout(() => {
      setResults(MOCK_RESULTS[selectedConcern] || MOCK_RESULTS.general);
      setLoading(false);
    }, 2200);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg, #1A56DB, #1E3A8A)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>🥗</div>
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1E293B' }}>Wellness & Skin Food Guide</h1>
            <p style={{ color: '#64748B', fontSize: '0.9rem' }}>General food and lifestyle guidance for common wellness concerns</p>
          </div>
        </div>
      </div>

      {/* Disclaimer banner */}
      <div style={{ background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: '12px', padding: '14px 18px', marginBottom: '24px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '1.2rem' }}>⚕️</span>
        <p style={{ color: '#9A3412', fontSize: '0.85rem', lineHeight: 1.6 }}>
          <strong>Important:</strong> This platform provides general wellness and food guidance only. It does not diagnose medical conditions or replace professional medical advice. Please consult a qualified healthcare professional or dermatologist for any medical concerns.
        </p>
      </div>

      <div style={{ background: 'white', borderRadius: '20px', padding: '28px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #F1F5F9', marginBottom: '32px' }}>
        <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#1E293B', marginBottom: '16px' }}>Select Your Concern</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px', marginBottom: '24px' }}>
          {concerns.map(c => (
            <button
              key={c.id}
              onClick={() => setSelectedConcern(c.id)}
              style={{
                padding: '12px 16px',
                borderRadius: '12px',
                border: '2px solid',
                borderColor: selectedConcern === c.id ? '#1A56DB' : '#E2E8F0',
                background: selectedConcern === c.id ? '#EFF6FF' : 'white',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{c.emoji}</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: selectedConcern === c.id ? '#1A56DB' : '#475569' }}>{c.label}</div>
            </button>
          ))}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: '#1E293B', marginBottom: '8px' }}>
            Additional Description (Optional)
          </label>
          <textarea
            className="input-field"
            placeholder="Describe your concern in more detail, how long you've had it, any specific symptoms..."
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={3}
            style={{ resize: 'vertical' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: '#1E293B', marginBottom: '8px' }}>
            Upload Photo (Optional)
          </label>
          <label htmlFor="wellness-img" className="upload-zone" style={{ display: 'block' }}>
            {imagePreview ? (
              <div>
                <img src={imagePreview} alt="Uploaded" style={{ maxHeight: '150px', borderRadius: '10px' }} />
                <p style={{ marginTop: '8px', color: '#64748B', fontSize: '0.85rem' }}>Click to change</p>
              </div>
            ) : (
              <>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📸</div>
                <p style={{ color: '#64748B', fontWeight: 500, fontSize: '0.9rem' }}>Upload a skin/hair photo for reference</p>
                <p style={{ color: '#94A3B8', fontSize: '0.8rem', marginTop: '4px' }}>Your photo is not analyzed — it is for reference only</p>
              </>
            )}
          </label>
          <input id="wellness-img" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload} />
        </div>

        <button
          className="btn-primary"
          onClick={handleAnalyze}
          style={{ width: '100%', padding: '14px' }}
          disabled={loading || !selectedConcern}
        >
          {loading ? '🔍 Analyzing...' : '🥗 Get Wellness Guidance'}
        </button>
        {!selectedConcern && (
          <p style={{ textAlign: 'center', color: '#94A3B8', fontSize: '0.82rem', marginTop: '8px' }}>Please select a concern above</p>
        )}
      </div>

      {loading && <LoadingSpinner message="Preparing personalized wellness guidance..." />}

      {results && (
        <div className="fade-in-up">
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontWeight: 700, fontSize: '1.3rem', color: '#1E293B', marginBottom: '4px' }}>
              {results.title}
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.88rem' }}>General guidance based on your selected concern</p>
          </div>

          {results.sections.map((section, i) => (
            <ResultCard
              key={i}
              title={section.title}
              emoji={section.emoji}
              color={section.color}
              description={section.description}
              items={section.items}
            />
          ))}

          <div style={{ background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: '12px', padding: '16px 20px', marginTop: '8px' }}>
            <p style={{ color: '#9A3412', fontSize: '0.85rem', lineHeight: 1.6 }}>{results.disclaimer}</p>
          </div>
        </div>
      )}
    </div>
  );
}


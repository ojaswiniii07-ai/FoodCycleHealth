import { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import ResultCard from '../components/ResultCard';

const wasteCategories = [
  { id: 'vegetable', label: 'Vegetable Peels & Scraps', emoji: '🥕' },
  { id: 'fruit', label: 'Fruit Peels & Seeds', emoji: '🍊' },
  { id: 'cooked', label: 'Cooked Food Gone Bad', emoji: '🍱' },
  { id: 'eggshell', label: 'Eggshells', emoji: '🥚' },
  { id: 'coffee', label: 'Coffee Grounds / Tea Leaves', emoji: '☕' },
  { id: 'bread_stale', label: 'Stale Bread / Grains', emoji: '🍞' },
];

const MOCK_WASTE_RESULTS = {
  vegetable: {
    title: 'Vegetable Peel & Scrap Reuse Ideas',
    sections: [
      {
        title: '🌱 Garden & Compost Uses',
        emoji: '🌿',
        color: '#16A34A',
        description: 'Vegetable scraps are gold for your garden:',
        items: [
          'Compost vegetable peels to create nutrient-rich soil amendment',
          'Grow new vegetables from scraps — onion bottoms, celery base, carrot tops',
          'Use boiled vegetable water to water plants (let it cool first)',
          'Potato peels can deter pests in your garden',
        ],
      },
      {
        title: '🍲 Kitchen Reuse',
        emoji: '🍲',
        color: '#F97316',
        description: 'Many vegetable scraps are still edible and nutritious:',
        items: [
          'Make vegetable stock by simmering peels, stems, and ends with water',
          'Carrot tops and radish greens can be used in salads or chutneys',
          'Broccoli stems are excellent in stir-fries or soups',
          'Onion skins can flavor soups and broths',
        ],
      },
    ],
    ecoTip: '♻️ Composting kitchen scraps can divert up to 30% of household waste from landfills.',
  },
  fruit: {
    title: 'Fruit Peel & Seed Reuse Ideas',
    sections: [
      {
        title: '🏠 Home & Natural Uses',
        emoji: '✨',
        color: '#7C3AED',
        description: 'Fruit peels have many household uses:',
        items: [
          'Orange/lemon peels can be used as natural air fresheners',
          'Citrus peels in vinegar for 2 weeks make a natural cleaning solution',
          'Banana peels can help soothe minor skin irritation (traditional use)',
          'Dry orange peels and use as firestarter',
        ],
      },
      {
        title: '🌱 Garden Uses',
        emoji: '🌿',
        color: '#16A34A',
        description: 'Fruit waste benefits your garden:',
        items: [
          'Compost fruit peels and seeds for rich organic matter',
          'Citrus peels repel ants and aphids in the garden',
          'Banana peels are rich in potassium — bury near plants or compost',
          'Save and dry seeds from fruits to plant next season',
        ],
      },
    ],
    ecoTip: '🌍 Food waste that ends up in landfills produces methane, a potent greenhouse gas. Composting prevents this.',
  },
  cooked: {
    title: 'Cooked Food Gone Bad — Safe Disposal',
    sections: [
      {
        title: '⚠️ Food Safety First',
        emoji: '⚠️',
        color: '#DC2626',
        description: 'Cooked food that has spoiled should NOT be consumed. Here is how to dispose responsibly:',
        items: [
          'Do NOT consume food showing mold, unusual smell, or slimy texture',
          'Composting is the best option for spoiled cooked food (check local guidelines)',
          'Some municipalities have food waste collection programs — check yours',
          'Avoid pouring greasy food waste down the drain — it clogs pipes',
        ],
      },
      {
        title: '🌱 Composting Spoiled Food',
        emoji: '♻️',
        color: '#16A34A',
        description: 'Composting options for cooked food waste:',
        items: [
          'Bokashi composting systems can handle cooked food and meat',
          'Municipal green bins often accept cooked food — check local rules',
          'Avoid adding meat or dairy to open compost piles (attracts pests)',
          'Vermicomposting (worm bins) with some cooked food scraps can work with care',
        ],
      },
    ],
    ecoTip: '💡 Prevention tip: Store cooked food in smaller, labeled containers with dates to reduce waste.',
  },
  eggshell: {
    title: 'Eggshell Reuse Ideas',
    sections: [
      {
        title: '🌱 Garden & Soil Benefits',
        emoji: '🌿',
        color: '#16A34A',
        description: 'Eggshells are rich in calcium carbonate, great for gardens:',
        items: [
          'Crush and add to compost for calcium-rich organic matter',
          'Sprinkle crushed shells around plants to deter slugs and snails',
          'Mix into soil when planting tomatoes, peppers, and squash to prevent blossom end rot',
          'Use as biodegradable seedling starters — fill with soil and plant seeds',
        ],
      },
      {
        title: '🏠 Home Uses',
        emoji: '✨',
        color: '#1A56DB',
        description: '',
        items: [
          'Finely ground eggshells can be used as a gentle abrasive cleaner',
          'Add to water for plants as a slow-release calcium supplement',
          'Use half shells as tiny decorative planters or craft projects',
        ],
      },
    ],
    ecoTip: '🥚 Eggshells take years to decompose in landfills but decompose quickly in compost.',
  },
  coffee: {
    title: 'Coffee Grounds & Tea Leaves Reuse',
    sections: [
      {
        title: '🌱 Garden & Compost',
        emoji: '🌿',
        color: '#16A34A',
        description: 'Coffee grounds are a fantastic garden amendment:',
        items: [
          'Add to compost — they are nitrogen-rich "green" material',
          'Mix directly into soil as a fertilizer for acid-loving plants (blueberries, roses)',
          'Spread around plants as a pest deterrent for slugs and snails',
          'Tea leaves can be brewed again lightly or added directly to soil',
        ],
      },
      {
        title: '🏠 Household Uses',
        emoji: '✨',
        color: '#7C3AED',
        description: '',
        items: [
          'Use coffee grounds as a natural deodorizer in fridge or freezer',
          'Gently exfoliate skin with coffee grounds mixed with coconut oil (traditional use)',
          'Use damp coffee grounds to clean greasy pans (abrasive action)',
          'Dry tea bags can absorb odors in small spaces',
        ],
      },
    ],
    ecoTip: '☕ Coffee grounds are one of the most versatile kitchen waste items — give them a second life before composting.',
  },
  bread_stale: {
    title: 'Stale Bread & Grain Reuse',
    sections: [
      {
        title: '🍳 Kitchen Reuse (If Not Moldy)',
        emoji: '👨‍🍳',
        color: '#F97316',
        description: 'Stale (not moldy) bread can be transformed:',
        items: [
          'Make breadcrumbs by toasting and grinding — store in an airtight container',
          'Croutons: cube, toss with olive oil and herbs, bake until crispy',
          'French toast or bread pudding uses stale bread perfectly',
          'Blend into bread sauce or use as a soup thickener',
          'Panzanella (Italian bread salad) is designed for stale bread',
        ],
      },
      {
        title: '🌱 If Past Eating',
        emoji: '♻️',
        color: '#16A34A',
        description: 'When bread is too stale or starting to mold:',
        items: [
          'Compost plain stale bread — avoid adding heavily salted or flavored breads in large quantities',
          'Some wildlife organizations accept stale bread for animal feed (check locally)',
          'Avoid feeding moldy bread to birds or animals',
        ],
      },
    ],
    ecoTip: '🍞 Bread is one of the most wasted foods globally. Storing bread in the freezer extends its life significantly.',
  },
};

export default function FoodWasteUtilizer() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [customInput, setCustomInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleAnalyze = () => {
    if (!selectedCategory && !customInput.trim()) return;
    setLoading(true);
    setResults(null);
    setTimeout(() => {
      const key = selectedCategory || 'vegetable';
      setResults(MOCK_WASTE_RESULTS[key] || MOCK_WASTE_RESULTS.vegetable);
      setLoading(false);
    }, 1800);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg, #16A34A, #15803D)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>♻️</div>
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1E293B' }}>Food Waste Utilizer</h1>
            <p style={{ color: '#64748B', fontSize: '0.9rem' }}>Learn practical, eco-friendly ways to reuse and reduce food waste</p>
          </div>
        </div>
      </div>

      {/* Eco Impact Banner */}
      <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '12px', padding: '14px 18px', marginBottom: '24px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '1.2rem' }}>🌍</span>
        <p style={{ color: '#166534', fontSize: '0.85rem', lineHeight: 1.6 }}>
          <strong>Did you know?</strong> Approximately one-third of all food produced globally is wasted. By reusing food waste creatively, we can reduce methane emissions, enrich soil, and save resources.
        </p>
      </div>

      <div style={{ background: 'white', borderRadius: '20px', padding: '28px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #F1F5F9', marginBottom: '32px' }}>
        <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#1E293B', marginBottom: '16px' }}>What type of food waste do you have?</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px', marginBottom: '24px' }}>
          {wasteCategories.map(c => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              style={{
                padding: '12px 16px',
                borderRadius: '12px',
                border: '2px solid',
                borderColor: selectedCategory === c.id ? '#16A34A' : '#E2E8F0',
                background: selectedCategory === c.id ? '#F0FDF4' : 'white',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{c.emoji}</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: selectedCategory === c.id ? '#16A34A' : '#475569' }}>{c.label}</div>
            </button>
          ))}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: '#1E293B', marginBottom: '8px' }}>
            Or describe your specific food waste:
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="e.g., overripe bananas, wilted spinach, leftover dal..."
            value={customInput}
            onChange={e => setCustomInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleAnalyze()}
          />
        </div>

        <button
          onClick={handleAnalyze}
          style={{
            width: '100%',
            padding: '14px',
            background: 'linear-gradient(135deg, #16A34A, #15803D)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '0.95rem',
            transition: 'all 0.2s ease',
          }}
          disabled={loading || (!selectedCategory && !customInput.trim())}
        >
          {loading ? '🔍 Finding Reuse Ideas...' : '♻️ Get Reuse Ideas'}
        </button>
      </div>

      {loading && <LoadingSpinner message="Finding eco-friendly reuse ideas..." />}

      {results && (
        <div className="fade-in-up">
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ fontWeight: 700, fontSize: '1.3rem', color: '#1E293B', marginBottom: '4px' }}>
              {results.title}
            </h2>
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

          <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '12px', padding: '16px 20px', marginTop: '8px' }}>
            <p style={{ color: '#166534', fontSize: '0.85rem', lineHeight: 1.6 }}>{results.ecoTip}</p>
          </div>
        </div>
      )}
    </div>
  );
}


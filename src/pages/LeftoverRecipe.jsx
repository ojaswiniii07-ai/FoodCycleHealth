import { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import RecipeCard from '../components/RecipeCard';

const MOCK_RECIPES = {
  idli: [
    {
      name: 'Idli Upma',
      emoji: '🥘',
      time: '15 min',
      difficulty: 'Easy',
      calories: 180,
      ingredients: ['4 leftover idlis', 'mustard seeds', 'curry leaves', 'onion', 'green chilli', 'turmeric', 'salt', 'oil'],
      steps: [
        'Crumble the leftover idlis into small chunks.',
        'Heat oil in a pan, add mustard seeds and let them splutter.',
        'Add curry leaves, onion, and green chilli. Sauté till golden.',
        'Add turmeric and salt. Mix in the crumbled idli.',
        'Toss well for 3–4 minutes on medium heat. Serve hot.',
      ],
      nutrition: { calories: '180 kcal', carbs: '28g', protein: '5g', fat: '5g', fiber: '2g' },
    },
    {
      name: 'Masala Fried Idli',
      emoji: '🍢',
      time: '20 min',
      difficulty: 'Easy',
      calories: 220,
      ingredients: ['4 leftover idlis', 'chilli powder', 'coriander powder', 'garam masala', 'oil', 'lemon juice', 'coriander leaves'],
      steps: [
        'Cut idlis into quarters.',
        'Mix spices — chilli powder, coriander, garam masala in a bowl.',
        'Toss idli pieces in the spice mix.',
        'Shallow fry in oil until crispy on all sides.',
        'Finish with lemon juice and fresh coriander.',
      ],
      nutrition: { calories: '220 kcal', carbs: '30g', protein: '6g', fat: '9g', fiber: '1g' },
    },
    {
      name: 'Idli Chaat',
      emoji: '🥗',
      time: '10 min',
      difficulty: 'Easy',
      calories: 160,
      ingredients: ['4 leftover idlis', 'yogurt', 'tamarind chutney', 'green chutney', 'chaat masala', 'sev', 'pomegranate seeds'],
      steps: [
        'Cut idlis into bite-sized cubes.',
        'Arrange on a plate.',
        'Drizzle yogurt, tamarind chutney, and green chutney.',
        'Sprinkle chaat masala and sev.',
        'Top with pomegranate seeds and serve immediately.',
      ],
      nutrition: { calories: '160 kcal', carbs: '26g', protein: '6g', fat: '3g', fiber: '2g' },
    },
    {
      name: 'Idli Manchurian',
      emoji: '🥢',
      time: '25 min',
      difficulty: 'Medium',
      calories: 240,
      ingredients: ['4 leftover idlis (cubed)', 'cornflour', 'soy sauce', 'chilli sauce', 'ginger-garlic paste', 'bell peppers', 'spring onion', 'oil'],
      steps: [
        'Dust idli cubes with cornflour and shallow fry until crisp.',
        'Heat 1 tbsp oil, sauté ginger, garlic, and cubed capsicum/onions.',
        'Add soy sauce, vinegar, and red chilli sauce with a splash of water.',
        'Toss crispy idli cubes in the sauce until evenly coated.',
        'Garnish with finely chopped spring onions and serve hot.',
      ],
      nutrition: { calories: '240 kcal', carbs: '36g', protein: '6g', fat: '7g', fiber: '3g' },
    },
    {
      name: 'Stuffed Idli Sandwiches',
      emoji: '🥪',
      time: '15 min',
      difficulty: 'Easy',
      calories: 210,
      ingredients: ['4 leftover idlis (sliced horizontally)', 'mint chutney', 'boiled potato slices', 'chaat masala', 'butter or ghee'],
      steps: [
        'Slice each idli horizontally into two rounds.',
        'Spread spicy green mint chutney on one side.',
        'Place thin cucumber/boiled potato slices and sprinkle chaat masala.',
        'Close with the second idli half.',
        'Toast lightly on a tawa with butter until crispy golden on both sides.',
      ],
      nutrition: { calories: '210 kcal', carbs: '32g', protein: '5g', fat: '6g', fiber: '2g' },
    },
  ],
  rice: [
    {
      name: 'Fried Rice',
      emoji: '🍳',
      time: '20 min',
      difficulty: 'Easy',
      calories: 280,
      ingredients: ['2 cups cooked rice', 'eggs', 'soy sauce', 'garlic', 'spring onion', 'mixed vegetables', 'sesame oil'],
      steps: [
        'Heat oil in a wok on high flame.',
        'Add garlic, sauté for 30 seconds.',
        'Add mixed vegetables and stir-fry for 2 minutes.',
        'Push vegetables aside, scramble eggs in the same wok.',
        'Add rice, soy sauce, and sesame oil. Toss everything together.',
        'Garnish with spring onions.',
      ],
      nutrition: { calories: '280 kcal', carbs: '45g', protein: '10g', fat: '7g', fiber: '3g' },
    },
    {
      name: 'Rice Soup (Kanji)',
      emoji: '🍲',
      time: '15 min',
      difficulty: 'Easy',
      calories: 150,
      ingredients: ['2 cups leftover rice', 'water or stock', 'ginger', 'garlic', 'salt', 'pepper', 'coriander'],
      steps: [
        'Add leftover rice and 3 cups water or stock to a pot.',
        'Bring to a boil, stirring occasionally.',
        'Add grated ginger and minced garlic.',
        'Simmer until porridge-like consistency.',
        'Season with salt and pepper. Top with coriander.',
      ],
      nutrition: { calories: '150 kcal', carbs: '30g', protein: '4g', fat: '1g', fiber: '1g' },
    },
  ],
  bread: [
    {
      name: 'French Toast',
      emoji: '🍞',
      time: '15 min',
      difficulty: 'Easy',
      calories: 250,
      ingredients: ['2 slices bread', '2 eggs', 'milk', 'cinnamon', 'sugar', 'vanilla extract', 'butter'],
      steps: [
        'Whisk eggs with milk, cinnamon, sugar, and vanilla.',
        'Dip bread slices in the egg mixture.',
        'Melt butter in a pan over medium heat.',
        'Cook bread slices 2–3 min each side till golden.',
        'Serve with honey or fruit.',
      ],
      nutrition: { calories: '250 kcal', carbs: '28g', protein: '10g', fat: '11g', fiber: '1g' },
    },
  ],
  roti: [
    {
      name: 'Roti Pizza',
      emoji: '🍕',
      time: '15 min',
      difficulty: 'Easy',
      calories: 200,
      ingredients: ['2 leftover rotis', 'tomato puree', 'cheese', 'capsicum', 'onion', 'oregano', 'chilli flakes'],
      steps: [
        'Spread tomato puree on each roti.',
        'Add chopped vegetables and cheese on top.',
        'Sprinkle oregano and chilli flakes.',
        'Toast in a pan or oven at 180°C for 8–10 minutes until cheese melts.',
        'Slice and serve hot.',
      ],
      nutrition: { calories: '200 kcal', carbs: '30g', protein: '8g', fat: '6g', fiber: '3g' },
    },
    {
      name: 'Roti Wrap',
      emoji: '🌯',
      time: '10 min',
      difficulty: 'Easy',
      calories: 220,
      ingredients: ['2 leftover rotis', 'paneer or chicken', 'onion', 'chutney', 'cucumber', 'chaat masala'],
      steps: [
        'Heat the rotis lightly on a tawa.',
        'Spread green chutney on each roti.',
        'Add sliced paneer or chicken, onion rings, cucumber.',
        'Sprinkle chaat masala.',
        'Roll tightly and serve.',
      ],
      nutrition: { calories: '220 kcal', carbs: '28g', protein: '12g', fat: '7g', fiber: '2g' },
    },
  ],
  pasta: [
    {
      name: 'Pasta Frittata',
      emoji: '🍳',
      time: '20 min',
      difficulty: 'Medium',
      calories: 310,
      ingredients: ['2 cups cooked pasta', '4 eggs', 'parmesan cheese', 'olive oil', 'herbs', 'salt', 'pepper'],
      steps: [
        'Whisk eggs with salt, pepper and grated parmesan.',
        'Heat olive oil in an oven-safe pan.',
        'Add pasta and pour egg mixture over it.',
        'Cook on medium heat until edges set (5 min).',
        'Transfer to oven at 180°C for 10 minutes until fully set.',
        'Slice and serve.',
      ],
      nutrition: { calories: '310 kcal', carbs: '35g', protein: '16g', fat: '12g', fiber: '2g' },
    },
  ],
};

function getRecipes(input) {
  const lower = input.toLowerCase();
  if (lower.includes('idli')) return MOCK_RECIPES.idli;
  if (lower.includes('rice')) return MOCK_RECIPES.rice;
  if (lower.includes('bread')) return MOCK_RECIPES.bread;
  if (lower.includes('roti')) return MOCK_RECIPES.roti;
  if (lower.includes('pasta')) return MOCK_RECIPES.pasta;
  return MOCK_RECIPES.idli;
}

export default function LeftoverRecipe() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [activeTab, setActiveTab] = useState('text');

  const handleGenerate = () => {
    if (!input.trim() && !imagePreview) return;
    setLoading(true);
    setRecipes(null);
    setTimeout(() => {
      setRecipes(getRecipes(input || 'idli'));
      setLoading(false);
    }, 2000);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
      setInput(file.name.replace(/\.[^.]+$/, ''));
    }
  };

  const suggestions = ['Leftover Idli', 'Cooked Rice', 'Stale Bread', 'Boiled Pasta', 'Leftover Roti'];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg, #F97316, #EA580C)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>🍽️</div>
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1E293B' }}>Leftover Recipe Generator</h1>
            <p style={{ color: '#64748B', fontSize: '0.9rem' }}>Turn your leftovers into delicious new meals</p>
          </div>
        </div>
      </div>

      {/* Input Card */}
      <div style={{ background: 'white', borderRadius: '20px', padding: '28px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #F1F5F9', marginBottom: '32px' }}>
        {/* Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
          {[
            { id: 'text', label: '✏️ Type Food Name' },
            { id: 'image', label: '📷 Upload Photo' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '8px 18px',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.88rem',
                background: activeTab === tab.id ? '#1A56DB' : '#F1F5F9',
                color: activeTab === tab.id ? 'white' : '#64748B',
                transition: 'all 0.2s ease',
              }}
            >{tab.label}</button>
          ))}
        </div>

        {activeTab === 'text' ? (
          <div>
            <input
              type="text"
              className="input-field"
              placeholder="e.g., Leftover Idli, Cooked Rice, Stale Bread..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleGenerate()}
            />
            <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ fontSize: '0.8rem', color: '#94A3B8', paddingTop: '4px' }}>Try:</span>
              {suggestions.map(s => (
                <button
                  key={s}
                  onClick={() => setInput(s)}
                  style={{
                    padding: '4px 12px',
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    color: '#475569',
                    transition: 'all 0.2s ease',
                  }}
                >{s}</button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <label htmlFor="img-upload" className="upload-zone" style={{ display: 'block' }}>
              {imagePreview ? (
                <div>
                  <img src={imagePreview} alt="Uploaded food" style={{ maxHeight: '200px', borderRadius: '10px', objectFit: 'cover' }} />
                  <p style={{ marginTop: '8px', color: '#64748B', fontSize: '0.85rem' }}>Click to change image</p>
                </div>
              ) : (
                <>
                  <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>📷</div>
                  <p style={{ color: '#64748B', fontWeight: 500 }}>Click to upload a food photo</p>
                  <p style={{ color: '#94A3B8', fontSize: '0.82rem', marginTop: '4px' }}>JPG, PNG, WEBP supported</p>
                </>
              )}
            </label>
            <input id="img-upload" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload} />
            {imagePreview && (
              <input
                type="text"
                className="input-field"
                placeholder="Food name detected or override here..."
                value={input}
                onChange={e => setInput(e.target.value)}
                style={{ marginTop: '12px' }}
              />
            )}
          </div>
        )}

        <button
          className="btn-orange"
          onClick={handleGenerate}
          style={{ marginTop: '16px', width: '100%', padding: '14px' }}
          disabled={loading}
        >
          {loading ? '🔍 Generating Recipes...' : '🍳 Generate Recipes'}
        </button>
      </div>

      {loading && <LoadingSpinner message="Finding creative recipes for your leftovers..." />}

      {recipes && (
        <div className="fade-in-up">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontWeight: 700, fontSize: '1.2rem', color: '#1E293B' }}>
              🎉 {recipes.length} Recipes Found
            </h2>
            <span style={{ background: '#FFF7ED', color: '#C2410C', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>
              for: {input}
            </span>
          </div>
          {recipes.map((recipe, i) => <RecipeCard key={i} recipe={recipe} />)}
        </div>
      )}
    </div>
  );
}


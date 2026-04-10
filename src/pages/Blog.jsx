import React from 'react';

const POSTS = [
  {
    emoji:    '💪',
    category: 'Nutrition',
    title:    'Why High-Protein Meals Are the Key to Fat Loss',
    excerpt:  'Discover how prioritising protein helps your body preserve lean muscle while burning fat — and how Bowlvana makes it effortless to hit your daily targets.',
    readTime: '4 min read',
    date:     'March 2026',
  },
  {
    emoji:    '🏋️',
    category: 'Fitness',
    title:    'The Perfect Pre & Post Workout Meal Guide',
    excerpt:  'What you eat around your training sessions matters as much as the workout itself. Here is our expert guide for Hyderabad\'s fitness community.',
    readTime: '5 min read',
    date:     'February 2026',
  },
  {
    emoji:    '🌾',
    category: 'Ingredients',
    title:    'Why We Use Millets: Ancient Grains for Modern Health',
    excerpt:  'Foxtail, Kodo, Barnyard, Proso — these ancient Indian supergrains are back in a big way, and for very compelling nutritional reasons.',
    readTime: '3 min read',
    date:     'January 2026',
  },
  {
    emoji:    '🥗',
    category: 'Lifestyle',
    title:    'Clean Eating on a Budget: Myths Debunked',
    excerpt:  'Eating healthy doesn\'t have to be expensive. Bowlvana proves that clean, nutritious food can be affordable and accessible for everyone in Hyderabad.',
    readTime: '6 min read',
    date:     'December 2025',
  },
  {
    emoji:    '🍫',
    category: 'Recipes',
    title:    'Zero-Sugar Protein Desserts That Actually Taste Good',
    excerpt:  'Satisfying your sweet tooth while staying on plan is entirely possible. We break down the science behind our protein dessert range.',
    readTime: '4 min read',
    date:     'November 2025',
  },
  {
    emoji:    '🏢',
    category: 'Corporate',
    title:    'How Corporate Meal Plans Boost Workplace Productivity',
    excerpt:  'Research links nutrition to cognitive performance. We look at how switching your office to healthy catering can meaningfully improve team output.',
    readTime: '5 min read',
    date:     'October 2025',
  },
];

const CATEGORY_COLORS = {
  'Nutrition':  '#f5c842',
  'Fitness':    '#5ce890',
  'Ingredients':'#7dd9ff',
  'Lifestyle':  '#c49dff',
  'Recipes':    '#ff7b4f',
  'Corporate':  '#ffb347',
};

export default function Blog() {
  return (
    <section
      id="blog"
      className="section-wrap bg-dark-2"
    >
      <div className="container">

        {/* ── Header ──────────────────────────────────────── */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-eyebrow" style={{ display: 'inline-flex', paddingLeft: 0 }}>
            <span style={{ width: 18, height: 1.5, background: 'var(--gold)', marginRight: 10, alignSelf: 'center', display: 'inline-block' }} />
            Knowledge Hub
            <span style={{ width: 18, height: 1.5, background: 'var(--gold)', marginLeft: 10, alignSelf: 'center', display: 'inline-block' }} />
          </span>
          <h2 className="display-heading">Bowlvana <em>Blog</em></h2>
          <p className="body-lead" style={{ maxWidth: 520, marginInline: 'auto' }}>
            Nutrition tips, ingredient spotlights, healthy recipes,
            and expert insights from the Bowlvana team.
          </p>
        </div>

        {/* ── Posts grid ──────────────────────────────────── */}
        <div className="grid-auto">
          {POSTS.map(post => {
            const catColor = CATEGORY_COLORS[post.category] || 'var(--gold-light)';
            return (
              <article
                key={post.title}
                className="glass-card"
                style={{ padding: '32px 28px', cursor: 'default', display: 'flex', flexDirection: 'column' }}
              >
                {/* Emoji + category */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                  <span style={{ fontSize: 36 }}>{post.emoji}</span>
                  <span style={{
                    background: `${catColor}18`,
                    color: catColor,
                    border: `1px solid ${catColor}44`,
                    fontSize: '0.67rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-full)',
                  }}>
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--white)',
                  lineHeight: 1.35,
                  marginBottom: 12,
                  flex: 1,
                }}>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p style={{
                  fontSize: '0.87rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}>
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: 16,
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  fontSize: '0.75rem',
                  color: 'var(--text-faint)',
                }}>
                  <span>⏱ {post.readTime}</span>
                  <span>{post.date}</span>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

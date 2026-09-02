import React, { useState } from 'react';
import { BlogPost } from '../types';
import { blogData } from '../data/blogData';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  ArrowRight, 
  Search, 
  X, 
  Check, 
  Sparkles,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface BlogSectionProps {
  onOpenQuote: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('TODOS');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [readingArticle, setReadingArticle] = useState<BlogPost | null>(null);
  const [copiedShare, setCopiedShare] = useState<boolean>(false);

  const categories = [
    'TODOS',
    'ENERGÍA',
    'MANTENIMIENTO',
    'ELECTRICIDAD',
    'SUBESTACIONES',
    'ENERGÍAS RENOVABLES',
    'SEGURIDAD',
    'CASOS DE ESTUDIO'
  ];

  const filteredPosts = blogData.filter(post => {
    const matchesCat = selectedCategory === 'TODOS' || post.category === selectedCategory;
    const matchesSearch = !searchQuery.trim() || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleShare = (post: BlogPost) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.summary,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <section id="blog" className="py-20 bg-[#0b0f17] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider font-mono-tech">
            <BookOpen size={14} />
            <span>Divulgación Técnica Especializada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-white">
            BLOG <span className="text-[#E5A919]">CATENERGY</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Artículos técnicos, casos de estudio, normas IEEE/IEC, análisis predictivo y guías de eficiencia para ingenieros y tomadores de decisiones.
          </p>
        </div>

        {/* Category Filters & Search Bar */}
        <div className="space-y-4">
          {/* Categories Pill Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`blog-category-${cat.toLowerCase().replace(/\s/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#E5A919] text-black shadow-lg shadow-amber-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Buscar artículos técnicos, DGA, ISO 50001, NFPA 70E..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-500 text-xs text-white placeholder:text-slate-500 outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              id={`blog-card-${post.slug}`}
              className="group rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/50 shadow-lg flex flex-col justify-between overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <img 
                  src={post.featuredImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold font-mono-tech px-2.5 py-1 rounded-full bg-slate-900/90 text-amber-400 border border-amber-500/40 backdrop-blur-md uppercase">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono-tech">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setReadingArticle(post)}
                    className="flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 cursor-pointer"
                  >
                    <span>LEER ARTÍCULO</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => handleShare(post)}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Compartir artículo"
                  >
                    <Share2 size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Full Technical Article Reading Modal */}
      {readingArticle && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-start justify-center p-3 sm:p-6 lg:p-10 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setReadingArticle(null);
          }}
        >
          <div className="relative w-full max-w-4xl bg-[#0e1422] border border-slate-700 rounded-3xl shadow-2xl overflow-hidden my-6 animate-in zoom-in-95 duration-200 text-slate-100">
            
            {/* Close Button */}
            <button
              onClick={() => setReadingArticle(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700 transition-colors shadow-xl cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Article Hero Banner */}
            <div className="relative h-64 sm:h-80 w-full bg-slate-900">
              <img 
                src={readingArticle.featuredImage} 
                alt={readingArticle.title} 
                className="w-full h-full object-cover filter brightness-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1422] via-[#0e1422]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <span className="text-xs font-bold font-mono-tech px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 uppercase">
                  {readingArticle.category}
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-white leading-tight">
                  {readingArticle.title}
                </h2>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-10 space-y-8">
              
              {/* Meta info bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs font-mono-tech text-slate-300">
                <div className="flex items-center gap-2">
                  <User size={14} className="text-amber-400" />
                  <span><strong>{readingArticle.author.name}</strong> ({readingArticle.author.role})</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <span>{readingArticle.date}</span>
                  <span>&bull;</span>
                  <span>{readingArticle.readTime}</span>
                </div>
              </div>

              {/* Intro */}
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal bg-amber-500/5 p-4 rounded-xl border border-amber-500/20">
                {readingArticle.content.intro}
              </p>

              {/* Sections */}
              <div className="space-y-6">
                {readingArticle.content.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-lg font-bold font-heading text-amber-400">
                      {sec.heading}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {sec.body}
                    </p>

                    {sec.keyPoints && (
                      <ul className="space-y-1.5 pl-2">
                        {sec.keyPoints.map((pt, pidx) => (
                          <li key={pidx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Conclusion */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <h4 className="text-xs font-mono-tech text-amber-400 uppercase font-bold">Conclusión Técnica</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {readingArticle.content.conclusion}
                </p>
              </div>

              {/* Tags & Share */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {readingArticle.tags.map((tag, tidx) => (
                    <span key={tidx} className="text-[10px] font-mono-tech px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleShare(readingArticle)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedShare ? <Check size={14} className="text-emerald-400" /> : <Share2 size={14} />}
                  <span>{copiedShare ? '¡Enlace copiado!' : 'Compartir artículo'}</span>
                </button>
              </div>

              {/* Article Footer CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 to-emerald-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="text-sm font-bold text-white">¿Requiere asesoría técnica sobre este tema?</h4>
                  <p className="text-xs text-slate-400">Consulte directamente con nuestros especialistas en energía y subestaciones.</p>
                </div>
                <button
                  onClick={() => {
                    setReadingArticle(null);
                    onOpenQuote();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#E5A919] text-black font-bold text-xs tracking-wider shadow-lg hover:bg-amber-400 transition-colors cursor-pointer"
                >
                  COTIZAR SERVICIO RELACIONADO
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};

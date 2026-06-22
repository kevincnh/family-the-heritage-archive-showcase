import React, { useState, useEffect } from 'react'

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden min-h-screen">
      {/* TopAppBar */}
      <nav
        className={`fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'py-2 shadow-md' : 'py-4 shadow-sm'
        }`}
      >
        <div className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
          <span className="font-display-lg text-headline-md text-primary tracking-tight">
            The Bloom Archive
          </span>
          <div className="flex items-center space-x-8">
            <a
              className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-sm"
              href="#story"
            >
              The Family
            </a>
            <a
              className="text-primary border-b-2 border-primary pb-1 font-label-sm"
              href="#gallery"
            >
              Memories
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-sm"
              href="#values"
            >
              Legacy
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden px-gutter">
        <div className="max-w-container-max mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 space-y-8 fade-in-up">
            <div className="inline-flex items-center space-x-2 text-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                auto_awesome
              </span>
              <span className="font-label-sm tracking-widest uppercase">Generations of Love</span>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
              To Live, To Love, <br />
              <span className="text-primary italic">To Remember</span>
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-lg leading-relaxed">
              Welcome to our digital home. This archive is a curated journey through our family's most cherished moments—a bridge between our past and the legacy we build for those who follow.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="w-12 h-[1px] bg-outline-variant"></div>
              <p className="font-display-lg text-body-lg text-primary italic">The Bloom Family Motto</p>
            </div>
          </div>
          <div className="relative group fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-4 bg-tertiary-fixed/30 blur-3xl rounded-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="rounded-xl overflow-hidden soft-elevation aspect-[4/5] relative">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80"
                alt="Family roots"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating Decorative Element */}
            <div className="absolute -bottom-8 -left-8 bg-surface p-6 rounded-xl soft-elevation hidden md:block max-w-[200px]">
              <p className="font-display-lg text-headline-md text-primary italic leading-none mb-1">1982</p>
              <p className="font-label-sm text-on-surface-variant">Where it all began</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Navigation / Gallery */}
      <section className="py-24 bg-surface-container-lowest" id="gallery">
        <div className="max-w-container-max mx-auto px-gutter text-center space-y-12">
          <div className="space-y-4">
            <h2 className="font-display-lg text-headline-md text-on-surface">The Chapters</h2>
            <div className="w-16 h-1 bg-primary-container mx-auto rounded-full"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              className={`px-8 py-3 rounded-full font-label-sm transition-all ${
                activeCategory === 'all'
                  ? 'bg-secondary text-on-secondary'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-tertiary-container/30'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              All Stories
            </button>
            <button
              className={`px-8 py-3 rounded-full font-label-sm transition-all ${
                activeCategory === 'beginnings'
                  ? 'bg-secondary text-on-secondary'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-tertiary-container/30'
              }`}
              onClick={() => setActiveCategory('beginnings')}
            >
              First Steps
            </button>
            <button
              className={`px-8 py-3 rounded-full font-label-sm transition-all ${
                activeCategory === 'celebrations'
                  ? 'bg-secondary text-on-secondary'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-tertiary-container/30'
              }`}
              onClick={() => setActiveCategory('celebrations')}
            >
              Gatherings
            </button>
            <button
              className={`px-8 py-3 rounded-full font-label-sm transition-all ${
                activeCategory === 'legacy'
                  ? 'bg-secondary text-on-secondary'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-tertiary-container/30'
              }`}
              onClick={() => setActiveCategory('legacy')}
            >
              The Elders
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="masonry-grid pt-8" id="masonry-gallery">
            {/* Item 1: Beginnings */}
            {(activeCategory === 'all' || activeCategory === 'beginnings') && (
              <div className="masonry-item group cursor-pointer fade-in-up" data-category="beginnings">
                <div className="relative overflow-hidden rounded-xl bg-surface-container-low soft-elevation">
                  <img
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&w=800&q=80"
                    alt="First Breath"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="bg-surface/90 backdrop-blur-sm p-4 rounded-lg w-full text-left transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <p className="font-label-sm text-primary tracking-widest uppercase mb-1">First Steps</p>
                      <p className="font-display-lg text-body-lg text-on-surface italic">The First Breath</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Item 2: Legacy */}
            {(activeCategory === 'all' || activeCategory === 'legacy') && (
              <div className="masonry-item group cursor-pointer fade-in-up" data-category="legacy">
                <div className="relative overflow-hidden rounded-xl bg-surface-container-low soft-elevation">
                  <img
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
                    alt="Fifty Golden Years"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="bg-surface/90 backdrop-blur-sm p-4 rounded-lg w-full text-left transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <p className="font-label-sm text-primary tracking-widest uppercase mb-1">The Elders</p>
                      <p className="font-display-lg text-body-lg text-on-surface italic">Fifty Golden Years</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Item 3: Celebrations */}
            {(activeCategory === 'all' || activeCategory === 'celebrations') && (
              <div className="masonry-item group cursor-pointer fade-in-up" data-category="celebrations">
                <div className="relative overflow-hidden rounded-xl bg-surface-container-low soft-elevation">
                  <img
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80"
                    alt="Candlelit Wishes"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="bg-surface/90 backdrop-blur-sm p-4 rounded-lg w-full text-left transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <p className="font-label-sm text-primary tracking-widest uppercase mb-1">Gatherings</p>
                      <p className="font-display-lg text-body-lg text-on-surface italic">Candlelit Wishes</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-surface-container-low" id="story">
        <div className="max-w-container-max mx-auto px-gutter grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden aspect-square soft-elevation border-8 border-surface">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80"
                alt="Archive album"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-fixed/20 rounded-full blur-2xl"></div>
          </div>
          <div className="space-y-8 order-1 md:order-2">
            <span className="font-label-sm text-primary tracking-widest uppercase">The Family Story</span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight">
              Where Memories Bloom <br /> Into Forever.
            </h2>
            <div className="space-y-6 font-body-lg text-on-surface-variant leading-relaxed">
              <p>
                Our family is a collection of stories, some told around a dinner table and others captured in the quiet glances across a crowded room. We believe that history isn't just found in books, but in the laughter of children and the wisdom of our elders.
              </p>
              <p>
                This archive is our way of slowing down time. It's an intentional effort to curate our own heirloom, focusing on the subtle glances and the shared laughter that define who we are as Blooms.
              </p>
            </div>
            <div className="pt-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-[1px] bg-outline-variant"></div>
                <p className="font-display-lg text-body-lg text-primary italic">Sarah &amp; David, Keepers of the Archive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Values Section */}
      <section className="py-24 relative overflow-hidden" id="values">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="bg-tertiary-container/10 rounded-[2rem] p-8 md:p-16 border border-tertiary-container/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
              <span className="material-symbols-outlined text-[300px] text-tertiary-container/10 select-none">
                auto_awesome
              </span>
            </div>
            <div className="max-w-3xl mx-auto text-center space-y-12 relative z-10">
              <div className="space-y-4">
                <span className="font-label-sm text-primary tracking-widest uppercase">Our Legacy</span>
                <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-on-surface">
                  The Bloom Family Values
                </h2>
                <div className="w-16 h-1 bg-primary-container mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <span className="material-symbols-outlined text-primary text-4xl">favorite</span>
                  <h3 className="font-display-lg text-body-lg text-on-surface italic">Unconditional Love</h3>
                  <p className="font-body-md text-on-surface-variant">The foundation of everything we build together.</p>
                </div>
                <div className="space-y-3">
                  <span className="material-symbols-outlined text-primary text-4xl">history_edu</span>
                  <h3 className="font-display-lg text-body-lg text-on-surface italic">Honoring Roots</h3>
                  <p className="font-body-md text-on-surface-variant">Respecting the sacrifices and stories of those before us.</p>
                </div>
                <div className="space-y-3">
                  <span className="material-symbols-outlined text-primary text-4xl">diversity_3</span>
                  <h3 className="font-display-lg text-body-lg text-on-surface italic">Constant Growth</h3>
                  <p className="font-body-md text-on-surface-variant">Supporting each other through every new season of life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-surface-container-lowest dark:bg-surface-container-low border-t border-outline-variant/30">
        <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-container-max mx-auto space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <span className="font-display-lg text-headline-md text-primary">The Bloom Archive</span>
            <p className="text-on-surface-variant dark:text-surface-variant font-body-md opacity-80">
              Made with love for the generations to come.
            </p>
          </div>
          <div className="flex items-center space-x-8">
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md opacity-80 hover:opacity-100" href="#">
              The Memories
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md opacity-80 hover:opacity-100" href="#">
              Our Roots
            </a>
            <span className="font-body-md text-secondary italic">Est. 1982</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

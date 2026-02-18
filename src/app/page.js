"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Initialisation AOS
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });

    // Effet de la Navbar au scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-dark-950 text-slate-300 font-sans antialiased overflow-x-hidden selection:bg-neon-400 selection:text-dark-900">
      
      {/* Background Ambient Effects */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-neon-400/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* FLOATING NAVIGATION BAR */}
      <header className={`fixed top-0 left-0 w-full z-50 flex justify-center px-2 transition-all duration-300 ${scrolled ? "pt-2" : "pt-4"}`} id="header-container">
        <nav className="w-[98%] md:w-[95%] max-w-7xl bg-dark-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg px-5 py-3 flex items-center justify-between relative">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-400 to-blue-600 flex items-center justify-center text-dark-900 font-bold text-lg group-hover:scale-110 transition-transform">M</div>
            <span className="text-xl font-bold text-white tracking-wide">MANOA<span className="text-neon-400">.DEV</span></span>
          </a>

          <div className="hidden md:flex items-center space-x-1">
            <a href="#home" className="px-4 py-2 text-sm font-medium text-white hover:text-neon-400 transition-colors relative group">
              Accueil
              <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-neon-400 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
            </a>
            <a href="#about" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">À Propos</a>
            <a href="#skills" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">Compétences</a>
            <a href="#projects" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">Projets</a>
            <a href="#contact" className="ml-4 px-5 py-2 bg-neon-400/10 text-neon-400 border border-neon-400/50 rounded-full text-sm font-semibold hover:bg-neon-400 hover:text-dark-900 hover:shadow-neon transition-all duration-300">Me Contacter</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-white focus:outline-none">
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>

          <div className={`absolute top-full left-0 right-0 mt-2 bg-dark-800 border border-gray-700 rounded-2xl p-4 shadow-2xl flex-col gap-2 transform origin-top transition-transform z-50 ${isOpen ? 'flex' : 'hidden'}`}>
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-dark-700 text-white">Accueil</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-dark-700 text-gray-300">À Propos</a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-dark-700 text-gray-300">Compétences</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-dark-700 text-gray-300">Projets</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-4 py-2 mt-2 text-center rounded-lg bg-neon-400 text-dark-900 font-bold">Contact</a>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative pt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          <div className="order-2 lg:order-1 space-y-6" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800 border border-neon-400/30 text-neon-400 text-xs font-bold tracking-wider uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-neon-400 animate-pulse"></span>Disponible pour projets
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">Créatrice d'expériences <br /><span className="text-gradient">Digitales</span></h1>
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed border-l-2 border-neon-400/50 pl-4">Je suis <strong className="text-white">Manoa Fanekena Ravoninjatovo</strong>, développeuse Web passionnée. Je transforme des concepts complexes en interfaces élégantes et performantes.</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="group relative px-8 py-3 bg-neon-400 text-dark-900 font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-neon">
                <span className="relative z-10">Voir mes projets</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <a href="#contact" className="px-8 py-3 border border-gray-600 text-white font-medium rounded-full hover:border-neon-400 hover:text-neon-400 bg-dark-800/50 backdrop-blur-sm transition-all duration-300">Contactez-moi</a>
            </div>
            <div className="flex items-center gap-6 pt-6">
              <a href="#" className="text-gray-400 hover:text-neon-400 text-2xl transition-transform hover:-translate-y-1"><i className="fab fa-github"></i></a>
              <a href="#" className="text-gray-400 hover:text-neon-400 text-2xl transition-transform hover:-translate-y-1"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-gray-400 hover:text-neon-400 text-2xl transition-transform hover:-translate-y-1"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center relative" data-aos="fade-left">
            <div className="absolute top-0 right-10 w-20 h-20 bg-blue-500 rounded-full blur-[50px] opacity-40"></div>
            <div className="absolute bottom-0 left-10 w-32 h-32 bg-neon-400 rounded-full blur-[60px] opacity-30"></div>
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full p-2 border border-white/5 bg-gradient-to-b from-white/5 to-transparent animate-float">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-dark-800 relative shadow-2xl">
                <img src="/Images/WhatsApp Image 2026-02-18 at 08.08.14.jpeg" alt="Manoa Fanekena" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 right-10 bg-dark-800 border border-neon-400/30 p-4 rounded-xl shadow-lg flex items-center gap-3 backdrop-blur-md">
                <div className="w-10 h-10 rounded-full bg-neon-400/20 flex items-center justify-center text-neon-400"><i className="fas fa-code"></i></div>
                <div><p className="text-xs text-gray-400">Spécialisation</p><p className="text-white font-bold text-sm">Full Stack Dev</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">À Propos de <span className="text-neon-400">Moi</span></h2>
            <p className="text-gray-400">L'essentiel en un coup d'œil.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="md:col-span-2 bg-dark-card border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-neon-400/30 transition-all duration-300" data-aos="fade-right">
              <div className="absolute top-0 right-0 w-64 h-64 bg-neon-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-neon-400/10 transition-colors"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Développeuse <span className="text-neon-400">Full Stack</span><br />& Créatrice <span className="text-blue-400">Numérique</span></h3>
                  <p className="text-gray-400 text-sm max-w-md">Je transforme les problèmes complexes en interfaces simples, rapides et intuitives. Basée à Mada 🇲🇬, connectée au monde.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-white/5 border border-white/5 rounded-xl p-3 text-center hover:bg-white/10 transition-colors">
                    <i className="fas fa-tachometer-alt text-neon-400 text-xl mb-2"></i>
                    <h4 className="text-white font-bold text-xs">Rapide</h4><p className="text-[10px] text-gray-400">Performance First</p>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-xl p-3 text-center hover:bg-white/10 transition-colors">
                    <i className="fas fa-mobile-alt text-blue-400 text-xl mb-2"></i>
                    <h4 class="text-white font-bold text-xs">Responsive</h4><p className="text-[10px] text-gray-400">Mobile Ready</p>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-xl p-3 text-center hover:bg-white/10 transition-colors">
                    <i className="fas fa-search text-purple-400 text-xl mb-2"></i>
                    <h4 className="text-white font-bold text-xs">SEO Friendly</h4><p className="text-[10px] text-gray-400">Optimisé Google</p>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-xl p-3 text-center hover:bg-white/10 transition-colors">
                    <i className="fas fa-lightbulb text-yellow-400 text-xl mb-2"></i>
                    <h4 className="text-white font-bold text-xs">Intuitif</h4><p className="text-[10px] text-gray-400">UX Design</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-5">
              <div className="bg-dark-card border border-white/5 rounded-2xl p-5 flex flex-col justify-center items-center hover:border-neon-400/30 transition-all duration-300 group" data-aos="fade-left" data-aos-delay="100">
                <div className="text-4xl font-bold text-white mb-1 group-hover:text-neon-400 transition-colors">3+</div>
                <p className="text-gray-400 text-xs text-center uppercase tracking-wider">Ans d'expérience</p>
              </div>
              <div className="bg-dark-card border border-white/5 rounded-2xl p-5 flex flex-col justify-center items-center hover:border-neon-400/30 transition-all duration-300 group" data-aos="fade-left" data-aos-delay="200">
                <div className="text-4xl font-bold text-white mb-1 group-hover:text-neon-400 transition-colors">10+</div>
                <p className="text-gray-400 text-xs text-center uppercase tracking-wider">Projets réalisés</p>
              </div>
            </div>
            <div className="md:col-span-1 bg-gradient-to-br from-dark-card to-dark-800 border border-white/5 rounded-2xl p-5 flex items-center justify-between hover:border-neon-400/30 transition-all" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center text-neon-400 shrink-0"><i className="fas fa-map-pin"></i></div>
                <div><h4 className="text-white font-bold text-sm">Antananarivo</h4><div className="flex gap-2 mt-1"><span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-gray-300">MG</span><span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-gray-300">FR</span><span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-gray-300">EN</span></div></div>
              </div>
            </div>
            <div className="md:col-span-2 bg-dark-card border border-white/5 rounded-2xl p-5 flex items-center justify-between hover:border-neon-400/30 transition-all group cursor-pointer" onClick={() => window.location.href='#contact'} data-aos="fade-up" data-aos-delay="400">
              <div>
                <h4 className="text-white font-bold mb-1 text-sm">Status Actuel</h4>
                <p className="text-neon-400 text-xs flex items-center gap-2 font-medium">
                  <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-neon-500"></span></span>Disponible pour Freelance & CDI
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-white transition-colors">Travaillons ensemble<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-neon-400 group-hover:text-dark-900 transition-all"><i className="fas fa-arrow-right"></i></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mes <span className="text-neon-400">Compétences</span></h2>
            <p className="text-gray-400">Un aperçu de mon environnement technique</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300" data-aos="fade-up">
              <div className="text-neon-400 text-2xl mb-3"><i className="fas fa-globe"></i></div>
              <h3 className="text-lg font-bold text-white mb-4">Technologies Web</h3>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'TypeScript'].map(s => <span key={s} className="px-3 py-1 bg-dark-800 text-neon-400 text-xs font-medium rounded-full border border-neon-400/20 hover:bg-neon-400 hover:text-dark-900 transition-colors cursor-default">{s}</span>)}
              </div>
            </div>
            <div className="glass-panel p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="text-neon-400 text-2xl mb-3"><i className="fas fa-code"></i></div>
              <h3 className="text-lg font-bold text-white mb-4">Langages</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'PHP', 'C++'].map(s => <span key={s} className="px-3 py-1 bg-dark-800 text-blue-400 text-xs font-medium rounded-full border border-blue-400/20 hover:bg-blue-400 hover:text-dark-900 transition-colors cursor-default">{s}</span>)}
              </div>
            </div>
            <div className="glass-panel p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="text-neon-400 text-2xl mb-3"><i className="fas fa-layer-group"></i></div>
              <h3 className="text-lg font-bold text-white mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Django', 'Bootstrap'].map(s => <span key={s} className="px-3 py-1 bg-dark-800 text-purple-400 text-xs font-medium rounded-full border border-purple-400/20 hover:bg-purple-400 hover:text-dark-900 transition-colors cursor-default">{s}</span>)}
              </div>
            </div>
            <div className="glass-panel p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="text-neon-400 text-2xl mb-3"><i className="fas fa-database"></i></div>
              <h3 className="text-lg font-bold text-white mb-4">Bases de données</h3>
              <div className="flex flex-wrap gap-2">
                {['MySQL', 'PostgreSQL'].map(s => <span key={s} className="px-3 py-1 bg-dark-800 text-green-400 text-xs font-medium rounded-full border border-green-400/20 hover:bg-green-400 hover:text-dark-900 transition-colors cursor-default">{s}</span>)}
              </div>
            </div>
            <div className="glass-panel p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300" data-aos="fade-up" data-aos-delay="400">
              <div className="text-neon-400 text-2xl mb-3"><i className="fas fa-tools"></i></div>
              <h3 className="text-lg font-bold text-white mb-4">Outils</h3>
              <div className="flex flex-wrap gap-2">
                {['Git & GitHub', 'MosCow', 'Trello', 'Photoshop'].map(s => <span key={s} className="px-3 py-1 bg-dark-800 text-orange-400 text-xs font-medium rounded-full border border-orange-400/20 hover:bg-orange-400 hover:text-dark-900 transition-colors cursor-default">{s}</span>)}
              </div>
            </div>
            <div className="glass-panel p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300" data-aos="fade-up" data-aos-delay="500">
              <div className="text-neon-400 text-2xl mb-3"><i className="fas fa-desktop"></i></div>
              <h3 className="text-lg font-bold text-white mb-4">Systèmes</h3>
              <div className="flex flex-wrap gap-2">
                {['Windows', 'Linux', 'Office'].map(s => <span key={s} className="px-3 py-1 bg-dark-800 text-gray-400 text-xs font-medium rounded-full border border-gray-400/20 hover:bg-gray-400 hover:text-dark-900 transition-colors cursor-default">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10" data-aos="fade-up">
            <div><h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Projets <span className="text-neon-400">Récents</span></h2><p className="text-gray-400 text-sm">Une sélection de mes meilleurs travaux.</p></div>
            <a href="#" className="hidden md:flex items-center text-neon-400 hover:text-white transition-colors text-sm">Voir tout <i className="fas fa-arrow-right ml-2"></i></a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="group relative rounded-2xl overflow-hidden bg-dark-card border border-white/5" data-aos="fade-up">
              <div className="h-48 overflow-hidden relative"><div className="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-colors z-10"></div><img src="Images/infomada.jpeg" alt="Projet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Tuto Infomada</h3><p className="text-neon-400 text-xs">Full Stack Development</p></div><div className="flex gap-2"><a href="https://github.com/Manoa238/infomada" className="w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center text-white hover:bg-neon-400 hover:text-dark-900 transition-colors"><i className="fab fa-github"></i></a><a href="https://tuto-infomada.onrender.com/" className="w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center text-white hover:bg-neon-400 hover:text-dark-900 transition-colors"><i className="fas fa-external-link-alt"></i></a></div></div>
                <p className="text-gray-400 text-xs mb-4">Plateforme éducative complète permettant la gestion de cours en ligne, le suivi des étudiants et des quiz interactifs.</p>
                <div className="flex flex-wrap gap-2">{['JavaScript', 'TailwindCss', 'postgreSql', 'Php'].map(t => <span key={t} className="text-[10px] px-2 py-1 bg-dark-800 text-gray-300 rounded border border-white/10">{t}</span>)}</div>
              </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden bg-dark-card border border-white/5" data-aos="fade-up" data-aos-delay="100">
              <div className="h-48 overflow-hidden relative"><div className="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-colors z-10"></div><img src="Images/location.jpeg" alt="Projet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-3"><div><h3 className="text-lg font-bold text-white mb-1">Location Festivité</h3><p className="text-neon-400 text-xs">Web Application</p></div><div className="flex gap-2"><a href="https://github.com/Manoa238/locationFestivite" className="w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center text-white hover:bg-neon-400 hover:text-dark-900 transition-colors"><i className="fab fa-github"></i></a></div></div>
                <p className="text-gray-400 text-xs mb-4">Système de gestion de stock, alertes de péremption et facturation pour pharmacies.</p>
                <div className="flex flex-wrap gap-2">{['Java', 'JavaScript', 'PostgreSql'].map(t => <span key={t} className="text-[10px] px-2 py-1 bg-dark-800 text-gray-300 rounded border border-white/10">{t}</span>)}</div>
              </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden bg-dark-card border border-white/5" data-aos="fade-up" data-aos-delay="200">
              <div className="h-48 overflow-hidden relative"><div className="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-colors z-10"></div><img src="Images/ellingo.jpeg" alt="Projet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-3"><div><h3 className="text-lg font-bold text-white mb-1">EllinGO</h3><p className="text-neon-400 text-xs">Application Mobile</p></div><div className="flex gap-2"><a href="https://github.com/Manoa238/ELLinGO/releases/tag/v1.0/" className="w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center text-white hover:bg-neon-400 hover:text-dark-900 transition-colors"><i className="fab fa-github"></i></a></div></div>
                <p className="text-gray-400 text-xs mb-4">Application mobile E-Learning</p>
                <div className="flex flex-wrap gap-2">{['React-Native','TypeScript','Json','Expo Go'].map(t => <span key={t} className="text-[10px] px-2 py-1 bg-dark-800 text-gray-300 rounded border border-white/10">{t}</span>)}</div>
              </div>
            </div>
            {/* <div className="group relative rounded-2xl overflow-hidden bg-dark-card border border-white/5" data-aos="fade-up" data-aos-delay="300">
              <div className="h-48 overflow-hidden relative"><div className="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-colors z-10"></div><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Projet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-3"><div><h3 className="text-lg font-bold text-white mb-1">Team Dashboard</h3><p className="text-neon-400 text-xs">SaaS UI</p></div><div className="flex gap-2"><a href="#" className="w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center text-white hover:bg-neon-400 hover:text-dark-900 transition-colors"><i className="fab fa-github"></i></a></div></div>
                <p className="text-gray-400 text-xs mb-4">Interface d'administration pour la gestion d'équipe et de tâches en méthode Agile.</p>
                <div className="flex flex-wrap gap-2">{['Vue.js', 'Firebase'].map(t => <span key={t} className="text-[10px] px-2 py-1 bg-dark-800 text-gray-300 rounded border border-white/10">{t}</span>)}</div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="py-24 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mon <span className="text-neon-400">Parcours</span></h2></div>
          <div className="relative ml-4 md:ml-0">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-400 to-transparent"></div>
            <div className="relative z-10 mb-12" data-aos="fade-up">
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="order-1 md:w-5/12 md:text-right"></div>
                <div className="z-20 flex items-center order-1 bg-dark-900 border-2 border-neon-400 rounded-full w-8 h-8 justify-center shadow-neon absolute left-[-16px] md:left-1/2 md:-translate-x-1/2"><div className="w-3 h-3 bg-neon-400 rounded-full"></div></div>
                <div className="order-1 md:w-5/12 pl-8 md:pl-0">
                  <div className="glass-panel p-6 rounded-xl hover:border-neon-400/50 transition-colors">
                    <span className="text-neon-400 text-sm font-bold tracking-widest">2021 - PRÉSENT</span>
                    <h3 className="text-xl font-bold text-white mt-1">Université Ravelojanona</h3><h4 className="text-gray-400 text-sm mb-4">Licence en Informatique</h4>
                    <p className="text-gray-300 text-sm">Spécialisation Génie Logiciel. Projets académiques majeurs en développement web et mobile.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-10" data-aos="fade-up" data-aos-delay="100">
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="order-1 md:w-5/12 md:text-right md:pr-10 pl-8 md:pl-0">
                  <div className="glass-panel p-6 rounded-xl hover:border-neon-400/50 transition-colors">
                    <span className="text-neon-400 text-sm font-bold tracking-widest">2018 - 2021</span>
                    <h3 className="text-xl font-bold text-white mt-1">Lycée Moderne Ampefiloha</h3><h4 className="text-gray-400 text-sm mb-4">Baccalauréat Scientifique</h4>
                    <p className="text-gray-300 text-sm">Obtention du baccalauréat série C avec mention. Découverte de l'algorithmique.</p>
                  </div>
                </div>
                <div className="z-20 flex items-center order-1 bg-dark-900 border-2 border-gray-600 rounded-full w-8 h-8 justify-center absolute left-[-16px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-6"><div className="w-3 h-3 bg-gray-400 rounded-full"></div></div>
                <div className="order-1 md:w-5/12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold text-white mb-6">Parlons de votre <br /><span className="text-neon-400">Prochain Projet</span></h2>
              <p className="text-gray-400 mb-8 text-lg">Je suis toujours intéressée par de nouveaux défis. Que vous ayez une question ou juste envie de dire bonjour, je ferai de mon mieux pour vous répondre !</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center text-neon-400 border border-white/10"><i className="fas fa-envelope"></i></div><div><p className="text-sm text-gray-500">Email</p><p className="text-white font-medium">contact@mika.dev</p></div></div>
                <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center text-neon-400 border border-white/10"><i className="fas fa-map-marker-alt"></i></div><div><p className="text-sm text-gray-500">Localisation</p><p className="text-white font-medium">Antananarivo, Madagascar</p></div></div>
              </div>
            </div>
            <div className="glass-panel p-8 rounded-3xl border border-white/10" data-aos="fade-left">
              <form action="#" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><label className="block text-sm text-gray-400 mb-2">Nom</label><input type="text" placeholder="Votre nom" className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-400 focus:ring-1 focus:ring-neon-400 outline-none transition-all" /></div>
                  <div><label className="block text-sm text-gray-400 mb-2">Email</label><input type="email" placeholder="votre@gmail.com" className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-400 focus:ring-1 focus:ring-neon-400 outline-none transition-all" /></div>
                </div>
                <div><label className="block text-sm text-gray-400 mb-2">Message</label><textarea rows="4" placeholder="Votre message..." className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-400 focus:ring-1 focus:ring-neon-400 outline-none transition-all"></textarea></div>
                <button type="button" className="w-full py-4 bg-gradient-to-r from-neon-400 to-blue-500 text-dark-900 font-bold rounded-lg hover:shadow-neon hover:scale-[1.02] transition-all duration-300">Envoyer le message <i className="fas fa-paper-plane ml-2"></i></button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-lg font-bold text-white">MANOA<span className="text-neon-400">.DEV</span></span>
          <p className="text-gray-500 text-sm">© 2026 Manoa Ravoninjatovo. Fait avec <i className="fas fa-heart text-red-500 mx-1"></i></p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-neon-400 transition-colors"><i className="fab fa-github"></i></a>
            <a href="#" class="text-gray-500 hover:text-neon-400 transition-colors"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
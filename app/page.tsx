'use client';
import { useEffect, useState } from 'react';


type InfluencerData = {
name: string;
niche: string;
followers: string;
platforms: string;
};


const influencers = [
  { name: 'Didier Car Invest', niche: 'Automobile & Haut de Gamme', followers: '+68K', views: '+68K Abonnés', platforms: 'TikTok / Instagram / Facebook / YouTube', gradient: 'from-[#D84838]/40 to-[#0C1C2A]', photo: '/influenceurs/Didier Car Invest.jpg' },
  { name: 'Tendo', niche: 'Storytelling & Popculture', followers: '+9K', views: '+9K Abonnés', platforms: 'TikTok / Instagram / Youtube', gradient: 'from-[#D84838]/40 to-[#0C1C2A]', photo: '/influenceurs/Tendo.jpg' },
  { name: 'Kali Shakti Ka', niche: 'Bien être & Spiritualité', followers: '+20K', views: '+20K Abonnés', platforms: 'TikTok / Instagram / Facebook', gradient: 'from-[#D84838]/40 to-[#0C1C2A]', photo: '/influenceurs/Kali.jpg' },
  { name: 'Yanno', niche: 'Divertissement & Culture Urbaine', followers: '+75K', views: '+75K Abonnés', platforms: 'TikTok / Instagram / Facebook / YouTube / Snapchat', gradient: 'from-[#D84838]/40 to-[#0C1C2A]', photo: '/influenceurs/Yanno.jpg' },
  { name: 'Yann ElYannou', niche: 'Lifestyle & Humour', followers: '+69K', views: '+69K Abonnés', platforms: 'TikTok / Instagram / Facebook / YouTube / Snapchat', gradient: 'from-[#D84838]/40 to-[#0C1C2A]', photo: '/influenceurs/Yann ElYannou.jpg' },
  { name: 'Derka', niche: 'Lifestyle & Divertissement', followers: '+64K', views: '+64K Abonnés', platforms: 'TikTok / Instagram / Facebook / Snapchat', gradient: 'from-[#D84838]/40 to-[#0C1C2A]', photo: '/influenceurs/Derka.jpg' },
  { name: 'Boris Dallo', niche: 'Lifestyle & Sport', followers: '+25K', views: '+25K Abonnés', platforms: 'TikTok / Instagram / Facebook / YouTube / Snapchat', gradient: 'from-[#D84838]/40 to-[#0C1C2A]', photo: '/influenceurs/Boris Dallo.jpg' },
  { name: 'Tshukuma', niche: 'Culture Afro & Musique', followers: '+263K', views: '+263K Abonnés', platforms: 'TikTok', gradient: 'from-[#D84838]/40 to-[#0C1C2A]', photo: '/influenceurs/Tshukuma.jpg' },
  { name: 'Charly', niche: 'Detailing Automobile', followers: '+2K', views: '+2K Abonnés', platforms: 'TikTok / Instagram / Facebook / YouTube', gradient: 'from-[#D84838]/40 to-[#0C1C2A]', photo: '/influenceurs/Charly.jpg' },
];


const logos = [
  { label: 'Huawei', img: '/logos/Huawei.png' },
  { label: 'Asvel', img: '/logos/Asvel.png' },
  { label: 'Carrefour', img: '/logos/Carrefour.png' },
  { label: 'Mouv', img: '/logos/Mouv.png' },
  { label: 'Ken', img: '/logos/Ken.png' },
  { label: 'Footbar', img: '/logos/Footbar.png' },
  { label: 'Wagram', img: '/logos/Wagram.png' },
  { label: 'Cholet', img: '/logos/Cholet.png' },
  { label: 'Proxi', img: '/logos/Proxi.png' },
  { label: 'Glowery', img: '/logos/Glowery.png' },
  { label: 'Nova', img: '/logos/Nova.png' },
  { label: 'Blowup', img: '/logos/Blowup.png' },
  { label: 'Matilda', img: '/logos/Matilda.png' },
];


const services = [
{
title: 'Influence Marketing',
desc: 'Casting sur-mesure, négociation des contrats, brief créatif et suivi de campagne en temps réel.',
items: ['Sélection de créateurs qualifiés', 'Brief et direction artistique', 'Gestion contractuelle complète'],
d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
},
{
title: 'Production Vidéo',
desc: 'Création UGC, ads social-first, montage professionnel et formats optimisés pour chaque plateforme.',
items: ['Contenus UGC authentiques', 'Ads haute conversion', 'Montage et post-production'],
d: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
},
{
title: 'Stratégie & Diffusion',
desc: 'Concepts créatifs, calendrier éditorial, amplification payante et analyse de performance.',
items: ['Stratégie 360° personnalisée', 'Amplification multi-canal', 'Reporting et optimisation'],
d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
},
];


const testimonials = [
{ quote: 'Très bonne compréhension des codes des réseaux sociaux. Les contenus sont naturels, engageants et adaptés à notre audience. Une vraie différence par rapport à nos anciennes créations.', name: 'Le Madrigal', role: 'CMO, BeautyBrand', initials: 'LM' },
{ quote: 'Équipe réactive et impliquée. YAPO nous a accompagnés de la stratégie jusqu’à la mise en ligne des contenus. Process simple et efficace.', name: 'Car Invest La Baule', role: 'Head of Growth, TechStartup', initials: 'CI' },
{ quote: 'On a testé une première collaboration avec YAPO sur du contenu court. Résultat : des vidéos plus engageantes et une meilleure portée que nos formats habituels.', name: 'Mathilda Moos', role: 'Directrice Marketing, FashionHouse', initials: 'MM' },
];


const StarIcon = () => (
<svg className="w-5 h-5 text-[#D84838]" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
</svg>
);


const CheckIcon = () => (
<svg className="w-4 h-4 text-[#D84838] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
</svg>
);


export default function Home() {
const [modalOpen, setModalOpen] = useState(false);
const [modalData, setModalData] = useState<InfluencerData>({ name: '', niche: '', followers: '', platforms: '' });
const [formSubmitted, setFormSubmitted] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
useEffect(() => {
const navbar = document.getElementById('navbar');
const handleScroll = () => {
if (window.pageYOffset > 80) navbar?.classList.add('navbar-scrolled');
else navbar?.classList.remove('navbar-scrolled');
};
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);


useEffect(() => {
const handleKeyDown = (e: KeyboardEvent) => {
if (e.key === 'Escape') {
setModalOpen(false);
document.body.style.overflow = '';
}
};
document.addEventListener('keydown', handleKeyDown);
return () => document.removeEventListener('keydown', handleKeyDown);
}, []);


const openModal = (inf: typeof influencers[0]) => {
  const openModal = (inf: typeof influencers[0]) => {
  console.log('openModal appelé', inf.name);
  setModalData({ name: inf.name, niche: inf.niche, followers: inf.followers, platforms: inf.platforms });
  setModalOpen(true);
  document.body.style.overflow = 'hidden';
};
setModalData({ name: inf.name, niche: inf.niche, followers: inf.followers, platforms: inf.platforms });
setModalOpen(true);
document.body.style.overflow = 'hidden';
};


const closeModal = () => {
setModalOpen(false);
document.body.style.overflow = '';
};


const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
setFormSubmitted(true);
setTimeout(() => {
setFormSubmitted(false);
(e.target as HTMLFormElement).reset();
}, 5000);
};


return (
<div id="app-wrapper" className="min-h-full w-full" style={{ background: '#0C1C2A' }}>


{/* NAVBAR */}
<nav id="navbar" className="fixed top-4 left-1/2 -translate-x-1/2 z-50 navbar-glass rounded-2xl md:rounded-full px-6 py-3 transition-all duration-300 w-[calc(100vw-2rem)] md:w-auto">
<div className="flex items-center justify-between gap-6">
<a href="#" className="flex-shrink-0">
<img src="/logo.png" alt="YAPO" className="h-9 w-auto object-contain" />
</a>
{/* Menu desktop */}
<div className="hidden md:flex items-center gap-8">
<a href="#about" className="text-[#FDFCF9]/80 hover:text-[#FDFCF9] transition-colors text-sm font-medium">À propos</a>
<a href="#influencers" className="text-[#FDFCF9]/80 hover:text-[#FDFCF9] transition-colors text-sm font-medium">Talents</a>
<a href="#services" className="text-[#FDFCF9]/80 hover:text-[#FDFCF9] transition-colors text-sm font-medium">Services</a>
<a href="#testimonials" className="text-[#FDFCF9]/80 hover:text-[#FDFCF9] transition-colors text-sm font-medium">Avis</a>
<a href="#contact" className="bg-[#D84838] text-[#FDFCF9] font-bold px-5 py-2 rounded-full hover:bg-[#c23a2a] transition-all duration-300">
  Contact
</a>
</div>
{/* Bouton hamburger mobile */}
<button
className="md:hidden flex flex-col gap-[5px] p-1"
onClick={() => setMenuOpen(!menuOpen)}
aria-label="Menu"
>
<span className={`block w-6 h-[3px] bg-[#FDFCF9] rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
<span className={`block w-6 h-[3px] bg-[#FDFCF9] rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
<span className={`block w-6 h-[3px] bg-[#FDFCF9] rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
</button>
</div>
{/* Menu déroulant mobile */}
<div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64 mt-4' : 'max-h-0'}`}>
<div className="flex flex-col gap-4 pb-2">
<a href="#about" onClick={() => setMenuOpen(false)} className="text-[#FDFCF9]/80 hover:text-[#FDFCF9] transition-colors text-sm font-medium">À propos</a>
<a href="#influencers" onClick={() => setMenuOpen(false)} className="text-[#FDFCF9]/80 hover:text-[#FDFCF9] transition-colors text-sm font-medium">Talents</a>
<a href="#services" onClick={() => setMenuOpen(false)} className="text-[#FDFCF9]/80 hover:text-[#FDFCF9] transition-colors text-sm font-medium">Services</a>
<a href="#testimonials" onClick={() => setMenuOpen(false)} className="text-[#FDFCF9]/80 hover:text-[#FDFCF9] transition-colors text-sm font-medium">Avis</a>
<a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary bg-[#D84838] text-[#FDFCF9] px-4 py-2 rounded-xl text-sm font-bold text-center">Contact</a>
</div>
</div>
</nav>


{/* HERO */}
<section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
<video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" preload="metadata">
<source src="/hero.mp4" type="video/mp4" />
</video>
<div className="absolute inset-0 hero-overlay"></div>
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D84838]/20 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#D84838]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
<div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-32">
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#FDFCF9] [text-shadow:0_2px_4px_rgba(0,0,0,0.5),0_4px_20px_rgba(0,0,0,0.8)] animate-fade-in-up mb-6">
  VOTRE <span className="text-[#D84838]">CROISSANCE</span> COMMENCE LÀ OÙ VOTRE CONTENU <span className="text-[#D84838]">PERFORME</span>
</h1>

<div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-fade-in-up delay-300">
<a href="#contact" className="btn-primary bg-[#D84838] text-[#FDFCF9] px-8 py-4 rounded-2xl text-lg font-bold text-center">Discuter avec nous</a>
<a href="#influencers" className="btn-secondary border-2 border-[#FDFCF9] text-[#FDFCF9] px-8 py-4 rounded-2xl text-lg font-bold text-center">Voir nos talents</a>
</div>
<div className="flex flex-wrap justify-center gap-3 animate-fade-in-up delay-400">
<span className="proof-chip px-4 py-2 rounded-full text-[#FDFCF9]/80 text-sm font-medium">Créateurs Performants</span>
<span className="proof-chip px-4 py-2 rounded-full text-[#FDFCF9]/80 text-sm font-medium">Croissance Mesurable</span>
<span className="proof-chip px-4 py-2 rounded-full text-[#FDFCF9]/80 text-sm font-medium">Impact Réel</span>
</div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up delay-500">
<div className="w-6 h-10 border-2 border-[#FDFCF9]/30 rounded-full flex justify-center">
<div className="w-1.5 h-3 bg-[#FDFCF9]/50 rounded-full mt-2 animate-bounce"></div>
</div>
</div>
</section>


{/* LOGOS MARQUEE */}
<section className="py-12 border-y border-[#FDFCF9]/10 bg-[#0C1C2A]/50 overflow-hidden">
<p className="text-center text-[#FDFCF9]/40 text-sm font-medium uppercase tracking-wider mb-8">Ils nous ont fait confiance</p>
<div className="relative">
<div className="flex marquee-track [animation-duration:8s] md:[animation-duration:30s]">
  {/* Groupe 1 */}
  <div className="flex items-center gap-16 px-8">
    {logos.map((logo, i) => (
      <img key={i} src={logo.img} alt={logo.label} className="h-20 w-auto object-contain mx-8" />
    ))}
  </div>
  {/* Groupe 2 */}
  <div className="flex items-center gap-16 px-8" aria-hidden="true">
    {logos.map((logo, i) => (
      <img key={i} src={logo.img} alt={logo.label} className="h-20 w-auto object-contain mx-8" />
    ))}
  </div>
</div>
</div>
</section>


{/* À PROPOS */}
<section id="about" className="py-24 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div>
<span className="text-[#D84838] font-semibold text-sm uppercase tracking-wider mb-4 block"></span>
<h2 className="text-5xl md:text-6xl font-black text-[#FDFCF9] mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
Votre croissance mérite mieux que du contenu inutile.
</h2>
<p className="text-[#FDFCF9]/70 text-lg leading-relaxed mb-8">
YAPO est une agence digitale nouvelle génération. Nous concevons des stratégies et des contenus qui transforment votre audience en revenus.
</p>
<div className="bg-gradient-to-r from-[#D84838]/20 to-transparent border border-[#D84838]/30 rounded-2xl p-6">
<div className="flex items-center gap-3 mb-3">
<svg className="w-6 h-6 text-[#D84838]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<span className="text-[#FDFCF9] font-bold">Notre promesse</span>
</div>
<p className="text-[#FDFCF9]/80">Des résultats mesurables, une transparence totale, et un accompagnement de A à Z.</p>
</div>
</div>
<div className="space-y-4">
<h3 className="text-[#FDFCF9]/50 font-semibold text-sm uppercase tracking-wider mb-6">Notre approche</h3>
{[
{ title: 'Stratégie', desc: 'Analyse de marché, définition des KPIs, sélection des profils et planning éditorial optimisé.', d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
{ title: 'Production', desc: 'Création de contenus UGC, ads social-first, direction artistique et montage professionnel.', d: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
{ title: 'Performance', desc: 'Suivi en temps réel, optimisation continue et reporting détaillé avec ROI mesuré.', d: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
].map((item, i) => (
<div key={i} className="bg-[#FDFCF9]/5 border border-[#FDFCF9]/10 rounded-2xl p-6 hover:border-[#D84838]/30 transition-all duration-300">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-[#D84838]/20 rounded-xl flex items-center justify-center flex-shrink-0">
<svg className="w-6 h-6 text-[#D84838]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.d} />
</svg>
</div>
<div>
<h4 className="text-[#FDFCF9] font-bold text-lg mb-2">{item.title}</h4>
<p className="text-[#FDFCF9]/60 text-sm">{item.desc}</p>
</div>
</div>
</div>
))}
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
{[
{ value: '500+', label: 'Vidéos / mois' },
{ value: '100M+', label: 'Reach mensuel' },
{ value: '15+', label: "Ans d'expérience" },
].map((stat, i) => (
<div key={i} className="text-center p-6 bg-[#FDFCF9]/5 rounded-2xl border border-[#FDFCF9]/10">
<div className="text-4xl font-black text-[#D84838] mb-2">{stat.value}</div>
<div className="text-[#FDFCF9]/60 text-sm font-medium">{stat.label}</div>
</div>
))}
</div>
</div>
</section>


{/* NOS TALENTS */}
<section id="influencers" className="py-24 px-6 bg-gradient-to-b from-transparent via-[#D84838]/5 to-transparent">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="text-[#D84838] font-semibold text-sm uppercase tracking-wider mb-4 block">Notre roster</span>
<h2 className="text-4xl md:text-5xl font-black text-[#FDFCF9] mb-4">Nos talents</h2>
<p className="text-[#FDFCF9]/60 max-w-xl mx-auto">Nous sélectionnons chaque profil pour sa capacité à générer de l’attention qualifiée et des résultats mesurables.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
{influencers.map((inf, i) => (
<div key={i} className="influencer-card relative rounded-2xl overflow-hidden cursor-pointer" onClick={() => openModal(inf)}>
<div className={`aspect-[3/4] bg-gradient-to-br ${inf.gradient} overflow-hidden`}>
{inf.photo ? (
  <img src={inf.photo} alt={inf.name} className="w-full h-full object-cover transition-transform duration-500" />
) : (
  <div className="w-full h-full bg-[#FDFCF9]/10 flex items-center justify-center">
    <svg className="w-16 h-16 text-[#FDFCF9]/30" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  </div>
)}
</div>
<div className="influencer-overlay absolute inset-0 bg-gradient-to-t from-[#0C1C2A] via-[#0C1C2A]/50 to-transparent opacity-0 flex flex-col justify-end p-4">
<span className="text-[#D84838] text-xs font-semibold uppercase tracking-wider">Voir le profil</span>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0C1C2A] to-transparent">
<h3 className="text-[#FDFCF9] font-bold">{inf.name}</h3>
<p className="text-[#FDFCF9]/60 text-sm">{inf.niche}</p><p className="text-[#D84838] font-bold text-sm mt-1">{inf.views}</p>
</div>
</div>
))}
</div>
<div className="text-center mt-12">
<a href="#contact" className="btn-secondary border-2 border-[#FDFCF9]/30 text-[#FDFCF9] px-6 py-3 rounded-2xl font-bold hover:border-[#D84838] text-sm sm:text-base sm:px-8 sm:py-4 whitespace-nowrap">
  Trouver le bon créateur pour votre marque →
</a>
</div>
</div>
</section>


{/* NOS SERVICES */}
<section id="services" className="py-24 px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="text-[#D84838] font-semibold text-sm uppercase tracking-wider mb-4 block">Expertise</span>
<h2 className="text-4xl md:text-5xl font-black text-[#FDFCF9] mb-4">Nos services</h2>
<p className="text-[#FDFCF9]/60 max-w-xl mx-auto">Nous combinons influence, création et stratégie pour transformer votre présence digitale en levier d&apos;acquisition.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
{services.map((s, i) => (
<div key={i} className="service-card bg-[#FDFCF9]/5 border border-[#FDFCF9]/10 rounded-3xl p-8">
<div className="w-16 h-16 bg-[#D84838]/20 rounded-2xl flex items-center justify-center mb-6">
<svg className="w-8 h-8 text-[#D84838]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.d} />
</svg>
</div>
<h3 className="text-[#FDFCF9] font-bold text-2xl mb-4">{s.title}</h3>
<p className="text-[#FDFCF9]/60 mb-6 leading-relaxed">{s.desc}</p>
<ul className="space-y-2 mb-8">
{s.items.map((item, j) => (
<li key={j} className="flex items-center gap-2 text-[#FDFCF9]/70 text-sm">
<CheckIcon /> {item}
</li>
))}
</ul>
<a href="#contact" className="text-[#D84838] font-semibold hover:underline inline-flex items-center gap-2">
Discuter de votre croissance
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg>
</a>
</div>
))}
</div>
</div>
</section>


{/* TÉMOIGNAGES */}
<section id="testimonials" className="py-24 px-6 bg-gradient-to-b from-transparent via-[#D84838]/5 to-transparent">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="text-[#D84838] font-semibold text-sm uppercase tracking-wider mb-4 block">Témoignages</span>
<h2 className="text-4xl md:text-5xl font-black text-[#FDFCF9] mb-4">Ils parlent de nous</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
{testimonials.map((t, i) => (
<div key={i} className="testimonial-card rounded-3xl p-8">
<div className="flex items-center gap-1 mb-6">
{[...Array(5)].map((_, j) => <StarIcon key={j} />)}
</div>
<p className="text-[#FDFCF9]/80 text-lg leading-relaxed mb-8">&ldquo;{t.quote}&rdquo;</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-[#FDFCF9]/10 rounded-full flex items-center justify-center">
<span className="text-[#FDFCF9] font-bold">{t.initials}</span>
</div>
<div>
<div className="text-[#FDFCF9] font-bold">{t.name}</div>
</div>
</div>
</div>
))}
</div>
</div>
</section>


{/* CONTACT */}
<section id="contact" className="py-24 px-6">
  <div className="max-w-4xl mx-auto text-center">

    <span className="text-[#D84838] font-semibold text-sm uppercase tracking-wider mb-4 block">Contact</span>
    <h2 className="text-4xl md:text-5xl font-black text-[#FDFCF9] mb-4">Analysez votre potentiel</h2>
    <p className="text-[#FDFCF9]/60 max-w-xl mx-auto mb-16">
      Si on ne peut pas vous aider à générer des résultats, on vous le dira
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      {/* Téléphones */}
      <div className="bg-[#FDFCF9]/5 border border-[#FDFCF9]/10 rounded-2xl p-8 flex flex-col items-center gap-4">
        <div className="bg-[#FDFCF9]/5 border border-[#FDFCF9]/10 rounded-2xl p-8 flex flex-col items-center text-center gap-4">
          <svg className="w-7 h-7 text-[#D84838]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div>
          <p className="text-[#FDFCF9]/50 text-sm mb-2">Téléphone</p>
          <a href="tel:+33781686105" className="block text-[#FDFCF9] font-bold text-lg hover:text-[#D84838] transition-colors">
            +33 7 81 68 61 05
          </a>
        </div>
      </div>

      {/* Email */}
      <a href="mailto:contact@yapoagency.fr" className="bg-[#FDFCF9]/5 border border-[#FDFCF9]/10 rounded-2xl p-8 hover:border-[#D84838]/50 transition-all duration-300 group flex flex-col items-center gap-4">
        <div className="bg-[#FDFCF9]/5 border border-[#FDFCF9]/10 rounded-2xl p-8 flex flex-col items-center text-center gap-4">
          <svg className="w-7 h-7 text-[#D84838]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <p className="text-[#FDFCF9]/50 text-sm mb-1">Email</p>
          <p className="text-[#FDFCF9] font-bold text-lg">contact@yapoagency.com</p>
        </div>
      </a>

      {/* Instagram */}
      <a href="https://instagram.com/yapo.agency" target="_blank" className="bg-[#FDFCF9]/5 border border-[#FDFCF9]/10 rounded-2xl p-8 hover:border-[#D84838]/50 transition-all duration-300 group flex flex-col items-center gap-4">
        <div className="bg-[#FDFCF9]/5 border border-[#FDFCF9]/10 rounded-2xl p-8 flex flex-col items-center text-center gap-4">
          <svg className="w-7 h-7 text-[#D84838]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </div>
        <div>
          <p className="text-[#FDFCF9]/50 text-sm mb-1">Instagram</p>
          <p className="text-[#FDFCF9] font-bold text-lg">@yapo.agency</p>
        </div>
      </a>

    </div>
  </div>
</section>


{/* FOOTER */}
<footer className="py-12 px-6 border-t border-[#FDFCF9]/10">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<a href="#" className="flex items-center gap-2 text-[#FDFCF9] font-extrabold text-xl">
<img src="/logo.png" alt="YAPO" className="h-10 w-auto" />
</a>
<p className="text-sm text-[#FDFCF9]/40">© 2026 YAPO Agency. Tous droits réservés.</p>
<div className="flex gap-6 text-sm text-[#FDFCF9]/40">
<a href="/confidentialite" className="hover:text-[#FDFCF9]/60 transition-colors">Confidentialité</a>
<a href="/CGU" className="hover:text-[#FDFCF9]/60 transition-colors">CGU</a>
<a href="#contact" className="hover:text-[#FDFCF9]/60 transition-colors">Contact</a>
</div>
</div>
</footer>


{/* MODAL INFLUENCEUR — CORRIGÉ */}
{modalOpen && (
<div
className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#0C1C2A]/80 backdrop-blur-sm"
onClick={closeModal}
>
<div
className="bg-[#0C1C2A] border border-[#FDFCF9]/10 rounded-3xl p-8 max-w-md w-full"
onClick={(e) => e.stopPropagation()}
>
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-[#FDFCF9] font-black text-2xl">{modalData.name}</h3>
<p className="text-[#D84838] font-semibold mt-1">{modalData.niche}</p>
</div>
<button onClick={closeModal} className="text-[#FDFCF9]/50 hover:text-[#FDFCF9] transition-colors">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg>
</button>
</div>
<div className="space-y-4 mb-8">
<div className="bg-[#FDFCF9]/5 rounded-2xl p-4 flex justify-between">
<span className="text-[#FDFCF9]/50 text-sm">Abonnés</span>
<span className="text-[#FDFCF9] font-bold">{modalData.followers}</span>
</div>
<div className="bg-[#FDFCF9]/5 rounded-2xl p-4 flex justify-between">
<span className="text-[#FDFCF9]/50 text-sm">Plateformes</span>
<span className="text-[#FDFCF9] font-bold text-right">{modalData.platforms}</span>
</div>
</div>
<a href="#contact" onClick={closeModal} className="btn-primary block w-full bg-[#D84838] text-[#FDFCF9] py-4 rounded-2xl font-bold text-center">
Collaborer avec ce talent
</a>
</div>
</div>
)}


</div>
);
}
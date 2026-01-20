
import React, { useState } from 'react';
import { Sun, Zap, ShieldCheck, Mail, Phone, MapPin, ArrowRight, Menu, X, Lightbulb, CheckCircle2, Battery } from 'lucide-react';

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative w-12 h-12 bg-[#002D5B] rounded-full flex items-center justify-center border-2 border-[#FFCC00] shadow-lg">
      <span className="text-[#FFCC00] font-bold text-2xl tracking-tighter">AD</span>
    </div>
    <div className="flex flex-col leading-none">
      <div className="text-[#002D5B] font-bold text-sm tracking-[0.15em] uppercase">Innovation</div>
      <div className="text-stone-500 font-semibold text-[10px] tracking-[0.05em] uppercase">Services Plus</div>
    </div>
  </div>
);

const Feature = ({ icon: Icon, title, text }: { icon: any, title: string, text: string }) => (
  <div className="flex gap-4 items-start p-6 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
    <div className="p-3 bg-[#FFCC00]/10 rounded-xl text-[#002D5B]">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="font-bold text-[#002D5B] mb-1">{title}</h4>
      <p className="text-sm text-stone-600 leading-relaxed">{text}</p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans selection:bg-[#FFCC00] selection:text-[#002D5B]">
      
      {/* Navigation - Always White and Solid */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-stone-100 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo />
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-sm font-bold tracking-wide uppercase">
            <a href="#services" onClick={scrollTo('services')} className="text-[#002D5B] hover:text-[#FFCC00] transition-colors">Services</a>
            <a href="#solaire" onClick={scrollTo('solaire')} className="text-[#002D5B] hover:text-[#FFCC00] transition-colors">Solaire</a>
            <a href="#a-propos" onClick={scrollTo('a-propos')} className="text-[#002D5B] hover:text-[#FFCC00] transition-colors">À Propos</a>
            <a href="#contact" onClick={scrollTo('contact')} className="px-7 py-3 bg-[#002D5B] text-white rounded-full hover:bg-[#FFCC00] hover:text-[#002D5B] transition-all shadow-md active:scale-95">
              Obtenir un devis
            </a>
          </div>

          <button className="lg:hidden text-[#002D5B]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center gap-8 text-2xl font-bold text-[#002D5B] animate-fade-in">
            <a href="#services" onClick={scrollTo('services')}>Services</a>
            <a href="#solaire" onClick={scrollTo('solaire')}>Solaire</a>
            <a href="#contact" onClick={scrollTo('contact')} className="px-8 py-4 bg-[#002D5B] text-white rounded-full">Contact</a>
            <button onClick={() => setMenuOpen(false)} className="mt-8 p-4 rounded-full bg-stone-100 text-[#002D5B]"><X size={24}/></button>
        </div>
      )}

      {/* Hero Section - Offset for the fixed nav */}
      <section className="relative h-screen flex items-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2000" 
            alt="Installation de panneaux solaires" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002D5B]/90 via-[#002D5B]/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFCC00] text-[#002D5B] rounded-full mb-8 font-bold text-xs uppercase tracking-widest shadow-xl">
              <Sun size={14} className="animate-spin-slow" /> Expertise Photovoltaïque & Électricité
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] font-serif">
              Votre partenaire pour une <span className="text-[#FFCC00]">énergie intelligente.</span>
            </h1>
            <p className="text-xl text-stone-200 mb-10 max-w-xl leading-relaxed font-light">
              Installation solaire haute performance et solutions électriques pour bâtiments résidentiels et industriels en Île-de-France.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button onClick={scrollTo('contact')} className="px-10 py-5 bg-[#FFCC00] text-[#002D5B] font-extrabold rounded-xl hover:bg-white transition-all shadow-[0_15px_30px_-10px_rgba(255,204,0,0.4)] flex items-center justify-center gap-3 group">
                Étude Gratuite <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={scrollTo('services')} className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all">
                Nos Services
              </button>
            </div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="absolute bottom-10 left-0 right-0 z-10">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-8 items-center text-white/70 text-sm font-medium">
               <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#FFCC00]" /> Certifié RGE QualiPV</div>
               <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#FFCC00]" /> Garantie Décennale</div>
               <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-[#FFCC00]" /> Matériel Premium</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[#FFCC00] font-bold uppercase tracking-[0.3em] text-sm mb-4">Nos Compétences</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#002D5B]">De l'électricité générale à l'autonomie solaire.</h3>
            </div>
            <p className="text-stone-500 max-w-sm">
              Nous intervenons sur tous types de chantiers pour sécuriser et optimiser vos installations électriques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-10 bg-[#F9F9F9] rounded-3xl border border-stone-100 hover:bg-[#002D5B] transition-all duration-500">
              <div className="w-16 h-16 bg-[#002D5B] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FFCC00] transition-colors">
                <Sun className="text-[#FFCC00] group-hover:text-[#002D5B]" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-[#002D5B] mb-4 group-hover:text-white">Photovoltaïque</h4>
              <p className="text-stone-600 group-hover:text-stone-300 leading-relaxed mb-6">
                Pose de panneaux solaires en toiture ou au sol, onduleurs haute performance et raccordement au réseau.
              </p>
              <ul className="space-y-3 text-sm font-semibold text-[#002D5B] group-hover:text-[#FFCC00]">
                <li className="flex items-center gap-2">● Autoconsommation</li>
                <li className="flex items-center gap-2">● Revente de surplus</li>
              </ul>
            </div>

            <div className="group p-10 bg-[#F9F9F9] rounded-3xl border border-stone-100 hover:bg-[#002D5B] transition-all duration-500">
              <div className="w-16 h-16 bg-[#002D5B] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FFCC00] transition-colors">
                <Zap className="text-[#FFCC00] group-hover:text-[#002D5B]" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-[#002D5B] mb-4 group-hover:text-white">Électricité Bâtiment</h4>
              <p className="text-stone-600 group-hover:text-stone-300 leading-relaxed mb-6">
                Installation complète pour le neuf, rénovation totale et mise aux normes NF C 15-100 de votre tableau.
              </p>
              <ul className="space-y-3 text-sm font-semibold text-[#002D5B] group-hover:text-[#FFCC00]">
                <li className="flex items-center gap-2">● Tableaux électriques</li>
                <li className="flex items-center gap-2">● Éclairage LED</li>
              </ul>
            </div>

            <div className="group p-10 bg-[#F9F9F9] rounded-3xl border border-stone-100 hover:bg-[#002D5B] transition-all duration-500">
              <div className="w-16 h-16 bg-[#002D5B] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FFCC00] transition-colors">
                <Battery className="text-[#FFCC00] group-hover:text-[#002D5B]" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-[#002D5B] mb-4 group-hover:text-white">Stockage & Bornes</h4>
              <p className="text-stone-600 group-hover:text-stone-300 leading-relaxed mb-6">
                Installation de batteries domestiques et bornes de recharge pour véhicules électriques (IRVE).
              </p>
              <ul className="space-y-3 text-sm font-semibold text-[#002D5B] group-hover:text-[#FFCC00]">
                <li className="flex items-center gap-2">● Wallbox sécurisée</li>
                <li className="flex items-center gap-2">● Batteries de secours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Benefits Section */}
      <section id="solaire" className="py-24 bg-[#002D5B] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=1000" 
                  alt="Solaire" 
                  className="rounded-3xl shadow-2xl border-4 border-white/5"
                />
                <div className="absolute -bottom-8 -right-8 bg-[#FFCC00] text-[#002D5B] p-8 rounded-3xl shadow-xl hidden md:block animate-bounce-slow">
                   <div className="text-5xl font-bold mb-1">-70%</div>
                   <div className="text-xs font-bold uppercase tracking-widest leading-tight">Sur votre facture<br/>d'électricité annuelle</div>
                </div>
             </div>
             <div>
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">Reprenez le contrôle de votre <span className="text-[#FFCC00]">production.</span></h3>
                <div className="space-y-6">
                   <Feature 
                    icon={ShieldCheck} 
                    title="Indépendance énergétique" 
                    text="Produisez votre propre électricité et réduisez votre dépendance aux hausses constantes des tarifs énergétiques." 
                   />
                   <Feature 
                    icon={Lightbulb} 
                    title="Écologie et Innovation" 
                    text="Contribuez à la transition énergétique avec une technologie propre, durable et facile à entretenir." 
                   />
                   <Feature 
                    icon={Zap} 
                    title="Valorisation immobilière" 
                    text="Une maison équipée en solaire se revend en moyenne 15% plus cher sur le marché actuel." 
                   />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-[#F9F9F9] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="bg-[#002D5B] p-12 lg:p-16 text-white lg:w-2/5">
              <h3 className="text-4xl font-serif font-bold mb-8">Contactez <span className="text-[#FFCC00]">AD Innovation</span></h3>
              <p className="text-stone-400 mb-12">Nos conseillers vous rappellent sous 24h pour une étude de faisabilité gratuite de votre projet.</p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="text-[#FFCC00]"><Phone size={24} /></div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-stone-500 mb-1">Téléphone</p>
                    <p className="text-lg font-bold">01 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-[#FFCC00]"><Mail size={24} /></div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-stone-500 mb-1">Email</p>
                    <p className="text-lg font-bold">contact@innovation-services.plus</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-[#FFCC00]"><MapPin size={24} /></div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-stone-500 mb-1">Siège Social</p>
                    <p className="text-lg font-bold">Paris, France</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-12 lg:p-16 lg:w-3/5">
               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-stone-600 mb-2">Prénom & Nom</label>
                      <input type="text" className="w-full px-5 py-4 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#FFCC00] outline-none transition-all" placeholder="Votre nom" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-stone-600 mb-2">Email</label>
                      <input type="email" className="w-full px-5 py-4 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#FFCC00] outline-none transition-all" placeholder="votre@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-600 mb-2">Type de projet</label>
                    <select className="w-full px-5 py-4 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#FFCC00] outline-none transition-all">
                      <option>Solaire Photovoltaïque</option>
                      <option>Électricité (Rénovation)</option>
                      <option>Électricité (Neuf)</option>
                      <option>Borne de recharge véhicule</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-600 mb-2">Message</label>
                    <textarea className="w-full px-5 py-4 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-[#FFCC00] outline-none transition-all h-32" placeholder="Décrivez votre projet..."></textarea>
                  </div>
                  <button className="w-full py-5 bg-[#002D5B] text-white font-bold rounded-xl hover:bg-[#FFCC00] hover:text-[#002D5B] transition-all shadow-lg text-lg uppercase tracking-widest">
                    Demander mon devis gratuit
                  </button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002D5B] text-white pt-20 pb-10">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
              <div className="max-w-xs">
                 <Logo className="invert-logo mb-8" />
                 <p className="text-stone-400 text-sm leading-relaxed">
                   Innovation Services Plus : l'excellence électrique et solaire pour un habitat durable.
                 </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                 <div>
                    <h5 className="font-bold text-[#FFCC00] uppercase tracking-widest text-xs mb-6">Entreprise</h5>
                    <ul className="text-sm space-y-3 text-stone-300">
                       <li><a href="#" className="hover:text-white transition-colors">Notre équipe</a></li>
                       <li><a href="#" className="hover:text-white transition-colors">Réalisations</a></li>
                       <li><a href="#" className="hover:text-white transition-colors">Partenaires</a></li>
                    </ul>
                 </div>
                 <div>
                    <h5 className="font-bold text-[#FFCC00] uppercase tracking-widest text-xs mb-6">Expertises</h5>
                    <ul className="text-sm space-y-3 text-stone-300">
                       <li><a href="#" className="hover:text-white transition-colors">Panneaux Solaires</a></li>
                       <li><a href="#" className="hover:text-white transition-colors">Bornes IRVE</a></li>
                       <li><a href="#" className="hover:text-white transition-colors">Domotique</a></li>
                    </ul>
                 </div>
                 <div className="col-span-2 md:col-span-1">
                    <h5 className="font-bold text-[#FFCC00] uppercase tracking-widest text-xs mb-6">Secteur</h5>
                    <p className="text-sm text-stone-300">Nous intervenons sur toute l'Île-de-France et départements limitrophes.</p>
                 </div>
              </div>
           </div>
           <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-stone-500 font-bold uppercase tracking-widest">
              <div>© 2024 Innovation Services Plus. Tous droits réservés.</div>
              <div className="flex gap-8">
                 <a href="#" className="hover:text-white">Mentions Légales</a>
                 <a href="#" className="hover:text-white">Confidentialité</a>
              </div>
           </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-bounce-slow {
          animation: bounceSlow 4s ease-in-out infinite;
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .invert-logo .w-12 {
          background-color: white !important;
        }
        .invert-logo span {
          color: #002D5B !important;
        }
        .invert-logo .text-[#002D5B] {
          color: white !important;
        }
      `}} />
    </div>
  );
};

export default App;

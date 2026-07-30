import React from 'react';
import { StyleConfig } from '../types';
import { Phone, Mail, MapPin } from 'lucide-react';
import { DoctolibLinkedInBanner } from './DoctolibLinkedInBanner';

interface ContactSectionProps {
  styleConfig: StyleConfig;
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ styleConfig, onOpenBooking }) => {
  return (
    <section id="contact" className="py-8 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Card */}
        <div
          className="p-5 sm:p-12 rounded-2xl sm:rounded-3xl border shadow-xl relative overflow-hidden"
          style={{
            backgroundColor: styleConfig.colors.cardBg,
            borderColor: `${styleConfig.colors.accent}40`,
          }}
        >
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-3">
            <span
              className="text-2xl sm:text-4xl font-normal block mb-1"
              style={{ color: styleConfig.colors.accent, fontFamily: "'Alex Brush', cursive" }}
            >
              Échangeons
            </span>
            <h2
              className="text-2xl sm:text-4xl font-normal"
              style={{
                fontFamily: styleConfig.fontSerif,
                color: styleConfig.colors.primary,
              }}
            >
              Prendre rendez-vous
            </h2>
            <p className="text-sm font-medium text-slate-800 leading-relaxed">
              Vous souhaitez échanger, poser une question ou simplement faire le premier pas ? Contactez-moi !
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Le moyen le plus simple reste de prendre rendez-vous directement en ligne sur Doctolib, où vous pourrez consulter mes créneaux disponibles. Je m'efforce de répondre avec réactivité et bienveillance !
            </p>
          </div>

          {/* Quick Details Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-slate-100">
            <a
              href="tel:0678070619"
              className="flex items-center gap-3 p-3.5 px-4 sm:px-5 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200/80 group"
            >
              <div
                className="p-2 rounded-xl group-hover:scale-110 transition-transform shrink-0"
                style={{ backgroundColor: `${styleConfig.colors.accent}20`, color: styleConfig.colors.accent }}
              >
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left min-w-0 flex-1">
                <span className="text-[10px] font-bold text-slate-400 block uppercase truncate">Téléphone</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate block">06 78 07 06 19</span>
              </div>
            </a>

            <a
              href="mailto:collcelia3@gmail.com"
              className="flex items-center gap-3 p-3.5 px-4 sm:px-5 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200/80 group"
            >
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-700 group-hover:scale-110 transition-transform shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left min-w-0 flex-1">
                <span className="text-[10px] font-bold text-slate-400 block uppercase truncate">Email direct</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate block">collcelia3@gmail.com</span>
              </div>
            </a>

            <div className="flex items-center gap-3 p-3.5 px-4 sm:px-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="p-2 rounded-xl bg-sky-500/10 text-sky-700 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left min-w-0 flex-1">
                <span className="text-[10px] font-bold text-slate-400 block uppercase truncate">Localisation</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate block">En ligne</span>
              </div>
            </div>
          </div>

          {/* Doctolib Direct Banner Button */}
          <div className="text-center">
            <DoctolibLinkedInBanner styleConfig={styleConfig} onOpenBooking={onOpenBooking} />
          </div>

        </div>

      </div>
    </section>
  );
};

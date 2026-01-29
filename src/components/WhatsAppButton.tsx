import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5561991207479?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-75 group-hover:opacity-100 blur-lg transition-opacity animate-pulse"></div>
        
        {/* Button */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
          <MessageCircle className="text-white" size={32} />
        </div>
      </div>
    </a>
  );
}

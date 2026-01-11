import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-slate-800 py-4 px-6 md:px-24 border-b border-b-slate-100 shadow-sm sticky top-0 z-50">
      <nav className="flex justify-between items-center relative">
        <a href="#home" className="flex items-center gap-2 font-bold text-2xl text-primary">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-heart-handshake"
            >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
            <path d="M12.5 15.5l2 2" />
            <path d="M15 13l2 2" />
            </svg>
            <span>MediCare</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-between items-center gap-8">
          <li><a href="#home" className="cursor-pointer font-medium hover:text-primary transition-colors">Home</a></li>
          <li><a href="#services" className="cursor-pointer font-medium hover:text-primary transition-colors">Services</a></li>
          <li><a href="#doctors" className="cursor-pointer font-medium hover:text-primary transition-colors">Doctors</a></li>
          <li><a href="#appointment" className="cursor-pointer font-medium hover:text-primary transition-colors">Contact</a></li>
        </ul>

        <button className="hidden md:block py-2.5 px-6 rounded-full bg-primary text-white font-bold cursor-pointer hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl">
          <a href="#appointment">Book Appointment</a>
        </button>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden p-2 text-slate-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 p-4 md:hidden flex flex-col gap-4">
            <a href="#home" className="font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#services" className="font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#doctors" className="font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Doctors</a>
            <a href="#appointment" className="font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="#appointment" className="py-2 px-4 rounded-lg bg-primary text-white font-bold text-center hover:bg-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Book Appointment
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

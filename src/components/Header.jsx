export default function Header() {
  return (
    <header className="bg-white text-slate-800 py-6 px-24 border-b border-b-slate-100 shadow-sm sticky top-0 z-50">
      <nav className="flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 font-bold text-2xl text-primary">
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

        <ul className="flex justify-between items-center gap-8">
          <li className="cursor-pointer font-medium hover:text-primary transition-colors">Home</li>
          <li className="cursor-pointer font-medium hover:text-primary transition-colors">About</li>
          <li className="cursor-pointer font-medium hover:text-primary transition-colors">Services</li>
          <li className="cursor-pointer font-medium hover:text-primary transition-colors">Doctors</li>
          <li className="cursor-pointer font-medium hover:text-primary transition-colors">Contact</li>
        </ul>

        <button className="py-2.5 px-6 rounded-full bg-primary text-white font-bold cursor-pointer hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl">
          Book Appointment
        </button>
      </nav>
    </header>
  );
}

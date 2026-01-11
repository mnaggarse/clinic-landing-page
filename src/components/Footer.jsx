export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-8 px-24 text-slate-600">
      <div className="grid grid-cols-4 gap-12 mb-12">
        <div className="col-span-1">
          <a href="#" className="flex items-center gap-2 font-bold text-2xl text-primary mb-6">
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
          <p className="text-slate-500 leading-relaxed">
            Leading the way in medical excellence. We provide comprehensive healthcare services with state-of-the-art facilities.
          </p>
        </div>

        <div>
           <h3 className="font-bold text-slate-900 mb-6 text-lg">Services</h3>
           <ul className="space-y-4">
              <li><a href="#" className="hover:text-primary transition-colors">Cardiology</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Neurology</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pediatrics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Orthopedics</a></li>
           </ul>
        </div>

        <div>
           <h3 className="font-bold text-slate-900 mb-6 text-lg">Quick Links</h3>
           <ul className="space-y-4">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Doctors</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Book Appointment</a></li>
           </ul>
        </div>

        <div>
           <h3 className="font-bold text-slate-900 mb-6 text-lg">Contact Us</h3>
           <ul className="space-y-4">
              <li className="flex items-start gap-3">
                 <span>123 Medical Avenue, NY, USA</span>
              </li>
              <li>
                 <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a>
              </li>
              <li>
                 <a href="mailto:info@medicare.com" className="hover:text-primary transition-colors">info@medicare.com</a>
              </li>
           </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
         <p>&copy; {new Date().getFullYear()} MediCare Clinic. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function Hero() {
  return (
    <section id="home" className="p-8 md:p-24 bg-gradient-to-br from-blue-50 to-white flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16 min-h-[600px]">
      <div className="flex-1 max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
          Your Health, <br/>
          <span className="text-primary">Our Priority</span>
        </h1>
        <p className="mb-8 text-slate-600 text-base md:text-lg leading-relaxed">
          Experience world-class healthcare with our team of expert doctors. 
          We are dedicated to providing comprehensive and compassionate care for you and your family.
        </p>
        <div className="space-x-4 flex items-center justify-center md:justify-start">
          <button className="cursor-pointer py-3 px-8 bg-primary text-white rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl">
            <a href="#appointment">Book Appointment</a>
          </button>
          <button className="cursor-pointer py-3 px-8 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-colors">
            <a href="#services">Learn More</a>
          </button>
        </div>
        
        <div className="mt-12 flex items-center justify-center md:justify-start gap-8">
            <div>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">15k+</p>
                <p className="text-slate-500 text-sm">Happy Patients</p>
            </div>
            <div>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">20+</p>
                <p className="text-slate-500 text-sm">Expert Doctors</p>
            </div>
            <div>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">10+</p>
                <p className="text-slate-500 text-sm">Years Experience</p>
            </div>
        </div>
      </div>

      <div className="flex-1 relative w-full max-w-md md:max-w-full">
        <div className="absolute -z-10 bg-blue-100 rounded-full w-[300px] h-[300px] md:w-[500px] md:h-[500px] blur-3xl opacity-50 right-0 top-0"></div>
        <img
          src="/assets/images/doctor.png"
          alt="Professional Doctor"
          className="relative z-10 w-full object-cover rounded-3xl shadow-xl md:shadow-2xl"
        />
      </div>
    </section>
  );
}

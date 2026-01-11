export default function Hero() {
  return (
    <section className="p-24 bg-gradient-to-br from-blue-50 to-white flex justify-between items-center gap-16 min-h-[600px]">
      <div className="flex-1 max-w-xl">
        <h1 className="text-6xl font-bold mb-6 text-slate-900 leading-tight">
          Your Health, <br/>
          <span className="text-primary">Our Priority</span>
        </h1>
        <p className="mb-8 text-slate-600 text-lg leading-relaxed">
          Experience world-class healthcare with our team of expert doctors. 
          We are dedicated to providing comprehensive and compassionate care for you and your family.
        </p>
        <div className="space-x-4 flex items-center">
          <button className="cursor-pointer py-3 px-8 bg-primary text-white rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl">
            Book Appointment
          </button>
          <button className="cursor-pointer py-3 px-8 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-colors">
            Learn More
          </button>
        </div>
        
        <div className="mt-12 flex items-center gap-8">
            <div>
                <p className="text-3xl font-bold text-slate-900">15k+</p>
                <p className="text-slate-500 text-sm">Happy Patients</p>
            </div>
            <div>
                <p className="text-3xl font-bold text-slate-900">20+</p>
                <p className="text-slate-500 text-sm">Expert Doctors</p>
            </div>
            <div>
                <p className="text-3xl font-bold text-slate-900">10+</p>
                <p className="text-slate-500 text-sm">Years Experience</p>
            </div>
        </div>
      </div>

      <div className="flex-1 relative">
        <div className="absolute -z-10 bg-blue-100 rounded-full w-[500px] h-[500px] blur-3xl opacity-50 right-0 top-0"></div>
        <img
          src="https://placehold.co/600x700/0084ff/ffffff?text=Doctor+Image"
          alt="Professional Doctor"
          className="relative z-10 w-full object-cover rounded-3xl shadow-2xl"
        />
      </div>
    </section>
  );
}

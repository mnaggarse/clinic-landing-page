export default function Doctors() {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      image: "https://placehold.co/400x400/0084ff/ffffff?text=Dr.+Sarah"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      image: "https://placehold.co/400x400/0084ff/ffffff?text=Dr.+Michael"
    },
    {
      name: "Dr. Emily Williams",
      specialty: "Pediatrician",
      image: "https://placehold.co/400x400/0084ff/ffffff?text=Dr.+Emily"
    },
    {
      name: "Dr. David Kim",
      specialty: "Orthopedic Surgeon",
      image: "https://placehold.co/400x400/0084ff/ffffff?text=Dr.+David"
    }
  ];

  return (
    <section className="py-24 px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Experts</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our team of dedicated doctors is here to provide you with the best medical care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{doctor.name}</h3>
                <p className="text-primary font-medium">{doctor.specialty}</p>
                <button className="mt-4 w-full py-2 rounded-lg border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-colors">
                    View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

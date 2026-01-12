export default function Doctors() {
  const doctors = [
    {
      name: "أحمد السيد",
      specialty: "طبيب قلب",
      image: "doctor1.jpg",
    },
    {
      name: "علي محمد",
      specialty: "طبيب أعصاب",
      image: "doctor2.jpg",
    },
    {
      name: "مصطفى سعيد",
      specialty: "طبيب أطفال",
      image: "doctor3.jpg",
    },
    {
      name: "محمود علي",
      specialty: "جراح عظام",
      image: "doctor4.jpg",
    },
  ];

  return (
    <section id="doctors" className="py-16 md:py-24 px-6 md:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            تعرف على خبرائنا
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            فريقنا من الأطباء المتفانين هنا لتزويدك بأفضل الرعاية الطبية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <img
                src={`/images/${doctor.image}`}
                alt={doctor.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-primary font-medium">{doctor.specialty}</p>
                <button className="mt-4 cursor-pointer w-full py-2 rounded-lg border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-colors">
                  عرض الملف الشخصي
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const services = [
    {
      title: "أمراض القلب",
      description: "رعاية شاملة للقلب تشمل التشخيص والعلاج.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          <path d="M12 6l-2 2l2 2l2 -2l-2 -2" />
        </svg>
      ),
    },
    {
      title: "طب الأعصاب",
      description: "رعاية متخصصة لاضطرابات الجهاز العصبي.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5l0 2" />
          <path d="M12 11l0 .01" />
          <path d="M12 17l0 2" />
          <path d="M17 14l2 0" />
          <path d="M11 14l-2 0" />
          <path d="M15 9l2 -2" />
          <path d="M9 9l-2 -2" />
          <path d="M16 5l-1 1" />
          <path d="M9 5l-1 1" />
          <path d="M4 12a8 8 0 1 1 16 0" />
        </svg>
      ),
    },
    {
      title: "طب الأطفال",
      description: "رعاية طبية متخصصة للرضع والأطفال والمراهقين.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
          <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M17 10h2a2 2 0 0 1 2 2v1" />
          <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
        </svg>
      ),
    },
    {
      title: "جراحة العظام",
      description: "تشخيص وعلاج حالات الجهاز العضلي الهيكلي.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19 12a7 7 0 1 0 -7 7" />
          <path d="M16 11l-2 0" />
          <path d="M14 11a5 5 0 0 0 -5 -5" />
          <path d="M12 12l0 1" />
          <path d="M12 17l0 2" />
        </svg>
      ),
    },
    {
      title: "طب الأسنان",
      description: "خدمات طب أسنان شاملة لابتسامة صحية.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 4l2 0" />
          <path d="M14 4l2 0" />
          <path d="M8 8l2 0" />
          <path d="M14 8l2 0" />
          <path d="M4 14l2 2" />
          <path d="M18 14l2 2" />
          <path d="M6 18l2 2" />
          <path d="M16 18l2 2" />
        </svg>
      ),
    },
    {
      title: "المختبر",
      description: "خدمات اختبار تشخيصي دقيقة وفي الوقت المناسب.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M20 21h-16" />
          <path d="M7 21v-3" />
          <path d="M17 21v-3" />
          <path d="M6 18h12a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-12a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z" />
          <path d="M10 8l4 0" />
          <path d="M12 6l0 4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            خدماتنا
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            نحن نقدم مجموعة واسعة من الخدمات الطبية لضمان حصولك على أفضل رعاية
            ممكنة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl text-center bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 rounded-xl mx-auto bg-blue-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Appointment() {
  return (
    <section id="appointment" className="py-16 md:py-24 px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="flex-1 text-white relative z-10 w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">حجز موعد</h2>
            <p className="text-blue-100 text-base md:text-lg mb-8 leading-relaxed font-medium">
              هل أنت مستعد لاتخاذ الخطوة الأولى نحو صحة أفضل؟ حدد موعدك بكفاءة
              عبر الإنترنت. فريقنا مستعد لمساعدتك في جميع احتياجاتك الطبية.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>
                </div>
                <div>
                  <p className="text-blue-200 text-sm">اتصل بنا في أي وقت</p>
                  <p className="text-xl font-bold">+1 (234) 567-890</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md bg-white p-6 md:p-8 rounded-2xl shadow-lg relative z-10">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    الاسم
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="فلان الفلاني"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="+1 234..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  الخدمة
                </label>
                <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                  <option>اختر خدمة</option>
                  <option>أمراض القلب</option>
                  <option>طب الأعصاب</option>
                  <option>طب الأطفال</option>
                  <option>جراحة العظام</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  الطبيب
                </label>
                <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                  <option>اختر طبيباً</option>
                  <option>د. سارة جونسون</option>
                  <option>د. مايكل تشن</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  التاريخ
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <button
                type="button"
                className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-lg"
              >
                احجز الآن
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

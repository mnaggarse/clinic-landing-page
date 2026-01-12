export default function Hero() {
  return (
    <section
      id="home"
      className="p-8 md:p-24 pb-0! bg-linear-to-br from-blue-50 to-white flex flex-col md:flex-row justify-evenly items-center gap-12 md:gap-16 min-h-[600px]"
    >
      <div className="flex-1 max-w-xl text-center md:text-right">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
          <span>صحتك </span>
          <span className="text-primary">أولويتنا</span>
        </h1>
        <p className="mb-8 text-slate-600 text-base md:text-lg leading-relaxed">
          استمتع برعاية طبية عالمية المستوى مع فريقنا من الأطباء الخبراء. نحن
          ملتزمون بتقديم رعاية شاملة لك ولعائلتك.
        </p>
        <div className="space-x-4 flex items-center justify-center md:justify-start">
          <button className="cursor-pointer py-2 px-4 md:py-3 md:px-8 bg-primary text-white rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl">
            <a href="#appointment">حجز موعد</a>
          </button>
          <button className="cursor-pointer py-2 px-4 md:py-3 md:px-8 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-colors">
            <a href="#services">اقرأ المزيد</a>
          </button>
        </div>

        <div className="mt-12 flex items-center justify-center md:justify-start gap-8">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-slate-900">
              15k+
            </p>
            <p className="text-slate-500 text-sm">مريض سعيد</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-slate-900">20+</p>
            <p className="text-slate-500 text-sm">طبيب خبير</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-slate-900">10+</p>
            <p className="text-slate-500 text-sm">سنوات خبرة</p>
          </div>
        </div>
      </div>

      <div className="flex-1 relative w-full max-w-md md:max-w-xl">
        <div className="absolute -z-10 bg-blue-100 rounded-full w-[300px] h-[300px] md:w-[500px] md:h-[500px]  opacity-50 left-0 top-0"></div>
        <img
          src="/images/doctor.png"
          alt="Professional Doctor"
          className="relative z-10 w-full max-h-[85vh] object-contain md:object-cover"
        />
      </div>
    </section>
  );
}

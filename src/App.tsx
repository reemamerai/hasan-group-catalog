import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// ==========================================
// 1. الصفحة الرئيسية (Home)
// ==========================================
function Home() {
  return (
    <div>
      {/* Hero Section - خلفية فاتحة هادئة */}
      <section className="relative h-[80vh] flex items-center justify-center text-center bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070')] bg-cover bg-center">
        {/* بطاقة زجاجية بيضاء مريحة للعين */}
        <div className="bg-white/75 backdrop-blur-md rounded-2xl p-10 max-w-3xl shadow-2xl mx-6 border border-white/50">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gold drop-shadow-sm">
            Hasan Group 
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gold-dark font-semibold tracking-wide">
            سيراميك • بورسلان • مغاسل • مرايا
          </p>
          <p className="text-lg mb-8 leading-relaxed text-gray-700">
            وجهتك الأولى لأفخم أنواع السيراميك والأدوات الصحية. نقدم لكم جودة عالية
            وتصاميم عصرية تناسب جميع الأذواق.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/products"
              className="bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              تصفح الكتالوج
            </Link>
            <Link
              to="/contact"
              className="bg-white border-2 border-gold text-gold-dark hover:bg-gold hover:text-white px-8 py-3 rounded-lg font-bold transition-all duration-300"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">من نحن</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-8 rounded"></div>
          <p className="text-lg leading-loose text-gray-600">
            تأسست شركة <span className="font-bold text-gold-dark">حسن غروب</span> لتكون رائدة في مجال توريد مستلزمات البناء والتشطيب.
            نحن متخصصون في توفير أفضل ماركات السيراميك والبورسلان والمغاسل والمرايا بأسعار تنافسية.
            هدفنا هو تحويل منزلك إلى تحفة فنية من خلال منتجاتنا المتنوعة وفريقنا المتخصص.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">أقسامنا</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-12 rounded"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'سيراميك', desc: 'أرضيات وجدران بتصاميم عصرية', path: '/ceramic' },
              { title: 'بورسلان', desc: 'متانة وفخامة تدوم طويلاً', path: '/porcelain' },
              { title: 'مغاسل', desc: 'أحدث الموديلات والأشكال', path: '/sinks' },
              { title: 'مرايا', desc: 'لمسات جمالية لإكمال ديكورك', path: '/mirrors' },
            ].map((cat) => (
              <Link
                key={cat.path}
                to={cat.path}
                className="bg-white p-8 rounded-xl text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-b-4 border-gold group"
              >
                <h3 className="text-2xl font-bold text-gold-dark mb-3 group-hover:text-gold transition">
                  {cat.title}
                </h3>
                <p className="text-gray-600">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ==========================================
// 2. باقي الصفحات
// ==========================================
function Products() {
  return (
    <div className="py-20 px-6 text-center min-h-[70vh]">
      <h1 className="text-4xl font-bold text-gold-dark mb-4">المنتجات</h1>
      <p className="text-gray-600">هنا سيتم عرض جميع المنتجات.</p>
    </div>
  );
}

function Porcelain() {
  return (
    <div className="py-20 px-6 text-center min-h-[70vh]">
      <h1 className="text-4xl font-bold text-gold-dark mb-4">بورسلان</h1>
      <p className="text-gray-600">قسم البورسلان.</p>
    </div>
  );
}

function Ceramic() {
  return (
    <div className="py-20 px-6 text-center min-h-[70vh]">
      <h1 className="text-4xl font-bold text-gold-dark mb-4">سيراميك</h1>
      <p className="text-gray-600">قسم السيراميك.</p>
    </div>
  );
}

function Sinks() {
  return (
    <div className="py-20 px-6 text-center min-h-[70vh]">
      <h1 className="text-4xl font-bold text-gold-dark mb-4">مغاسل</h1>
      <p className="text-gray-600">قسم المغاسل.</p>
    </div>
  );
}

function Mirrors() {
  return (
    <div className="py-20 px-6 text-center min-h-[70vh]">
      <h1 className="text-4xl font-bold text-gold-dark mb-4">مرايا</h1>
      <p className="text-gray-600">قسم المرايا.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="py-20 px-6 text-center min-h-[70vh]">
      <h1 className="text-4xl font-bold text-gold-dark mb-4">اتصل بنا</h1>
      <p className="text-gray-600">معلومات الاتصال بالشركة.</p>
    </div>
  );
}

// ==========================================
// 3. المكون الرئيسي مع التنقل
// ==========================================
function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center flex-wrap gap-4">
          <Link to="/" className="text-2xl font-bold text-gold-dark">
            حسن غروب <span className="text-gray-700 text-base font-normal">| Hasan Group</span>
          </Link>

          <ul className="flex flex-wrap gap-6 text-gray-700 font-semibold">
            <li><Link to="/" className="hover:text-gold transition">الرئيسية</Link></li>
            <li><Link to="/products" className="hover:text-gold transition">المنتجات</Link></li>
            <li><Link to="/porcelain" className="hover:text-gold transition">بورسلان</Link></li>
            <li><Link to="/ceramic" className="hover:text-gold transition">سيراميك</Link></li>
            <li><Link to="/sinks" className="hover:text-gold transition">مغاسل</Link></li>
            <li><Link to="/mirrors" className="hover:text-gold transition">مرايا</Link></li>
          </ul>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/porcelain" element={<Porcelain />} />
        <Route path="/ceramic" element={<Ceramic />} />
        <Route path="/sinks" element={<Sinks />} />
        <Route path="/mirrors" element={<Mirrors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-8 px-6">
        <p className="mb-2">© 2026 حسن غروب - جميع الحقوق محفوظة</p>
        <p className="text-sm">للاستفسار: 963 990748314+ | العنوان: سوريا - القطيفة , النبك , يبرود, ديرعطية</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
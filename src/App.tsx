import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Catalog from './Catalog';
import Contact from './Contact';


function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070')] bg-cover bg-center">
        <div className="bg-white/75 backdrop-blur-md rounded-2xl p-10 max-w-3xl shadow-2xl mx-6 border border-white/50">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gold drop-shadow-sm">
            Hasan Group
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gold-dark font-semibold tracking-wide">
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
            تأسست شركة <span className="font-bold text-gold-dark">Hasan Group</span> لتكون رائدة في مجال توريد مستلزمات البناء والتشطيب.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: 'بورسلان', desc: 'متانة وفخامة تدوم طويلاً', icon: '◼️', path: '/products' },
              { title: 'سيراميك', desc: 'أرضيات وجدران بتصاميم عصرية', icon: '🔲', path: '/products' },
              { title: 'صحية', desc: 'أطقم حمامات ومجالس ومغاسل', icon: '🚿', path: '/products' },
              { title: 'لاصق', desc: 'أجود أنواع اللاصق العالمي', icon: '🧴', path: '/products' },
              { title: 'روبة', desc: 'روبة عالية الجودة بجميع الأنواع', icon: '🪣', path: '/products' },
            ].map((cat) => (
              <Link
                key={cat.title}
                to={cat.path}
                className="bg-white p-8 rounded-xl text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-b-4 border-gold group"
              >
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="text-2xl font-bold text-gold-dark mb-3 group-hover:text-gold transition">
                  {cat.title}
                </h3>
                <p className="text-gray-600 text-sm">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center flex-wrap gap-4">
          {/* الشعار */}
          <Link to="/" className="text-2xl font-bold text-gold-dark">
            Hasan Group <span className="text-gray-700 text-base font-normal">| Hasan Group</span>
          </Link>

          {/* روابط التنقل + أيقونات التواصل */}
          <div className="flex items-center gap-6">
            <ul className="flex flex-wrap gap-6 text-gray-700 font-semibold">
              <li><Link to="/" className="hover:text-gold transition">الرئيسية</Link></li>
              <li><Link to="/products" className="hover:text-gold transition">المنتجات</Link></li>
            </ul>

            {/* أيقونات التواصل */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/19hFZh1RWz/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/hasan.group1?xtok=OW0zbmJlN2Z4OGJ1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Catalog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">Hasan Group</h3>
              <p className="text-sm leading-relaxed text-gray-400 mb-4">
                وجهتك الأولى لأفخم أنواع السيراميك والبورسلان والأدوات الصحية.
                نقدم لكم جودة عالية وتصاميم عصرية.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-4">تواصل معنا</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+963990748314" className="hover:text-[#D4AF37] transition" dir="ltr">
                    +963 990 748 314
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span>📍</span>
                  <span>سوريا - القطيفة - النبك - يبرود - ديرعطية</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#D4AF37] mb-4">تابعنا على</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/share/19hFZh1RWz/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/hasan.group1?xtok=OW0zbmJlN2Z4OGJ1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a
                  href="https://wa.me/963990748314"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="WhatsApp"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>

              <p className="text-xs text-gray-500 mt-6">
                للاستفسار السريع تواصل معنا عبر واتساب
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">
                © 2026 <span className="text-[#D4AF37] font-bold">Hasan Group </span> - جميع الحقوق محفوظة
              </p>
            </div>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
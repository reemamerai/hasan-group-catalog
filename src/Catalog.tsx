import { useState } from 'react';


const productsData = [
  // ---------- بورسلان ----------
  { id: 1, name: "بورسلان رخامي", category: "porcelain", size: "120×60", type: "لامع", image: "https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?w=600", description: "بورسلان فاخر بتصميم رخامي" },
  { id: 2, name: "بورسلان بيج", category: "porcelain", size: "120×60", type: "مت", image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?w=600", description: "بورسلان بتشطيب مطفي أنيق" },
  { id: 3, name: "بورسلان رمادي حفر", category: "porcelain", size: "120×60", type: "حفر", image: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?w=600", description: "بورسلان بملمس محفور" },
  { id: 4, name: "بورسلان أبيض", category: "porcelain", size: "60×60", type: "لامع", image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?w=600", description: "بورسلان أبيض لامع" },
  { id: 5, name: "بورسلان أسود", category: "porcelain", size: "60×60", type: "مت", image: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?w=600", description: "بورسلان أسود مطفي فاخر" },
  { id: 6, name: "بورسلان خشبي حفر", category: "porcelain", size: "120×40", type: "حفر", image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?w=600", description: "بورسلان بتصميم خشبي محفور" },

  // ---------- سيراميك ----------
  { id: 7, name: "سيراميك رخامي أبيض", category: "ceramic", size: "60×60", type: "لامع", image: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?w=600", description: "سيراميك أرضيات بتصميم رخامي" },
  { id: 8, name: "سيراميك بيج كلاسيك", category: "ceramic", size: "60×60", type: "مت", image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?w=600", description: "سيراميك كلاسيكي مطفي" },
  { id: 9, name: "سيراميك جدران خشبي", category: "ceramic", size: "30×60", type: "لامع", image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?w=600", description: "سيراميك جدران بتصميم خشبي" },
  { id: 10, name: "سيراميك رمادي", category: "ceramic", size: "30×60", type: "مت", image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?w=600", description: "سيراميك رمادي مطفي" },
  { id: 11, name: "سيراميك بيج صغير", category: "ceramic", size: "80×40", type: "لامع", image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?w=600", description: "سيراميك مقاس صغير لامع" },

  // ---------- صحية ----------
  { id: 12, name: "طقم حمام كامل", category: "sanitary", size: "-", type: "-", image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?w=600", description: "طقم حمامات كامل بتصميم عصري" },
  { id: 13, name: "مجلس ستالس فاخر", category: "sanitary", size: "-", type: "-", image: "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?w=600", description: "مجلس ستالس فاخر" },
  { id: 14, name: "مغسلة زجاج شفاف", category: "sanitary", size: "-", type: "-", image: "https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?w=600", description: "مغسلة زجاج شفاف" },

  // ---------- لاصق ----------
  { id: 15, name: "لاصق نهر", category: "adhesive", size: "-", type: "-", image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?w=600", description: "لاصق نهر عالي الجودة" },
  { id: 16, name: "لاصق روكسي", category: "adhesive", size: "-", type: "-", image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?w=600", description: "لاصق روكسي الأصلي" },
  { id: 17, name: "لاصق بولي فكس إماراتي", category: "adhesive", size: "-", type: "-", image: "https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg?w=600", description: "لاصق بولي فكس إماراتي" },

  // ---------- روبة ----------
  { id: 18, name: "روبة نهر", category: "grout", size: "-", type: "-", image: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?w=600", description: "روبة نهر عالية الجودة" },
  { id: 19, name: "روبة فيترا بني", category: "grout", size: "-", type: "-", image: "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?w=600", description: "روبة فيترا بني" },
  { id: 20, name: "روبة تركي مطاطي", category: "grout", size: "-", type: "-", image: "https://images.pexels.com/photos/1249610/pexels-photo-1249610.jpeg?w=600", description: "روبة تركي مطاطي" },
];

const categoryNames: { [key: string]: string } = {
  porcelain: 'بورسلان',
  ceramic: 'سيراميك',
  sanitary: 'صحية',
  adhesive: 'لاصق',
  grout: 'روبة',
};

// مكون الكتالوج
function Catalog() {
  const [category, setCategory] = useState('all');
  const [size, setSize] = useState('all');
  const [type, setType] = useState('all');

  const categories = [
    { key: 'all', label: 'الكل', icon: '🏠' },
    { key: 'porcelain', label: 'بورسلان', icon: '◼️' },
    { key: 'ceramic', label: 'سيراميك', icon: '🔲' },
    { key: 'sanitary', label: 'صحية', icon: '🚿' },
    { key: 'adhesive', label: 'لاصق', icon: '🧴' },
    { key: 'grout', label: 'روبة', icon: '🪣' },
  ];

  const sizes = ['all', '60×60', '30×60', '80×40', '120×60', '120×40', '120×240'];
  const types = ['all', 'لامع', 'مت', 'حفر'];

  const showSizeAndType = category === 'porcelain' || category === 'ceramic';

  const filteredProducts = productsData.filter((p) => {
    if (category !== 'all' && p.category !== category) return false;
    if (showSizeAndType) {
      if (size !== 'all' && p.size !== size) return false;
      if (type !== 'all' && p.type !== type) return false;
    }
    return true;
  });

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    setSize('all');
    setType('all');
  };

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-amber-50 via-white to-amber-50">
      {/* ============================================ */}
      {/* هيدر مخصص */}
      {/* ============================================ */}
      <div className="relative py-20 px-6 text-center bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100 overflow-hidden">
        {/* زخرفة خلفية */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 border-4 border-amber-600 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-amber-600 rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-amber-700 tracking-[0.3em] text-sm mb-4 font-semibold">
            HASAN GROUP
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            كتالوج <span className="text-[#D4AF37]">منتجاتنا</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#D4AF37]"></div>
            <span className="text-[#D4AF37] text-2xl">✦</span>
            <div className="h-px w-16 bg-[#D4AF37]"></div>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            تصفح مجموعتنا المختارة من السيراميك والبورسلان والأدوات الصحية
            بأفضل جودة وأرقى التصاميم
          </p>
        </div>
      </div>

      {/* ============================================ */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* فلتر القسم */}
        <div className="mb-8 text-center">
          <p className="text-xs font-bold text-amber-700 tracking-widest mb-4">
            ─ اختر القسم ─
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => handleCategoryChange(c.key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  category === c.key
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white shadow-xl scale-105'
                    : 'bg-white text-gray-700 hover:bg-amber-50 border-2 border-amber-200 hover:border-[#D4AF37]'
                }`}
              >
                <span>{c.icon}</span>
                <span>{c.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* فلاتر المقاس والنوع */}
        {showSizeAndType && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 mb-10">
            <div className="grid md:grid-cols-2 gap-6">
              {/* المقاس */}
              <div>
                <p className="text-xs font-bold text-amber-700 tracking-widest mb-3">
                  ─ المقاس ─
                </p>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                        size === s
                          ? 'bg-[#D4AF37] text-white shadow-md'
                          : 'bg-gray-50 text-gray-700 hover:bg-amber-50 border border-gray-200'
                      }`}
                    >
                      {s === 'all' ? 'الكل' : s}
                    </button>
                  ))}
                </div>
              </div>

              {/* النوع */}
              <div>
                <p className="text-xs font-bold text-amber-700 tracking-widest mb-3">
                  ─ النوع ─
                </p>
                <div className="flex flex-wrap gap-2">
                  {types.map((t) => (
                    <button
                      key={t}
                      onClick={() => setType(t)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                        type === t
                          ? 'bg-[#D4AF37] text-white shadow-md'
                          : 'bg-gray-50 text-gray-700 hover:bg-amber-50 border border-gray-200'
                      }`}
                    >
                      {t === 'all' ? 'الكل' : t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* عدد النتائج */}
        <p className="text-center text-gray-500 text-sm mb-8">
          عدد المنتجات: <span className="font-bold text-[#D4AF37]">{filteredProducts.length}</span>
        </p>

        {/* ============================================ */}
        {/* ============================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-amber-100 hover:border-[#D4AF37] hover:-translate-y-2"
            >
              {/* الصورة */}
              <div className="relative overflow-hidden h-64 bg-amber-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg">
                  {categoryNames[product.category]}
                </div>

                {product.size !== '-' && (
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur text-gray-800 text-xs px-3 py-1.5 rounded-full font-bold shadow-lg border border-amber-200">
                    {product.size}
                  </div>
                )}
              </div>

              {/* المحتوى */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#B8860B] transition-colors duration-300">
                  {product.name}
                </h3>

                {product.type !== '-' && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                    <p className="text-xs text-amber-700 font-bold tracking-wider">
                      {product.type}
                    </p>
                  </div>
                )}

                <p className="text-sm text-gray-500 mb-5 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                <a
                  href={`https://wa.me/963990748314?text=مرحباً، أريد الاستفسار عن: ${product.name} (${product.size})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#B8860B] hover:to-[#8B6914] text-white text-sm px-4 py-2.5 rounded-xl transition-all duration-300 font-bold shadow-md hover:shadow-xl"
                >
                  💬 استفسر عبر واتساب
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* لا توجد نتائج */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">🔍</p>
            <p className="text-gray-500 text-lg">
              لا توجد منتجات بهذه المواصفات حالياً.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Catalog;
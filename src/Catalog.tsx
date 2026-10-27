import { useState, useEffect } from 'react';

const SHEET_ID = '1u0DEJZB06057hRMqhvbiAS3PrxgEYkRiN3PG4zcA4nA';

function Catalog() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [category, setCategory] = useState('all');
  const [size, setSize] = useState('all');
  const [subcategory, setSubcategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://opensheet.elk.sh/${SHEET_ID}/Sheet1`);
        const data = await res.json();
        
        const cleanedData = data.map((item: any) => {
          // البحث عن القسم في كل الأعمدة المحتملة
          const cat = (item.type || item.category || '').trim();
          const sub = (item.subcategory || '').trim();
          const desc = (item.description || '').trim();
          
          // إذا كان القسم فارغاً، نحاول البحث في الوصف
          let finalCat = cat;
          if (!finalCat) {
            if (desc.includes('لاصق') || desc.includes('نهر') || desc.includes('روكس') || desc.includes('فكس')) {
              finalCat = 'adhesive';
            } else if (desc.includes('روبة') || desc.includes('كونكس') || desc.includes('فيترا')) {
              finalCat = 'grout';
            }
          }

          // البحث عن المقاس
          let finalSize = (item.size || '').trim();
          if (!finalSize && cat.includes('*')) {
            finalSize = cat;
          }

          return {
            ...item,
            categoryName: finalCat,
            sizeName: finalSize,
            subcategoryName: sub,
            fullDescription: desc || 'منتج عالي الجودة',
          };
        });
        
        setProducts(cleanedData);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const uniqueSubcategories = ['all', ...new Set(
    products.filter(p => p.categoryName.includes('sanitary')).map(p => p.subcategoryName).filter(Boolean)
  )];
const uniqueSizes = ['all', ...new Set(
  products
    .filter(p => p.categoryName.includes(category)) // ← نفلتر حسب القسم الحالي
    .map(p => p.sizeName)
    .filter(Boolean)
)];

  const categories = [
    { key: 'all', label: 'الكل', icon: '🏠' },
    { key: 'porcelain', label: 'بورسلان', icon: '◼️' },
    { key: 'ceramic', label: 'سيراميك', icon: '🔲' },
    { key: 'sanitary', label: 'صحية', icon: '🚿' },
    { key: 'adhesive_grout', label: 'لاصق وروبة', icon: '🧴' },
  ];

  const showSize = category === 'ceramic' || category === 'porcelain';
  const showSubcategory = category === 'sanitary';

  const filteredProducts = products.filter((p) => {
    // 1. فلترة القسم
    if (category !== 'all') {
      if (category === 'adhesive_grout') {
        if (!p.categoryName.includes('adhesive') && !p.categoryName.includes('grout')) return false;
      } else if (!p.categoryName.includes(category)) {
        return false;
      }
    }

    // 2. فلترة القسم الفرعي
    if (showSubcategory && subcategory !== 'all') {
      if (!p.subcategoryName || !p.subcategoryName.includes(subcategory)) return false;
    }

    // 3. فلترة المقاس
    if (showSize && size !== 'all') {
      if (!p.sizeName || !p.sizeName.includes(size)) return false;
    }

    return true;
  });

  const getImageUrl = (url: string) => {
    if (!url) return 'https://via.placeholder.com/400x400?text=No+Image';
    return url;
  };

  if (loading) return <div className="text-center py-20 text-xl font-bold text-gold">جاري تحميل المنتجات...</div>;

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-amber-50 via-white to-amber-50 relative">
      {/* الهيدر */}
      <div className="relative py-20 px-6 text-center bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100 overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-amber-700 tracking-[0.3em] text-sm mb-4 font-semibold">HASAN GROUP</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            كتالوج <span className="text-[#D4AF37]">منتجاتنا</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* أزرار الأقسام */}
        <div className="mb-8 text-center">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => { setCategory(c.key); setSize('all'); setSubcategory('all'); }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  category === c.key
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white shadow-xl scale-105'
                    : 'bg-white text-gray-700 hover:bg-amber-50 border-2 border-amber-200'
                }`}
              >
                <span>{c.icon}</span>
                <span>{c.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* فلاتر المقاسات */}
        {showSize && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 mb-10">
            <p className="text-xs font-bold text-amber-700 tracking-widest mb-3">─ المقاس ─</p>
            <div className="flex flex-wrap gap-2">
              {uniqueSizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    size === s ? 'bg-[#D4AF37] text-white' : 'bg-gray-50 text-gray-700 border'
                  }`}
                >
                  {s === 'all' ? 'الكل' : s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* فلاتر الأقسام الفرعية */}
        {showSubcategory && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 mb-10">
            <p className="text-xs font-bold text-amber-700 tracking-widest mb-3">─ اختر النوع ─</p>
            <div className="flex flex-wrap gap-2">
              {uniqueSubcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSubcategory(sub)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    subcategory === sub ? 'bg-[#D4AF37] text-white' : 'bg-gray-50 text-gray-700 border'
                  }`}
                >
                  {sub === 'all' ? 'الكل' : sub}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* عدد النتائج */}
        <p className="text-center text-gray-500 text-sm mb-8">
          عدد المنتجات: <span className="font-bold text-[#D4AF37]">{filteredProducts.length}</span>
        </p>

        {/* شبكة المنتجات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedProduct(product)}
              className="cursor-pointer group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-amber-100 hover:border-[#D4AF37] hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64 bg-amber-50">
                <img
                  src={getImageUrl(product.image)}
                  alt={product.code}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-[#D4AF37] text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg">
                  {product.categoryName}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{product.code || 'بدون كود'}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{product.fullDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

            {/* النافذة المنبثقة */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}>
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto relative flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 left-4 z-10 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-200 transition"
            >
              ✕
            </button>
            
            {/* جزء الصورة */}
            <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-4">
              <img 
                src={getImageUrl(selectedProduct.image)} 
                alt={selectedProduct.code} 
                className="w-full h-auto max-h-[50vh] md:max-h-[80vh] object-contain rounded-lg" 
              />
            </div>

            {/* جزء التفاصيل */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <span className="text-sm font-bold text-[#D4AF37] bg-amber-50 px-3 py-1 rounded-full w-fit mb-4">
                {selectedProduct.subcategoryName || selectedProduct.categoryName}
              </span>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedProduct.code}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">{selectedProduct.fullDescription}</p>
              <a
                href={`https://wa.me/963996604258?text=مرحباً، أريد الاستفسار عن: ${selectedProduct.code}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white px-6 py-4 rounded-xl transition-all duration-300 font-bold shadow-lg hover:shadow-xl text-lg"
              >
                💬 استفسر عبر واتساب
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Catalog;
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // ⚠️ استبدلي هذه القيم بمفاتيح EmailJS الخاصة بك
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    }, PUBLIC_KEY)
    .then(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
      alert('حدث خطأ، يرجى المحاولة مرة أخرى.');
    });
  };

  return (
    <div className="py-16 px-6 bg-gray-50 min-h-[80vh]">
      <div className="max-w-6xl mx-auto">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">تواصل معنا</h1>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded"></div>
          <p className="text-gray-600 mt-6">نحن هنا لخدمتك، تواصل معنا عبر أي وسيلة تناسبك</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* معلومات التواصل */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md border-r-4 border-[#D4AF37]">
              <div className="flex items-start gap-4">
                <div className="bg-amber-50 p-3 rounded-full">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">الهاتف</h3>
                  <a href="tel:+963990748314" className="text-[#B8860B] hover:underline" dir="ltr">
                    +963 990 748 314
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-r-4 border-[#D4AF37]">
              <div className="flex items-start gap-4">
                <div className="bg-amber-50 p-3 rounded-full">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">واتساب</h3>
                  <a
                    href="https://wa.me/963990748314"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B8860B] hover:underline"
                  >
                    تحدث معنا مباشرة
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-r-4 border-[#D4AF37]">
              <div className="flex items-start gap-4">
                <div className="bg-amber-50 p-3 rounded-full">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">العنوان</h3>
                  <p className="text-gray-600">سوريا - القطيفة - النبك - يبرود - ديرعطية</p>
                </div>
              </div>
            </div>

            {/* زر انضم إلينا */}
            <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-xl p-6 shadow-md text-white text-center">
              <h3 className="font-bold text-xl mb-2">هل تريد الانضمام إلينا؟</h3>
              <p className="text-sm mb-4 opacity-90">نبحث دائماً عن مواهب جديدة للعمل معنا</p>
              <a
  href="mailto:hasangroup.ceramic@gmail.com?subject=طلب انضمام إلى فريق حسن غروب&body=مرحباً،%0A%0Aأرغب في الانضمام إلى فريقكم.%0A%0Aالاسم:%0Aالبريد:%0Aرقم الهاتف:%0Aالسيرة الذاتية (مرفقة):"
  className="inline-block bg-white text-[#B8860B] font-bold px-6 py-2 rounded-lg hover:bg-gray-100 transition"
>
  انضم إلينا الآن
</a>
            </div>
          </div>

          {/* نموذج التواصل */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">أرسل لنا رسالة</h2>

            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
                ✅ تم استلام رسالتك، سنتواصل معك قريباً!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">الاسم الكامل</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none transition"
                  placeholder="اكتب اسمك"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none transition"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none transition"
                  placeholder="+963..."
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">الرسالة</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none transition resize-none"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#B8860B] hover:to-[#8B6914] text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
              >
                {loading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
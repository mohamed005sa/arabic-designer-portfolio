# دليل النشر | Deployment Guide

<div dir="rtl">

## 🚀 خيارات النشر المتاحة

### 1. النشر المجاني

#### أ) Vercel (للواجهة الأمامية)
1. **إنشاء حساب على Vercel**: https://vercel.com
2. **ربط مستودع GitHub**
3. **تكوين المشروع**:
   ```bash
   Build Command: cd frontend && yarn build
   Output Directory: frontend/build
   ```
4. **متغيرات البيئة**:
   ```
   REACT_APP_BACKEND_URL=https://your-backend-url.com
   ```

#### ب) Railway (للمشروع الكامل)
1. **إنشاء حساب على Railway**: https://railway.app
2. **ربط مستودع GitHub**
3. **إنشاء خدمات منفصلة**:
   - Frontend Service
   - Backend Service  
   - MongoDB Database

#### ج) Netlify (للواجهة الأمامية فقط)
1. **إنشاء حساب على Netlify**: https://netlify.com
2. **رفع مجلد build** بعد تشغيل `yarn build`
3. **تكوين redirects** في `public/_redirects`:
   ```
   /*    /index.html   200
   ```

### 2. النشر المدفوع

#### أ) DigitalOcean App Platform
- **السعر**: من $5 شهرياً
- **المميزات**: Backend + Frontend + Database
- **التكوين**: Docker containers

#### ب) AWS (Amazon Web Services)
- **الخدمات**: EC2, S3, RDS
- **التعقيد**: متقدم
- **التكلفة**: حسب الاستخدام

## 📝 تجهيز المشروع للنشر

### 1. تجهيز الواجهة الأمامية
```bash
cd frontend
yarn install
yarn build
```

### 2. تجهيز الخلفية
```bash
cd backend
pip install -r requirements.txt
```

### 3. قاعدة البيانات

#### MongoDB Atlas (مجاني)
1. **إنشاء حساب**: https://cloud.mongodb.com
2. **إنشاء Cluster مجاني**
3. **الحصول على Connection String**
4. **تحديث متغير البيئة**:
   ```
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/database
   ```

## 🔧 ملفات التكوين

### Frontend Environment
```env
# frontend/.env.production
REACT_APP_BACKEND_URL=https://your-backend-url.com
```

### Backend Environment  
```env
# backend/.env
MONGO_URL=mongodb+srv://user:pass@cluster.mongodb.net/db
DB_NAME=designer_portfolio
```

### Package.json Scripts
```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "deploy": "yarn build && serve -s build"
  }
}
```

## 🌐 إعداد النطاق المخصص

### 1. شراء النطاق
- **GoDaddy**, **Namecheap**, **Google Domains**

### 2. ربط النطاق
- **Vercel**: إضافة النطاق في Dashboard
- **Netlify**: إعدادات Domain Management
- **Railway**: Custom Domains في الإعدادات

### 3. شهادة SSL
- **تلقائية** في معظم منصات الاستضافة المجانية

## 📊 مراقبة الأداء

### 1. Google Analytics
```html
<!-- في public/index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
```

### 2. Performance Monitoring
- **Vercel Analytics**
- **Netlify Analytics**  
- **Google PageSpeed Insights**

## 🔒 الأمان

### 1. متغيرات البيئة
- **لا تضع** مفاتيح API في الكود
- **استخدم** متغيرات البيئة دائماً

### 2. CORS Configuration
```python
# في backend/server.py
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://your-domain.com"],  # محدد بدلاً من "*"
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)
```

### 3. Rate Limiting
```python
# إضافة محدد معدل الطلبات
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address

limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
```

## ⚡ تحسين الأداء

### 1. تحسين الصور
```bash
# ضغط الصور قبل الرفع
npm install -g imagemin-cli
imagemin images/* --out-dir=images/optimized
```

### 2. Code Splitting
```javascript
// تحميل كسول للمكونات
const Projects = React.lazy(() => import('./components/Projects'));
```

### 3. PWA Configuration
```json
// في public/manifest.json
{
  "name": "مصمم جرافيك عربي",
  "short_name": "المصمم",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#0a1535",
  "background_color": "#ffffff"
}
```

## 🐛 استكشاف الأخطاء

### 1. مشاكل شائعة
- **CORS Error**: تحقق من إعدادات CORS
- **404 على المسارات**: إعداد redirects صحيح
- **بطء التحميل**: تحسين الصور والخطوط

### 2. أدوات التشخيص
- **Browser DevTools**
- **Lighthouse** لقياس الأداء
- **Vercel/Netlify Logs** لأخطاء النشر

## 📞 الدعم الفني

### 1. المراجع المفيدة
- **Vercel Docs**: https://vercel.com/docs
- **Railway Docs**: https://docs.railway.app
- **MongoDB Atlas**: https://docs.atlas.mongodb.com

### 2. مجتمعات المطورين
- **Stack Overflow** للأسئلة التقنية
- **GitHub Issues** لمشاكل محددة
- **Discord Communities** للمساعدة السريعة

</div>
# موقع مصمم جرافيك عربي | Arabic Graphic Designer Portfolio

<div dir="rtl">

## 🎨 وصف المشروع

موقع شخصي احترافي لمصمم جرافيك متخصص في:
- تصميم الهوية البصرية
- تصميم وسائل التواصل الاجتماعي  
- التصميم الإعلاني
- تصميم المطبوعات

## ✨ المميزات

### 🖥️ الواجهة الأمامية (Frontend)
- **التقنيات المستخدمة**: React.js, Tailwind CSS, Shadcn/ui
- **اللغة**: دعم كامل للغة العربية مع RTL
- **التصميم**: تصميم متجاوب وحديث
- **الخطوط**: خط Cairo العربي الجميل
- **الألوان**: نظام ألوان مخصص (#d3af35, #0a1535, #0d46ba)

### ⚙️ الخلفية (Backend)
- **التقنيات المستخدمة**: FastAPI, MongoDB, Motor
- **قاعدة البيانات**: MongoDB مع دعم النصوص العربية
- **الأمان**: CORS middleware, Data validation
- **واجهات برمجة التطبيقات**: RESTful APIs

### 📊 قاعدة البيانات
- **Projects**: إدارة المشاريع والأعمال
- **Contact Messages**: رسائل العملاء والاستفسارات
- **Site Configuration**: إعدادات الموقع العامة

</div>

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- Python 3.8+
- MongoDB

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/arabic-designer-portfolio.git
cd arabic-designer-portfolio
```

### 2. Frontend Setup
```bash
cd frontend
yarn install
```

### 3. Backend Setup
```bash
cd backend
pip install -r requirements.txt
```

### 4. Environment Variables

**Frontend (.env)**
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

**Backend (.env)**
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=designer_portfolio
```

### 5. Run the Application

**Start Backend:**
```bash
cd backend
python -m uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

**Start Frontend:**
```bash
cd frontend
yarn start
```

## 📁 Project Structure

```
arabic-designer-portfolio/
├── frontend/                 # React Frontend
│   ├── src/
│   │   ├── components/      # React Components
│   │   │   ├── ui/         # Shadcn UI Components
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── hooks/          # Custom Hooks
│   │   ├── App.js
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
├── backend/                 # FastAPI Backend
│   ├── server.py           # Main Server File
│   ├── requirements.txt    # Python Dependencies
│   └── .env               # Environment Variables
├── contracts.md           # API Documentation
└── README.md             # This File
```

## 🛠️ API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects?category={category}` - Filter by category
- `GET /api/projects/{id}` - Get single project
- `GET /api/categories` - Get available categories

### Contact
- `POST /api/contact` - Submit contact form

### Configuration
- `GET /api/config` - Get site configuration

## 🎨 Customization Guide

<div dir="rtl">

### تعديل الألوان
في ملف `/frontend/src/index.css`:
```css
:root {
  --color-primary: #d3af35;    /* الذهبي */
  --color-secondary: #0a1535;  /* الأزرق الداكن */
  --color-accent: #0d46ba;     /* الأزرق الملكي */
}
```

### تعديل النصوص
- **العنوان الرئيسي**: `/frontend/src/components/Hero.jsx`
- **نبذة عن المطور**: `/frontend/src/components/About.jsx`
- **معلومات التواصل**: `/backend/server.py` (في init_default_data)

### إضافة مشاريع جديدة
1. **عبر قاعدة البيانات**: أضف المشاريع مباشرة في MongoDB
2. **عبر الكود**: عدّل في `/backend/server.py` في دالة `init_default_data`

### تعديل وسائل التواصل
في ملف `/backend/server.py` في `default_config`:
```python
"social_links": {
    "instagram": "https://instagram.com/your_username",
    "twitter": "https://twitter.com/your_username",
    "linkedin": "https://linkedin.com/in/your_username",
    "facebook": "https://facebook.com/your_username"
}
```

</div>

## 🔧 Development

### Adding New Components
1. Create component in `/frontend/src/components/`
2. Import and use in `App.js`
3. Follow RTL and Arabic text guidelines

### Database Schema
- **Projects**: title, description, category, image, tags, client, year
- **Contact Messages**: name, email, subject, message, status
- **Site Config**: designer info, social links, specializations

## 📱 Responsive Design
- Mobile-first approach
- Supports all screen sizes
- RTL layout optimization
- Touch-friendly interfaces

## 🌐 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
yarn build
# Upload dist folder to hosting service
```

### Backend (Railway/Heroku)
```bash
cd backend
# Follow platform-specific deployment guide
```

### Database (MongoDB Atlas)
- Create free cluster on MongoDB Atlas
- Update connection string in backend/.env

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing
Feel free to submit issues and enhancement requests!

## 📞 Support
For questions and support, please contact: [your-email@example.com]

---

<div dir="rtl">

## 🎯 ملاحظات مهمة

1. **الخطوط**: تأكد من تحميل خط Cairo للعربية
2. **الاتجاه**: جميع النصوص العربية تدعم RTL
3. **قاعدة البيانات**: تأكد من تشغيل MongoDB قبل البدء
4. **المتصفح**: يعمل بشكل أفضل على المتصفحات الحديثة

## 🚀 البدء السريع

```bash
# استنساخ المشروع
git clone [repository-url]

# تشغيل الخلفية
cd backend && python server.py

# تشغيل الواجهة الأمامية  
cd frontend && yarn start

# فتح المتصفح على http://localhost:3000
```

</div>
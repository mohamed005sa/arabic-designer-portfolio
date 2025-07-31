# إعداد GitHub | GitHub Setup Guide

<div dir="rtl">

## 🚀 خطوات رفع المشروع على GitHub

### 1. إنشاء مستودع GitHub جديد

1. **انتقل إلى GitHub**: https://github.com
2. **اضغط على "New Repository"**
3. **املأ البيانات**:
   - **Repository name**: `arabic-designer-portfolio`
   - **Description**: `موقع شخصي لمصمم جرافيك عربي - Arabic Graphic Designer Portfolio`
   - **Public/Private**: اختر حسب تفضيلك
   - **لا تضع** ✅ في Add README (لدينا README جاهز)

### 2. تحضير المشروع للرفع

```bash
# إنشاء مجلد المشروع
mkdir arabic-designer-portfolio
cd arabic-designer-portfolio

# تهيئة Git
git init
```

### 3. إضافة ملفات المشروع

انسخ جميع الملفات التالية إلى مجلد المشروع:

```
arabic-designer-portfolio/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.js
│   └── craco.config.js
├── backend/
│   ├── server.py
│   ├── requirements.txt
│   └── .env.example
├── README.md
├── .gitignore
├── DEPLOYMENT.md
└── contracts.md
```

### 4. إنشاء ملف .env.example

```bash
# في مجلد backend
cp .env .env.example
```

**عدّل .env.example** ليحتوي على:
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=designer_portfolio
```

### 5. رفع المشروع

```bash
# إضافة جميع الملفات
git add .

# أول commit
git commit -m "🎨 Initial commit: Arabic Graphic Designer Portfolio

Features:
- Arabic RTL support with Cairo font
- React frontend with Tailwind CSS
- FastAPI backend with MongoDB
- Complete portfolio sections (Hero, About, Projects, Contact)
- Admin panel ready
- Mobile responsive design

تطبيق ويب لمصمم جرافيك عربي مع دعم كامل للغة العربية"

# ربط المستودع المحلي بـ GitHub
git remote add origin https://github.com/YOUR_USERNAME/arabic-designer-portfolio.git

# رفع الكود
git push -u origin main
```

### 6. إعداد Branches للتطوير

```bash
# إنشاء branch للتطوير
git checkout -b development

# إنشاء branch للميزات الجديدة
git checkout -b feature/new-features

# العودة للـ main branch
git checkout main
```

</div>

---

## 🔧 GitHub Actions (CI/CD) - اختياري

### إنشاء ملف Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
        
    - name: Install dependencies
      run: |
        cd frontend
        yarn install
        
    - name: Build project
      run: |
        cd frontend
        yarn build
        
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📁 هيكل المستودع النهائي

```
arabic-designer-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── hooks/
│   │   ├── App.js
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
├── backend/
│   ├── server.py
│   ├── requirements.txt
│   └── .env.example
├── README.md
├── DEPLOYMENT.md
├── .gitignore
└── contracts.md
```

## 🌟 إضافات مفيدة للمستودع

### 1. إضافة Topics

في صفحة المستودع على GitHub، أضف topics:
- `arabic`
- `portfolio`  
- `graphic-design`
- `react`
- `fastapi`
- `mongodb`
- `rtl-support`

### 2. إضافة License

إنشاء ملف `LICENSE`:
```
MIT License

Copyright (c) 2024 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy...
```

### 3. إضافة Issues Templates

```markdown
<!-- .github/ISSUE_TEMPLATE/bug_report.md -->
---
name: Bug Report
about: Create a report to help us improve
title: ''
labels: bug
assignees: ''
---

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.
```

## 📞 الخطوات التالية

<div dir="rtl">

بعد رفع المشروع على GitHub:

1. **شارك الرابط** مع الآخرين
2. **اربط مع خدمات الاستضافة** (Vercel, Netlify)
3. **أضف مساهمين** إذا كنت تعمل في فريق
4. **استخدم Issues** لتتبع التحسينات المطلوبة
5. **أنشئ Pull Requests** للميزات الجديدة

### أوامر Git المفيدة

```bash
# تحديث المشروع
git add .
git commit -m "✨ Add new feature"
git push

# إنشاء branch جديد
git checkout -b feature/contact-form-improvements

# دمج التغييرات
git checkout main
git merge feature/contact-form-improvements

# حذف branch بعد الدمج
git branch -d feature/contact-form-improvements
```

</div>

## 🎯 نصائح مهمة

1. **لا ترفع ملفات .env** (موجودة في .gitignore)
2. **استخدم رسائل commit واضحة** بالعربية والإنجليزية
3. **أنشئ branches منفصلة** للميزات الجديدة
4. **راجع الكود** قبل الـ merge
5. **وثّق التغييرات** في README.md

---

**مبروك! 🎉 مشروعك الآن على GitHub وجاهز للمشاركة والتطوير!**
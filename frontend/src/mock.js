// Mock data for the Arabic graphic designer portfolio

export const mockProjects = [
  {
    id: 1,
    title: 'هوية بصرية لمطعم راقي',
    description: 'تصميم هوية بصرية متكاملة لمطعم راقي تشمل الشعار، القوائم، والمواد التسويقية',
    category: 'الهوية البصرية',
    image: 'https://via.placeholder.com/400x300/0a1535/d3af35?text=Restaurant+Brand',
    tags: ['شعار', 'هوية بصرية', 'مطبوعات'],
    status: 'مكتمل',
    client: 'مطعم الأصالة',
    year: '2024'
  },
  {
    id: 2,
    title: 'حملة تسويقية لوسائل التواصل',
    description: 'تصميم مجموعة من المنشورات الإبداعية لحملة تسويقية على وسائل التواصل الاجتماعي',
    category: 'وسائل التواصل',
    image: 'https://via.placeholder.com/400x300/0d46ba/ffffff?text=Social+Media+Campaign',
    tags: ['انستغرام', 'فيسبوك', 'تسويق رقمي'],
    status: 'مكتمل',
    client: 'شركة التسويق الرقمي',
    year: '2024'
  },
  {
    id: 3,
    title: 'تصميم شعار وهوية تجارية',
    description: 'إنشاء شعار مميز وهوية بصرية كاملة لشركة تقنية ناشئة',
    category: 'الهوية البصرية',
    image: 'https://via.placeholder.com/400x300/d3af35/0a1535?text=Tech+Logo+Design',
    tags: ['شعار', 'هوية تجارية', 'تقنية'],
    status: 'مكتمل',
    client: 'شركة التقنية المتقدمة',
    year: '2023'
  },
  {
    id: 4,
    title: 'منشورات إبداعية لمتجر أزياء',
    description: 'سلسلة من المنشورات الإبداعية والجذابة لعرض مجموعة أزياء جديدة',
    category: 'وسائل التواصل',
    image: 'https://via.placeholder.com/400x300/0a1535/d3af35?text=Fashion+Posts',
    tags: ['أزياء', 'تصوير المنتجات', 'تصميم إعلاني'],
    status: 'مكتمل',
    client: 'متجر الأناقة',
    year: '2024'
  },
  {
    id: 5,
    title: 'تصميم كتالوج منتجات',
    description: 'تصميم كتالوج أنيق وجذاب لعرض مجموعة منتجات شركة تجميل',
    category: 'مطبوعات',
    image: 'https://via.placeholder.com/400x300/0d46ba/ffffff?text=Product+Catalog',
    tags: ['كتالوج', 'تجميل', 'مطبوعات'],
    status: 'مكتمل',
    client: 'شركة الجمال الطبيعي',
    year: '2023'
  },
  {
    id: 6,
    title: 'هوية بصرية لمقهى عصري',
    description: 'تطوير هوية بصرية شاملة لمقهى عصري تشمل التصميم الداخلي والخارجي',
    category: 'الهوية البصرية',
    image: 'https://via.placeholder.com/400x300/d3af35/0a1535?text=Cafe+Branding',
    tags: ['مقهى', 'تصميم داخلي', 'علامة تجارية'],
    status: 'مكتمل',
    client: 'مقهى الإبداع',
    year: '2024'
  }
];

export const mockContactInfo = {
  name: 'محمد أحمد - مصمم جرافيك',
  email: 'designer@example.com',
  phone: '+966 50 123 4567',
  location: 'الرياض، المملكة العربية السعودية',
  specializations: [
    'تصميم الهوية البصرية',
    'تصميم وسائل التواصل الاجتماعي', 
    'التصميم الإعلاني',
    'تصميم المطبوعات'
  ],
  experience: '5+ سنوات',
  projectsCompleted: '200+',
  clientsSatisfied: '150+'
};

export const mockSocialLinks = {
  instagram: 'https://instagram.com/designer',
  twitter: 'https://twitter.com/designer',
  linkedin: 'https://linkedin.com/in/designer',
  facebook: 'https://facebook.com/designer',
  behance: 'https://behance.net/designer',
  dribbble: 'https://dribbble.com/designer'
};

export const mockSkills = [
  { name: 'Adobe Photoshop', level: 95 },
  { name: 'Adobe Illustrator', level: 90 },
  { name: 'Adobe InDesign', level: 85 },
  { name: 'Adobe After Effects', level: 80 },
  { name: 'Figma', level: 88 },
  { name: 'Canva Pro', level: 92 }
];

export const mockTestimonials = [
  {
    id: 1,
    name: 'سارة محمد',
    position: 'مديرة التسويق',
    company: 'شركة الإبداع التجاري',
    testimonial: 'تصاميم رائعة ومهنية عالية. محمد مصمم مبدع يفهم احتياجات العميل ويحولها إلى تصاميم مذهلة.',
    rating: 5
  },
  {
    id: 2,
    name: 'أحمد خالد',
    position: 'صاحب مطعم',
    company: 'مطعم الأصالة',
    testimonial: 'ساعدني في إنشاء هوية بصرية مميزة لمطعمي. النتيجة فاقت توقعاتي بكثير.',
    rating: 5
  },
  {
    id: 3,
    name: 'فاطمة عبدالله',
    position: 'مؤسسة شركة ناشئة',
    company: 'شركة التقنية المتقدمة',
    testimonial: 'محترف في عمله ويلتزم بالمواعيد. أنصح بالتعامل معه لأي مشروع تصميم.',
    rating: 5
  }
];

// Mock API functions (these will be replaced with real API calls later)
export const mockAPI = {
  getProjects: () => Promise.resolve(mockProjects),
  getProjectsByCategory: (category) => {
    const filtered = category === 'الكل' 
      ? mockProjects 
      : mockProjects.filter(project => project.category === category);
    return Promise.resolve(filtered);
  },
  getContactInfo: () => Promise.resolve(mockContactInfo),
  getSocialLinks: () => Promise.resolve(mockSocialLinks),
  getSkills: () => Promise.resolve(mockSkills),
  getTestimonials: () => Promise.resolve(mockTestimonials),
  submitContactForm: (formData) => {
    // Mock form submission
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'تم إرسال الرسالة بنجاح!'
        });
      }, 1000);
    });
  }
};
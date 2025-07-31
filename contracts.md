# API Contracts - Arabic Graphic Designer Portfolio

## Overview
This document outlines the API contracts for converting the mock-based frontend to a full-stack application with backend integration.

## Database Models

### 1. Project Model
```javascript
{
  id: String (unique),
  title: String (Arabic),
  description: String (Arabic),
  category: String (Arabic) // "الهوية البصرية", "وسائل التواصل", "مطبوعات"
  image: String (URL),
  tags: Array<String> (Arabic),
  status: String (Arabic), // "مكتمل", "قيد التنفيذ"
  client: String (Arabic),
  year: String,
  createdAt: DateTime,
  updatedAt: DateTime
}
```

### 2. Contact Message Model
```javascript
{
  id: String (unique),
  name: String (Arabic),
  email: String,
  subject: String (Arabic),
  message: String (Arabic),
  status: String, // "new", "read", "replied"
  createdAt: DateTime
}
```

### 3. Site Configuration Model
```javascript
{
  id: String (unique),
  designerName: String (Arabic),
  email: String,
  phone: String,
  location: String (Arabic),
  specializations: Array<String> (Arabic),
  experience: String (Arabic),
  projectsCompleted: String,
  clientsSatisfied: String,
  socialLinks: {
    instagram: String (URL),
    twitter: String (URL),
    linkedin: String (URL),
    facebook: String (URL),
    behance: String (URL),
    dribbble: String (URL)
  }
}
```

## API Endpoints

### Projects Endpoints
- `GET /api/projects` - Get all projects
- `GET /api/projects?category={category}` - Get projects by category
- `GET /api/projects/{id}` - Get single project
- `POST /api/projects` - Create new project (admin)
- `PUT /api/projects/{id}` - Update project (admin)
- `DELETE /api/projects/{id}` - Delete project (admin)

### Contact Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (admin)
- `PUT /api/contact/{id}` - Update message status (admin)

### Configuration Endpoints
- `GET /api/config` - Get site configuration
- `PUT /api/config` - Update site configuration (admin)

### Categories Endpoint
- `GET /api/categories` - Get available project categories

## Frontend Integration Plan

### 1. Replace Mock Data in Projects.jsx
**Current Mock Usage:**
```javascript
const projects = [/* hardcoded mock data */];
```

**Backend Integration:**
```javascript
const [projects, setProjects] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetchProjects();
}, []);

const fetchProjects = async () => {
  try {
    const response = await axios.get(`${API}/projects`);
    setProjects(response.data);
  } catch (error) {
    console.error('Error fetching projects:', error);
  } finally {
    setLoading(false);
  }
};

const fetchProjectsByCategory = async (category) => {
  try {
    const url = category === 'الكل' 
      ? `${API}/projects` 
      : `${API}/projects?category=${encodeURIComponent(category)}`;
    const response = await axios.get(url);
    setFilteredProjects(response.data);
  } catch (error) {
    console.error('Error fetching projects by category:', error);
  }
};
```

### 2. Replace Mock Data in Contact.jsx
**Current Mock Usage:**
```javascript
const handleSubmit = (e) => {
  // Mock form submission
  toast({ title: "تم إرسال الرسالة بنجاح!" });
};
```

**Backend Integration:**
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await axios.post(`${API}/contact`, formData);
    toast({
      title: "تم إرسال الرسالة بنجاح!",
      description: "شكراً لك على التواصل معنا. سنقوم بالرد عليك في أقرب وقت ممكن.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    toast({
      title: "حدث خطأ",
      description: "لم يتم إرسال الرسالة. يرجى المحاولة مرة أخرى.",
      variant: "destructive"
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

### 3. Dynamic Configuration Loading
**Add to Header.jsx, Footer.jsx, Contact.jsx:**
```javascript
const [siteConfig, setSiteConfig] = useState(null);

useEffect(() => {
  fetchSiteConfig();
}, []);

const fetchSiteConfig = async () => {
  try {
    const response = await axios.get(`${API}/config`);
    setSiteConfig(response.data);
  } catch (error) {
    console.error('Error fetching site config:', error);
  }
};
```

## Data Validation

### Project Validation
- title: required, min 3 chars, max 200 chars
- description: required, min 10 chars, max 1000 chars
- category: required, must be valid category
- image: required, valid URL format
- tags: array of strings, max 10 tags
- client: required, min 2 chars, max 100 chars
- year: required, valid year format

### Contact Form Validation
- name: required, min 2 chars, max 100 chars
- email: required, valid email format
- subject: required, min 5 chars, max 200 chars
- message: required, min 10 chars, max 2000 chars

## Error Handling

### Frontend Error States
- Loading states for all API calls
- Error messages in Arabic
- Retry mechanisms for failed requests
- Fallback to cached data when possible

### Backend Error Responses
```javascript
{
  success: false,
  error: {
    code: "VALIDATION_ERROR",
    message: "رسالة الخطأ باللغة العربية",
    details: {/* validation details */}
  }
}
```

## Implementation Priority

1. **Phase 1**: Basic CRUD for projects
2. **Phase 2**: Contact form submission
3. **Phase 3**: Site configuration management
4. **Phase 4**: Admin panel (if needed)

## Mock Data Removal Checklist

- [ ] Remove mock.js file after backend integration
- [ ] Replace all mockAPI calls with real API calls
- [ ] Update loading states in components
- [ ] Add proper error handling
- [ ] Test all functionality with real backend
- [ ] Update environment variables if needed

## Notes
- All API responses should be in Arabic where applicable
- Maintain RTL support in all dynamic content
- Ensure proper encoding for Arabic text in URLs
- Consider pagination for projects if the list grows large
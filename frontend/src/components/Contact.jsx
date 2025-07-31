import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook, Send, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [siteConfig, setSiteConfig] = React.useState(null);

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'البريد الإلكتروني',
      value: siteConfig?.email || 'designer@example.com',
      link: `mailto:${siteConfig?.email || 'designer@example.com'}`
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'رقم الهاتف',
      value: siteConfig?.phone || '+966 50 123 4567',
      link: `tel:${siteConfig?.phone || '+966501234567'}`
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'الموقع',
      value: siteConfig?.location || 'الرياض، المملكة العربية السعودية',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="h-6 w-6" />,
      name: 'Instagram',
      url: siteConfig?.social_links?.instagram || 'https://instagram.com/designer',
      color: 'hover:text-pink-500'
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      name: 'Twitter',
      url: siteConfig?.social_links?.twitter || 'https://twitter.com/designer',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: 'LinkedIn',
      url: siteConfig?.social_links?.linkedin || 'https://linkedin.com/in/designer',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Facebook className="h-6 w-6" />,
      name: 'Facebook',
      url: siteConfig?.social_links?.facebook || 'https://facebook.com/designer',
      color: 'hover:text-blue-500'
    }
  ];

  // Fetch site configuration
  const fetchSiteConfig = async () => {
    try {
      const response = await axios.get(`${API}/config`);
      setSiteConfig(response.data);
    } catch (error) {
      console.error('Error fetching site config:', error);
    }
  };

  React.useEffect(() => {
    fetchSiteConfig();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      toast({
        title: "تم إرسال الرسالة بنجاح!",
        description: response.data.message || "شكراً لك على التواصل معنا. سنقوم بالرد عليك في أقرب وقت ممكن.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "حدث خطأ",
        description: error.response?.data?.detail || "لم يتم إرسال الرسالة. يرجى المحاولة مرة أخرى.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1535] mb-6">
            تواصل معي
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d3af35] to-[#0d46ba] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            هل لديك مشروع في ذهنك؟ دعنا نتحدث حول كيفية تحويل أفكارك إلى تصاميم مذهلة
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#0a1535] mb-6">
                معلومات التواصل
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-reverse space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#d3af35] to-[#0d46ba] rounded-full flex items-center justify-center text-white">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0a1535]">{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="text-gray-600 hover:text-[#0d46ba] transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-2xl font-bold text-[#0a1535] mb-6">
                تابعني على وسائل التواصل
              </h3>
              <div className="flex space-x-reverse space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0a1535] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-[#0a1535] to-[#0d46ba] text-white border-none">
              <CardHeader>
                <CardTitle className="text-xl">مستعد لبدء مشروعك؟</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  أنا هنا لمساعدتك في إنشاء تصاميم مذهلة تعكس رؤيتك وتحقق أهدافك
                </p>
                <Button className="bg-[#d3af35] hover:bg-[#c49d2f] text-[#0a1535] font-semibold">
                  احجز استشارة مجانية
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl border-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#0a1535]">
                أرسل رسالة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0a1535] mb-2">
                      الاسم الكامل
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="أدخل اسمك الكامل"
                      required
                      disabled={isSubmitting}
                      className="border-gray-300 focus:border-[#0d46ba] focus:ring-[#0d46ba]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0a1535] mb-2">
                      البريد الإلكتروني
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="أدخل بريدك الإلكتروني"
                      required
                      disabled={isSubmitting}
                      className="border-gray-300 focus:border-[#0d46ba] focus:ring-[#0d46ba]"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#0a1535] mb-2">
                    موضوع الرسالة
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="أدخل موضوع الرسالة"
                    required
                    disabled={isSubmitting}
                    className="border-gray-300 focus:border-[#0d46ba] focus:ring-[#0d46ba]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#0a1535] mb-2">
                    نص الرسالة
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="اكتب رسالتك هنا..."
                    rows={5}
                    required
                    disabled={isSubmitting}
                    className="border-gray-300 focus:border-[#0d46ba] focus:ring-[#0d46ba]"
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#d3af35] to-[#0d46ba] hover:from-[#c49d2f] hover:to-[#0a3d9f] text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      إرسال الرسالة <Send className="mr-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'هوية بصرية لمطعم راقي',
      description: 'تصميم هوية بصرية متكاملة لمطعم راقي تشمل الشعار، القوائم، والمواد التسويقية',
      category: 'الهوية البصرية',
      image: 'https://via.placeholder.com/400x300/0a1535/d3af35?text=Restaurant+Brand',
      tags: ['شعار', 'هوية بصرية', 'مطبوعات']
    },
    {
      id: 2,
      title: 'حملة تسويقية لوسائل التواصل',
      description: 'تصميم مجموعة من المنشورات الإبداعية لحملة تسويقية على وسائل التواصل الاجتماعي',
      category: 'وسائل التواصل',
      image: 'https://via.placeholder.com/400x300/0d46ba/ffffff?text=Social+Media+Campaign',
      tags: ['انستغرام', 'فيسبوك', 'تسويق رقمي']
    },
    {
      id: 3,
      title: 'تصميم شعار وهوية تجارية',
      description: 'إنشاء شعار مميز وهوية بصرية كاملة لشركة تقنية ناشئة',
      category: 'الهوية البصرية',
      image: 'https://via.placeholder.com/400x300/d3af35/0a1535?text=Tech+Logo+Design',
      tags: ['شعار', 'هوية تجارية', 'تقنية']
    },
    {
      id: 4,
      title: 'منشورات إبداعية لمتجر أزياء',
      description: 'سلسلة من المنشورات الإبداعية والجذابة لعرض مجموعة أزياء جديدة',
      category: 'وسائل التواصل',
      image: 'https://via.placeholder.com/400x300/0a1535/d3af35?text=Fashion+Posts',
      tags: ['أزياء', 'تصوير المنتجات', 'تصميم إعلاني']
    },
    {
      id: 5,
      title: 'تصميم كتالوج منتجات',
      description: 'تصميم كتالوج أنيق وجذاب لعرض مجموعة منتجات شركة تجميل',
      category: 'مطبوعات',
      image: 'https://via.placeholder.com/400x300/0d46ba/ffffff?text=Product+Catalog',
      tags: ['كتالوج', 'تجميل', 'مطبوعات']
    },
    {
      id: 6,
      title: 'هوية بصرية لمقهى عصري',
      description: 'تطوير هوية بصرية شاملة لمقهى عصري تشمل التصميم الداخلي والخارجي',
      category: 'الهوية البصرية',
      image: 'https://via.placeholder.com/400x300/d3af35/0a1535?text=Cafe+Branding',
      tags: ['مقهى', 'تصميم داخلي', 'علامة تجارية']
    }
  ];

  const categories = ['الكل', 'الهوية البصرية', 'وسائل التواصل', 'مطبوعات'];
  const [activeCategory, setActiveCategory] = React.useState('الكل');
  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  React.useEffect(() => {
    if (activeCategory === 'الكل') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1535] mb-6">
            معرض الأعمال
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d3af35] to-[#0d46ba] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            مجموعة مختارة من أفضل أعمالي في تصميم الهوية البصرية ووسائل التواصل الاجتماعي
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#0d46ba] text-white hover:bg-[#0a3d9f]'
                  : 'border-[#0d46ba] text-[#0d46ba] hover:bg-[#0d46ba] hover:text-white'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1535]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <Button size="sm" className="bg-[#d3af35] hover:bg-[#c49d2f] text-[#0a1535]">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="bg-[#0d46ba] hover:bg-[#0a3d9f] text-white">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-[#d3af35] text-[#0a1535] hover:bg-[#c49d2f]">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-[#0a1535] group-hover:text-[#0d46ba] transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-[#0d46ba] text-[#0d46ba]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-[#d3af35] to-[#0d46ba] hover:from-[#c49d2f] hover:to-[#0a3d9f] text-white px-8 py-3 text-lg transition-all duration-300">
            عرض المزيد من الأعمال
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
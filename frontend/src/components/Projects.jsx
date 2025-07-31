import React from 'react';
import { ExternalLink, Eye, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Projects = () => {
  const [projects, setProjects] = React.useState([]);
  const [filteredProjects, setFilteredProjects] = React.useState([]);
  const [categories, setCategories] = React.useState(['الكل']);
  const [activeCategory, setActiveCategory] = React.useState('الكل');
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API}/projects`);
      setProjects(response.data);
      setFilteredProjects(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setError('حدث خطأ في تحميل المشاريع');
    } finally {
      setLoading(false);
    }
  };

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API}/categories`);
      setCategories(response.data.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  // Fetch projects by category
  const fetchProjectsByCategory = async (category) => {
    try {
      setLoading(true);
      const url = category === 'الكل' 
        ? `${API}/projects` 
        : `${API}/projects?category=${encodeURIComponent(category)}`;
      const response = await axios.get(url);
      setFilteredProjects(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching projects by category:', error);
      setError('حدث خطأ في تحميل المشاريع');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchProjects();
    fetchCategories();
  }, []);

  React.useEffect(() => {
    if (activeCategory) {
      fetchProjectsByCategory(activeCategory);
    }
  }, [activeCategory]);

  if (loading && projects.length === 0) {
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-[#0d46ba]" />
            <p className="mt-4 text-gray-600">جاري تحميل المشاريع...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <Button onClick={fetchProjects} className="bg-[#0d46ba] text-white">
              إعادة المحاولة
            </Button>
          </div>
        </div>
      </section>
    );
  }

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
              disabled={loading}
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

        {/* Loading State for Category Change */}
        {loading && projects.length > 0 && (
          <div className="text-center mb-8">
            <Loader2 className="h-6 w-6 animate-spin mx-auto text-[#0d46ba]" />
          </div>
        )}

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
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <CardTitle className="text-xl font-bold text-[#0a1535] group-hover:text-[#0d46ba] transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-[#0d46ba] text-[#0d46ba]">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  <span className="font-semibold">العميل:</span> {project.client}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">لا توجد مشاريع في هذة الفئة حالياً</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#d3af35] to-[#0d46ba] hover:from-[#c49d2f] hover:to-[#0a3d9f] text-white px-8 py-3 text-lg transition-all duration-300"
            onClick={fetchProjects}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin ml-2" />
                جاري التحديث...
              </>
            ) : (
              'تحديث المشاريع'
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
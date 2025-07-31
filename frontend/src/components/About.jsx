import React from 'react';
import { Palette, Users, Award, Lightbulb } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const skills = [
    { icon: <Palette className="h-8 w-8" />, title: 'التصميم الجرافيكي', description: 'خبرة واسعة في التصميم الجرافيكي والهوية البصرية' },
    { icon: <Users className="h-8 w-8" />, title: 'وسائل التواصل', description: 'تصميم منشورات إبداعية وجذابة لوسائل التواصل الاجتماعي' },
    { icon: <Award className="h-8 w-8" />, title: 'الهوية البصرية', description: 'إنشاء هويات بصرية متكاملة ومتميزة للعلامات التجارية' },
    { icon: <Lightbulb className="h-8 w-8" />, title: 'التفكير الإبداعي', description: 'حلول إبداعية ومبتكرة لجميع احتياجات التصميم' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1535] mb-6">
            عن المطور
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#d3af35] to-[#0d46ba] mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-[#0a1535] mb-4">
              مرحباً بك في عالم التصميم الإبداعي
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              أنا مصمم جرافيك محترف بخبرة تزيد عن 5 سنوات في مجال التصميم الجرافيكي والهوية البصرية. 
              أتخصص في إنشاء تصاميم إبداعية ومبتكرة لوسائل التواصل الاجتماعي والعلامات التجارية.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              أؤمن بأن التصميم الجيد هو الذي يجمع بين الجمال والوظيفة، ويحكي قصة العلامة التجارية 
              بطريقة بصرية مؤثرة ومميزة. أسعى دائماً لتقديم حلول تصميمية تلبي احتياجات العملاء وتتجاوز توقعاتهم.
            </p>

            <div className="pt-4">
              <h4 className="text-xl font-semibold text-[#0a1535] mb-4">الخبرات والإنجازات:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#d3af35] rounded-full ml-3"></div>
                  أكثر من 200 مشروع تصميم ناجح
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#d3af35] rounded-full ml-3"></div>
                  خبرة في تصميم الهويات البصرية المتكاملة
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#d3af35] rounded-full ml-3"></div>
                  متخصص في تصميم وسائل التواصل الاجتماعي
                </li>
              </ul>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-none bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#d3af35] to-[#0d46ba] rounded-full text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0a1535] mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
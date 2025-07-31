import React from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-[#0a1535] via-[#0d46ba] to-[#0a1535] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#d3af35] blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-48 h-48 rounded-full bg-[#d3af35] blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-[#d3af35] to-[#0d46ba] p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-4xl font-bold text-[#0a1535]">م.ج</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            مصمم جرافيك
            <span className="block text-[#d3af35] text-4xl md:text-5xl mt-2">
              محترف ومبدع
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            متخصص في تصميم وسائل التواصل الاجتماعي والهوية البصرية
            <br />
            أساعدك في بناء هوية بصرية مميزة لعلامتك التجارية
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-[#d3af35] hover:bg-[#c49d2f] text-[#0a1535] font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
            >
              استعرض أعمالي <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-[#d3af35] text-[#d3af35] hover:bg-[#d3af35] hover:text-[#0a1535] px-8 py-3 text-lg transition-all duration-300"
            >
              تحميل السيرة الذاتية <Download className="mr-2 h-5 w-5" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#d3af35] rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#d3af35] rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
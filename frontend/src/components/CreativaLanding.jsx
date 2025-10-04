import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { 
  Camera, 
  Video, 
  Edit, 
  Play, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Instagram, 
  Linkedin, 
  Youtube, 
  MessageCircle, 
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Filter
} from 'lucide-react';

const CreativaLanding = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState(null);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Mock portfolio data
  const portfolioItems = [
    {
      id: 1,
      category: 'photography',
      title: 'Portrait Session',
      image: 'https://images.unsplash.com/photo-1516961642265-531546e84af2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxwaG90b2dyYXBoeXxlbnwwfHx8YmxhY2tfYW5kX3doaXRlfDE3NTk1OTQyODZ8MA&ixlib=rb-4.1.0&q=85',
      description: 'Professional portrait photography with natural lighting'
    },
    {
      id: 2,
      category: 'videography',
      title: 'Corporate Video',
      image: 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxwaG90b2dyYXBoeXxlbnwwfHx8YmxhY2tfYW5kX3doaXRlfDE3NTk1OTQyODZ8MA&ixlib=rb-4.1.0&q=85',
      description: 'High-quality corporate video production'
    },
    {
      id: 3,
      category: 'editing',
      title: 'Film Color Grading',
      image: 'https://images.unsplash.com/photo-1715510343533-894154124844?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxjcmVhdGl2ZSUyMGFnZW5jeXxlbnwwfHx8YmxhY2tfYW5kX3doaXRlfDE3NTk1OTQyODB8MA&ixlib=rb-4.1.0&q=85',
      description: 'Professional video editing and color grading services'
    },
    {
      id: 4,
      category: 'photography',
      title: 'Event Documentation',
      image: 'https://images.unsplash.com/photo-1532254749169-ca0e30f76aa1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxjcmVhdGl2ZSUyMGFnZW5jeXxlbnwwfHx8YmxhY2tfYW5kX3doaXRlfDE3NTk1OTQyODB8MA&ixlib=rb-4.1.0&q=85',
      description: 'Creative event photography and documentation'
    },
    {
      id: 5,
      category: 'videography',
      title: 'Documentary Film',
      image: 'https://images.unsplash.com/photo-1516961642265-531546e84af2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxwaG90b2dyYXBoeXxlbnwwfHx8YmxhY2tfYW5kX3doaXRlfDE3NTk1OTQyODZ8MA&ixlib=rb-4.1.0&q=85',
      description: 'Cinematic documentary storytelling'
    },
    {
      id: 6,
      category: 'editing',
      title: 'Motion Graphics',
      image: 'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxwaG90b2dyYXBoeXxlbnwwfHx8YmxhY2tfYW5kX3doaXRlfDE3NTk1OTQyODZ8MA&ixlib=rb-4.1.0&q=85',
      description: 'Advanced motion graphics and animation'
    }
  ];

  // Filter portfolio items
  const filteredPortfolio = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Creativa</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['beranda', 'layanan', 'showreel', 'portofolio', 'tentang', 'kontak'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Dark Mode Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
                className="p-2"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
              {['beranda', 'layanan', 'showreel', 'portofolio', 'tentang', 'kontak'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1703102411374-5fe3e0e4b2bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxjcmVhdGl2ZSUyMHN0b3J5dGVsbGluZ3xlbnwwfHx8fDE3NTk1OTQ3NjJ8MA&ixlib=rb-4.1.0&q=85')` 
          }}
        />
        <div className="absolute inset-0 bg-black/60 dark:bg-black/40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Visual yang Berbicara.
            </h1>
            <h2 className="text-3xl md:text-5xl font-light text-gray-200 mb-8 animate-slide-up">
              Cerita yang Bertahan.
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-delayed">
              Kami menciptakan konten visual yang memukau melalui fotografi, videografi, dan editing video yang profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('portofolio')}
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg shadow-lg"
              >
                Lihat Karya Kami
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('kontak')}
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg"
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

      {/* Services Section */}
      <section id="layanan" className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Solusi kreatif untuk semua kebutuhan visual Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: 'Fotografi',
                description: 'Foto profesional untuk portrait, event, produk, dan dokumentasi dengan kualitas tinggi dan komposisi yang memukau.'
              },
              {
                icon: Video,
                title: 'Videografi',
                description: 'Produksi video cinematic untuk corporate, wedding, dokumenter, dan konten media sosial dengan standar broadcast.'
              },
              {
                icon: Edit,
                title: 'Editing Video',
                description: 'Post-production profesional termasuk color grading, motion graphics, sound design, dan visual effects.'
              }
            ].map((service, index) => (
              <Card key={index} className="bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <service.icon className="h-16 w-16 mx-auto mb-6 text-gray-900 dark:text-white" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

      {/* Showreel Section */}
      <section id="showreel" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Showreel</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Lihat highlight karya terbaik kami</p>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
              <Button 
                size="lg"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/30 p-8 rounded-full"
              >
                <Play className="h-12 w-12" />
              </Button>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1495121553079-4c61bcce1894?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxwaG90b2dyYXBoeXxlbnwwfHx8YmxhY2tfYW5kX3doaXRlfDE3NTk1OTQyODZ8MA&ixlib=rb-4.1.0&q=85"
              alt="Showreel Preview"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

      {/* Portfolio Section */}
      <section id="portofolio" className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Portofolio</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Koleksi karya terpilih dari berbagai proyek</p>
          </div>

          {/* Filter Tabs */}
          <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12 bg-white dark:bg-gray-900">
              <TabsTrigger value="all" className="data-[state=active]:bg-gray-900 data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-gray-900">
                Semua
              </TabsTrigger>
              <TabsTrigger value="photography" className="data-[state=active]:bg-gray-900 data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-gray-900">
                Fotografi
              </TabsTrigger>
              <TabsTrigger value="videography" className="data-[state=active]:bg-gray-900 data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-gray-900">
                Videografi
              </TabsTrigger>
              <TabsTrigger value="editing" className="data-[state=active]:bg-gray-900 data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-gray-900">
                Editing
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeFilter} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPortfolio.map((item) => (
                  <Dialog key={item.id}>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer overflow-hidden bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="relative aspect-square overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                            <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm">
                              {item.category === 'photography' ? 'Fotografi' : 
                               item.category === 'videography' ? 'Videografi' : 'Editing'}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0 shadow-none">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-auto rounded-lg shadow-2xl"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-6 rounded-b-lg backdrop-blur-sm">
                          <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                          <p className="text-gray-300">{item.description}</p>
                          <Badge variant="secondary" className="mt-3 bg-white/20 text-white">
                            {item.category === 'photography' ? 'Fotografi' : 
                             item.category === 'videography' ? 'Videografi' : 'Editing'}
                          </Badge>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

      {/* About Section */}
      <section id="tentang" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Tentang Creativa</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Creativa adalah agensi kreatif yang berdedikasi menciptakan konten visual yang bermakna dan berdampak. 
                Dengan pengalaman bertahun-tahun di industri kreatif, kami memahami betapa pentingnya visual yang kuat 
                dalam menyampaikan pesan dan membangun brand.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Tim kami terdiri dari fotografer, videografer, dan editor berpengalaman yang siap membantu mewujudkan 
                visi kreatif Anda menjadi kenyataan. Dari konsep hingga eksekusi, kami berkomitmen memberikan hasil 
                terbaik yang melampaui ekspektasi.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1532254749169-ca0e30f76aa1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxjcmVhdGl2ZSUyMGFnZW5jeXxlbnwwfHx8YmxhY2tfYW5kX3doaXRlfDE3NTk1OTQyODB8MA&ixlib=rb-4.1.0&q=85"
                  alt="Tentang Creativa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Mari wujudkan proyek kreatif Anda bersama kami</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="bg-white dark:bg-gray-900 border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Kirim Pesan</h3>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Nama</Label>
                    <Input 
                      id="name" 
                      placeholder="Masukkan nama Anda"
                      className="mt-2 bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="nama@email.com"
                      className="mt-2 bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Pesan</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Ceritakan tentang proyek Anda..."
                      className="mt-2 min-h-32 bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
                  >
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Informasi Kontak</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MessageCircle className="h-6 w-6 text-gray-600 dark:text-gray-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">WhatsApp</h4>
                      <a 
                        href="https://wa.me/6281234567890" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        +62 812-3456-7890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-gray-600 dark:text-gray-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                      <a 
                        href="mailto:hello@creativa.id"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        hello@creativa.id
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Ikuti Kami</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Instagram, href: 'https://instagram.com/creativa' },
                    { icon: Youtube, href: 'https://youtube.com/creativa' },
                    { icon: Linkedin, href: 'https://linkedin.com/company/creativa' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Creativa</h3>
              <p className="text-gray-400 leading-relaxed">
                Agensi kreatif yang menghadirkan solusi visual terdepan untuk setiap kebutuhan brand Anda.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Fotografi Profesional</li>
                <li>Videografi Cinematic</li>
                <li>Editing Video & Post-Production</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <p>hello@creativa.id</p>
                <p>+62 812-3456-7890</p>
                <div className="flex space-x-3 pt-2">
                  {[
                    { icon: Instagram, href: 'https://instagram.com/creativa' },
                    { icon: Youtube, href: 'https://youtube.com/creativa' },
                    { icon: Linkedin, href: 'https://linkedin.com/company/creativa' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Creativa. Seluruh hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreativaLanding;
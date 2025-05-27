"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MessageCircle,
  Instagram,
  Scissors,
  Star,
  MapPin,
  Clock,
  Mail,
  Smartphone,
  Apple,
  User,
  Eye,
  Sparkles,
  Droplets,
  Crown,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Coffee,
  Thermometer,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Translations (keeping the same structure)
const translations = {
  pt: {
    loading: "Carregando...",
    nav: {
      about: "Sobre",
      services: "Serviços",
      club: "Clube Seletto",
      reviews: "Avaliações",
      gallery: "Galeria",
      location: "Localização",
      schedule: "Agendar",
    },
    hero: {
      title: "Seu estilo começa aqui",
      subtitle: "Transforme seu visual com a expertise e o cuidado que você merece",
      schedule: "Agende Agora",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
    },
    about: {
      title: "Sobre a Seletto",
      subtitle: "Nossa Barbearia",
      description1:
        "Na Seletto, cada detalhe foi pensado para proporcionar uma experiência única e memorável. Nosso espaço combina tradição e modernidade, oferecendo um ambiente totalmente climatizado onde você pode relaxar enquanto nossos profissionais cuidam do seu visual.",
      description2:
        "Desfrute do nosso café cortesia enquanto aguarda em nosso ambiente exclusivo, projetado especialmente para o seu conforto e bem-estar.",
      stats: {
        satisfaction: "Satisfação",
        clients: "Clientes Satisfeitos",
        rating: "Avaliação Google",
      },
      features: {
        climatized: "Ambiente Climatizado",
        coffee: "Café Cortesia",
        premium: "Experiência Premium",
      },
    },
    services: {
      title: "Nossos Serviços",
      subtitle: "Oferecemos uma gama completa de serviços para cuidar do seu visual com excelência",
      viewAll: "Ver todos os serviços",
      hideServices: "Ocultar serviços",
      barbotherapy: {
        title: "Barboterapia",
        description:
          "Ter um momento de relaxar, com a toalha quente, massagem. Realmente uma experiência única e exclusiva. Quer viver uma experiência como essa? Vem pra Seletto! Excelência em cada detalhe.",
        cta: "Agendar Barboterapia",
        features: {
          towel: "Toalha Quente",
          massage: "Massagem Relaxante",
          experience: "Experiência Única",
        },
      },
      list: {
        barbaxpress: {
          name: "Barba Xpress",
          description: "Serviço rápido e eficiente",
        },
        eyebrow: {
          name: "Sobrancelha",
          description: "Design e acabamento perfeito",
        },
        sealing: {
          name: "Selagem",
          description: "Tratamento profissional",
        },
        finishing: {
          name: "Acabamento",
          description: "Finalização perfeita",
        },
        hydration: {
          name: "Hidratação",
          description: "Cuidados especiais",
        },
        cut: {
          name: "Corte",
          description: "Cortes modernos e clássicos",
        },
      },
      consultation: {
        title: "Não sabe qual serviço escolher?",
        description: "Nossos profissionais estão prontos para te ajudar a escolher o melhor tratamento",
        cta: "Falar com Especialista",
      },
    },
    club: {
      title: "Clube SELETTO",
      subtitle: "Seja um membro VIP e desfrute de benefícios exclusivos",
      benefits: {
        title: "Benefícios Exclusivos VIP",
        unlimited: "Acesso Ilimitado",
        priority: "Atendimento Prioritário",
        savings: "Economia Garantida",
      },
      plans: {
        cut: {
          name: "Corte Black",
          features: ["Cortes ilimitados", "Todos os dias", "Sem agendamento obrigatório"],
          savings: "Economia de até 65%",
        },
        beard: {
          name: "Barba Black",
          features: ["Barba ilimitada", "Todos os dias", "Acabamento perfeito"],
          savings: "Economia de até 60%",
        },
        combo: {
          name: "Corte e Barba Black",
          features: ["Corte + Barba", "Todos os dias", "Máxima economia"],
          savings: "Economia de até 70%",
          popular: "MAIS POPULAR",
        },
      },
      cta: "Quero ser membro VIP",
      howItWorks: {
        title: "Como Funciona?",
        description:
          "Torne-se membro VIP e tenha acesso ilimitado aos nossos serviços todos os dias. Pague uma vez por mês e economize muito mais do que pagando por serviço individual.",
      },
    },
    reviews: {
      title: "O que dizem nossos Clientes",
      subtitle: "Mais de 650 avaliações com 5 estrelas no Google",
      clickToView: "Clique para ver a avaliação completa",
      reviewTitle: "Avaliação",
      previous: "Anterior",
      next: "Próxima",
      viewMore: "Ver mais avaliações",
    },
    gallery: {
      title: "Ambiente Seletto",
      subtitle: "Conheça nosso espaço exclusivo, projetado para o seu conforto e bem-estar",
      areas: {
        workStations: {
          title: "Estações de Trabalho",
          subtitle: "Área de Corte",
          description: "Equipamentos modernos e ambiente climatizado para sua comodidade",
        },
        lounge: {
          title: "Lounge Exclusivo",
          subtitle: "Área de Espera",
          description: "Café cortesia e ambiente confortável enquanto aguarda",
        },
        climate: {
          title: "Ambiente Climatizado",
          subtitle: "Climatização",
          description: "Temperatura ideal para seu conforto durante todo o atendimento",
        },
        vip: {
          title: "Atendimento Premium",
          subtitle: "Experiência VIP",
          description: "Cada detalhe pensado para uma experiência única e memorável",
        },
      },
      features: {
        climatization: {
          title: "Climatização Total",
          description: "Ambiente com temperatura controlada para seu conforto",
        },
        coffee: {
          title: "Café Cortesia",
          description: "Desfrute de um café especial enquanto aguarda",
        },
        premium: {
          title: "Experiência Premium",
          description: "Atendimento exclusivo com foco na excelência",
        },
      },
      seeMore: "Ver mais no Instagram",
      viewGallery: "Ver galeria completa",
    },
    location: {
      title: "Localização & Contato",
      contactInfo: "Informações de Contato",
      address: "Endereço",
      hours: "Horário de Funcionamento",
      phone: "Telefone",
      email: "E-mail",
      directions: "Como chegar",
      socialMedia: "Redes Sociais",
      locationTitle: "Localização",
      schedule: {
        weekdays: "Segunda a Sexta: 9:00 às 20:00",
        saturday: "Sábado: 8:00 às 18:00",
        sunday: "Domingo: Fechado",
      },
    },
    schedule: {
      title: "Agende Agora",
      subtitle: "Baixe nosso app oficial ou entre em contato pelo WhatsApp para agendar seu horário",
      ios: "App iOS",
      android: "App Android",
      whatsapp: "WhatsApp",
    },
    cta: {
      title: "Pronto para transformar seu visual?",
      subtitle: "Agende com a Seletto agora e descubra o que é ter um visual impecável",
      button: "Agendar Agora",
    },
    footer: {
      tagline: "Excelência em cada detalhe, estilo em cada corte",
      quickLinks: "Links Rápidos",
      contact: "Contato",
      rights: "Todos os direitos reservados",
      developer: "Desenvolvido por Andreh Malheiros",
      links: {
        scheduling: "Agendamento",
        whatsapp: "WhatsApp",
        instagram: "Instagram",
      },
    },
  },
  en: {
    loading: "Loading...",
    nav: {
      about: "About",
      services: "Services",
      club: "Seletto Club",
      reviews: "Reviews",
      gallery: "Gallery",
      location: "Location",
      schedule: "Schedule",
    },
    hero: {
      title: "Your style starts here",
      subtitle: "Transform your look with the expertise and care you deserve",
      schedule: "Schedule Now",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
    },
    about: {
      title: "About Seletto",
      subtitle: "Our Barbershop",
      description1:
        "At Seletto, every detail has been designed to provide a unique and memorable experience. Our space combines tradition and modernity, offering a fully air-conditioned environment where you can relax while our professionals take care of your look.",
      description2:
        "Enjoy our complimentary coffee while you wait in our exclusive environment, specially designed for your comfort and well-being.",
      stats: {
        satisfaction: "Satisfaction",
        clients: "Satisfied Clients",
        rating: "Google Rating",
      },
      features: {
        climatized: "Air Conditioned Environment",
        coffee: "Complimentary Coffee",
        premium: "Premium Experience",
      },
    },
    services: {
      title: "Our Services",
      subtitle: "We offer a complete range of services to take care of your look with excellence",
      viewAll: "View all services",
      hideServices: "Hide services",
      barbotherapy: {
        title: "Barbotherapy",
        description:
          "Have a moment to relax, with hot towel, massage. Really a unique and exclusive experience. Want to live an experience like this? Come to Seletto! Excellence in every detail.",
        cta: "Schedule Barbotherapy",
        features: {
          towel: "Hot Towel",
          massage: "Relaxing Massage",
          experience: "Unique Experience",
        },
      },
      list: {
        barbaxpress: {
          name: "Beard Xpress",
          description: "Quick and efficient service",
        },
        eyebrow: {
          name: "Eyebrow",
          description: "Perfect design and finishing",
        },
        sealing: {
          name: "Sealing",
          description: "Professional treatment",
        },
        finishing: {
          name: "Finishing",
          description: "Perfect finishing touch",
        },
        hydration: {
          name: "Hydration",
          description: "Special care",
        },
        cut: {
          name: "Haircut",
          description: "Modern and classic cuts",
        },
      },
      consultation: {
        title: "Don't know which service to choose?",
        description: "Our professionals are ready to help you choose the best treatment",
        cta: "Talk to a Specialist",
      },
    },
    club: {
      title: "SELETTO Club",
      subtitle: "Be a VIP member and enjoy exclusive benefits",
      benefits: {
        title: "Exclusive VIP Benefits",
        unlimited: "Unlimited Access",
        priority: "Priority Service",
        savings: "Guaranteed Savings",
      },
      plans: {
        cut: {
          name: "Black Cut",
          features: ["Unlimited cuts", "Every day", "No mandatory appointment"],
          savings: "Save up to 65%",
        },
        beard: {
          name: "Black Beard",
          features: ["Unlimited beard", "Every day", "Perfect finishing"],
          savings: "Save up to 60%",
        },
        combo: {
          name: "Cut and Beard Black",
          features: ["Cut + Beard", "Every day", "Maximum savings"],
          savings: "Save up to 70%",
          popular: "MOST POPULAR",
        },
      },
      cta: "I want to be a VIP member",
      howItWorks: {
        title: "How It Works?",
        description:
          "Become a VIP member and have unlimited access to our services every day. Pay once a month and save much more than paying for individual services.",
      },
    },
    reviews: {
      title: "What our Clients say",
      subtitle: "Over 650 reviews with 5 stars on Google",
      clickToView: "Click to see the full review",
      reviewTitle: "Review",
      previous: "Previous",
      next: "Next",
      viewMore: "View more reviews",
    },
    gallery: {
      title: "Seletto Environment",
      subtitle: "Get to know our exclusive space, designed for your comfort and well-being",
      areas: {
        workStations: {
          title: "Work Stations",
          subtitle: "Cutting Area",
          description: "Modern equipment and air-conditioned environment for your comfort",
        },
        lounge: {
          title: "Exclusive Lounge",
          subtitle: "Waiting Area",
          description: "Complimentary coffee and comfortable environment while you wait",
        },
        climate: {
          title: "Air Conditioned Environment",
          subtitle: "Climate Control",
          description: "Ideal temperature for your comfort throughout the service",
        },
        vip: {
          title: "Premium Service",
          subtitle: "VIP Experience",
          description: "Every detail designed for a unique and memorable experience",
        },
      },
      features: {
        climatization: {
          title: "Full Climate Control",
          description: "Environment with controlled temperature for your comfort",
        },
        coffee: {
          title: "Complimentary Coffee",
          description: "Enjoy a special coffee while you wait",
        },
        premium: {
          title: "Premium Experience",
          description: "Exclusive service focused on excellence",
        },
      },
      seeMore: "See more on Instagram",
      viewGallery: "View full gallery",
    },
    location: {
      title: "Location & Contact",
      contactInfo: "Contact Information",
      address: "Address",
      hours: "Opening Hours",
      phone: "Phone",
      email: "Email",
      directions: "Get Directions",
      socialMedia: "Social Media",
      locationTitle: "Location",
      schedule: {
        weekdays: "Monday to Friday: 9:00 AM to 8:00 PM",
        saturday: "Saturday: 8:00 AM to 6:00 PM",
        sunday: "Sunday: Closed",
      },
    },
    schedule: {
      title: "Schedule Now",
      subtitle: "Download our official app or contact us via WhatsApp to schedule your appointment",
      ios: "iOS App",
      android: "Android App",
      whatsapp: "WhatsApp",
    },
    cta: {
      title: "Ready to transform your look?",
      subtitle: "Schedule with Seletto now and discover what it's like to have an impeccable look",
      button: "Schedule Now",
    },
    footer: {
      tagline: "Excellence in every detail, style in every cut",
      quickLinks: "Quick Links",
      contact: "Contact",
      rights: "All rights reserved",
      developer: "Developed by Andreh Malheiros",
      links: {
        scheduling: "Scheduling",
        whatsapp: "WhatsApp",
        instagram: "Instagram",
      },
    },
  },
}

export default function SelettoBarbershop() {
  const [isLoading, setIsLoading] = useState(true)
  const [language, setLanguage] = useState<"pt" | "en">("pt")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedReview, setSelectedReview] = useState<number | null>(null)
  const [showAllServices, setShowAllServices] = useState(false)
  const [showAllReviews, setShowAllReviews] = useState(false)
  const [showGalleryDetails, setShowGalleryDetails] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const t = translations[language]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const services = [
    {
      name: t.services.list.barbaxpress.name,
      price: "R$ 20,00",
      icon: <User className="w-6 h-6 md:w-8 md:h-8 text-[#c8a35f]" />,
      description: t.services.list.barbaxpress.description,
    },
    {
      name: t.services.barbotherapy.title,
      price: "R$ 30,00",
      icon: <Thermometer className="w-6 h-6 md:w-8 md:h-8 text-[#c8a35f]" />,
      description: t.services.barbotherapy.description,
      featured: true,
    },
    {
      name: t.services.list.eyebrow.name,
      price: "R$ 10,00",
      icon: <Eye className="w-6 h-6 md:w-8 md:h-8 text-[#c8a35f]" />,
      description: t.services.list.eyebrow.description,
    },
    {
      name: t.services.list.sealing.name,
      price: language === "pt" ? "A partir de R$ 75,00" : "From R$ 75,00",
      icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-[#c8a35f]" />,
      description: t.services.list.sealing.description,
    },
    {
      name: t.services.list.finishing.name,
      price: "R$ 15,00",
      icon: <Scissors className="w-6 h-6 md:w-8 md:h-8 text-[#c8a35f]" />,
      description: t.services.list.finishing.description,
    },
    {
      name: t.services.list.hydration.name,
      price: "R$ 15,00",
      icon: <Droplets className="w-6 h-6 md:w-8 md:h-8 text-[#c8a35f]" />,
      description: t.services.list.hydration.description,
    },
    {
      name: t.services.list.cut.name,
      price: "R$ 35,00",
      icon: <Scissors className="w-6 h-6 md:w-8 md:h-8 text-[#c8a35f]" />,
      description: t.services.list.cut.description,
    },
  ]

  const reviews = [
    { id: 1, image: "/reviews/review-1.png" },
    { id: 2, image: "/reviews/review-2.png" },
    { id: 3, image: "/reviews/review-3.png" },
    { id: 4, image: "/reviews/review-4.png" },
    { id: 5, image: "/reviews/review-5.png" },
    { id: 6, image: "/reviews/review-6.png" },
    { id: 7, image: "/reviews/review-7.png" },
    { id: 8, image: "/reviews/review-8.png" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  // Loading Screen
  if (isLoading) {
    return (
      <motion.div
        className="fixed inset-0 bg-[#0e1728] flex items-center justify-center z-50"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="mb-4 md:mb-6"
          >
            <Image src="/logo.png" alt="Seletto" width={80} height={80} className="mx-auto md:w-[100px] md:h-[100px]" />
          </motion.div>
          <motion.h1
            className="text-2xl md:text-3xl font-bold text-[#c8a35f] mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            SELETTO
          </motion.h1>
          <motion.p
            className="text-gray-400 text-sm md:text-base"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {language === "pt" ? "Barbearia" : "Barbershop"}
          </motion.p>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0e1728] text-white overflow-x-hidden">
      {/* Header - Mobile Optimized */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 bg-[#0e1728]/95 backdrop-blur-sm border-b border-[#768ca4]/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            <div className="flex items-center space-x-2 md:space-x-3">
              <Image src="/logo.png" alt="Seletto" width={32} height={32} className="md:w-10 md:h-10" />
              <span className="text-lg md:text-xl font-bold text-[#c8a35f]">SELETTO</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-[#c8a35f] transition-colors text-sm xl:text-base"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-[#c8a35f] transition-colors text-sm xl:text-base"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection("club")}
                className="text-[#c8a35f] font-semibold hover:text-[#b8934f] transition-colors text-sm xl:text-base"
              >
                {t.nav.club}
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-gray-300 hover:text-[#c8a35f] transition-colors text-sm xl:text-base"
              >
                {t.nav.reviews}
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-300 hover:text-[#c8a35f] transition-colors text-sm xl:text-base"
              >
                {t.nav.gallery}
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="text-gray-300 hover:text-[#c8a35f] transition-colors text-sm xl:text-base"
              >
                {t.nav.location}
              </button>
            </nav>

            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Language Toggle - Mobile Optimized */}
              <div className="flex items-center space-x-1 bg-[#1f2937] rounded-full p-0.5 md:p-1">
                <button
                  onClick={() => setLanguage("pt")}
                  className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm transition-all ${
                    language === "pt" ? "bg-[#c8a35f] text-[#0e1728]" : "text-gray-400 hover:text-white"
                  }`}
                >
                  PT
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm transition-all ${
                    language === "en" ? "bg-[#c8a35f] text-[#0e1728]" : "text-gray-400 hover:text-white"
                  }`}
                >
                  EN
                </button>
              </div>

              <Button
                size="sm"
                className="hidden md:block bg-[#768ca4] hover:bg-[#5a6b7d] text-xs lg:text-sm px-3 lg:px-4"
                onClick={() => scrollToSection("schedule")}
              >
                {t.nav.schedule}
              </Button>

              {/* Mobile Menu Button */}
              <button className="lg:hidden p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Improved */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-[#1f2937] border-t border-[#768ca4]/20"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left py-2 text-gray-300 hover:text-[#c8a35f] transition-colors"
                >
                  {t.nav.about}
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block w-full text-left py-2 text-gray-300 hover:text-[#c8a35f] transition-colors"
                >
                  {t.nav.services}
                </button>
                <button
                  onClick={() => scrollToSection("club")}
                  className="block w-full text-left py-2 text-[#c8a35f] font-semibold"
                >
                  {t.nav.club}
                </button>
                <button
                  onClick={() => scrollToSection("reviews")}
                  className="block w-full text-left py-2 text-gray-300 hover:text-[#c8a35f] transition-colors"
                >
                  {t.nav.reviews}
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="block w-full text-left py-2 text-gray-300 hover:text-[#c8a35f] transition-colors"
                >
                  {t.nav.gallery}
                </button>
                <button
                  onClick={() => scrollToSection("location")}
                  className="block w-full text-left py-2 text-gray-300 hover:text-[#c8a35f] transition-colors"
                >
                  {t.nav.location}
                </button>
                <Button
                  size="sm"
                  className="w-full bg-[#768ca4] hover:bg-[#5a6b7d] mt-4"
                  onClick={() => scrollToSection("schedule")}
                >
                  {t.nav.schedule}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* WhatsApp Floating Button - Mobile Optimized */}
      <motion.div
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
      >
        <Button
          size="lg"
          className="rounded-full w-12 h-12 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300"
          asChild
        >
          <Link href="https://wa.me/553136575007" target="_blank">
            <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
          </Link>
        </Button>
      </motion.div>

      {/* Hero Section - Mobile Optimized */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0e1728] overflow-hidden pt-14 md:pt-16">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#0e1728] via-[#1f2937] to-[#0e1728]"
          style={{ y }}
        />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 md:mb-8"
          >
            <Image
              src="/logo.png"
              alt="Seletto Barbearia"
              width={100}
              height={100}
              className="mx-auto mb-6 md:mb-8 md:w-[120px] md:h-[120px]"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-[#c8a35f] bg-clip-text text-transparent leading-tight"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-gray-300 max-w-xl md:max-w-2xl mx-auto leading-relaxed px-4"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#768ca4] hover:bg-[#5a6b7d] text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("schedule")}
            >
              {t.hero.schedule}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-[#c8a35f] text-[#c8a35f] hover:bg-[#c8a35f] hover:text-[#0e1728] px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="https://wa.me/553136575007" target="_blank">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                {t.hero.whatsapp}
              </Link>
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="w-full sm:w-auto text-[#768ca4] hover:text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="https://www.instagram.com/barbeariaseletto/" target="_blank">
                <Instagram className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                {t.hero.instagram}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section - Mobile Optimized */}
      <section id="about" className="py-12 md:py-20 bg-[#1f2937]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">{t.about.title}</h2>
            <div className="w-16 md:w-24 h-1 bg-[#c8a35f] mx-auto mb-6 md:mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#c8a35f]">{t.about.subtitle}</h3>
              <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6 leading-relaxed">{t.about.description1}</p>
              <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed">{t.about.description2}</p>

              <div className="grid grid-cols-3 gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#c8a35f] mb-1 md:mb-2">100%</div>
                  <div className="text-xs md:text-sm text-gray-400">{t.about.stats.satisfaction}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#c8a35f] mb-1 md:mb-2">5000+</div>
                  <div className="text-xs md:text-sm text-gray-400">{t.about.stats.clients}</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1 md:mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-[#c8a35f]">5.0</span>
                    <Star className="w-4 h-4 md:w-6 md:h-6 text-[#c8a35f] fill-current ml-1" />
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">{t.about.stats.rating}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="bg-[#0e1728] rounded-lg p-6 md:p-8 border border-[#768ca4]/20">
                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="bg-gradient-to-br from-[#768ca4]/20 to-[#c8a35f]/20 rounded-lg p-3 md:p-4 text-center">
                    <Thermometer className="w-6 h-6 md:w-8 md:h-8 text-[#c8a35f] mx-auto mb-2" />
                    <p className="text-xs md:text-sm text-gray-300">{t.about.features.climatized}</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#768ca4]/20 to-[#c8a35f]/20 rounded-lg p-3 md:p-4 text-center">
                    <Coffee className="w-6 h-6 md:w-8 md:h-8 text-[#c8a35f] mx-auto mb-2" />
                    <p className="text-xs md:text-sm text-gray-300">{t.about.features.coffee}</p>
                  </div>
                </div>
                <div className="aspect-video bg-gradient-to-br from-[#768ca4]/20 to-[#c8a35f]/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Crown className="w-12 h-12 md:w-16 md:h-16 text-[#c8a35f] mx-auto mb-3 md:mb-4" />
                    <p className="text-sm md:text-base text-gray-400">{t.about.features.premium}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Mobile Optimized */}
      <section id="services" className="py-12 md:py-20 bg-[#0e1728] relative overflow-hidden">
        {/* Background Pattern - Reduced for mobile */}
        <div className="absolute inset-0 opacity-3 md:opacity-5">
          <div className="absolute top-10 left-10 w-12 h-12 md:w-20 md:h-20 border border-[#c8a35f] rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-10 h-10 md:w-16 md:h-16 border border-[#c8a35f] rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 md:w-12 md:h-12 border border-[#c8a35f] rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">{t.services.title}</h2>
            <div className="w-16 md:w-24 h-1 bg-[#c8a35f] mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-xl text-gray-300 max-w-xl md:max-w-2xl mx-auto leading-relaxed">
              {t.services.subtitle}
            </p>
          </motion.div>

          {/* Featured Service - Barboterapia - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <Card className="bg-gradient-to-r from-[#c8a35f]/20 via-[#768ca4]/20 to-[#c8a35f]/20 border-[#c8a35f]/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c8a35f] to-[#768ca4]"></div>
              <CardContent className="p-6 md:p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
                  <div>
                    <Badge className="bg-[#c8a35f] text-[#0e1728] mb-3 md:mb-4 text-xs md:text-sm font-bold">
                      {language === "pt" ? "EXPERIÊNCIA EXCLUSIVA" : "EXCLUSIVE EXPERIENCE"}
                    </Badge>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-[#c8a35f]">
                      {t.services.barbotherapy.title}
                    </h3>
                    <div className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">R$ 30,00</div>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4 md:mb-6 line-clamp-3 lg:line-clamp-none">
                      {t.services.barbotherapy.description}
                    </p>
                    <Button
                      className="w-full lg:w-auto bg-[#c8a35f] hover:bg-[#b8934f] text-[#0e1728] font-bold"
                      asChild
                    >
                      <Link
                        href={`https://wa.me/553136575007?text=${
                          language === "pt"
                            ? "Olá! Gostaria de agendar uma Barboterapia"
                            : "Hello! I would like to schedule a Barbotherapy"
                        }`}
                        target="_blank"
                      >
                        {t.services.barbotherapy.cta}
                      </Link>
                    </Button>
                  </div>
                  <div className="relative order-first lg:order-last">
                    <div className="bg-gradient-to-br from-[#768ca4]/30 to-[#c8a35f]/30 rounded-lg p-6 md:p-8 text-center">
                      <Thermometer className="w-16 h-16 md:w-20 md:h-20 text-[#c8a35f] mx-auto mb-4" />
                      <div className="space-y-2 md:space-y-3">
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 bg-[#c8a35f] rounded-full"></div>
                          <span className="text-sm md:text-base text-gray-300">
                            {t.services.barbotherapy.features.towel}
                          </span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 bg-[#c8a35f] rounded-full"></div>
                          <span className="text-sm md:text-base text-gray-300">
                            {t.services.barbotherapy.features.massage}
                          </span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 bg-[#c8a35f] rounded-full"></div>
                          <span className="text-sm md:text-base text-gray-300">
                            {t.services.barbotherapy.features.experience}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Other Services Grid - Mobile Optimized with Show/Hide */}
          <div className="space-y-6">
            {/* Mobile: Show only first 3 services initially */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {services
                .filter((service) => service.name !== t.services.barbotherapy.title)
                .slice(0, showAllServices ? undefined : 3)
                .map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-[#1f2937] border-[#768ca4]/20 hover:border-[#c8a35f]/50 transition-all duration-300 hover:scale-105 group h-full">
                      <CardContent className="p-4 md:p-6">
                        <div className="flex items-center justify-between mb-3 md:mb-4">
                          <div className="p-2 md:p-3 bg-[#c8a35f]/10 rounded-lg group-hover:bg-[#c8a35f]/20 transition-colors">
                            {service.icon}
                          </div>
                          <div className="text-right">
                            <div className="text-sm md:text-lg font-bold text-[#c8a35f]">{service.price}</div>
                          </div>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-[#c8a35f] transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-2">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
            </div>

            {/* Show/Hide Button for Mobile */}
            <div className="text-center md:hidden">
              <Button
                variant="outline"
                onClick={() => setShowAllServices(!showAllServices)}
                className="border-[#c8a35f] text-[#c8a35f] hover:bg-[#c8a35f] hover:text-[#0e1728]"
              >
                {showAllServices ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-2" />
                    {t.services.hideServices}
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-2" />
                    {t.services.viewAll}
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* CTA Section - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12 md:mt-16"
          >
            <div className="bg-[#1f2937] rounded-lg p-6 md:p-8 border border-[#768ca4]/20">
              <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-white">{t.services.consultation.title}</h3>
              <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
                {t.services.consultation.description}
              </p>
              <Button size="lg" className="w-full md:w-auto bg-[#768ca4] hover:bg-[#5a6b7d] text-white" asChild>
                <Link
                  href={`https://wa.me/553136575007?text=${
                    language === "pt"
                      ? "Olá! Gostaria de uma consultoria sobre os serviços"
                      : "Hello! I would like a consultation about the services"
                  }`}
                  target="_blank"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  {t.services.consultation.cta}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Club SELETTO - Mobile Optimized */}
      <section
        id="club"
        className="py-12 md:py-20 bg-gradient-to-br from-[#1f2937] via-[#0e1728] to-[#1f2937] relative overflow-hidden"
      >
        {/* Background Pattern - Reduced for mobile */}
        <div className="absolute inset-0 opacity-3 md:opacity-5">
          <div className="absolute top-20 left-10 w-20 h-20 md:w-32 md:h-32 border border-[#c8a35f] rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 md:w-24 md:h-24 border border-[#c8a35f] rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-40 md:h-40 border border-[#c8a35f] rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <Crown className="w-8 h-8 md:w-12 md:h-12 text-[#c8a35f] mr-2 md:mr-4" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">{t.club.title}</h2>
              <Crown className="w-8 h-8 md:w-12 md:h-12 text-[#c8a35f] ml-2 md:ml-4" />
            </div>
            <div className="w-16 md:w-24 h-1 bg-[#c8a35f] mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-xl text-gray-300 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
              {t.club.subtitle}
            </p>
          </motion.div>

          {/* VIP Benefits Banner - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12"
          >
            <div className="bg-gradient-to-r from-[#c8a35f]/20 via-[#768ca4]/20 to-[#c8a35f]/20 rounded-lg p-6 md:p-8 border border-[#c8a35f]/30 text-center">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#c8a35f] mb-4">{t.club.benefits.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="flex items-center justify-center space-x-2 md:space-x-3">
                  <Crown className="w-5 h-5 md:w-6 md:h-6 text-[#c8a35f]" />
                  <span className="text-sm md:text-base text-white font-semibold">{t.club.benefits.unlimited}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 md:space-x-3">
                  <Star className="w-5 h-5 md:w-6 md:h-6 text-[#c8a35f]" />
                  <span className="text-sm md:text-base text-white font-semibold">{t.club.benefits.priority}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 md:space-x-3">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#c8a35f]" />
                  <span className="text-sm md:text-base text-white font-semibold">{t.club.benefits.savings}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Club Plans - Mobile Optimized */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                name: t.club.plans.cut.name,
                price: "R$ 99,90",
                originalPrice: "R$ 35,00/dia",
                savings: t.club.plans.cut.savings,
                features: t.club.plans.cut.features,
              },
              {
                name: t.club.plans.beard.name,
                price: "R$ 79,90",
                originalPrice: "R$ 20,00/dia",
                savings: t.club.plans.beard.savings,
                features: t.club.plans.beard.features,
              },
              {
                name: t.club.plans.combo.name,
                price: "R$ 179,90",
                originalPrice: "R$ 55,00/dia",
                savings: t.club.plans.combo.savings,
                features: t.club.plans.combo.features,
                popular: true,
                popularText: t.club.plans.combo.popular,
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={plan.popular ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Card
                  className={`${
                    plan.popular
                      ? "bg-gradient-to-br from-[#c8a35f]/20 to-[#768ca4]/20 border-[#c8a35f]/50 transform lg:scale-105 ring-2 ring-[#c8a35f]/30"
                      : "bg-gradient-to-br from-[#c8a35f]/10 to-[#768ca4]/10 border-[#c8a35f]/30"
                  } hover:border-[#c8a35f]/50 transition-all duration-300 hover:scale-105 relative overflow-hidden`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-[#c8a35f] text-[#0e1728] text-center py-2 font-bold text-xs md:text-sm">
                      {plan.popularText}
                    </div>
                  )}
                  <CardContent className={`p-6 md:p-8 text-center ${plan.popular ? "pt-10 md:pt-12" : ""}`}>
                    <Crown className="w-10 h-10 md:w-12 md:h-12 text-[#c8a35f] mx-auto mb-3 md:mb-4" />
                    <h3 className="text-xl md:text-2xl font-bold text-[#c8a35f] mb-2">{plan.name}</h3>

                    <div className="mb-4">
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">{plan.price}</div>
                      <div className="text-xs md:text-sm text-gray-400 line-through">{plan.originalPrice}</div>
                      <div className="text-xs md:text-sm text-green-400 font-semibold">{plan.savings}</div>
                    </div>

                    <div className="mb-6 space-y-2">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 bg-[#c8a35f] rounded-full"></div>
                          <span className="text-gray-300 text-xs md:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-[#c8a35f] hover:bg-[#b8934f] text-[#0e1728]"
                          : "bg-[#768ca4] hover:bg-[#5a6b7d] text-white"
                      } font-bold py-3`}
                      asChild
                    >
                      <Link
                        href={`https://wa.me/553136575007?text=${
                          language === "pt"
                            ? `Olá! Gostaria de saber mais sobre o ${plan.name}`
                            : `Hello! I would like to know more about ${plan.name}`
                        }`}
                        target="_blank"
                      >
                        {t.club.cta}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Info - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-8 md:mt-12"
          >
            <div className="bg-[#1f2937] rounded-lg p-4 md:p-6 border border-[#768ca4]/20 max-w-xl md:max-w-2xl mx-auto">
              <h4 className="text-base md:text-lg font-bold text-[#c8a35f] mb-2 md:mb-3">{t.club.howItWorks.title}</h4>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">{t.club.howItWorks.description}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Carousel - Mobile Optimized */}
      <section id="reviews" className="py-12 md:py-20 bg-[#0e1728]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">{t.reviews.title}</h2>
            <div className="w-16 md:w-24 h-1 bg-[#c8a35f] mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-xl text-gray-300">{t.reviews.subtitle}</p>
          </motion.div>

          {/* Mobile: Show limited reviews with expand option */}
          <div className="md:hidden">
            <div className="grid grid-cols-1 gap-4 mb-6">
              {reviews.slice(0, showAllReviews ? undefined : 3).map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="cursor-pointer"
                  onClick={() => setSelectedReview(review.id)}
                >
                  <div className="bg-[#1f2937] rounded-lg overflow-hidden border border-[#768ca4]/20 hover:border-[#c8a35f]/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="relative">
                      <Image
                        src={review.image || "/placeholder.svg"}
                        alt={`${language === "pt" ? "Avaliação" : "Review"} ${review.id}`}
                        width={320}
                        height={200}
                        className="w-full h-48 object-contain bg-white"
                      />
                      <div className="absolute top-2 right-2 bg-[#c8a35f] text-[#0e1728] px-2 py-1 rounded-full text-xs font-bold">
                        5⭐
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-gray-400 text-xs text-center">{t.reviews.clickToView}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => setShowAllReviews(!showAllReviews)}
                className="border-[#c8a35f] text-[#c8a35f] hover:bg-[#c8a35f] hover:text-[#0e1728]"
              >
                {showAllReviews ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-2" />
                    {t.reviews.viewMore}
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-2" />
                    {t.reviews.viewMore}
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Desktop: Horizontal scrolling carousel */}
          <div className="hidden md:block relative overflow-hidden">
            <motion.div
              className="flex space-x-6"
              animate={{ x: [0, -100 * reviews.length] }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {[...reviews, ...reviews].map((review, index) => (
                <motion.div
                  key={`${review.id}-${index}`}
                  className="flex-shrink-0 w-80 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedReview(review.id)}
                >
                  <div className="bg-[#1f2937] rounded-lg overflow-hidden border border-[#768ca4]/20 hover:border-[#c8a35f]/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="relative">
                      <Image
                        src={review.image || "/placeholder.svg"}
                        alt={`${language === "pt" ? "Avaliação" : "Review"} ${review.id}`}
                        width={320}
                        height={240}
                        className="w-full h-60 object-contain bg-white"
                      />
                      <div className="absolute top-3 right-3 bg-[#c8a35f] text-[#0e1728] px-2 py-1 rounded-full text-xs font-bold">
                        5⭐
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-400 text-sm text-center">{t.reviews.clickToView}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Review Modal - Mobile Optimized */}
        <AnimatePresence>
          {selectedReview && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedReview(null)}
            >
              <motion.div
                className="bg-[#1f2937] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg md:text-xl font-bold text-[#c8a35f]">{t.reviews.reviewTitle}</h3>
                    <button onClick={() => setSelectedReview(null)} className="text-gray-400 hover:text-white">
                      <X className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                  </div>
                  <Image
                    src={`/reviews/review-${selectedReview}.png`}
                    alt={`${language === "pt" ? "Avaliação" : "Review"} ${selectedReview}`}
                    width={600}
                    height={400}
                    className="w-full rounded-lg object-contain bg-white"
                  />
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => {
                        const prevId = selectedReview === 1 ? reviews.length : selectedReview - 1
                        setSelectedReview(prevId)
                      }}
                      className="flex items-center text-[#c8a35f] hover:text-[#b8934f] text-sm md:text-base"
                    >
                      <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 mr-1" />
                      {t.reviews.previous}
                    </button>
                    <button
                      onClick={() => {
                        const nextId = selectedReview === reviews.length ? 1 : selectedReview + 1
                        setSelectedReview(nextId)
                      }}
                      className="flex items-center text-[#c8a35f] hover:text-[#b8934f] text-sm md:text-base"
                    >
                      {t.reviews.next}
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Barbershop Environment Gallery - Mobile Optimized */}
      <section id="gallery" className="py-12 md:py-20 bg-[#1f2937]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">{t.gallery.title}</h2>
            <div className="w-16 md:w-24 h-1 bg-[#c8a35f] mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">{t.gallery.subtitle}</p>
          </motion.div>

          {/* Mobile: Simplified gallery with expand option */}
          <div className="md:hidden">
            <div className="grid grid-cols-1 gap-4 mb-6">
              {/* Show only 2 images initially on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#0e1728] border-[#768ca4]/20 hover:border-[#c8a35f]/50 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="aspect-video rounded-lg overflow-hidden mb-3">
                      <Image
                        src="/barbershop/area-1.jpg"
                        alt={t.gallery.areas.workStations.subtitle}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">{t.gallery.areas.workStations.title}</h3>
                    <p className="text-gray-400 text-sm">{t.gallery.areas.workStations.description}</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#0e1728] border-[#768ca4]/20 hover:border-[#c8a35f]/50 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="aspect-video rounded-lg overflow-hidden mb-3">
                      <Image
                        src="/barbershop/area-2.jpg"
                        alt={t.gallery.areas.lounge.subtitle}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">{t.gallery.areas.lounge.title}</h3>
                    <p className="text-gray-400 text-sm">{t.gallery.areas.lounge.description}</p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Additional images shown when expanded */}
              {showGalleryDetails && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Card className="bg-[#0e1728] border-[#768ca4]/20 hover:border-[#c8a35f]/50 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="aspect-video rounded-lg overflow-hidden mb-3">
                          <Image
                            src="/barbershop/area-3.jpg"
                            alt={t.gallery.areas.climate.subtitle}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-base font-bold text-white mb-1">{t.gallery.areas.climate.title}</h3>
                        <p className="text-gray-400 text-sm">{t.gallery.areas.climate.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Card className="bg-[#0e1728] border-[#768ca4]/20 hover:border-[#c8a35f]/50 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="aspect-video rounded-lg overflow-hidden mb-3">
                          <Image
                            src="/barbershop/area-4.jpg"
                            alt={t.gallery.areas.vip.subtitle}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-base font-bold text-white mb-1">{t.gallery.areas.vip.title}</h3>
                        <p className="text-gray-400 text-sm">{t.gallery.areas.vip.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </>
              )}
            </div>

            <div className="text-center mb-6">
              <Button
                variant="outline"
                onClick={() => setShowGalleryDetails(!showGalleryDetails)}
                className="border-[#c8a35f] text-[#c8a35f] hover:bg-[#c8a35f] hover:text-[#0e1728]"
              >
                {showGalleryDetails ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-2" />
                    {t.gallery.viewGallery}
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-2" />
                    {t.gallery.viewGallery}
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Desktop: Full gallery layout */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <Card className="bg-[#0e1728] border-[#768ca4]/20 hover:border-[#c8a35f]/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="aspect-video rounded-lg overflow-hidden mb-4">
                        <Image
                          src="/barbershop/area-1.jpg"
                          alt={t.gallery.areas.workStations.subtitle}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{t.gallery.areas.workStations.title}</h3>
                      <p className="text-gray-400 text-sm">{t.gallery.areas.workStations.description}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#0e1728] border-[#768ca4]/20 hover:border-[#c8a35f]/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="aspect-video rounded-lg overflow-hidden mb-4">
                        <Image
                          src="/barbershop/area-2.jpg"
                          alt={t.gallery.areas.lounge.subtitle}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{t.gallery.areas.lounge.title}</h3>
                      <p className="text-gray-400 text-sm">{t.gallery.areas.lounge.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="bg-[#0e1728] border-[#768ca4]/20 hover:border-[#c8a35f]/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="aspect-video rounded-lg overflow-hidden mb-4">
                        <Image
                          src="/barbershop/area-3.jpg"
                          alt={t.gallery.areas.climate.subtitle}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{t.gallery.areas.climate.title}</h3>
                      <p className="text-gray-400 text-sm">{t.gallery.areas.climate.description}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#0e1728] border-[#768ca4]/20 hover:border-[#c8a35f]/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="aspect-video rounded-lg overflow-hidden mb-4">
                        <Image
                          src="/barbershop/area-4.jpg"
                          alt={t.gallery.areas.vip.subtitle}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{t.gallery.areas.vip.title}</h3>
                      <p className="text-gray-400 text-sm">{t.gallery.areas.vip.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Environment Features - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12"
          >
            {[
              {
                icon: <Thermometer className="w-6 h-6 md:w-8 md:h-8 text-[#c8a35f]" />,
                title: t.gallery.features.climatization.title,
                description: t.gallery.features.climatization.description,
              },
              {
                icon: <Coffee className="w-6 h-6 md:w-8 md:h-8 text-[#c8a35f]" />,
                title: t.gallery.features.coffee.title,
                description: t.gallery.features.coffee.description,
              },
              {
                icon: <Crown className="w-6 h-6 md:w-8 md:h-8 text-[#c8a35f]" />,
                title: t.gallery.features.premium.title,
                description: t.gallery.features.premium.description,
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#0e1728] border-[#768ca4]/20 hover:border-[#c8a35f]/50 transition-all duration-300 text-center h-full">
                  <CardContent className="p-4 md:p-6">
                    <div className="mb-3 md:mb-4 flex justify-center">{feature.icon}</div>
                    <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3">{feature.title}</h3>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              size="lg"
              variant="outline"
              className="w-full md:w-auto border-[#c8a35f] text-[#c8a35f] hover:bg-[#c8a35f] hover:text-[#0e1728] px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              asChild
            >
              <Link href="https://www.instagram.com/barbeariaseletto/" target="_blank">
                <Instagram className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                {t.gallery.seeMore}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Location - Mobile Optimized */}
      <section id="location" className="py-12 md:py-20 bg-[#0e1728]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">{t.location.title}</h2>
            <div className="w-16 md:w-24 h-1 bg-[#c8a35f] mx-auto mb-6 md:mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#1f2937] rounded-lg p-6 md:p-8 border border-[#768ca4]/20">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#c8a35f]">{t.location.contactInfo}</h3>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#c8a35f] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1 text-sm md:text-base">{t.location.address}</h4>
                      <p className="text-gray-300 text-sm md:text-base">R. Lírio do Vale, 317 - Glória</p>
                      <p className="text-gray-300 text-sm md:text-base">Belo Horizonte - MG, 30830-330</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 md:space-x-4">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#c8a35f] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1 text-sm md:text-base">{t.location.hours}</h4>
                      <p className="text-gray-300 text-sm md:text-base">{t.location.schedule.weekdays}</p>
                      <p className="text-gray-300 text-sm md:text-base">{t.location.schedule.saturday}</p>
                      <p className="text-gray-300 text-sm md:text-base">{t.location.schedule.sunday}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 md:space-x-4">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#c8a35f] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1 text-sm md:text-base">{t.location.phone}</h4>
                      <p className="text-gray-300 text-sm md:text-base">(31) 3657-5007</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 md:space-x-4">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#c8a35f] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1 text-sm md:text-base">{t.location.email}</h4>
                      <p className="text-gray-300 text-sm md:text-base">contato@selettobarbearia.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-[#768ca4]/20">
                  <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">{t.location.socialMedia}</h4>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full sm:w-auto border-[#768ca4] text-[#768ca4] hover:bg-[#768ca4] hover:text-white text-xs md:text-sm"
                      asChild
                    >
                      <Link href="https://wa.me/553136575007" target="_blank">
                        <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                        WhatsApp
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full sm:w-auto border-[#768ca4] text-[#768ca4] hover:bg-[#768ca4] hover:text-white text-xs md:text-sm"
                      asChild
                    >
                      <Link href="https://www.instagram.com/barbeariaseletto/" target="_blank">
                        <Instagram className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                        Instagram
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#1f2937] rounded-lg p-6 md:p-8 border border-[#768ca4]/20 h-full">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#c8a35f]">
                  {t.location.locationTitle}
                </h3>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.471974902603!2d-44.00830548815672!3d-19.90450623744005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa697922b6788e9%3A0xe46afa66267d240c!2sBarbearia%20Seletto!5e0!3m2!1spt-BR!2sbr!4v1748034166531!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
                <Button className="w-full bg-[#768ca4] hover:bg-[#5a6b7d] text-white text-sm md:text-base" asChild>
                  <Link
                    href="https://www.google.com/maps/dir//Barbearia+Seletto,+R.+L%C3%ADrio+do+Vale,+317+-+Gl%C3%B3ria,+Belo+Horizonte+-+MG,+30830-330"
                    target="_blank"
                  >
                    <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                    {t.location.directions}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schedule Section - Mobile Optimized */}
      <section id="schedule" className="py-12 md:py-20 bg-[#1f2937]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">{t.schedule.title}</h2>
            <div className="w-16 md:w-24 h-1 bg-[#c8a35f] mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 max-w-xl md:max-w-2xl mx-auto leading-relaxed">
              {t.schedule.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Button
                  size="lg"
                  className="w-full bg-[#768ca4] hover:bg-[#5a6b7d] text-white py-4 md:py-6 text-base md:text-lg font-semibold"
                  asChild
                >
                  <Link href="https://apps.apple.com/br/app/barbearia-seletto/id1601245292" target="_blank">
                    <Apple className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                    {t.schedule.ios}
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Button
                  size="lg"
                  className="w-full bg-[#768ca4] hover:bg-[#5a6b7d] text-white py-4 md:py-6 text-base md:text-lg font-semibold"
                  asChild
                >
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.mmtools.maosdeouro&pcampaignid=web_share&pli=1"
                    target="_blank"
                  >
                    <Smartphone className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                    {t.schedule.android}
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 md:py-6 text-base md:text-lg font-semibold"
                  asChild
                >
                  <Link href="https://wa.me/553136575007" target="_blank">
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                    {t.schedule.whatsapp}
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final - Mobile Optimized */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#1f2937] to-[#0e1728]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight">{t.cta.title}</h2>
            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">{t.cta.subtitle}</p>
            <Button
              size="lg"
              className="w-full md:w-auto bg-[#c8a35f] hover:bg-[#b8934f] text-[#0e1728] px-8 md:px-12 py-4 text-base md:text-lg font-bold transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="https://wa.me/553136575007" target="_blank">
                {t.cta.button}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer - Mobile Optimized */}
      <footer className="bg-[#0e1728] py-8 md:py-12 border-t border-[#768ca4]/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="text-center md:text-left">
              <Image
                src="/logo.png"
                alt="Seletto Barbearia"
                width={60}
                height={60}
                className="mx-auto md:mx-0 mb-3 md:mb-4 md:w-20 md:h-20"
              />
              <p className="text-gray-400 text-sm md:text-base">{t.footer.tagline}</p>
            </div>

            <div className="text-center">
              <h4 className="font-semibold mb-3 md:mb-4 text-[#c8a35f] text-sm md:text-base">{t.footer.quickLinks}</h4>
              <div className="space-y-2">
                <div>
                  <button
                    onClick={() => scrollToSection("schedule")}
                    className="text-gray-400 hover:text-[#c8a35f] transition-colors text-sm md:text-base"
                  >
                    {t.footer.links.scheduling}
                  </button>
                </div>
                <div>
                  <Link
                    href="https://wa.me/553136575007"
                    className="text-gray-400 hover:text-[#c8a35f] transition-colors text-sm md:text-base"
                  >
                    {t.footer.links.whatsapp}
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://www.instagram.com/barbeariaseletto/"
                    className="text-gray-400 hover:text-[#c8a35f] transition-colors text-sm md:text-base"
                  >
                    {t.footer.links.instagram}
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-3 md:mb-4 text-[#c8a35f] text-sm md:text-base">{t.footer.contact}</h4>
              <p className="text-gray-400 text-xs md:text-sm">
                R. Lírio do Vale, 317 - Glória
                <br />
                Belo Horizonte - MG
                <br />
                (31) 3657-5007
              </p>
            </div>
          </div>

          <div className="border-t border-[#768ca4]/20 pt-6 md:pt-8 text-center">
            <p className="text-gray-400 text-xs md:text-sm">© 2024 Seletto Barbearia. {t.footer.rights}</p>
            <p className="text-gray-500 text-xs mt-1 md:mt-2">{t.footer.developer}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

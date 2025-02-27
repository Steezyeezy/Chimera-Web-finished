import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Mail, MapPin, Phone, Star, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Picture } from '../components/Picture';
import { PhotoModal } from '../components/PhotoModal';

const testimonials = [
  {
    name: "Monique K.",
    project: "Custom Home Renovation",
    text: "Chimera has done some home renovation projects for me and everything has been fantastic. They are responsive, polite, professional, and their work is beautiful. They are especially talented at custom woodwork. Highly recommended! These guys are the best!",
    rating: 5
  },
  {
    name: "Alex C.",
    project: "Complete House Remodel",
    text: "Travis and his team did an excellent job remodeling our entire home under very tight deadlines; always going the extra mile for their client; true professionals expert at what they do. We strongly recommend them!",
    rating: 5
  },
  {
    name: "Sara J B",
    project: "House Remodel",
    text: "Chimera Construction Travis and Tyler and all those that work with them are tops. We have finally found the \"Dream Team\" with Chimera Construction LLC. We have had multiple projects they have done, all of which has turned out great.",
    rating: 5
  },
  {
    name: "Lynne R",
    project: "Complete Bathroom Remodel",
    text: "After getting three bids from companies recommended on Angie's LIst I chose Chimera Construction to do the work. They were not the lowest bid but they were worth every penny. Their general contractor, Travis Grob, was wonderful. He listened carefully and worked to make sure everything was just the way I wanted it.",
    rating: 5
  }
];

const galleryImages = [
  {
    category: 'furniture',
    image: "/images/white-loft-beds.webp",
    title: "Beautiful Loft Bunk-Beds",
    description: "Custom designed and built loft bunk beds featuring clean white finish and integrated storage solutions.",
    location: "Salt Lake City, UT"
  },
  {
    category: 'cabinets',
    image: "/images/stainless-island.webp",
    title: "Big Modern Kitchen",
    description: "Spacious modern kitchen featuring a stunning stainless steel island and custom cabinetry.",
    location: "Salt Lake City, UT"
  },
  {
    category: 'furniture',
    image: "/images/big-kitchen-table.jpg",
    title: "Custom Kitchen Table",
    description: "Handcrafted large kitchen table perfect for family gatherings and entertaining.",
    location: "Salt Lake City, UT"
  }
];

export function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section 
        id="home"
        className="h-screen bg-cover bg-center relative hero-section"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-serif text-white">
              Craftsmanship Meets Innovation
            </h1>
            <p className="text-xl md:text-2xl text-white">
              Handcrafted cabinets and custom millwork tailored to your vision
            </p>
            <Link to="/our-work" className="inline-block bg-gold text-white px-8 py-3 rounded-lg text-lg hover:bg-gold-dark transition">
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section with Lightbox */}
      <section id="work" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <Picture
                  src={image.image}
                  alt={image.title}
                  className="transform transition duration-300 group-hover:scale-105"
                  aspectRatio="4/3"
                  height={500}
                  objectFit="cover"
                  objectPosition="center"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      {selectedImage !== null && (
        <PhotoModal
          project={galleryImages[selectedImage]}
          onClose={() => setSelectedImage(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-serif mb-6 text-black">Why Choose Chimera Cabinetry?</h2>
              <p className="text-black mb-6">
                With over two decades of experience in custom cabinetry and millwork, 
                we bring unparalleled craftsmanship to every project. Our team of master 
                craftsmen combines traditional woodworking techniques with modern innovation 
                to create pieces that are both beautiful and functional.
              </p>
              <p className="text-black">
                We believe in the power of custom design to transform spaces and enhance 
                daily living. Every piece we create is tailored to our clients' unique 
                needs and aesthetic preferences, ensuring a perfect fit for their homes 
                and lifestyles.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/images/2whychoose.webp"
                alt="Workshop"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-12 text-black">What Our Clients Are Saying</h2>
          <div className="relative max-w-3xl mx-auto">
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:text-gold transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="bg-white rounded-lg shadow-lg p-8 mx-12">
              <div className="flex mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>
              <p className="text-black italic mb-4">{testimonials[currentTestimonial].text}</p>
              <p className="font-semibold text-black">{testimonials[currentTestimonial].name}</p>
              <p className="text-sm text-black">{testimonials[currentTestimonial].project}</p>
            </div>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:text-gold transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-12 text-black">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Custom Cabinetry */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:z-10">
              <h3 className="text-xl font-semibold mb-4 text-black">Custom Cabinetry</h3>
              <p className="text-black">
                From kitchens to bathrooms, we create custom cabinetry that perfectly 
                fits your space and style. Each piece is handcrafted with premium materials 
                and expert attention to detail.
              </p>
            </div>
            {/* Furniture Design */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:z-10">
              <h3 className="text-xl font-semibold mb-4 text-black">Furniture Design & Build</h3>
              <p className="text-black">
                Let us bring your furniture dreams to life with custom pieces designed 
                specifically for your space. From dining tables to entertainment centers, 
                we create one-of-a-kind pieces.
              </p>
            </div>
            {/* Millwork */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:z-10">
              <h3 className="text-xl font-semibold mb-4 text-black">Millwork</h3>
              <p className="text-black">
                Our millwork services include custom moldings, trims, doors, and architectural 
                details that add character and sophistication to any space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8">Let's discuss your vision and create something extraordinary together.</p>
          <Link to="/contact" className="inline-block bg-gold text-white px-8 py-3 rounded-lg text-lg hover:bg-gold-dark transition">
            Request a Free Quote Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gold">Our Information</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-gold" />
                  <a 
                    href="https://maps.google.com/?q=3155+So+Main+St,+South+Salt+Lake"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition"
                  >
                    3155 So Main St, South Salt Lake
                  </a>
                </p>
                <p className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-gold" />
                  <a href="tel:801-694-7583" className="hover:text-gold transition">801-694-7583</a>
                </p>
                <p className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-gold" />
                  <a href="mailto:chimeraconstruction@gmail.com" className="hover:text-gold transition">
                    chimeraconstruction@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gold">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.facebook.com/ChimeraConstruction" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-gold transition"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/chimeraconstructionllc?igsh=MXc0d213bTBsMmZxbQ==" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-gold transition"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gold">Business Hours</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-gold" />
                  Monday - Friday: 8:00 AM - 4:00 PM
                </p>
                <p className="ml-7">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; {new Date().getFullYear()} Chimera Cabinetry & Mill. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
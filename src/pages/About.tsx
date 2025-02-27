import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Picture } from '../components/Picture';

export function About() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-16 text-center">
        <h1 className="text-5xl font-serif text-black mb-4">About Us</h1>
        <p className="text-xl text-black">Crafting Excellence, Redefining Quality</p>
      </div>

      {/* Introduction Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-black leading-relaxed">
              At Chimera Cabinetry, we take pride in redefining cabinetry through unparalleled 
              craftsmanship and a passion for detail. With years of experience and a commitment 
              to excellence, we specialize in creating custom cabinets that elevate spaces and 
              exceed expectations. Whether for contractors or homeowners, our dedication to 
              quality sets us apart in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-black mb-8">Our Mission</h2>
            <p className="text-lg text-black leading-relaxed">
              Our mission is simple: to bring life and quality back into a dying industry. 
              In an era of mass production and mediocrity, we stand firm in our belief that 
              true craftsmanship matters. Every cabinet we create is a testament to the artistry, 
              precision, and dedication that drives us. We aim to inspire, innovate, and deliver 
              excellence—one custom piece at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <Picture 
                src="/images/2aboutus.webp"
                alt="Craftsman at work"
                className="w-full h-[500px] object-cover transform transition duration-300 group-hover:scale-105"
                aspectRatio="4/3"
                height={500}
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-black">Our Craftsmanship</h3>
              <p className="text-black leading-relaxed">
                Every piece that leaves our workshop carries with it the mark of true 
                craftsmanship. Our artisans combine traditional woodworking techniques 
                with modern precision tools to create cabinetry that's not just beautiful, 
                but built to last generations.
              </p>
              <p className="text-black leading-relaxed">
                We believe in the power of attention to detail, the importance of selecting 
                the finest materials, and the value of taking the time to do things right. 
                This commitment to excellence is visible in every joint, every finish, and 
                every installation we complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl mb-8">
            We are more than just cabinet makers—we are artisans of quality and design. 
            Discover what sets us apart.
          </p>
          <Link to="/contact" className="inline-block bg-gold text-white px-8 py-3 rounded-lg text-lg hover:bg-gold-dark transition">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
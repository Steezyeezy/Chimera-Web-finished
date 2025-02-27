import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Picture } from '../components/Picture';

export function Services() {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/our-work');
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-16 text-center">
        <h1 className="text-5xl font-serif text-black mb-4">Our Services</h1>
        <p className="text-xl text-black">Exceptional craftsmanship for every project, tailored to your vision</p>
      </div>

      {/* Introduction Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lg text-black leading-relaxed">
            At Chimera Cabinetry, we specialize in crafting custom cabinets that blend beauty and functionality. 
            Whether you're a general contractor or a developer seeking precision and reliability or a homeowner looking for 
            personalized elegance, we bring your vision to life with unparalleled craftsmanship and attention to detail.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* For General Contractors and Developers */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-serif text-black">For General Contractors and Developers</h2>
              <p className="text-black leading-relaxed">
                We partner with contractors and developers to deliver custom cabinets that meet the highest 
                standards of quality and craftsmanship. From large-scale projects to intricate designs, our work 
                is built to impress and endure.
              </p>
            </div>
            
            <div 
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={handleImageClick}
              onKeyDown={(e) => e.key === 'Enter' && handleImageClick()}
              role="button"
              tabIndex={0}
              aria-label="View our commercial projects in the gallery"
            >
              <Picture 
                src="/images/1ourservices.webp"
                alt="Custom cabinet installation for commercial project"
                className="transform transition duration-300 group-hover:scale-105"
                aspectRatio="16/9"
                height={450}
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                  View our gallery <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </div>
              <div className="p-4 bg-white">
                <p className="text-sm text-black">
                  Large-scale commercial project featuring custom-built cabinets with premium finishes 
                  and innovative storage solutions.
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-6 w-6 mt-0.5 mr-3 rounded-full bg-gold flex items-center justify-center text-white">✓</div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Bulk Orders & Project Management</h3>
                  <p className="text-black">Efficient handling of large-scale orders with dedicated project coordination</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 mt-0.5 mr-3 rounded-full bg-gold flex items-center justify-center text-white">✓</div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Technical Specifications</h3>
                  <p className="text-black">Detailed documentation, shop drawings, 3D models and precise measurements for seamless integration</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 mt-0.5 mr-3 rounded-full bg-gold flex items-center justify-center text-white">✓</div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Timeline Guarantee</h3>
                  <p className="text-black">Committed delivery schedules to keep your projects on track</p>
                </div>
              </li>
            </ul>
          </div>

          {/* For Direct Customers */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-serif text-black">For Direct Customers</h2>
              <p className="text-black leading-relaxed">
                Bring your dream cabinets to life with our personalized approach. We work 
                closely with you to design and build cabinets that match your style, space, 
                and needs, ensuring every detail reflects your vision.
              </p>
            </div>

            <div 
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={handleImageClick}
              onKeyDown={(e) => e.key === 'Enter' && handleImageClick()}
              role="button"
              tabIndex={0}
              aria-label="View our residential projects in the gallery"
            >
              <Picture 
                src="/images/2ourservices.webp"
                alt="Custom kitchen cabinets for residential project"
                className="transform transition duration-300 group-hover:scale-105"
                aspectRatio="16/9"
                height={450}
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                  View our gallery <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </div>
              <div className="p-4 bg-white">
                <p className="text-sm text-black">
                  Bespoke kitchen design featuring handcrafted cabinets with custom storage 
                  solutions and premium hardware.
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-6 w-6 mt-0.5 mr-3 rounded-full bg-gold flex items-center justify-center text-white">✓</div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Personal Consultation</h3>
                  <p className="text-black">One-on-one design sessions to understand your vision and requirements</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 mt-0.5 mr-3 rounded-full bg-gold flex items-center justify-center text-white">✓</div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Custom Design</h3>
                  <p className="text-black">Tailored solutions that perfectly fit your space and lifestyle</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 mt-0.5 mr-3 rounded-full bg-gold flex items-center justify-center text-white">✓</div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Installation Service</h3>
                  <p className="text-black">Professional installation with attention to every detail</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8">Contact us today to discuss your project!</p>
          <Link to="/contact" className="inline-block bg-gold text-white px-8 py-3 rounded-lg text-lg hover:bg-gold-dark transition">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
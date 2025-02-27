import React, { useState } from 'react';
import { Picture } from '../components/Picture';
import { PhotoModal } from '../components/PhotoModal';

interface Project {
  category: 'cabinets' | 'home-design';
  image: string;
  title: string;
  description: string;
  location: string;
}

const projects: Project[] = [
  {
    category: 'cabinets',
    image: '/images/2person-bathroom.jpg',
    title: 'A Vanity for 2',
    description: 'Elegant dual vanity bathroom featuring custom cabinetry with premium finishes and hardware.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'cabinets',
    image: '/images/white-cabinets.jpg',
    title: 'Elegant White Cabinetry',
    description: 'Bright and spacious kitchen featuring custom white cabinetry with premium hardware and finishes.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'home-design',
    image: '/images/stainless-kitchen.jpg',
    title: 'Modern Stainless Steel Kitchen',
    description: 'Contemporary kitchen design featuring stainless steel appliances and custom cabinetry.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'cabinets',
    image: '/images/sapele-kitchenette.webp',
    title: 'Sapele Wood Kitchenette',
    description: 'Elegant kitchenette crafted from premium sapele wood with custom storage solutions.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'cabinets',
    image: '/images/dark-cabinets.webp',
    title: 'Rich Dark Wood Cabinetry',
    description: 'Sophisticated kitchen featuring rich dark wood cabinetry with elegant hardware and design details.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'home-design',
    image: '/images/modern-kitchen-fridge.jpg',
    title: 'Modern Kitchen with Built-in Refrigerator',
    description: 'Sleek modern kitchen featuring custom cabinetry with integrated refrigerator and premium finishes.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'home-design',
    image: '/images/modern-kitchen-island.jpg',
    title: 'Contemporary Kitchen Island',
    description: 'Elegant kitchen featuring a spacious island with waterfall countertop and custom storage solutions.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'home-design',
    image: '/images/modern-kitchen-sink.jpg',
    title: 'Modern Kitchen with Premium Sink',
    description: 'Contemporary kitchen design featuring a premium sink installation and custom cabinetry.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'cabinets',
    image: '/images/shaker-style-storage.jpg',
    title: 'Shaker Style Storage Solutions',
    description: 'Custom shaker style cabinetry providing elegant and functional storage solutions.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'cabinets',
    image: '/images/tetris-minibar.webp',
    title: 'Custom Tetris-Inspired Minibar',
    description: 'Unique minibar design featuring tetris-inspired cabinet arrangement with custom lighting.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'cabinets',
    image: '/images/upclose-cabinet.webp',
    title: 'Detailed Cabinet Craftsmanship',
    description: 'Close-up view of our precision cabinet work showcasing fine details and quality finishes.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'cabinets',
    image: '/images/white-oak-bathroom.webp',
    title: 'White Oak Bathroom Design',
    description: 'Elegant bathroom featuring custom white oak cabinetry with clean lines and modern hardware.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'cabinets',
    image: '/images/white-oak-vanity.jpg',
    title: 'Custom White Oak Vanity',
    description: 'Handcrafted white oak bathroom vanity with integrated storage and premium finishes.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'cabinets',
    image: '/images/timeless-cabinets.jpg',
    title: 'Timeless Kitchen Cabinetry',
    description: 'Elegant kitchen featuring timeless cabinet design with premium finishes and hardware.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'home-design',
    image: '/images/custom-venthood-kitchen.jpg',
    title: 'Custom Venthood Kitchen',
    description: 'Modern kitchen featuring a custom-designed venthood and sophisticated cabinetry.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'home-design',
    image: '/images/big-kitchen-arch.jpg',
    title: 'Elegant Arched Kitchen Design',
    description: 'Modern kitchen featuring a stunning architectural arch, custom cabinetry, and premium finishes.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'home-design',
    image: '/images/big-kitchen-island.webp',
    title: 'Spacious Kitchen Island',
    description: 'Contemporary kitchen with a large central island, perfect for both cooking and entertaining.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'home-design',
    image: '/images/big-kitchen-stove.jpg',
    title: 'Professional Grade Kitchen',
    description: 'Custom kitchen design featuring a professional-grade stove and elegant cabinetry.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'home-design',
    image: '/images/big-kitchen-table.jpg',
    title: 'Custom Dining Space',
    description: 'Handcrafted kitchen table in a beautifully designed open-concept space.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'cabinets',
    image: '/images/2stain-cabinets.jpg',
    title: 'Stained Wood Cabinetry',
    description: 'Rich stained wood cabinets with custom hardware and elegant design details.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'home-design',
    image: '/images/large-island-kitchen.jpg',
    title: 'Luxury Kitchen with Large Island',
    description: 'Spacious kitchen featuring a massive central island with premium countertops.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'cabinets',
    image: '/images/metal-door-cabinets.jpg',
    title: 'Modern Metal Accent Cabinets',
    description: 'Contemporary cabinetry featuring metal door accents and clean lines.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'cabinets',
    image: '/images/office-cabinets.jpg',
    title: 'Custom Office Storage',
    description: 'Built-in office cabinetry with integrated workspace and storage solutions.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'home-design',
    image: '/images/walnut-modern-kitchen.jpg',
    title: 'Walnut Modern Kitchen',
    description: 'Sleek modern kitchen featuring rich walnut cabinetry and contemporary design.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'home-design',
    image: '/images/contemp-island.jpg',
    title: 'Contemporary Island Design',
    description: 'Modern kitchen featuring a sleek island with waterfall countertop and minimalist design.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'home-design',
    image: '/images/contemp-kitchen.jpg',
    title: 'Elegant Contemporary Kitchen',
    description: 'Sophisticated kitchen design with clean lines and premium finishes.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'home-design',
    image: '/images/contemp-marble.jpg',
    title: 'Marble Island Countertop',
    description: 'Luxury kitchen featuring a stunning marble island countertop and contemporary cabinetry.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'cabinets',
    image: '/images/unfinished-cabinets.jpg',
    title: 'Small butlers pantry',
    description: 'Custom designed butler\'s pantry with efficient storage solutions and elegant cabinetry.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'home-design',
    image: '/images/walk-in-laundry.jpg',
    title: 'Custom Walk-in Closet',
    description: 'Custom designed walk-in closet with built-in storage and organization solutions.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'cabinets',
    image: '/images/walnut-bench-coats.jpg',
    title: 'Walnut Bench & Coat Storage',
    description: 'Beautiful walnut bench and coat storage solution for an elegant entryway.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'cabinets',
    image: '/images/grandma-doors.jpg',
    title: 'Small cozy walnut kitchenette',
    description: 'Beautifully crafted walnut kitchenette with intricate detailing and premium finish.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'home-design',
    image: '/images/grandma-kitchen.jpg',
    title: 'Walnut kitchenette paired w/ Japanese walnut shoji doors',
    description: 'Elegant walnut kitchenette featuring traditional Japanese shoji doors with custom walnut frames.',
    location: 'Salt Lake City, UT'
  },
  {
    category: 'home-design',
    image: '/images/manolis-dining.jpg',
    title: 'Manoli\'s Restaurant and Bar',
    description: 'Elegant dining space featuring custom millwork, built-in cabinetry, and sophisticated design elements.',
    location: 'Salt Lake City, UT'
  }
];

export function OurWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = selectedCategory
    ? projects.filter(project => project.category === selectedCategory)
    : projects;

  const handleNext = () => {
    const currentIndex = filteredProjects.findIndex(p => p === selectedProject);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = filteredProjects.findIndex(p => p === selectedProject);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Page Header */}
      <div className="container mx-auto px-4 mb-16 text-center">
        <h1 className="text-5xl font-serif text-black mb-4">Our Work</h1>
        <p className="text-xl text-black">Explore the Craftsmanship and Design Work that Defines Us</p>
      </div>

      {/* Project Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Picture
                  src={project.image}
                  alt={project.title}
                  className="transform transition duration-300 group-hover:scale-105"
                  aspectRatio="4/3"
                  height={400}
                  objectFit="cover"
                  objectPosition="center"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-black">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Modal */}
      {selectedProject && (
        <PhotoModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}
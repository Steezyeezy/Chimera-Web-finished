import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Picture } from './Picture';

interface Project {
  category: 'cabinets' | 'furniture' | 'home-design';
  image: string;
  title: string;
  description: string;
  location: string;
}

interface PhotoModalProps {
  project: Project;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function PhotoModal({ project, onClose, onNext, onPrev }: PhotoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center p-4">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-gold transition-colors duration-200 z-50 p-2 bg-black/50 rounded-full"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Navigation buttons */}
        <button
          className="absolute left-4 text-white hover:text-gold transition-colors duration-200 z-50 p-2 bg-black/50 rounded-full hidden md:block"
          onClick={onPrev}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-10 h-10" />
        </button>

        <button
          className="absolute right-4 text-white hover:text-gold transition-colors duration-200 z-50 p-2 bg-black/50 rounded-full hidden md:block"
          onClick={onNext}
          aria-label="Next image"
        >
          <ChevronRight className="w-10 h-10" />
        </button>

        {/* Mobile navigation buttons */}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-4 md:hidden">
          <button
            className="text-white hover:text-gold transition-colors duration-200 z-50 p-2 bg-black/50 rounded-full"
            onClick={onPrev}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            className="text-white hover:text-gold transition-colors duration-200 z-50 p-2 bg-black/50 rounded-full"
            onClick={onNext}
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Image container */}
        <div className="max-w-7xl w-full animate-fade-in">
          <Picture
            src={project.image}
            alt={project.title}
            className="w-full h-auto max-h-[80vh] object-contain"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
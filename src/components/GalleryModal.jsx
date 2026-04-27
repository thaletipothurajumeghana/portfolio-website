import { useState } from 'react'
import './GalleryModal.css'

function GalleryModal({ images, projectTitle, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="gallery-modal-overlay" onClick={onClose}>
      <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
        <button className="gallery-close" onClick={onClose}>×</button>
        <div className="gallery-title">{projectTitle} - Gallery</div>
        
        <div className="gallery-container">
          <button className="gallery-nav prev" onClick={prevImage}>‹</button>
          
          <div className="gallery-image-wrapper">
            <img src={images[currentIndex]} alt={`${projectTitle} ${currentIndex + 1}`} className="gallery-image" />
          </div>
          
          <button className="gallery-nav next" onClick={nextImage}>›</button>
        </div>
        
        <div className="gallery-counter">
          {currentIndex + 1} / {images.length}
        </div>
        
        <div className="gallery-thumbnails">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className={`gallery-thumb ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default GalleryModal

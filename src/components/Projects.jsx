import { useState } from 'react'
import GalleryModal from './GalleryModal'
import './Projects.css'

const projects = [
    {
        num: '01',
        category: 'Healthcare AI',
        title: 'Member Risk Stratification & Care Management',
        accuracy: '93% Acc.',
        desc: 'Random Forest Regressor forecasting patient risk over 30, 60, and 90-day windows — assigning risk labels from Very High to Very Low Risk. Flask backend enables real-time predictions with seamless frontend integration.',
        tags: ['Python', 'Random Forest', 'Flask', 'Healthcare'],
        repo: 'https://github.com/thaletipothurajumeghana/-Member-risk-stratification-and-care-management-',
        galleryImages: [],
        demo: '',
    },
    {
        num: '02',
        category: 'Machine Learning',
        title: 'Sales Prediction',
        accuracy: '92% Acc.',
        desc: 'Predictive analytics model using XGBoost and feature engineering to forecast sales trends. Integrated with data preprocessing pipelines and deployed for real-time sales forecasting across multiple business segments.',
        tags: ['XGBoost', 'Python', 'Pandas', 'Analytics'],
        repo: 'https://github.com/thaletipothurajumeghana/sales-predicions',
        galleryImages: [
            '/portfolio-website/sales/Screenshot 2026-03-23 231307.png',
            '/portfolio-website/sales/Screenshot 2026-03-23 231450.png',
            '/portfolio-website/sales/Screenshot 2026-03-23 231553.png',
            '/portfolio-website/sales/Screenshot 2026-03-23 231659.png',
            '/portfolio-website/sales/Screenshot 2026-03-23 231838.png',
            '/portfolio-website/sales/Screenshot 2026-03-23 232011.png',
            '/portfolio-website/sales/Screenshot 2026-03-23 232102.png',
            '/portfolio-website/sales/Screenshot 2026-03-23 232220.png',
            '/portfolio-website/sales/Screenshot 2026-03-23 232317.png',
            '/portfolio-website/sales/Screenshot 2026-03-23 232412.png',
            '/portfolio-website/sales/Screenshot 2026-03-23 232500.png',
            '/portfolio-website/sales/Screenshot 2026-03-23 232609.png',
            '/portfolio-website/sales/Screenshot 2026-03-23 234704.png',
            '/portfolio-website/sales/Screenshot 2026-03-23 234728.png',
            '/portfolio-website/sales/Screenshot 2026-03-23 234749.png',
        ],
        demo: 'https://sales-predicions.onrender.com/',
    },
    {
        num: '03',
        category: 'Healthcare AI',
        title: 'Sepsis Prediction from Patient Health Data',
        accuracy: '89% Acc.',
        desc: 'Random Forest model predicting sepsis onset from patient data using feature scaling and class-weight balancing to handle class imbalance. Deployed with joblib for real-time integration in healthcare systems.',
        tags: ['Scikit-learn', 'Pandas', 'Joblib', 'ML'],
        repo: 'https://github.com/thaletipothurajumeghana/prediction-of-sepsis',
        galleryImages: [
            '/portfolio-website/sepsis/Screenshot 2026-04-27 153943.png',
            '/portfolio-website/sepsis/Screenshot 2026-04-27 154031.png',
            '/portfolio-website/sepsis/Screenshot 2026-04-27 154054.png',
        ],
        demo: 'https://prediction-of-sepsis.onrender.com/',
    },
    {
        num: '04',
        category: 'Computer Vision',
        title: 'Handwritten Character Recognition System',
        accuracy: '98% Acc.',
        desc: 'CNN built with TensorFlow to classify 62 EMNIST handwritten characters and digits. Applied normalization, rotation correction, and optimized training with one-hot encoding and TensorFlow\'s tf.data pipeline.',
        tags: ['TensorFlow', 'CNN', 'EMNIST', 'Deep Learning'],
        repo: 'https://github.com/thaletipothurajumeghana/shuxi',
        galleryImages: [
            '/portfolio-website/hand/Screenshot 2026-04-27 155150.png',
            '/portfolio-website/hand/Screenshot 2026-04-27 155339.png',
            '/portfolio-website/hand/Screenshot 2026-04-27 155450.png',
            '/portfolio-website/hand/Screenshot 2026-04-27 155529.png',
            '/portfolio-website/hand/Screenshot 2026-04-27 155551.png',
        ],
        demo: '',
    },
    {
        num: '05',
        category: 'AI/ML',
        title: 'Mindful AI',
        accuracy: null,
        desc: 'Mental health wellness application powered by AI-driven sentiment analysis and mood tracking. Provides personalized recommendations and emotional support using NLP and machine learning algorithms for user well-being.',
        tags: ['NLP', 'Python', 'React', 'AI'],
        repo: 'https://github.com/thaletipothurajumeghana/MindfulAI',
        galleryImages: [
            '/portfolio-website/images/Screenshot 2026-03-25 104708.png',
            '/portfolio-website/images/Screenshot 2026-03-25 104745.png',
            '/portfolio-website/images/Screenshot 2026-03-25 104835.png',
            '/portfolio-website/images/Screenshot 2026-03-25 104902.png',
            '/portfolio-website/images/Screenshot 2026-03-25 104927.png',
            '/portfolio-website/images/Screenshot 2026-03-25 104958.png',
        ],
        demo: 'https://mindfulai-eyp6.onrender.com/',
    },
    {
        num: '06',
        category: 'IoT',
        title: 'Automatic Saline Level Monitoring System',
        accuracy: null,
        desc: 'IoT-based system using ESP8266 and load cell to track real-time IV fluid levels with remote alerts via Wi-Fi. Web-based monitoring implemented with Arduino IDE and Embedded C for enhanced patient safety.',
        tags: ['ESP8266', 'IoT', 'Arduino', 'Embedded C'],
        repo: null,
        galleryImages: [
            '/portfolio-website/automatic/auto 1.jpeg',
            '/portfolio-website/automatic/auto 2.jpeg',
            '/portfolio-website/automatic/auto 3.jpeg',
        ],
        doc: '/portfolio-website/automatic/2930 AUTOMATIC SALINE LEVEL MONITORING SYSTEM USING IOT.pdf',
        demo: null,
        hideButtons: true,
    },
]

function Projects() {
    const [openGallery, setOpenGallery] = useState(null)
    return (
        <section id="projects">
            <div className="section-label">Projects</div>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="glass project-card" key={project.num}>
                        <div className="project-num">{project.num} / {project.category}</div>
                        {project.accuracy && (
                            <div className="project-accuracy">{project.accuracy}</div>
                        )}
                        <div className="project-title">{project.title}</div>
                        <div className="project-desc">{project.desc}</div>
                        <div className="project-footer">
                            {!project.hideButtons ? (
                                <div className="project-actions">
                                    {project.repo && (
                                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-btn github-btn" title="GitHub Repository">
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                            </svg>
                                            GitHub
                                        </a>
                                    )}
                                    {project.galleryImages.length > 0 ? (
                                        <button onClick={() => setOpenGallery(project.num)} className="project-btn gallery-btn" title="View Gallery">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                                <circle cx="8.5" cy="8.5" r="1.5" />
                                                <polyline points="21 15 16 10 5 21" />
                                            </svg>
                                            Gallery
                                        </button>
                                    ) : (
                                        <button className="project-btn gallery-btn disabled" disabled title="Gallery - Coming Soon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                                <circle cx="8.5" cy="8.5" r="1.5" />
                                                <polyline points="21 15 16 10 5 21" />
                                            </svg>
                                            Gallery
                                        </button>
                                    )}
                                    {project.demo ? (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-btn demo-btn" title="Live Demo">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                                <polyline points="23 6 13.5 15.5 6 8 1 13" />
                                                <polyline points="17 6 23 6 23 12" />
                                            </svg>
                                            Demo
                                        </a>
                                    ) : (
                                        <button className="project-btn demo-btn disabled" disabled title="Demo - Coming Soon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                                <polyline points="23 6 13.5 15.5 6 8 1 13" />
                                                <polyline points="17 6 23 6 23 12" />
                                            </svg>
                                            Demo
                                        </button>
                                    )}
                                </div>
                            ) : (
                                <div className="project-actions">
                                    {project.galleryImages.length > 0 ? (
                                        <button onClick={() => setOpenGallery(project.num)} className="project-btn gallery-btn" title="View Gallery">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                                <circle cx="8.5" cy="8.5" r="1.5" />
                                                <polyline points="21 15 16 10 5 21" />
                                            </svg>
                                            Gallery
                                        </button>
                                    ) : (
                                        <button className="project-btn gallery-btn disabled" disabled title="Gallery - Coming Soon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                                <circle cx="8.5" cy="8.5" r="1.5" />
                                                <polyline points="21 15 16 10 5 21" />
                                            </svg>
                                            Gallery
                                        </button>
                                    )}
                                </div>
                            )}
                            {/* Add Word file download button for Automatic Saline Level Monitoring System */}
                            {project.doc && (
                                <a href={project.doc} target="_blank" rel="noopener noreferrer" className="project-btn doc-btn" title="Download Project Report">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                        <path d="M12 5v14M19 12l-7 7-7-7" />
                                    </svg>
                                    Report
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {openGallery && (
                <GalleryModal
                    images={projects.find(p => p.num === openGallery)?.galleryImages || []}
                    projectTitle={projects.find(p => p.num === openGallery)?.title || ''}
                    onClose={() => setOpenGallery(null)}
                />
            )}
        </section>
    )
}

export default Projects

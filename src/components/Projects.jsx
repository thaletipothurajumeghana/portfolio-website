const projects = [
    {
        num: '01',
        category: 'Healthcare AI',
        title: 'Member Risk Stratification & Care Management',
        accuracy: '93% Acc.',
        desc: 'Random Forest Regressor forecasting patient risk over 30, 60, and 90-day windows — assigning risk labels from Very High to Very Low Risk. Flask backend enables real-time predictions with seamless frontend integration.',
        tags: ['Python', 'Random Forest', 'Flask', 'Healthcare'],
        repo: 'https://github.com/thaletipothurajumeghana/-Member-risk-stratification-and-care-management-',
    },
    {
        num: '02',
        category: 'Computer Vision',
        title: 'Handwritten Character Recognition on EMNIST',
        accuracy: '98% Acc.',
        desc: 'CNN built with TensorFlow to classify 62 EMNIST handwritten characters and digits. Applied normalization, rotation correction, and optimized training with one-hot encoding and TensorFlow\'s tf.data pipeline.',
        tags: ['TensorFlow', 'CNN', 'EMNIST', 'Deep Learning'],
        repo: 'https://github.com/thaletipothurajumeghana',
    },
    {
        num: '03',
        category: 'Healthcare AI',
        title: 'Sepsis Prediction from Patient Health Data',
        accuracy: null,
        desc: 'Random Forest model predicting sepsis onset from patient data using feature scaling and class-weight balancing to handle class imbalance. Deployed with joblib for real-time integration in healthcare systems.',
        tags: ['Scikit-learn', 'Pandas', 'Joblib', 'ML'],
        repo: 'https://github.com/thaletipothurajumeghana',
    },
    {
        num: '04',
        category: 'IoT',
        title: 'Automatic Saline Level Monitoring System',
        accuracy: null,
        desc: 'IoT-based system using ESP8266 and load cell to track real-time IV fluid levels with remote alerts via Wi-Fi. Web-based monitoring implemented with Arduino IDE and Embedded C for enhanced patient safety.',
        tags: ['ESP8266', 'IoT', 'Arduino', 'Embedded C'],
        repo: 'https://github.com/thaletipothurajumeghana',
    },
]

function Projects() {
    return (
        <section id="projects">
            <div className="section-label">Projects</div>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="glass project-card reveal" key={project.num}>
                        <div className="project-num">{project.num} / {project.category}</div>
                        {project.accuracy && (
                            <div className="project-accuracy">{project.accuracy}</div>
                        )}
                        <div className="project-title">{project.title}</div>
                        <div className="project-desc">{project.desc}</div>
                        <div className="project-footer">
                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span className="project-tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-repo-btn">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                                View Code
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects

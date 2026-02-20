const allItems = [
    { name: 'Python', icon: (<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width="32" height="32" alt="Python" />) },
    { name: 'TensorFlow', icon: (<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" width="32" height="32" alt="TensorFlow" />) },
    { name: 'Scikit-learn', icon: (<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" width="32" height="32" alt="Scikit-learn" />) },
    { name: 'Pandas', icon: (<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" width="32" height="32" alt="Pandas" />) },
    { name: 'NumPy', icon: (<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" width="32" height="32" alt="NumPy" />) },
    { name: 'SQL', icon: (<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" width="32" height="32" alt="SQL" />) },
    { name: 'AWS', icon: (<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" width="32" height="32" alt="AWS" />) },
]

const row2Items = [
    { name: 'Matplotlib', icon: (<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" width="32" height="32" alt="Matplotlib" />) },
    { name: 'Flask', icon: (<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" width="32" height="32" alt="Flask" className="tech-img-invertible" />) },
    { name: 'Git', icon: (<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" width="32" height="32" alt="Git" />) },
    { name: 'GitHub', icon: (<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" width="32" height="32" alt="GitHub" className="tech-img-invertible" />) },
    { name: 'VS Code', icon: (<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" width="32" height="32" alt="VS Code" />) },
    { name: 'Anaconda', icon: (<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg" width="32" height="32" alt="Anaconda" />) },
]

const row1 = [...allItems, ...allItems]
const r2 = [...row2Items, ...row2Items]

function TechStack() {
    return (
        <section id="tech">
            <div className="section-label">Technical Skills</div>
            <div className="tech-container">
                <div className="tech-scroll-wrapper">
                    <div className="tech-track tech-track--row1">
                        {row1.map((item, i) => (
                            <div className="tech-item-card" key={`r1-${i}`}>
                                <div className="tech-item-icon">{item.icon}</div>
                                <div className="tech-item-name">{item.name}</div>
                            </div>
                        ))}
                    </div>
                    <div className="tech-track tech-track--row2">
                        {r2.map((item, i) => (
                            <div className="tech-item-card" key={`r2-${i}`}>
                                <div className="tech-item-icon">{item.icon}</div>
                                <div className="tech-item-name">{item.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechStack

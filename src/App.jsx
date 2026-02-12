function App() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 md:py-16">
      <header className="mb-14 border-b border-slate-800 pb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">Portfolio</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">Meghana</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Frontend developer focused on building clean, responsive, and user-friendly web
          experiences with React and modern CSS.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-cyan-400"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-700 px-4 py-2 font-medium transition hover:border-slate-500"
          >
            Contact
          </a>
        </div>
      </header>

      <section id="projects" className="mb-14">
        <h2 className="mb-6 text-2xl font-semibold">Featured Projects</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              title: 'E-Commerce UI',
              description: 'Modern storefront built with React, reusable components, and smooth UX.',
            },
            {
              title: 'Task Manager App',
              description: 'Productivity app with filters, status tracking, and local state management.',
            },
            {
              title: 'Blog Platform',
              description: 'Responsive blog interface with clean typography and category navigation.',
            },
            {
              title: 'Analytics Dashboard',
              description: 'Data-rich dashboard layout designed for clear visual hierarchy and speed.',
            },
          ].map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-slate-300">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-2xl font-semibold">Let’s Work Together</h2>
        <p className="mt-3 text-slate-300">
          Reach out for freelance work, collaboration, or full-time opportunities.
        </p>
        <a className="mt-5 inline-block text-cyan-400 hover:text-cyan-300" href="mailto:meghana@example.com">
          meghana@example.com
        </a>
      </section>
    </main>
  )
}

export default App

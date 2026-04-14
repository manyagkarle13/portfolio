export default function Home() {
  return (
    <main className="relative min-h-screen bg-linear-to-br from-emerald-100 via-white to-emerald-50 text-slate-900 scroll-smooth">
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute right-10 top-1/4 h-56 w-56 rounded-full bg-slate-900/5 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/20 blur-3xl" />

      <header className="sticky top-0 z-20 border-b border-white/80 bg-emerald-50/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold text-slate-900">Manya G Karle</div>
          <nav className="flex items-center gap-4 text-sm font-medium text-slate-700">
            <a href="#home" className="transition hover:text-slate-900">Home</a>
            <a href="#about" className="transition hover:text-slate-900">About</a>
            <a href="#skills" className="transition hover:text-slate-900">Skills</a>
            <a href="#projects" className="transition hover:text-slate-900">Projects</a>
            <a href="#experience" className="transition hover:text-slate-900">Experience</a>
            <a href="#education" className="transition hover:text-slate-900">Education</a>
            <a href="#certifications" className="transition hover:text-slate-900">Certifications</a>
            <a href="#contact" className="transition hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="scroll-mt-24 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="relative mb-10 flex h-80 w-80 items-center justify-center overflow-hidden rounded-full border-8 border-emerald-200 bg-emerald-50 shadow-[0_35px_60px_-30px_rgba(15,23,42,0.35)] md:mb-0">
          <img
            src="/photo.jpg"
            alt="Manya G Karle"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-slate-900/10 to-transparent" />
        </div>

        <div className="max-w-2xl text-center md:text-left">
          <div className="mb-4 inline-flex rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.4em] text-emerald-700 shadow-sm shadow-emerald-200/50 backdrop-blur-sm">
            Home
          </div>
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-700">Hello there, I'm</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            <span className="animate-typewriter inline-block">Manya G Karle</span>
          </h1>

          <p className="mt-4 text-lg font-medium text-slate-700 sm:text-xl">
            Information Science Student · Software Engineer · AI/ML Enthusiast
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            I build practical applications and intelligent systems that solve real-world problems.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="https://github.com/manyagkarle13"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/manyagkarle/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-500"
            >
              Resume
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-4 text-left shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">Focus</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">Web Apps</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-4 text-left shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">Strength</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">AI Systems</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-4 text-left shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">Ready</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">Internships</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 md:px-0">
          <div className="rounded-4xl border border-emerald-100 bg-emerald-50/70 p-10 shadow-xl shadow-emerald-200/40 transition">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-emerald-700">About Me</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  What I build
                </h2>
              </div>
              <div className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                AI + Web
              </div>
            </div>

            <p className="text-lg leading-8 text-slate-700">
              I am an Information Science student with a strong interest in software development and artificial intelligence. I build practical applications such as web-based tools and machine learning systems that solve real-world problems. My experience includes working with technologies like JavaScript, Python, React, Next.js, Django, and cloud services.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              I am currently focused on strengthening my problem-solving skills, contributing to meaningful projects, and seeking internship opportunities where I can grow as a Software Engineer.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-24 bg-slate-50/80 py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-0">
          <div className="mb-10 flex flex-col gap-4 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-700">Tech Stack</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Skills Snapshot
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600">
              A creative summary of the technologies I use to build intelligent and reliable applications.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-4xl border border-emerald-100 bg-white/90 p-8 shadow-xl shadow-emerald-200/40 transition hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-slate-900">Programming Languages</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {['Python','HTML','CSS','JavaScript','SQL'].map((skill) => (
                  <span key={skill} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-slate-900">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-4xl border border-emerald-100 bg-white/90 p-8 shadow-xl shadow-emerald-200/40 transition hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-slate-900">Frameworks & Libraries</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {['Django','React','Next.js'].map((skill) => (
                  <span key={skill} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-slate-900">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-4xl border border-emerald-100 bg-white/90 p-8 shadow-xl shadow-emerald-200/40 transition hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-slate-900">Tools & Technologies</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {['Git','GitHub','VS Code','REST APIs','Node.js','Figma'].map((skill) => (
                  <span key={skill} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-slate-900">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-4xl border border-emerald-100 bg-white/90 p-8 shadow-xl shadow-emerald-200/40 transition hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-slate-900">Databases & Cloud</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {['MySQL','SQLite','AWS','Render'].map((skill) => (
                  <span key={skill} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-slate-900">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-0">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-700">Projects</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Recent Work
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              A selection of my recent software projects, including productivity tools and web applications.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <div className="group rounded-4xl border border-emerald-100 bg-emerald-50/90 p-8 shadow-xl shadow-emerald-200/30 transition hover:-translate-y-1 hover:bg-emerald-100">
              <div className="relative mb-4 h-48 overflow-hidden rounded-xl bg-slate-200">
                <div className="carousel h-full w-full">
                  <div className="carousel-track h-full flex">
                    <img
                      src="/medication-app-1.jpg"
                      alt="Medication Reminder App screen 1"
                      className="carousel-item h-full w-full object-cover"
                    />
                    <img
                      src="/medication-app-2.jpg"
                      alt="Medication Reminder App screen 2"
                      className="carousel-item h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 to-transparent" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">Medication Reminder App</h3>
              <p className="mt-4 text-slate-700">
                A full-stack web application with Django REST API backend and Next.js frontend. Features user authentication, medication tracking, browser push notifications.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">Django</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">Next.js</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">Web Push</span>
              </div>
              <div className="mt-6 flex gap-4">
                <a href="https://medication-frontend-0bj3.onrender.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-emerald-700 hover:text-emerald-900">Live Demo →</a>
                <a href="https://github.com/manyagkarle13/medication-reminder.git" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-600 hover:text-slate-900">GitHub →</a>
              </div>
            </div>

            <div className="group rounded-4xl border border-emerald-100 bg-emerald-50/90 p-8 shadow-xl shadow-emerald-200/30 transition hover:-translate-y-1 hover:bg-emerald-100">
              <div className="relative mb-4 h-48 overflow-hidden rounded-xl bg-slate-200">
                <div className="carousel h-full w-full">
                  <div className="carousel-track h-full flex">
                    <img
                      src="/task-manager-1.jpg"
                      alt="Task Manager screen 1"
                      className="carousel-item h-full w-full object-cover"
                    />
                    <img
                      src="/task-manager-2.jpg"
                      alt="Task Manager screen 2"
                      className="carousel-item h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 to-transparent" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">Task Manager</h3>
              <p className="mt-4 text-slate-700">
                Full-stack task management app built with Django REST Framework backend and React + Vite frontend. Includes calendar-based daily and date-specific scheduling with task filtering and status stats.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">React</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">Django</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">Vite</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <a href="https://zippy-conkies-22815a.netlify.app" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-emerald-700 hover:text-emerald-900">Live Demo →</a>
                <a href="https://github.com/manyagkarle13/task-manager.git" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-600 hover:text-slate-900">GitHub →</a>
              </div>
            </div>

            <div className="group rounded-4xl border border-emerald-100 bg-emerald-50/90 p-8 shadow-xl shadow-emerald-200/30 transition hover:-translate-y-1 hover:bg-emerald-100">
              <div className="relative mb-4 h-48 overflow-hidden rounded-xl bg-slate-200">
                <div className="carousel h-full w-full">
                  <div className="carousel-track h-full flex">
                    <img
                      src="/whack-a-mole-1.jpg"
                      alt="Whack-a-Mole game screen 1"
                      className="carousel-item h-full w-full object-cover"
                    />
                    <img
                      src="/whack-a-mole-2.jpg"
                      alt="Whack-a-Mole game screen 2"
                      className="carousel-item h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 to-transparent" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">Whack-a-Mole</h3>
              <p className="mt-4 text-slate-700">
                A fun browser-based game built with HTML, CSS and vanilla JavaScript. Hit the mole, avoid the bomb, and score as high as possible in 30 seconds.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">HTML</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">CSS</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">JavaScript</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <a href="https://manyagkarle13.github.io/whack-a-mole/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-emerald-700 hover:text-emerald-900">Play Live →</a>
                <a href="https://github.com/manyagkarle13/whack-a-mole.git" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-600 hover:text-slate-900">GitHub →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-0">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-700">Experience</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Experience & Education
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              A combined view of my practical development experience and academic background.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-4xl border border-emerald-100 bg-slate-50/90 p-8 shadow-xl shadow-emerald-200/40">
              <div className="mb-6 flex items-start gap-4">
                <div className="h-10 w-1 rounded-full bg-emerald-700 animate-pulse-glow" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Student Developer</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.35em] text-emerald-700">Self-Directed Projects</p>
                </div>
              </div>
              <p className="text-slate-700 leading-7">
                Building real-world applications on my own, improving frontend and backend development skills, and delivering functional products with clean UI and reliable logic.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-700" />
                  Developed web applications using React, Next.js, Django, and Python.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-700" />
                  Improved user workflows with intuitive interfaces, API integrations, and deployment-ready solutions.
                </li>
              </ul>
            </div>

            <div className="rounded-4xl border border-emerald-100 bg-slate-50/90 p-8 shadow-xl shadow-emerald-200/40">
              <div className="mb-6 flex items-start gap-4">
                <div className="h-10 w-1 rounded-full bg-emerald-700 animate-pulse-glow" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Information Science and Engineering</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.35em] text-emerald-700">Malnad College of Engineering</p>
                </div>
              </div>
              <p className="text-slate-700 leading-7">
                Strengthening my foundation in software engineering, data structures, databases, operating systems, and machine learning through hands-on coursework.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">2023 – 2027</span>
                <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">CGPA: 8.1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="scroll-mt-24 bg-slate-50/90 py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-0">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-700">Certifications</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Professional Credentials
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Certifications that validate my skills in cloud computing and software engineering.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-4xl border border-emerald-100 bg-white/90 p-8 shadow-xl shadow-emerald-200/40 transition hover:-translate-y-1">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">AWS Academy Graduate – AWS Cloud Architecting</h3>
                  <p className="mt-2 text-slate-600">Amazon Web Services (AWS)</p>
                </div>
                <div className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">Completed | 2025</div>
              </div>
              <p className="mt-6 text-slate-700 leading-7">
                Completed 60 hours of cloud computing training covering cloud architecture, deployment models, and AWS services.
              </p>
              <div className="mt-6">
                <a href="https://www.credly.com/badges/ebafc7af-b20f-484f-840e-79cc20784609/print" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-500">
                  View Certificate →
                </a>
              </div>
            </div>

            <div className="rounded-4xl border border-emerald-100 bg-white/90 p-8 shadow-xl shadow-emerald-200/40 transition hover:-translate-y-1">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Software Engineering Job Simulation</h3>
                  <p className="mt-2 text-slate-600">Quantium (Forage)</p>
                </div>
                <div className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">Completed | 2026</div>
              </div>
              <p className="mt-6 text-slate-700 leading-7">
                Completed practical software engineering tasks including data processing, building a dashboard application, testing functionality, and automating test suites.
              </p>
              <div className="mt-6">
                <a href="https://www.theforage.com/completion-certificates/32A6DqtsbF7LbKdcq/jhiG2W9K8KLZK8nXP_32A6DqtsbF7LbKdcq_697c67d7c775e721ed01f43e_1773228756964_completion_certificate.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-500">
                  View Certificate →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-0">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-700">Get In Touch</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Contact Me
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              I'd love to hear from you. Reach out via email or connect on social media.
            </p>
          </div>

          <div className="rounded-4xl border border-slate-200 bg-emerald-50/80 p-10 text-center shadow-xl shadow-emerald-200/40">
            <div className="mb-8">
              <p className="text-lg font-semibold text-slate-900">Let’s build something great together.</p>
              <p className="mt-3 text-sm text-slate-600">Email, GitHub, or LinkedIn — pick the best way to connect.</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="mailto:manyagkarle@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800">
                <span>✉️</span>
                Email
              </a>
              <a href="https://www.linkedin.com/in/manyagkarle/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-emerald-600 bg-white px-8 py-4 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50">
                <span>🔗</span>
                LinkedIn
              </a>
              <a href="https://github.com/manyagkarle13" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-emerald-600 bg-white px-8 py-4 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50">
                <span>🐙</span>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

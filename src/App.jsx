import { useState } from 'react'
import data from './database/db.json'
import './global.css'

const NAV_LINKS = [
  { href: '#sobre', label: 'sobre' },
  { href: '#skills', label: 'skills' },
  { href: '#projetos', label: 'projetos' },
  { href: '#exp', label: 'experiência' },
  { href: '#contato', label: 'contato' },
]

function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <nav>
      <div className="nav-in">
        <a className="brand" href="#top" onClick={close}>
          <span className="dots"><i /><i /><i /></span>
          <span className="path">Lucas<b>.dev</b></span>
        </a>
        <div className="nav-links">
          {NAV_LINKS.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
        </div>
        <button
          className={`nav-burger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>
      {open && (
        <div className="nav-mobile">
          {NAV_LINKS.map(l => <a key={l.href} href={l.href} onClick={close}>{l.label}</a>)}
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero shell" id="top">
      <div className="hero-grid">
        <div>
          <div className="tag">
            <span className="pulse" />
            Disponível para projetos
          </div>
          <h1>
            Construo a web<br />
            de ponta a <span className="ac">ponta</span>
            <span className="cr">&nbsp;</span>
          </h1>
          <p className="lead">
            <b>Lucas Cercal</b> — Desenvolvedor full-stack. Interfaces reativas com{' '}
            <b>Vue</b> e back-ends sólidos em <b>Java / Spring Boot</b>.{' '}
            Foco em código limpo, performance e detalhes que se notam.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#projetos">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 17l6-6-6-6" /><path d="M12 19h8" />
              </svg>
              ver projetos
            </a>
            <a className="btn btn-ghost" href="#contato">Entrar em contato</a>
          </div>
        </div>
        <div className="term">
          <div className="term-bar">
            <span className="dots"><i /><i /><i /></span>
            <span>~/lucas — zsh</span>
          </div>
          <div className="term-profile">
            <div className="pic">
              <img src="https://github.com/lucascercal.png" alt="Lucas Cercal" />
              <span className="live" />
            </div>
            <div className="who">
              <div className="nm">Lucas Cercal</div>
              <div className="rl">full-stack dev · <b>online agora</b></div>
            </div>
          </div>
          <div className="term-body">
            <div><span className="ln-p">$</span> <span className="cmd">whoami</span></div>
            <div className="ok">→ full-stack developer · Santa Catarina, BR</div>
            <div><span className="ln-p">$</span> <span className="cmd">cat</span> <span className="str">stack.json</span></div>
            <div><span className="dim">{'{'}</span></div>
            <div>&nbsp;&nbsp;<span className="key">"front"</span>: <span className="str">"Vue · TypeScript"</span>,</div>
            <div>&nbsp;&nbsp;<span className="key">"back"</span>: <span className="str">"Java · Spring Boot"</span>,</div>
            <div>&nbsp;&nbsp;<span className="key">"db"</span>: <span className="str">"PostgreSQL"</span></div>
            <div><span className="dim">{'}'}</span></div>
            <div><span className="ln-p">$</span> <span className="cmd">status</span> <span className="ok">●</span> <span className="dim">Pronto pra começar</span></div>
          </div>
        </div>
      </div>
    </header>
  )
}

function About() {
  return (
    <section id="sobre" className="shell">
      <div className="gut" data-ln={"01\n02\n03"}>
        <div className="sec-head">
          <span className="ix">01 —</span>
          <h2>Sobre</h2>
        </div>
        <div className="about-grid">
          <div>
            <p>
              Sou desenvolvedor <b>full-stack</b> movido por resolver problemas reais com software bem feito.
              Gosto de pegar uma ideia e levá-la do banco de dados até o pixel — passando por API, lógica de negócio e interface.
            </p>
            <p>
              No front, construo SPAs reativas e acessíveis com <b>Vue.js</b> e <b>TypeScript</b>.
              No back, modelo domínios e exponho APIs robustas com <b>Java</b> e <b>Spring Boot</b>,
              persistindo dados em <b>PostgreSQL</b>.
            </p>
            <p>Fora do código, estou sempre estudando arquitetura, boas práticas e a próxima ferramenta que vale a pena adotar.</p>
          </div>
          <div className="quick">
            <div className="row"><span className="k">localização</span><span className="v">Santa Catarina, BR</span></div>
            <div className="row"><span className="k">foco</span><span className="v">Full-stack</span></div>
            <div className="row"><span className="k">experiência</span><span className="v">10+ anos</span></div>
            <div className="row"><span className="k">idiomas</span><span className="v">PT · EN</span></div>
            <div className="row"><span className="k">status</span><span className="v on">● disponível</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const groups = [
    { label: 'front-end', items: ['JavaScript', 'TypeScript', 'Vue.js', 'HTML5', 'CSS3'] },
    { label: 'back-end', items: ['Java', 'Spring Boot', 'NodeJs', 'REST APIs'] },
    { label: 'dados & infra', items: ['PostgreSQL', 'Git', 'SQL'] },
  ]
  return (
    <section id="skills" className="shell">
      <div className="sec-head">
        <span className="ix">02 —</span>
        <h2>Skills & stack</h2>
      </div>
      <div className="skill-grid">
        {groups.map(g => (
          <div key={g.label} className="skill-col">
            <h3>{g.label}</h3>
            <div className="chips">
              {g.items.map(s => <span key={s} className="chip">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H8M17 7v9" />
    </svg>
  )
}

function Projects({ projects }) {
  return (
    <section id="projetos" className="shell">
      <div className="sec-head">
        <span className="ix">03 —</span>
        <h2>Projetos em destaque</h2>
      </div>
      <div className="proj-grid">
        {projects.map(project => (
          <article key={project.id} className="proj">
            <div className="thumb">
              <img src={project.projectLogo} alt={project.projectName} />
              <span className="meta">{project.hashtags.join(' · ')}</span>
            </div>
            <div className="body">
              <div className="top">
                <h3>{project.projectName}</h3>
                {project.website && (
                  <a href={project.website} target="_blank" rel="noreferrer" className="arrow">
                    <ArrowIcon />
                  </a>
                )}
              </div>
              <p>{project.description}</p>
              <div className="stack">
                {project.hashtags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  const items = [
    {
      date: '2026 — atual',
      role: 'Desenvolvedor Full-Stack',
      org: '// Freelancer',
      desc: 'Desenvolvimento de sites e aplicações web para clientes de diferentes segmentos, utilizando Vue.js no front e Java Spring Boot no back.',
      now: true,
    },
    {
      date: '2022 — 2024',
      role: 'Desenvolvedor Web',
      org: '// Projetos independentes & clientes',
      desc: 'Criação de landing pages, sistemas de gestão e integrações para pequenas e médias empresas. Consolidação da stack front + back + banco de dados.',
      now: false,
    },
    {
      date: '2020 — 2022',
      role: 'Desenvolvedor Mobile & Games',
      org: '// Indie — Google Play',
      desc: 'Publicação de jogos mobile na Google Play Store. Desenvolvimento de mecânicas, arte e sistemas de pontuação do zero.',
      now: false,
    },
  ]
  return (
    <section id="exp" className="shell">
      <div className="sec-head">
        <span className="ix">04 —</span>
        <h2>Experiência</h2>
      </div>
      <div className="timeline">
        {items.map((item, i) => (
          <div key={i} className={`tl-item${item.now ? ' now' : ''}`}>
            <div className="date">{item.date}</div>
            <h3>{item.role}</h3>
            <div className="org">{item.org}</div>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contato" className="m3 shell">
      <div className="foot-card">
        <div className="cmt">// <b>let's build something</b></div>
        <h2>Vamos <span className="ac">conversar</span>?</h2>
        <p>Aberto a oportunidades full-stack, freelas e bons projetos. Responde rápido.</p>
        <div className="foot-links">
          <a className="btn btn-ghost" href="https://github.com/lucascercal" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn btn-ghost" href="https://linkedin.com/in/lucascercal" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="copy cmt">© 2026 Lucas Cercal · <b>feito com café e código</b></div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <div className="bg-grid" />
      <div className="content">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects projects={data.projects} />
        <Experience />
        <Footer />
      </div>
    </>
  )
}

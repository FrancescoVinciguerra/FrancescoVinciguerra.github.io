import Image from 'next/image';

const interests = [
  'AI Safety',
  'Deep Learning',
  'Probability',
  'Statistics',
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Torna all'inizio">
          FV
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#projects">Projects</a>
          <a href="#links">Links</a>
        </nav>
      </header>

      <section className="intro" id="top">
        <div className="portrait">
          <Image
            src="/francesco-vinciguerra.jpg"
            alt="Francesco Vinciguerra"
            width="1200"
            height="1600"
            priority
            unoptimized
          />
        </div>
        <div className="intro-copy">
          <p className="eyebrow">Master&apos;s student · EPFL</p>
          <h1>Francesco Vinciguerra</h1>
          <p className="lead">
            Master&apos;s student in Applied Mathematics at EPFL, interested in AI
            safety, deep learning, probability and statistics.
          </p>
          <div className="profile-links" aria-label="Profili accademici">
            <a
              href="https://github.com/FrancescoVinciguerra"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      <div className="content-grid">
        <aside className="sidebar" aria-label="Informazioni rapide">
          <div>
            <p className="label">Affiliation</p>
            <p>École polytechnique fédérale de Lausanne</p>
          </div>
          <div>
            <p className="label">Programme</p>
            <p>Master in Applied Mathematics</p>
          </div>
        </aside>

        <div className="sections">
          <section id="about">
            <p className="section-number">01</p>
            <div>
              <h2>About</h2>
              <p>
                I am a Master&apos;s student in Applied Mathematics at EPFL. My
                academic interests lie at the intersection of artificial
                intelligence, mathematical methods and uncertainty.
              </p>
            </div>
          </section>

          <section id="research">
            <p className="section-number">02</p>
            <div>
              <h2>Research interests</h2>
              <ul className="interest-list">
                {interests.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>
            </div>
          </section>

          <section id="projects">
            <p className="section-number">03</p>
            <div>
              <h2>Research projects</h2>
              <article className="project-card">
                <p className="label">Master&apos;s Project · EPFL · Spring 2026</p>
                <h3>
                  The Invariance Principle for the Lorentz Mirror Walk in High
                  Dimensions
                </h3>
                <p className="project-summary">
                  A study of the functional central limit theorem for the Lorentz
                  mirror walk in dimensions d ≥ 4.
                </p>
                <p className="project-credits">
                  Joint work with Ali Sourhane. Supervised by Martin Hairer and Colin
                  Piernot.
                </p>
                <a
                  className="project-link"
                  href="/lorentz-mirror-walk-project.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the report <span aria-hidden="true">↗</span>
                </a>
              </article>
            </div>
          </section>

          <section id="links">
            <p className="section-number">04</p>
            <div>
              <h2>Links</h2>
              <div className="link-card">
                <div>
                  <p className="label">Code & projects</p>
                  <h3>GitHub</h3>
                  <p>Personal repositories and projects.</p>
                </div>
                <a
                  href="https://github.com/FrancescoVinciguerra"
                  target="_blank"
                  rel="noreferrer"
                >
                  View profile ↗
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer>
        <p>© 2026 Francesco Vinciguerra</p>
        <p>Hosted on GitHub Pages</p>
      </footer>
    </main>
  );
}

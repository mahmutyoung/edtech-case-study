import { useEffect, useState } from "react";

const stats = [["41", "functional themes"], ["13", "speech actions"], ["15", "life domains"]];
const gallery = [
  ["case-study-overview.png", "Overview", "German that becomes predictable"],
  ["case-study-challenge.png", "Challenge", "Making a rich system feel simple"],
  ["case-study-information-architecture.png", "Architecture", "A learning loop built around intent"],
  ["case-study-experience.png", "Experience", "Three moments that shape the journey"],
  ["case-study-deliverables.png", "Deliverables", "A calm and capable responsive system"],
];
const asset = (file) => `${import.meta.env.BASE_URL}assets/${file}`;

function Brand() {
  return <a className="brand" href="#top" aria-label="Speech Machine home"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span>Speech Machine</span></a>;
}

function CaseStudy({ onPrototype }) {
  const [activeImage, setActiveImage] = useState(null);
  useEffect(() => {
    if (!activeImage) return undefined;
    const close = (event) => event.key === "Escape" && setActiveImage(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [activeImage]);

  return <>
    <header className="site-header"><Brand /><nav aria-label="Case study navigation"><a href="#challenge">Challenge</a><a href="#approach">Approach</a><a href="#solution">Solution</a><button className="nav-cta" onClick={onPrototype}>View prototype</button></nav></header>
    <main id="top">
      <section className="portfolio-hero">
        <div className="hero-copy">
          <p className="eyebrow">Self-initiated EdTech case study</p>
          <h1>German that becomes <em>predictable.</em></h1>
          <p className="hero-lede">A personalized learning experience that turns a complex curriculum into clear, actionable practice.</p>
          <div className="tag-row" aria-label="Project skills"><span>UX/UI Design</span><span>Information Architecture</span><span>Responsive HTML/CSS</span></div>
          <dl className="hero-meta">
            <div><dt>Role</dt><dd>UX/UI Designer &amp;<br />Front-End Prototyper</dd></div>
            <div><dt>Focus</dt><dd>German learning<br />experience platform</dd></div>
            <div><dt>Format</dt><dd>Responsive<br />web prototype</dd></div>
          </dl>
        </div>
        <button className="hero-art" onClick={() => setActiveImage("case-study-overview.png")} aria-label="Open overview design"><img src={asset("case-study-overview.png")} alt="Speech Machine case-study overview with desktop landing page mockup" /></button>
      </section>

      <section className="stats-band" aria-label="System scope">{stats.map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}<p>A complex semantic system, translated into one understandable learner journey.</p></section>

      <section className="split-section" id="challenge">
        <div><p className="eyebrow">01 — The challenge</p><h2>Make a rich learning system feel <em>simple.</em></h2></div>
        <div className="body-copy"><p>A sophisticated language-learning system contained themes, proficiency levels, communication actions, life domains, exercises, and learner feedback.</p><p>The challenge was making that complexity approachable without presenting the learner with a conventional course catalog.</p><blockquote>“What should I practise now?”</blockquote></div>
      </section>

      <section className="intent-section" id="approach">
        <div className="section-intro"><p className="eyebrow light">02 — Approach</p><h2>A learning loop built around <em>intent.</em></h2><p>I organized the experience around the learner’s immediate need rather than around content inventory.</p></div>
        <ol className="question-grid"><li><span>01</span><strong>What do I need to practise today?</strong></li><li><span>02</span><strong>What communicative action do I need?</strong></li><li><span>03</span><strong>Where will I use German?</strong></li><li><span>04</span><strong>What should I practise next?</strong></li><li><span>05</span><strong>Why is the system recommending it?</strong></li></ol>
        <div className="loop">{[["Input", "Learner profile"], ["Rules", "Curriculum model"], ["Evidence", "Recent sessions"], ["Experience", "Today’s recommendation"], ["Action", "Speaking & writing"], ["Loop", "Evaluation & next step"]].map(([label, value], index) => <div className={index === 3 ? "highlight" : ""} key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
      </section>

      <section className="solution" id="solution">
        <div className="section-intro dark-copy"><p className="eyebrow">03 — Solution</p><h2>Three moments shape the <em>experience.</em></h2></div>
        <div className="moment-grid"><article><span>01 — Prioritize</span><h3>A useful plan for today</h3><p>One review, one main task, and one transfer activity create a realistic session.</p></article><article><span>02 — Discover</span><h3>Multiple ways into the system</h3><p>Start from a communication action, a life situation, or a functional problem.</p></article><article><span>03 — Progress</span><h3>A path with visible logic</h3><p>B1 foundations, cross-domain transfer, and B2 extension form one coherent journey.</p></article></div>
        <div className="deliverables"><div><p className="eyebrow">Final deliverables</p><h3>From system thinking to a working prototype</h3></div><ul><li>Learning-experience concept</li><li>Information architecture</li><li>Landing-page UX/UI</li><li>Responsive desktop and mobile styling</li><li>Self-contained HTML/CSS prototype</li><li>Visual recommendation and progress system</li></ul></div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="gallery-heading"><div><p className="eyebrow">04 — Design walkthrough</p><h2>The complete case study</h2></div><p>Select any board to view the details at full size.</p></div>
        <div className="gallery-grid">{gallery.map(([file, label, title]) => <button key={file} onClick={() => setActiveImage(file)}><img src={asset(file)} alt={`${label}: ${title}`} loading="lazy" /><span><small>{label}</small><strong>{title}</strong></span></button>)}</div>
      </section>

      <section className="prototype-callout"><div><p className="eyebrow light">Responsive prototype</p><h2>See the learner journey as one continuous page.</h2></div><button onClick={onPrototype}>Open prototype view</button></section>
    </main>
    <footer><Brand /><p>Self-initiated concept · UX/UI + front-end prototype</p></footer>
    {activeImage && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Design preview" onClick={() => setActiveImage(null)}><button className="lightbox-close" onClick={() => setActiveImage(null)}>Close</button><img src={asset(activeImage)} alt="Selected case-study board at full size" onClick={(event) => event.stopPropagation()} /></div>}
  </>;
}

function Prototype({ onBack }) {
  return <div className="prototype-view"><header className="prototype-bar"><Brand /><button onClick={onBack}>Back to case study</button></header><main className="prototype-stage"><div className="prototype-note"><p className="eyebrow">Final landing-page artifact</p><h1>Responsive prototype overview</h1><p>This full-page design shows the proposed learner journey from today’s recommendation through discovery, learning path, progress, and continuation.</p></div><div className="prototype-frame"><img src={asset("landing-page-full.png")} alt="Full Speech Machine responsive landing-page prototype" /></div></main></div>;
}

export function App() {
  const [view, setView] = useState("case-study");
  const showPrototype = () => { setView("prototype"); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const showCaseStudy = () => { setView("case-study"); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return view === "prototype" ? <Prototype onBack={showCaseStudy} /> : <CaseStudy onPrototype={showPrototype} />;
}

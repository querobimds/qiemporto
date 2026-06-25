import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroAsset from "../assets/hero.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Querobim & Iana — Serving Jehovah Together" },
      {
        name: "description",
        content:
          "Meet Querobim and Iana, a couple from the Brazilian Sign Language congregation in Águas Lindas de Goiás, Brazil. Welcome to our story.",
      },
      { property: "og:title", content: "Querobim & Iana" },
      {
        property: "og:description",
        content:
          "Our story, our congregation, and the joy of helping Deaf friends learn about Jehovah in their own language.",
      },
    ],
  }),
  component: Index,
});

// ──────────────────────────────────────────────────────────────────────────────
// i18n — every visible string lives here. Add a key, translate, done.
// ──────────────────────────────────────────────────────────────────────────────
type Lang = "en" | "pt";

const t = {
  en: {
    nav: {
      about: "About Us",
      congregation: "Our Congregation",
      activities: "Activities",
      gallery: "Gallery",
      contact: "Contact",
      toggleMenu: "Toggle menu",
      langLabel: "Language",
    },
    hero: {
      eyebrow: "Querobim & Iana — Águas Lindas, GO, Brazil",
      title: "Hello From Brazil",
      subtitle:
        "Serving Jehovah together for 12 years — sharing the good news in Brazilian Sign Language.",
      cta1: "Get to know us",
      cta2: "Say hello",
      stats: [
        { k: "12", v: "Years married" },
        { k: "Libras", v: "Sign language ministry" },
        { k: "Brazil", v: "Águas Lindas, GO" },
      ],
    },
    about: {
      eyebrow: "About us",
      title: "A couple in love with Jehovah — and with each other.",
      body: "We are Querobim and Iana, a couple united in love and in service to Jehovah. Married for 12 years, we share a deep joy in helping Deaf people learn about Jehovah in Brazilian Sign Language. We love meeting new people, discovering different cultures, and welcoming friends into our lives. Together, we serve in the Sign Language congregation in Águas Lindas de Goiás and help with local LDC projects, including Kingdom Hall and Assembly Hall maintenance.",
      quote:
        "“We have been married for 12 years and, since January 2023, we've had the privilege of helping Deaf people learn about Jehovah in their own language.”",
    },
    congregation: {
      eyebrow: "Our congregation",
      title: "Sign Language Congregation — Águas Lindas de Goiás, Brazil.",
      body: "We belong to a warm and lively congregation that meets and ministers in Brazilian Sign Language (Libras). It is a privilege to serve a community where every gesture, every facial expression, and every embrace carries the message of God's love.",
      bullets: [
        "Meetings conducted entirely in Libras",
        "A close family that supports one another",
        "Outreach to Deaf neighbors across the region",
      ],
      cardLabel: "Languages",
      cardValue: "Português & Libras",
      cardNote: "We communicate in Portuguese and in Brazilian Sign Language.",
      photoAlt: "Our congregation",
    },
    activities: {
      eyebrow: "What we do",
      title: "Activities that fill our days with meaning.",
      intro:
        "Beyond the regular ministry, we are blessed to share in projects that strengthen our brotherhood.",
      items: [
        { title: "Deaf Ministry", body: "Since January 2023, we have been helping Deaf friends study the Bible in their own language — a work that has brought us deep joy." },
        { title: "LDC Projects", body: "We assist in local Local Design/Construction projects, including the maintenance of Kingdom Halls in our region." },
        { title: "Assembly Hall Care", body: "We also support maintenance work at the Assembly Hall that serves our circuit and surrounding congregations." },
        { title: "Meeting New Friends", body: "We love meeting people from different cultures and learning what makes each community unique — like the friends we will meet at this convention!" },
      ],
    },
    gallery: {
      eyebrow: "Moments",
      title: "Snapshots from our journey.",
      intro: "A few glimpses of the activities we love.",
      photoLabel: "Photo",
      captions: [
        "Field ministry with the Deaf community",
        "Kingdom Hall maintenance project (LDC)",
        "Assembly Hall renovation",
        "Bible study in Libras",
        "Congregation meeting",
        "Special moments together",
      ],
    },
    contact: {
      eyebrow: "Let's stay in touch",
      title: "We'd love to hear from you.",
      intro:
        "Whether to share a thought from the convention or to keep in touch afterwards, our doors — and our messages — are always open.",
      email: "Email",
      whatsapp: "WhatsApp",
      wa: "Message on WhatsApp",
    },
    footer: "Made with love for our international friends.",
  },
  pt: {
    nav: {
      about: "Sobre Nós",
      congregation: "Nossa Congregação",
      activities: "Atividades",
      gallery: "Galeria",
      contact: "Contato",
      toggleMenu: "Abrir menu",
      langLabel: "Idioma",
    },
    hero: {
      eyebrow: "Querobim & Iana — Águas Lindas, GO, Brasil",
      title: "Olá, do Brasil!",
      subtitle:
        "Servindo a Jeová juntos há 12 anos — compartilhando as boas novas em Língua Brasileira de Sinais.",
      cta1: "Conheça-nos",
      cta2: "Fale conosco",
      stats: [
        { k: "12", v: "Anos de casados" },
        { k: "Libras", v: "Ministério em sinais" },
        { k: "Brasil", v: "Águas Lindas, GO" },
      ],
    },
    about: {
      eyebrow: "Sobre nós",
      title: "Um casal apaixonado por Jeová — e um pelo outro.",
      body: "Somos Querobim e Iana, um casal unido no amor e no serviço a Jeová. Casados há 12 anos, compartilhamos uma profunda alegria em ajudar pessoas surdas a aprender sobre Jeová em Língua Brasileira de Sinais. Adoramos conhecer pessoas novas, descobrir culturas diferentes e receber amigos em nossa vida. Juntos, servimos na congregação de Língua de Sinais em Águas Lindas de Goiás e ajudamos em projetos locais do LDC, incluindo a manutenção de Salões do Reino e do Salão de Assembleias.",
      quote:
        "“Estamos casados há 12 anos e, desde janeiro de 2023, temos o privilégio de ajudar pessoas surdas a aprender sobre Jeová em seu próprio idioma.”",
    },
    congregation: {
      eyebrow: "Nossa congregação",
      title: "Congregação de Língua de Sinais — Águas Lindas de Goiás, Brasil.",
      body: "Fazemos parte de uma congregação acolhedora e animada que se reúne e prega em Língua Brasileira de Sinais (Libras). É um privilégio servir uma comunidade onde cada gesto, cada expressão facial e cada abraço transmite a mensagem do amor de Deus.",
      bullets: [
        "Reuniões realizadas inteiramente em Libras",
        "Uma família unida que se apoia mutuamente",
        "Pregação aos vizinhos surdos de toda a região",
      ],
      cardLabel: "Idiomas",
      cardValue: "Português & Libras",
      cardNote: "Nos comunicamos em português e em Língua Brasileira de Sinais.",
      photoAlt: "Nossa congregação",
    },
    activities: {
      eyebrow: "O que fazemos",
      title: "Atividades que dão significado aos nossos dias.",
      intro:
        "Além do ministério regular, somos abençoados ao participar de projetos que fortalecem nossa irmandade.",
      items: [
        { title: "Ministério para Surdos", body: "Desde janeiro de 2023 ajudamos amigos surdos a estudar a Bíblia em seu próprio idioma — um trabalho que nos traz profunda alegria." },
        { title: "Projetos do LDC", body: "Ajudamos em projetos locais do LDC, incluindo a manutenção de Salões do Reino em nossa região." },
        { title: "Cuidado do Salão de Assembleias", body: "Também apoiamos os trabalhos de manutenção no Salão de Assembleias que atende nosso circuito e as congregações vizinhas." },
        { title: "Novas Amizades", body: "Adoramos conhecer pessoas de diferentes culturas e descobrir o que torna cada comunidade única — como os amigos que vamos conhecer neste congresso!" },
      ],
    },
    gallery: {
      eyebrow: "Momentos",
      title: "Lembranças da nossa jornada.",
      intro: "Alguns vislumbres das atividades que amamos.",
      photoLabel: "Foto",
      captions: [
        "Pregação com a comunidade surda",
        "Projeto de manutenção do Salão do Reino (LDC)",
        "Reforma do Salão de Assembleias",
        "Estudo bíblico em Libras",
        "Reunião da congregação",
        "Momentos especiais juntos",
      ],
    },
    contact: {
      eyebrow: "Vamos manter contato",
      title: "Adoraríamos receber sua mensagem.",
      intro:
        "Seja para compartilhar uma reflexão do congresso ou para continuarmos em contato depois, nossas portas — e nossas mensagens — estão sempre abertas.",
      email: "E-mail",
      whatsapp: "WhatsApp",
      wa: "Enviar mensagem no WhatsApp",
    },
    footer: "Feito com amor para os nossos amigos pelo mundo.",
  },
};

type Tr = typeof t.en;

// ──────────────────────────────────────────────────────────────────────────────
// Gallery photos
//
// COMO ADICIONAR SUAS PRÓPRIAS FOTOS (manualmente):
//   1. Crie a pasta `src/assets/gallery/` se ela ainda não existir.
//   2. Coloque suas imagens lá, por exemplo: `foto-1.jpg`, `foto-2.jpg`, ...
//   3. Importe cada uma no topo deste arquivo, por exemplo:
//        import photo1 from "../assets/gallery/foto-1.jpg";
//   4. Em cada item abaixo, troque `image: null` por `image: photo1` (etc.).
//
// Itens sem `image` mostram um placeholder de gradiente (igual ao atual).
// ──────────────────────────────────────────────────────────────────────────────
const galleryPhotos: { image: string | null; tone: string }[] = [
  { image: null, tone: "from-[oklch(0.55_0.09_240)] to-[oklch(0.75_0.07_220)]" },
  { image: null, tone: "from-[oklch(0.4_0.08_245)] to-[oklch(0.7_0.06_235)]" },
  { image: null, tone: "from-[oklch(0.5_0.09_230)] to-[oklch(0.8_0.05_225)]" },
  { image: null, tone: "from-[oklch(0.45_0.1_250)] to-[oklch(0.72_0.07_240)]" },
  { image: null, tone: "from-[oklch(0.35_0.07_245)] to-[oklch(0.65_0.08_230)]" },
  { image: null, tone: "from-[oklch(0.5_0.08_235)] to-[oklch(0.78_0.06_220)]" },
];

// ──────────────────────────────────────────────────────────────────────────────
// Congregation photo
// Para adicionar a foto da congregação no card:
//   1. Salve o arquivo em `src/assets/congregation.jpg`
//   2. Descomente as duas linhas abaixo.
// ──────────────────────────────────────────────────────────────────────────────
// import congregationImg from "../assets/congregation.jpg";
const congregationPhoto: string | null = null;
// const congregationPhoto: string | null = congregationImg;

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const tr = t[lang];
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav lang={lang} setLang={setLang} tr={tr} />
      <Hero tr={tr} />
      <About tr={tr} />
      <Congregation tr={tr} />
      <Activities tr={tr} />
      <Gallery tr={tr} />
      <Contact tr={tr} />
      <Footer tr={tr} />
    </div>
  );
}

// ─── Flag icons ───────────────────────────────────────────────────────────────
function FlagBR({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 20" className={className} aria-hidden="true">
      <rect width="28" height="20" fill="#009c3b" />
      <polygon points="14,2 26,10 14,18 2,10" fill="#ffdf00" />
      <circle cx="14" cy="10" r="4" fill="#002776" />
      <path d="M10.5 10.4 a4 4 0 0 1 7 -0.6" stroke="#fff" strokeWidth="0.6" fill="none" />
    </svg>
  );
}
function FlagUS({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 20" className={className} aria-hidden="true">
      <rect width="28" height="20" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((y) => (
        <rect key={y} y={y * (20 / 13)} width="28" height={20 / 13} fill="#b22234" />
      ))}
      <rect width="12" height={20 * (7 / 13)} fill="#3c3b6e" />
    </svg>
  );
}

function LangSwitch({
  lang,
  setLang,
  label,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-background/60 p-1" role="group" aria-label={label}>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        aria-label="English"
        className={`grid h-7 w-9 place-items-center rounded-full transition ${lang === "en" ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"}`}
      >
        <FlagUS className="h-4 w-[22px] rounded-[2px]" />
      </button>
      <button
        type="button"
        onClick={() => setLang("pt")}
        aria-pressed={lang === "pt"}
        aria-label="Português"
        className={`grid h-7 w-9 place-items-center rounded-full transition ${lang === "pt" ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"}`}
      >
        <FlagBR className="h-4 w-[22px] rounded-[2px]" />
      </button>
    </div>
  );
}

function Nav({ lang, setLang, tr }: { lang: Lang; setLang: (l: Lang) => void; tr: typeof t.en }) {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { href: "#about", label: tr.nav.about },
    { href: "#congregation", label: tr.nav.congregation },
    { href: "#activities", label: tr.nav.activities },
    { href: "#gallery", label: tr.nav.gallery },
    { href: "#contact", label: tr.nav.contact },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-[color:var(--deep)]">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[color:var(--deep)] text-primary-foreground">
            Q&amp;I
          </span>
          <span className="hidden sm:inline">Querobim &amp; Iana</span>
        </a>
        <nav className="hidden gap-7 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LangSwitch lang={lang} setLang={setLang} label={tr.nav.langLabel} />
          <button
            type="button"
            aria-label={tr.nav.toggleMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-border md:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-foreground transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-5 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function Hero({ tr }: { tr: typeof t.en }) {
  return (
    <section id="top" className="relative overflow-hidden bg-[color:var(--deep)]">
      <div className="absolute inset-0 hidden sm:block">
        <img
          src={heroAsset.url}
          alt=""
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, oklch(0.22 0.05 245 / 0.55) 0%, oklch(0.22 0.05 245 / 0.85) 100%)" }}
        />
      </div>

      <div className="relative sm:hidden">
        <img
          src={heroAsset.url}
          alt="Querobim and Iana"
          width={1920}
          height={1280}
          className="mx-auto max-h-[55vh] w-full object-contain"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, oklch(0.22 0.05 245 / 0) 0%, oklch(0.22 0.05 245 / 0.55) 100%)" }}
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-5 py-16 sm:min-h-[88vh] sm:px-8 sm:py-24">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[oklch(0.82_0.06_235)]">
          {tr.hero.eyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl font-light leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {tr.hero.title}
          <span className="mt-3 block text-lg font-normal text-white/80 sm:text-xl md:text-2xl">
            {tr.hero.subtitle}
          </span>
        </h1>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--deep)] shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
          >
            {tr.hero.cta1}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {tr.hero.cta2}
          </a>
        </div>
        <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-6 text-white sm:grid-cols-3">
          {tr.hero.stats.map((s) => (
            <div key={s.v}>
              <dt className="text-3xl font-light sm:text-4xl">{s.k}</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-white/70">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-light leading-tight text-[color:var(--deep)] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

function About({ tr }: { tr: typeof t.en }) {
  return (
    <section id="about" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={tr.about.eyebrow} title={tr.about.title} />
        <div className="mt-16 flex flex-col items-center gap-10">
          <article className="max-w-3xl rounded-2xl bg-secondary/60 p-8 text-center shadow-[var(--shadow-soft)] sm:p-10">
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {tr.about.body}
            </p>
          </article>
        </div>
        <p className="mx-auto mt-12 max-w-3xl text-center text-lg italic leading-relaxed text-[color:var(--deep)]/80">
          {tr.about.quote}
        </p>
      </div>
    </section>
  );
}

function Congregation({ tr }: { tr: typeof t.en }) {
  return (
    <section
      id="congregation"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: "var(--gradient-soft)" }}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {tr.congregation.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-light leading-tight text-[color:var(--deep)] sm:text-4xl md:text-5xl">
              {tr.congregation.title}
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">{tr.congregation.body}</p>
            <ul className="mt-8 space-y-3 text-sm text-foreground">
              {tr.congregation.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div
              className="aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]"
              style={congregationPhoto ? undefined : { background: "var(--gradient-hero)" }}
            >
              {congregationPhoto && (
                <img
                  src={congregationPhoto}
                  alt={tr.congregation.photoAlt}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-card p-6 shadow-[var(--shadow-soft)] sm:left-10 sm:right-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">{tr.congregation.cardLabel}</p>
              <p className="mt-2 text-lg font-medium text-[color:var(--deep)]">{tr.congregation.cardValue}</p>
              <p className="mt-1 text-sm text-muted-foreground">{tr.congregation.cardNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Activities({ tr }: { tr: typeof t.en }) {
  return (
    <section id="activities" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={tr.activities.eyebrow} title={tr.activities.title} intro={tr.activities.intro} />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tr.activities.items.map((it, i) => (
            <article
              key={it.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <span className="text-xs font-mono text-primary/70">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-medium text-[color:var(--deep)]">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ tr }: { tr: typeof t.en }) {
  return (
    <section id="gallery" className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={tr.gallery.eyebrow} title={tr.gallery.title} intro={tr.gallery.intro} />
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPhotos.map((p, i) => (
            <figure
              key={i}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]"
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={tr.gallery.captions[i] ?? ""}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.tone} transition-transform duration-700 group-hover:scale-105`}
                  aria-hidden="true"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.04_250)]/80 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-medium text-white">
                {tr.gallery.captions[i]}
              </figcaption>
              <span className="absolute right-4 top-4 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                {tr.gallery.photoLabel} {i + 1}
              </span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ tr }: { tr: typeof t.en }) {
  const contacts = [
    {
      person: "Querobim Damasceno",
      email: "querobimdamasceno@gmail.com",
      whatsapp: "+55 61 99275-5337",
      waLink: "https://wa.me/5561992755337",
    },
    {
      person: "Iana Lima",
      email: "ianalima226@gmail.com",
      whatsapp: "+55 61 99281-9799",
      waLink: "https://wa.me/5561992819799",
    },
  ];
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32 text-white"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[oklch(0.82_0.06_235)]">
            {tr.contact.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
            {tr.contact.title}
          </h2>
          <p className="mt-5 leading-relaxed text-white/75">{tr.contact.intro}</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {contacts.map((c) => (
            <div
              key={c.person}
              className="rounded-2xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur"
            >
              <h3 className="text-xl font-medium">{c.person}</h3>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-white/60">{tr.contact.email}</dt>
                  <dd className="mt-1 break-all">
                    <a className="hover:underline" href={`mailto:${c.email}`}>
                      {c.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-white/60">{tr.contact.whatsapp}</dt>
                  <dd className="mt-1">
                    <a
                      className="hover:underline"
                      href={c.waLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {c.whatsapp}
                    </a>
                  </dd>
                </div>
              </dl>
              <a
                href={c.waLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[color:var(--deep)] transition-transform hover:-translate-y-0.5"
              >
                {tr.contact.wa}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ tr }: { tr: typeof t.en }) {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} Querobim &amp; Iana.</p>
        <p className="text-center sm:text-right">{tr.footer}</p>
      </div>
    </footer>
  );
}

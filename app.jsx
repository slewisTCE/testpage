// Helpers
const Section = ({ id, title, eyebrow, children }) => (
  <section id={id} className="scroll-mt-24 py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-4">
      {eyebrow && (
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-zinc-500">{eyebrow}</p>
      )}
      {title && (
        <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">{title}</h2>
      )}
      <div className="mt-6 md:mt-10">{children}</div>
    </div>
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-zinc-200/70 bg-white/40 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div className={`group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md dark:border-zinc-700/60 dark:bg-zinc-900/70 ${className}`}>
    {children}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-zinc-50/40 opacity-0 transition-opacity group-hover:opacity-100 dark:to-white/5" />
  </div>
);

const PlaceholderImg = ({ label = "" }) => (
  <div className="flex h-40 w-full items-center justify-center rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 text-zinc-500 dark:from-zinc-800 dark:to-zinc-700">
    <span className="text-xs">{label || "Replace with your image"}</span>
  </div>
);

// Data
const services = [
  { title: "Programs", blurb: "Nation-wide learning experiences that blend design thinking, rapid prototyping, electronics and 3D printing." },
  { title: "Workshops", blurb: "Focused, hands-on sessions in making and light manufacturing — from CAD and laser to wood, metal and robotics." },
  { title: "Training", blurb: "Practical courses covering prototyping and design principles that spark new ways of working and culture change." },
  { title: "Events", blurb: "Art + science experiences where every attendee leaves with something they learned and something they made." },
  { title: "Prototyping", blurb: "Small-run manufacturing and custom builds. Bring a problem or idea and we’ll help shape it into a real object." },
  { title: "Inclusivity consulting", blurb: "Practical guidance to build neuro-inclusive teams and HR practices that widen your recruitment pool." },
  { title: "Startup & R&D mentoring", blurb: "From concept to commercialisation — product discovery, prototyping roadmaps and business basics." },
];

const projects = [
  { title: "EDGY AF makerspace program", client: "Royal Australian Air Force", years: "2020 – current", summary: "Applied design-thinking program delivered across dedicated makerspace labs — upskilling personnel to recognise issues and prototype solutions." },
  { title: "Avalon International Airshow", client: "Royal Australian Air Force", years: "2019", summary: "Flight-line immersive experience and STEM workshops highlighting pathways into Air Force technical careers." },
  { title: "Amplify workshops", client: "Royal Australian Air Force", years: "2023", summary: "Electronics and sensors workshops encouraging STEM learning for female RAAF cadets at Richmond Airbase." },
  { title: "STEMSells education program", client: "Cbr Innovation Network / Australian Govt", years: "2015 – 2018", summary: "10-week cohort program where participants designed and built their own product with industry-grade tools." },
  { title: "ADF Pavilion — F1 Grand Prix", client: "Australian Defence Force", years: "2019", summary: "Jericho Astro-STEM ‘physics in disguise’ zone — a major international, family-friendly STEM activation." },
  { title: "PAX AUS — Games in Defence", client: "Australian Defence Force", years: "2022", summary: "Panel and outreach on game-tech and innovation for skills development across the Defence ecosystem." },
  { title: "Teacher PD — Makerspaces", client: "Garran Primary", years: "2017", summary: "Professional development to establish maker pedagogy and align hands-on skills with curriculum." },
  { title: "National Capital Exhibition", client: "National Capital Authority", years: "2018", summary: "Interactive exhibition design, manufacture and install at Regatta Point." },
  { title: "88mph nightclub", client: "88mph (Canberra)", years: "2017", summary: "Bespoke lighting and a disco-rainbow light-up dance floor build." },
  { title: "Film props — ‘The Furies’", client: "Silversun Pictures", years: "2019", summary: "Design and fabrication of screen-ready props for the Australian horror-thriller." },
  { title: "Custom chocolate moulds", client: "Enigma Fine Chocolates", years: "2019", summary: "CAD + 3D printing workshop where attendees designed their own moulds and made chocolate." },
  { title: "Old Parliament House doors", client: "Museum of Australian Democracy", years: "2017", summary: "Re-manufactured decorative components to restore the iconic front doors." },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Eventbrite", href: "https://www.eventbrite.com.au" },
];

function CreativeElementSite() {
  const [sent, setSent] = React.useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-zinc-50 to-zinc-100 text-zinc-800 antialiased dark:from-zinc-950 dark:via-zinc-950 dark:to-black dark:text-zinc-200">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-900/70">
        {/* Fixed height row, no vertical padding */}
        <div className="mx-auto flex h-24 max-w-6xl items-center justify-between px-4">
          <a href="#home" className="flex items-center">
            {/* Fixed logo height; no baseline gap; won't grow nav height */}
            <img
              src="assets/TCE+logo+RGB+slogan.webp"
              alt="The Creative Element logo"
              className="block h-20 w-auto shrink-0"
            />
          </a>

          <nav className="hidden items-center gap-6 text-sm leading-none md:flex">
            <a href="#services" className="hover:text-zinc-900 dark:hover:text-white">Services</a>
            <a href="#work" className="hover:text-zinc-900 dark:hover:text-white">Experience</a>
            <a href="#about" className="hover:text-zinc-900 dark:hover:text-white">About</a>
            {/* <a href="#events" className="hover:text-zinc-900 dark:hover:text-white">What’s On</a> */}
            <a href="#contact" className="rounded-lg bg-white px-4 py-2 font-medium text-zinc-900 hover:bg-zinc-200 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-24 md:grid-cols-2 md:py-32">
          <div>
            <div className="mb-3 flex flex-wrap gap-2">
              <Pill>STEM • Design • Making</Pill>
              <Pill>Inclusive by design</Pill>
              <Pill>Hands-on learning</Pill>
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">Invent. Create. Play.</h1>
            <p className="mt-5 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
              We design programs, workshops and experiences that bridge science and art — and send people home with something they learned and something they made.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {/* <a href="#services" className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">Explore services</a> */}
              {/* <a href="#events" className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800">What’s on</a> */}
            </div>
          </div>
          <div className="grid gap-4 md:gap-6">
            <div className="grid grid-cols-3 gap-3">
              <div className="relative h-40 w-full">
                <img src="assets/lab.jpg" alt="Lab / makerspace" className="h-full w-full rounded-xl object-cover" />
                <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white bg-black/40 rounded-xl">
                  Lab / makerspace
                </span>
              </div>
              <div className="relative h-40 w-full">
                <img src="assets/workshop.png" alt="Workshops" className="h-full w-full rounded-xl object-cover" />
                <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white bg-black/40 rounded-xl">
                  Workshops
                </span>
              </div>
              <div className="relative h-40 w-full">
                <img src="assets/ph_prototyping.jpg" alt="Prototyping" className="h-full w-full rounded-xl object-cover" />
                <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white bg-black/40 rounded-xl">
                  Prototyping
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-40 w-full">
                <img src="assets/events.png" alt="Events" className="h-full w-full rounded-xl object-cover" />
                <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white bg-black/40 rounded-xl">
                  Events
                </span>
              </div>
              <div className="relative h-40 w-full">
                <img src="assets/ph_installations.png" alt="Installations" className="h-full w-full rounded-xl object-cover" />
                <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white bg-black/40 rounded-xl">
                  Installations
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section id="services" eyebrow="What we do" title="Services">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title}>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{s.blurb}</p>
              <div className="mt-4 flex gap-2">
                {/* <a href="#contact" className="text-sm font-medium text-indigo-600 hover:underline">Enquire</a>
                <span aria-hidden>•</span>
                <a href="#work" className="text-sm text-zinc-600 hover:underline dark:text-zinc-400">See examples</a> */}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Work */}
      <Section id="work" eyebrow="Selected work" title="Who we work with">
        <div className="mb-6 flex flex-wrap gap-2">
          <Pill>Defence</Pill>
          <Pill>Education</Pill>
          <Pill>Government</Pill>
          <Pill>Community</Pill>
          <Pill>Corporate</Pill>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title}>
              <PlaceholderImg label={p.title} />
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{p.client} • {p.years}</p>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{p.summary}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* About */}
      <Section id="about" eyebrow="Who we are" title="About us">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="prose prose-zinc max-w-none dark:prose-invert">
              <p>Established in 2015, The Creative Element delivers unique, mould-breaking programs and events that build innovative thinking and practical skills for organisations and schools.</p>
              <p>Our team sits at the intersection of science & technology, art & manufacturing, learning design and event production. We actively create safe, supportive and inclusive environments — especially for neurodivergent people and those with hidden and visible disabilities.</p>
              <p>Led by founder and CEO Erica Hediger, we’re experienced rapid-prototypers and light manufacturers who love empowering communities through hands-on making.</p>
            </div>
          </div>
          <div>
            <Card>
              <h3 className="text-lg font-semibold">Quick facts</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Founded in 2015 • Canberra</li>
                <li>Programs, workshops, events, prototyping</li>
                <li>Inclusive, neuro-affirming practices</li>
                <li>Government, Defence, education & community partners</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>Makerspace</Pill>
                <Pill>Design thinking</Pill>
                <Pill>Rapid prototyping</Pill>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Events */}
      {/* <Section id="events" eyebrow="Join in" title="What’s On">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <h3 className="text-lg font-semibold">Community events</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              From electronics and robotics to creative fabrication, our events blend science, technology and art in fun, practical ways.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#contact" className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">Ask about the next date</a>
              <a href="#newsletter" className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800">Join newsletter</a>
            </div>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Past highlights</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Workshops on electronics & sensors</li>
              <li>Mural & community-build sessions</li>
              <li>STEM showcases and installations</li>
            </ul>
          </Card>
        </div>
      </Section> */}

      {/* Contact */}
      <Section id="contact" eyebrow="Say hello" title="Contact us">
        <div className="grid gap-8 md:grid-cols-2">
          {/* <Card className="md:col-span-2">
            {sent ? (
              <div className="rounded-xl bg-green-50 p-4 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                Thanks — your message is ready to send. Hook this form to your email service (Formspree, Netlify, or your API).
              </div>
            ) : (
              <form
                className="grid grid-cols-1 gap-4 md:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div>
                  <label className="text-sm font-medium">First name</label>
                  <input required className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-zinc-400 placeholder:text-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900" placeholder="Ada" />
                </div>
                <div>
                  <label className="text-sm font-medium">Last name</label>
                  <input className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-zinc-400 placeholder:text-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900" placeholder="Lovelace" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium">Email</label>
                  <input required type="email" className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-zinc-400 placeholder:text-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900" placeholder="you@company.com" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea required rows="5" className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-zinc-400 placeholder:text-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900" placeholder="Tell us about your project…" />
                </div>
                <div className="flex items-center gap-3 md:col-span-2">
                  <input id="newsletter" type="checkbox" className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900" />
                  <label htmlFor="newsletter" className="text-sm">Subscribe to the newsletter</label>
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="w-full rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">Send message</button>
                </div>
              </form>
            )}
          </Card> */}
          {/* <div className="space-y-6"> */}
            <Card>
              <h3 className="text-lg font-semibold">Contact</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                admin@thecreativeelement.com.au<br/>+61 437 698 069
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold">Socials</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Stay in touch and upto date with upcoming events and workshops.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-sm text-zinc-700 underline underline-offset-4 hover:no-underline dark:text-zinc-300">
                    {s.label}
                  </a>
                ))}
              </div>
              {/* <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Get dates for upcoming events and workshops.</p>
              <a href="#newsletter" className="mt-3 inline-block rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800">Subscribe</a> */}
            </Card>
          {/* </div> */}
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-zinc-200/70 bg-white/60 py-10 text-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-900/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
          <div className="text-center md:text-left">
            <div className="font-semibold">The Creative Element</div>
            <div className="text-zinc-500">© {new Date().getFullYear()} • Canberra, Australia</div>
          </div>
          <div className="text-center">
            <div className="text-zinc-500">ABN 57 618 117 070</div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-zinc-600 dark:text-zinc-400">
            <a href="#services" className="hover:underline">Services</a><span aria-hidden>•</span>
            <a href="#work" className="hover:underline">Experience</a><span aria-hidden>•</span>
            <a href="#about" className="hover:underline">About</a><span aria-hidden>•</span>
            {/* <a href="#events" className="hover:underline">What’s On</a><span aria-hidden>•</span> */}
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Mount app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CreativeElementSite />);

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Send, GraduationCap, ShieldCheck, Clock, Star, Menu, X, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Starter one-page website for "Sagar Engineers Education"
// TailwindCSS utility classes are used (no setup needed in this canvas).

const courses = [
  {
    title: "Civil Engineering (RRB JE/SSC JE/AE)",
    points: [
      "RCC, Steel, SOM, FM, Geotech, Highway, Env Engg",
      "Code-based MCQs (IS 456, IS 800, IRC, NBC)",
      "Topic-wise notes + formula sheets",
    ],
    icon: <GraduationCap className="w-6 h-6"/>,
  },
  {
    title: "Current Affairs (SSC/RRB/State Exams)",
    points: [
      "Daily topic-wise notes",
      "MCQs with explanations",
      "Bilingual format (Hindi + English)",
    ],
    icon: <Clock className="w-6 h-6"/>,
  },
  {
    title: "Polity / Economy / Geography",
    points: [
      "PYQs + High-yield concepts",
      "Mind-maps, one-liners",
      "Slides + PDF ready",
    ],
    icon: <BookOpen className="w-6 h-6"/>,
  },
  {
    title: "Computer & Reasoning Basics",
    points: [
      "Input/Output devices, Memory, OS",
      "Security & Cloud: exam-ready",
      "Practice sets + explanations",
    ],
    icon: <ShieldCheck className="w-6 h-6"/>,
  },
];

const features = [
  { title: "Exam-Focused Content", desc: "Strictly aligned to RRB JE, SSC JE, DFCCIL, UPPSC, UPSSSC patterns." },
  { title: "Bilingual Delivery", desc: "Questions in Hindi + English with crisp explanations in English." },
  { title: "Visual First", desc: "Mind maps, PPT-ready slides, thumbnails, and PDFs for rapid revision." },
  { title: "Daily Updates", desc: "Trending topics, code tables, and PYQs updated regularly." },
];

const testimonials = [
  {
    name: "Ananya (RRB JE)",
    text:
      "Topic-wise MCQs + explanations ne mere concepts clear kar diye. Slides se revision bahut fast ho gaya!",
  },
  {
    name: "Rohit (SSC JE)",
    text:
      "IS code points aur formula sheets ke saath focused practice – yahi game changer raha.",
  },
  {
    name: "Priya (UPPSC)",
    text:
      "Bilingual content + daily current affairs ne consistency banaye rakhi. Highly recommended!",
  },
];

// === Data you can edit ===
const notes = [
  {
    title: "RCC Short Notes (WSM + LSM)",
    subject: "RCC",
    lang: "Hindi + English",
    size: "2.4 MB",
    url: "https://drive.google.com/your-direct-download-link",
  },
  {
    title: "Fluid Mechanics Revision One-Liners",
    subject: "Fluid Mechanics",
    lang: "English",
    size: "1.8 MB",
    url: "https://drive.google.com/your-direct-download-link",
  },
];

const ebooks = [
  {
    title: "Concrete Technology PYQ Mega Pack",
    price: "₹149",
    desc: "200+ PYQs with solutions, IS 383/456 references, and quick tables.",
    buyLink: "https://rzp.io/l/your-razorpay-link", // Razorpay/Payhip/Gumroad link
  },
  {
    title: "RRB JE Civil – Full Syllabus Booster",
    price: "₹299",
    desc: "Topic-wise MCQs, code tables, and formula sheets for quick revision.",
    buyLink: "https://payhip.com/b/your-payhip-product", // example
  },
];

const videos = [
  { title: "RCC Introduction", youtubeId: "dQw4w9WgXcQ" },
  { title: "Fluid Mechanics 10 ka Dum", youtubeId: "9bZkp7q19f0" },
];

// === New Data ===
const notes = [
  { title: "RCC Short Notes (WSM + LSM)", subject: "RCC", lang: "Hindi + English", size: "2.4 MB", url: "https://drive.google.com/your-pdf-link" },
  { title: "Fluid Mechanics Revision One-Liners", subject: "Fluid Mechanics", lang: "English", size: "1.8 MB", url: "https://drive.google.com/your-pdf-link" },
];

const ebooks = [
  { title: "Concrete Technology PYQ Mega Pack", price: "₹149", desc: "200+ PYQs with solutions, IS 383/456 references, and quick tables.", buyLink: "https://rzp.io/l/your-razorpay-link" },
  { title: "RRB JE Civil – Full Syllabus Booster", price: "₹299", desc: "Topic-wise MCQs, code tables, and formula sheets for quick revision.", buyLink: "https://payhip.com/b/your-payhip-product" },
];

const videos = [
  { title: "RCC Introduction", youtubeId: "dQw4w9WgXcQ" },
  { title: "Fluid Mechanics 10 ka Dum", youtubeId: "9bZkp7q19f0" },
];

const LinkButton = ({ href, children, icon }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <Button className="rounded-2xl px-4 py-6 text-base">
      <span className="inline-flex items-center gap-2">{icon}{children}</span>
    </Button>
  </a>
);

export default function SagarEducationLanding() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white grid place-items-center font-bold">SE</div>
            <div>
              <div className="font-extrabold tracking-tight">Sagar Engineers Education</div>
              <div className="text-xs text-slate-500 -mt-0.5">Crack JE/AE & Govt Exams with Smart Prep</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-slate-600">Home</a>
            <a href="#courses" className="hover:text-slate-600">Courses</a>
            <a href="#notes" className="hover:text-slate-600">Notes (PDF)</a>
            <a href="#store" className="hover:text-slate-600">eBooks Store</a>
            <a href="#videos" className="hover:text-slate-600">Videos</a>
            <a href="#features" className="hover:text-slate-600">Features</a>
            <a href="#testimonials" className="hover:text-slate-600">Testimonials</a>
            <a href="#contact" className="hover:text-slate-600">Contact</a>
          </nav>
          <div className="md:hidden">
            <Button variant="outline" className="rounded-xl" onClick={() => setOpen(!open)}>
              {open ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
            </Button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t">
            <div className="px-4 py-3 flex flex-col gap-3 text-sm">
              <a href="#home" onClick={()=>setOpen(false)}>Home</a>
              <a href="#courses" onClick={()=>setOpen(false)}>Courses</a>
              <a href="#notes" onClick={()=>setOpen(false)}>Notes (PDF)</a>
              <a href="#store" onClick={()=>setOpen(false)}>eBooks Store</a>
              <a href="#videos" onClick={()=>setOpen(false)}>Videos</a>
              <a href="#features" onClick={()=>setOpen(false)}>Features</a>
              <a href="#testimonials" onClick={()=>setOpen(false)}>Testimonials</a>
              <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-4 pt-12 pb-10 md:pt-20 md:pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Smart, Bilingual Prep for <span className="text-slate-700">RRB JE • SSC JE • DFCCIL • UPPSC • UPSSSC</span>
            </h1>
            <p className="mt-4 text-slate-600 text-base md:text-lg">
              Topic-wise MCQs, PYQs, code-based tables, mind maps, and PPT-ready notes. Learn in <strong>Hindi + English</strong> with crisp explanations.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <LinkButton href="https://t.me/sagarcivil123" icon={<Send className="w-4 h-4"/>}>
                Join Telegram (Tech)
              </LinkButton>
              <LinkButton href="https://t.me/sagar143123" icon={<Send className="w-4 h-4"/>}>
                Join Telegram (Non-Tech)
              </LinkButton>
              <LinkButton href="#courses" icon={<BookOpen className="w-4 h-4"/>}>
                Explore Courses
              </LinkButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Courses & Tracks</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c, i) => (
            <Card key={i} className="rounded-3xl hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base font-bold">
                  <span className="text-slate-700">{c.icon}</span>
                  {c.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2 list-disc pl-5">
                  {c.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Notes */}
      <section id="notes" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Notes (PDF)</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((n, i) => (
            <Card key={i} className="rounded-3xl hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-base font-bold">{n.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-slate-600">{n.subject} • {n.lang}</div>
                <div className="text-xs text-slate-500 mt-1">{n.size}</div>
                <div className="mt-4">
                  <a href={n.url} target="_blank" rel="noreferrer">
                    <Button className="w-full rounded-2xl">Download PDF</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* eBooks Store */}
      <section id="store" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">eBooks Store</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ebooks.map((b, i) => (
              <Card key={i} className="rounded-3xl hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base font-bold">{b.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-slate-700">{b.desc}</div>
                  <div className="mt-3 font-extrabold text-lg">{b.price}</div>
                  <div className="mt-4">
                    <a href={b.buyLink} target="_blank" rel="noreferrer">
                      <Button className="w-full rounded-2xl">Buy Now</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section id="videos" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Videos</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <Card key={i} className="rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${v.youtubeId}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 text-sm font-semibold">{v.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Notes (PDF) */}
      <section id="notes" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Notes (PDF)</h2>
        <p className="mt-2 text-slate-600">Upload your notes to Drive/Dropbox/S3 and paste the direct links here.</p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((n, i) => (
            <Card key={i} className="rounded-3xl hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-base font-bold">{n.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-slate-600">{n.subject} • {n.lang}</div>
                <div className="text-xs text-slate-500 mt-1">{n.size}</div>
                <div className="mt-4">
                  <a href={n.url} target="_blank" rel="noreferrer">
                    <Button className="w-full rounded-2xl">Download PDF</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* eBooks Store */}
      <section id="store" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">eBooks Store</h2>
          <p className="mt-2 text-slate-600">Sell via Razorpay/Payhip/Gumroad. Paste your checkout link in <code>buyLink</code>.</p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ebooks.map((b, i) => (
              <Card key={i} className="rounded-3xl hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base font-bold">{b.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-slate-700">{b.desc}</div>
                  <div className="mt-3 font-extrabold text-lg">{b.price}</div>
                  <div className="mt-4">
                    <a href={b.buyLink} target="_blank" rel="noreferrer">
                      <Button className="w-full rounded-2xl">Buy Now</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section id="videos" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Videos</h2>
        <p className="mt-2 text-slate-600">Add YouTube video IDs to auto-embed.</p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <Card key={i} className="rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${v.youtubeId}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 text-sm font-semibold">{v.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Why choose us?</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Card key={i} className="rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-base font-bold">{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">What learners say</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="rounded-3xl">
              <CardContent className="pt-6">
                <p className="text-slate-700">“{t.text}”</p>
                <div className="mt-4 text-sm font-semibold">— {t.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Contact</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="text-base font-bold">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm">sagareducation@example.com</div>
                <div className="text-xs text-slate-500 mt-1">(Replace with your real email/Google Form link.)</div>
              </CardContent>
            </Card>
            <Card className="rounded-3xl">
             

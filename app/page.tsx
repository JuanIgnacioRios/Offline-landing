"use client"

import { useState, type ComponentType } from "react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Focus, Leaf, Shield, Target } from "lucide-react"

type Language = "es" | "en"
type FeatureKey = "attention" | "habits" | "boundary" | "excuses"

type Copy = {
  toggle: {
    label: string
    ariaLabel: string
    options: Record<Language, string>
  }
  hero: {
    title: string
    description: string
    imageAlt: string
    logoAlt: string
  }
  description: {
    paragraphs: string[]
    bulletIntro: string
    bullets: string[]
    quote: string
    imageAlt: string
  }
  separatorAlt: string
  why: {
    title: string
    cards: Record<FeatureKey, { title: string; description: string }>
  }
  how: {
    title: string
    steps: { title: string; description: string }[]
  }
  faq: {
    title: string
    items: { question: string; answer: string }[]
  }
  final: {
    title: string
    subtitle: string
  }
}

const featureCards: Array<{ key: FeatureKey; icon: ComponentType<{ className?: string }> }> = [
  { key: "attention", icon: Focus },
  { key: "habits", icon: Leaf },
  { key: "boundary", icon: Shield },
  { key: "excuses", icon: Target },
]

const content = {
  es: {
    toggle: {
      label: "Idioma",
      ariaLabel: "Cambiar idioma de la página",
      options: { es: "Español", en: "Inglés" },
    },
    hero: {
      title: "Volvé a estar presente.",
      description:
        "La Offline Card es una tarjeta NFC que, con solo apoyarla sobre tu teléfono, activa tu modo de desconexión. Bloqueá distracciones, ganá foco y reconectá con lo que realmente importa.",
      imageAlt: "Persona usando la Offline Card sobre un teléfono",
      logoAlt: "Isologotipo de Offline",
    },
    description: {
      paragraphs: [
        "La Offline Card es una herramienta física que te ayuda a salir del piloto automático digital.",
        "Cada vez que la usás, creás un ritual consciente: apoyás la tarjeta, el teléfono cambia de modo, y vos cambiás de estado mental.",
      ],
      bulletIntro: "Conectada a la app de Offline, podés:",
      bullets: [
        "Configurar modos de bloqueo personalizados (trabajo, descanso, lectura, meditación).",
        "Planificar sesiones de foco para que se activen automáticamente en el día y horario elegido.",
        "Medir tu tiempo de foco real y ver cuánto recuperás cada día.",
        "Seguir desafíos y hábitos que reeducan tu dopamina.",
      ],
      quote: "Desconectarte ya no depende de tu fuerza de voluntad. Depende de un simple gesto.",
      imageAlt: "Offline Card con diseño geométrico",
    },
    separatorAlt: "Isotipo Offline",
    why: {
      title: "¿Por qué usarla?",
      cards: {
        attention: {
          title: "Recuperá tu atención.",
          description: "Vivimos rodeados de estímulos pensados para robártela. La Offline Card te devuelve el control.",
        },
        habits: {
          title: "Creá hábitos más sanos.",
          description: "Transformá tu desconexión en una práctica diaria.",
        },
        boundary: {
          title: "Marcá el límite entre vos y la pantalla.",
          description: "Una acción física que te recuerda que tu bienestar no está dentro del teléfono.",
        },
        excuses: {
          title: "No más excusas.",
          description: "El foco no depende del contexto, sino de tus decisiones.",
        },
      },
    },
    how: {
      title: "Cómo funciona",
      steps: [
        {
          title: "Activá tu tarjeta.",
          description: "Elegí qué querés que haga desde la app.",
        },
        {
          title: "Tocá tu teléfono.",
          description: "Sin menús, sin distracciones.",
        },
        {
          title: "Disfrutá tu momento Offline.",
          description: "Leé, meditá o simplemente descansá.",
        },
      ],
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          question: "¿Funciona en todos los teléfonos?",
          answer: "✔️ No, solo en los iPhone compatibles con tecnología NFC.",
        },
        {
          question: "¿Qué pasa si pierdo la tarjeta?",
          answer: "✔️ Podés desactivarla desde la app y vincular una nueva.",
        },
        {
          question: "¿Necesito internet?",
          answer: "✔️ No, la app está pensada para que las funciones CORE funcionen sin internet.",
        },
      ],
    },
    final: {
      title: "Desconectarte nunca fue tan fácil.",
      subtitle: "Tu foco, tu tiempo y tu atención valen más que cualquier notificación.",
    },
  },
  en: {
    toggle: {
      label: "Language",
      ariaLabel: "Change site language",
      options: { es: "Spanish", en: "English" },
    },
    hero: {
      title: "Be present again.",
      description:
        "The Offline Card is an NFC card that, just by tapping it on your phone, activates your disconnect mode. Block distractions, regain focus, and reconnect with what truly matters.",
      imageAlt: "Person using the Offline Card on a phone",
      logoAlt: "Offline logo",
    },
    description: {
      paragraphs: [
        "The Offline Card is a physical tool that helps you break out of digital autopilot.",
        "Every time you use it, you create a mindful ritual: tap the card, your phone switches modes, and your mindset follows.",
      ],
      bulletIntro: "Connected to the Offline app, you can:",
      bullets: [
        "Set up personalized blocking modes (work, rest, reading, meditation).",
        "Schedule focus sessions so they activate automatically on the day and time you choose.",
        "Measure your real focus time and see how much you reclaim each day.",
        "Follow challenges and habits that retrain your dopamine.",
      ],
      quote: "Disconnecting no longer relies on willpower. It takes a simple gesture.",
      imageAlt: "Offline Card with a geometric design",
    },
    separatorAlt: "Offline symbol",
    why: {
      title: "Why use it?",
      cards: {
        attention: {
          title: "Regain your attention.",
          description: "We live surrounded by stimuli designed to steal it. Offline Card gives you back control.",
        },
        habits: {
          title: "Build healthier habits.",
          description: "Turn your disconnection into a daily practice.",
        },
        boundary: {
          title: "Draw the line between you and the screen.",
          description: "A physical action that reminds you your wellbeing isn't inside your phone.",
        },
        excuses: {
          title: "No more excuses.",
          description: "Focus doesn't depend on the context, but on your decisions.",
        },
      },
    },
    how: {
      title: "How it works",
      steps: [
        {
          title: "Activate your card.",
          description: "Choose what you want it to do from the app.",
        },
        {
          title: "Tap your phone.",
          description: "No menus, no distractions.",
        },
        {
          title: "Enjoy your Offline moment.",
          description: "Read, meditate, or simply rest.",
        },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Does it work on every phone?",
          answer: "✔️ Not yet—only on iPhones that support NFC.",
        },
        {
          question: "What happens if I lose the card?",
          answer: "✔️ You can deactivate it from the app and link a new one.",
        },
        {
          question: "Do I need internet?",
          answer: "✔️ No, the app is designed so the core features work offline.",
        },
      ],
    },
    final: {
      title: "Disconnecting has never been this easy.",
      subtitle: "Your focus, your time, and your attention are worth more than any notification.",
    },
  },
} satisfies Record<Language, Copy>

export default function OfflineCardLanding() {
  const [language, setLanguage] = useState<Language>("es")
  const text = content[language]

  return (
    <main className="relative min-h-screen bg-[#013326]">
      <div className="absolute top-6 right-6 z-10 flex items-center gap-2">
        <span className="text-sm font-light text-white/80">{text.toggle.label}</span>
        <div className="flex gap-2 rounded-full bg-white/10 p-1 backdrop-blur">
          {(["es", "en"] as Language[]).map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setLanguage(lang)}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                language === lang ? "bg-white text-[#013326]" : "text-white/80 hover:text-white"
              }`}
              aria-pressed={language === lang}
              aria-label={`${text.toggle.ariaLabel}: ${text.toggle.options[lang]}`}
            >
              {text.toggle.options[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-balance">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#fff] leading-tight">{text.hero.title}</h1>
            <p className="text-lg md:text-xl text-[#fff]/80 leading-relaxed font-light">{text.hero.description}</p>
            <img src="/offline-logo.png" alt={text.hero.logoAlt} className="h-10" />
          </div>
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px]">
            <img
              src="/offline-tapping.jpeg"
              alt={text.hero.imageAlt}
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="bg-[#013326] py-12">
        <div className="w-full flex items-center justify-center">
          <div className="h-px bg-white/30 flex-1" />
          <img src="/offlineisotipoblanco.png" alt={text.separatorAlt} className="h-24 w-auto mx-6" />
          <div className="h-px bg-white/30 flex-1" />
        </div>
      </div>

      {/* Description Section */}
      <section className="bg-[#013326] py-24 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6 text-[#fff]">
            {text.description.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-xl md:text-2xl font-light leading-relaxed">
                {paragraph}
              </p>
            ))}
            <p className="text-lg leading-relaxed font-light">{text.description.bulletIntro}</p>
            <ul className="space-y-4 text-lg font-light ml-6">
              {text.description.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#fff] mt-1">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="text-xl md:text-2xl font-serif italic text-[#fff] pt-6">{text.description.quote}</p>
          </div>
          <div className="pt-8">
            <img src="/offlinecard.jpeg" alt={text.description.imageAlt} className="w-full rounded-2xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Why Use It Section */}
      <section className="bg-[#fff] py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-[#013326] text-center mb-16 text-balance">
            {text.why.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featureCards.map(({ key, icon: Icon }) => {
              const card = text.why.cards[key]
              return (
                <Card
                  key={key}
                  className="bg-white/80 backdrop-blur border-none p-8 space-y-4 hover:bg-white/90 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-[#013326] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-light text-[#013326]">{card.title}</h3>
                  <p className="text-[#013326]/80 leading-relaxed font-light">{card.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#013326] py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-[#fff] text-center mb-16 text-balance">
            {text.how.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {text.how.steps.map((step, index) => (
              <div key={step.title} className="text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-[#fff] flex items-center justify-center mx-auto text-3xl font-light text-[#013326]">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-light text-[#fff]">{step.title}</h3>
                <p className="text-[#fff]/80 leading-relaxed font-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#fff] py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-[#013326] text-center mb-16 text-balance">
            {text.faq.title}
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {text.faq.items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index + 1}`}
                className="bg-white/80 backdrop-blur rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="text-xl font-light text-[#013326] hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#013326]/80 text-lg font-light pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#013326] pt-24 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight text-balance">
            {text.final.title}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed text-balance">
            {text.final.subtitle}
          </p>
          <img src="/offline-logo.png" alt={text.hero.logoAlt} className="h-10 m-auto" />
        </div>
        {/* Separator */}
        <div className="bg-[#013326] pt-12">
          <div className="w-full flex items-center justify-center">
            <div className="h-px bg-white/30 flex-1" />
            <img src="/offlineisotipoblanco.png" alt={text.separatorAlt} className="h-12 w-auto mx-6" />
            <div className="h-px bg-white/30 flex-1" />
          </div>
        </div>
      </section>
    </main>
  )
}

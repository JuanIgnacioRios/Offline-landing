import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Focus, Leaf, Shield, Target } from "lucide-react"

export default function OfflineCardLanding() {
  return (
    <main className="min-h-screen bg-[#013326]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-balance">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#fff] leading-tight">
              Volvé a estar presente.
            </h1>
            <p className="text-lg md:text-xl text-[#fff]/80 leading-relaxed font-light">
              La Offline Card es una tarjeta NFC que, con solo apoyarla sobre tu teléfono, activa tu modo de
              desconexión. Bloqueá distracciones, ganá foco y reconectá con lo que realmente importa.
            </p>
             <img
              src="/offline-logo.png"
              alt="offlinelogo"
              className="h-10"
            />
          </div>
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px]">
            <img
              src="/offline-tapping.jpeg"
              alt="Offline Card en uso"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="bg-[#013326] py-12">
        <div className="w-full flex items-center justify-center">
          <div className="h-px bg-white/30 flex-1" />
          <img
            src="/offlineisotipoblanco.png"
            alt="Isotipo Offline"
            className="h-24 w-auto mx-6"
          />
          <div className="h-px bg-white/30 flex-1" />
        </div>
      </div>

      {/* Description Section */}
      <section className="bg-[#013326] py-24 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6 text-[#fff]">
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              La Offline Card es una herramienta física que te ayuda a salir del piloto automático digital.
            </p>
            <p className="text-lg leading-relaxed font-light">
              Cada vez que la usás, creás un ritual consciente: apoyás la tarjeta, el teléfono cambia de modo, y vos
              cambiás de estado mental.
            </p>
            <p className="text-lg leading-relaxed font-light">Conectada a la app de Offline, podés:</p>
            <ul className="space-y-4 text-lg font-light ml-6">
              <li className="flex items-start gap-3">
                <span className="text-[#fff] mt-1">•</span>
                <span>Configurar modos de bloqueo personalizados (trabajo, descanso, lectura, meditación).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#fff] mt-1">•</span>
                <span>Planificar sesiones de foco para que se activen automaticamente en el dia y horario elegido.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#fff] mt-1">•</span>
                <span>Medir tu tiempo de foco real y ver cuánto recuperás cada día.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#fff] mt-1">•</span>
                <span>Seguir desafíos y hábitos que reeducan tu dopamina.</span>
              </li>
            </ul>
            <p className="text-xl md:text-2xl font-serif italic text-[#fff] pt-6">
              Desconectarte ya no depende de tu fuerza de voluntad. Depende de un simple gesto.
            </p>
          </div>
          <div className="pt-8">
            <img
              src="/offlinecard.jpeg"
              alt="Offline Card con diseño geométrico"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Use It Section */}
      <section className="bg-[#fff] py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-[#013326] text-center mb-16 text-balance">
            ¿Por qué usarla?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur border-none p-8 space-y-4 hover:bg-white/90 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#013326] flex items-center justify-center">
                <Focus className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-light text-[#013326]">Recuperá tu atención.</h3>
              <p className="text-[#013326]/80 leading-relaxed font-light">
                Vivimos rodeados de estímulos pensados para robártela. La Offline Card te devuelve el control.
              </p>
            </Card>

            <Card className="bg-white/80 backdrop-blur border-none p-8 space-y-4 hover:bg-white/90 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#013326] flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-light text-[#013326]">Creá hábitos más sanos.</h3>
              <p className="text-[#013326]/80 leading-relaxed font-light">
                Transformá tu desconexión en una práctica diaria.
              </p>
            </Card>

            <Card className="bg-white/80 backdrop-blur border-none p-8 space-y-4 hover:bg-white/90 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#013326] flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-light text-[#013326]">Marcá el límite entre vos y la pantalla.</h3>
              <p className="text-[#013326]/80 leading-relaxed font-light">
                Una acción física que te recuerda que tu bienestar no está dentro del teléfono.
              </p>
            </Card>

            <Card className="bg-white/80 backdrop-blur border-none p-8 space-y-4 hover:bg-white/90 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#013326] flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-light text-[#013326]">No más excusas.</h3>
              <p className="text-[#013326]/80 leading-relaxed font-light">
                El foco no depende del contexto, sino de tus decisiones.
              </p>
            </Card>
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section className="bg-[#013326] py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-[#fff] text-center mb-16 text-balance">
            Cómo funciona
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#fff] flex items-center justify-center mx-auto text-3xl font-light text-[#013326]">
                1
              </div>
              <h3 className="text-2xl font-light text-[#fff]">Activá tu tarjeta.</h3>
              <p className="text-[#fff]/80 leading-relaxed font-light">Elegí qué querés que haga desde la app.</p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#fff] flex items-center justify-center mx-auto text-3xl font-light text-[#013326]">
                2
              </div>
              <h3 className="text-2xl font-light text-[#fff]">Tocá tu teléfono.</h3>
              <p className="text-[#fff]/80 leading-relaxed font-light">Sin menús, sin distracciones.</p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#fff] flex items-center justify-center mx-auto text-3xl font-light text-[#013326]">
                3
              </div>
              <h3 className="text-2xl font-light text-[#fff]">Disfrutá tu momento Offline.</h3>
              <p className="text-[#fff]/80 leading-relaxed font-light">Leé, meditá o simplemente descansá.</p>
            </div>
          </div>
        </div>
      </section>
       
      {/* FAQ Section */}
      <section className="bg-[#fff] py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-[#013326] text-center mb-16 text-balance">
            Preguntas frecuentes
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white/80 backdrop-blur rounded-lg px-6 border-none">
              <AccordionTrigger className="text-xl font-light text-[#013326] hover:no-underline py-6">
                ¿Funciona en todos los teléfonos?
              </AccordionTrigger>
              <AccordionContent className="text-[#013326]/80 text-lg font-light pb-6">
                ✔️ No, solo en los iPhone compatibles con tecnología NFC.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/80 backdrop-blur rounded-lg px-6 border-none">
              <AccordionTrigger className="text-xl font-light text-[#013326] hover:no-underline py-6">
                ¿Qué pasa si pierdo la tarjeta?
              </AccordionTrigger>
              <AccordionContent className="text-[#013326]/80 text-lg font-light pb-6">
                ✔️ Podés desactivarla desde la app y vincular una nueva.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/80 backdrop-blur rounded-lg px-6 border-none">
              <AccordionTrigger className="text-xl font-light text-[#013326] hover:no-underline py-6">
                ¿Necesito internet?
              </AccordionTrigger>
              <AccordionContent className="text-[#013326]/80 text-lg font-light pb-6">
                ✔️ No, la app esta pensada para que las funciones CORE funcionen sin internet.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#013326] pt-24 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight text-balance">
            Desconectarte nunca fue tan fácil.
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed text-balance">
            Tu foco, tu tiempo y tu atención valen más que cualquier notificación.
          </p>
            <img
              src="/offline-logo.png"
              alt="offlinelogo"
              className="h-10 m-auto"
            />
        </div>
        {/* Separator */}
      <div className="bg-[#013326] pt-12">
        <div className="w-full flex items-center justify-center">
          <div className="h-px bg-white/30 flex-1" />
          <img
            src="/offlineisotipoblanco.png"
            alt="Isotipo Offline"
            className="h-12 w-auto mx-6"
          />
          <div className="h-px bg-white/30 flex-1" />
        </div>
      </div>
      </section>
    </main>
  )
}

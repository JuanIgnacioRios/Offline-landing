import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// ─────────────────────────────────────────────────────────────────────────────
// DESTINOS — editá acá a dónde va cada dispositivo.
// Si dejás un destino en `null`, ese dispositivo NO se redirige y ve la landing.
// ─────────────────────────────────────────────────────────────────────────────
const DESTINATIONS = {
  // iPhone / iPad → ficha de la app en la App Store.
  ios: "https://apps.apple.com/us/app/offline/id6753837153",

  // Android → todavía no hay app en Google Play.
  // Cuando la publiques, poné acá el link del Play Store, por ejemplo:
  //   "https://play.google.com/store/apps/details?id=co.offline.app"
  // Por ahora lo mando a la App Store igual (o poné `null` para que vea la landing).
  android: "https://apps.apple.com/us/app/offline/id6753837153",

  // Desktop / cualquier otro (PC, Mac, tablets raras, bots) → web principal.
  // Poné `null` si algún día querés que desktop vea una landing en vez de redirigir.
  desktop: "https://offline-arg.com" as string | null,
} as const

// Detecta el tipo de dispositivo a partir del User-Agent del request.
function getDeviceTarget(userAgent: string): string | null {
  const ua = userAgent.toLowerCase()

  // iOS: iPhone, iPad o iPod. Ojo: iPadOS moderno a veces se hace pasar por
  // "Macintosh", pero esos igual pueden instalar por App Store web, así que
  // no es problema mandarlos al mismo destino.
  const isIOS = /iphone|ipad|ipod/.test(ua)
  if (isIOS) return DESTINATIONS.ios

  // Android (celulares y tablets).
  const isAndroid = /android/.test(ua)
  if (isAndroid) return DESTINATIONS.android

  // Cualquier otra cosa (desktop, bots, etc.).
  return DESTINATIONS.desktop
}

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || ""
  const target = getDeviceTarget(userAgent)

  // Si hay destino para este dispositivo, redirigimos (307 temporal).
  // Cuando quieras que sea permanente/definitivo, cambiá el segundo argumento a 308.
  if (target) {
    return NextResponse.redirect(target, 307)
  }

  // Sin destino → seguimos normal y se muestra la landing.
  return NextResponse.next()
}

// El middleware corre en todas las rutas EXCEPTO los assets internos de Next,
// el favicon y los archivos estáticos de /public (imágenes, etc.), para no
// romper la landing que ven los usuarios de desktop.
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js|woff2?)$).*)",
  ],
}

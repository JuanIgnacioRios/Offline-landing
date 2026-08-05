// Esta página es solo un fallback: normalmente nadie la ve porque el middleware
// (ver /middleware.ts) redirige según el dispositivo antes de renderizarla.
// Solo aparece si algún día se desactiva el middleware.
export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div>
        <h1 style={{ marginBottom: "0.5rem" }}>Offline</h1>
        <p>
          Ir a <a href="https://offline-arg.com">offline-arg.com</a>
        </p>
      </div>
    </main>
  )
}

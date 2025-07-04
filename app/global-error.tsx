'use client'

export default function GlobalError({
  error,
  reset,
}: Readonly<{ error: Error & { digest?: string }; reset: () => void }>) {
  return (
    <html lang="en">
      <body>
        <h2>Birşeyler Ters gidiyor!</h2>
        <p>{error?.message}</p>
        <button onClick={() => reset()}>Bi kapatıp Aç</button>
      </body>
    </html>
  )
}

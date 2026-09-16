export default function Loading() {
  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p
        style={{
          fontSize: 13,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#9a9a9a',
          animation: 'in-soft 1.2s ease infinite alternate',
        }}
      >
        Loading
      </p>
    </main>
  )
}

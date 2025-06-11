export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #2c3e50, #3498db)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Segoe UI, sans-serif',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Moodify</h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '600px' }}>
        Turn your selfies into hilarious cartoon memes with sarcastic, funny comments.
        Capture your mood. Share it with the world. One click — one roast.
      </p>

      <div style={{ marginTop: '2rem' }}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#f39c12',
            padding: '1rem 2rem',
            borderRadius: '8px',
            color: '#000',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: '1rem',
          }}
        >
          Download the App
        </a>
      </div>

      <footer style={{ marginTop: '4rem', fontSize: '0.875rem', opacity: 0.8 }}>
        <a href="/privacy" style={{ color: '#ecf0f1', marginRight: '1rem' }}>
          Privacy Policy
        </a>
        <a href="/terms" style={{ color: '#ecf0f1' }}>
          Terms & Conditions
        </a>
      </footer>
    </div>
  );
}


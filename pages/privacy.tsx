import Head from 'next/head'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Moodify</title>
        <meta name="description" content="Read the privacy policy for the Moodify app." />
      </Head>

      <div style={{
        minHeight: '100vh',
        backgroundColor: '#0e1217',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '40px 20px',
        fontFamily: 'sans-serif',
        lineHeight: '1.7'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: '#1a1f25',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#ff8c00' }}>
            Privacy Policy
          </h1>
          <p>
            Moodify does not collect, store, or share any personal data. All selfies and comments are processed locally on your device and never leave your phone.
          </p>
          <p>
            We do not use any third-party trackers or analytics in the free version of the app. If you upgrade to Premium, purchase data is handled securely via our payment processor and not stored by us.
          </p>
          <p>
            By using Moodify, you agree to these terms. If you have any questions or concerns, please contact us at moodify.app.help@gmail.com.
          </p>
          <p style={{ marginTop: '30px', fontStyle: 'italic', fontSize: '0.9rem' }}>
            Last updated: June 14, 2025
          </p>
        </div>
      </div>
    </>
  )
}

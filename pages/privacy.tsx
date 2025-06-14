import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Moodify</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 40px;
            color: #333;
            line-height: 1.6;
          }
          .container {
            max-width: 800px;
            margin: auto;
          }
          h1 {
            color: #ff6600;
          }
          a {
            color: #0077cc;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        `}</style>
      </Head>
      <main className="container">
        <h1>Privacy Policy</h1>
        <h1>Privacy Policy (Updated)</h1>
        <p>
          Moodify is committed to protecting your privacy. We do not collect,
          store, or share any personal data, including photos or camera data.
        </p>
        <p>
          The app only uses your device’s camera locally to generate fun
          captions and effects. No selfie or image leaves your device.
        </p>
        <p>We do not require user accounts, and we do not track you in any way.</p>
        <p>
          If you have any questions or concerns about this policy, feel free to
          contact us at{' '}
          <a href="mailto:support@moodify.app">support@moodify.app</a>.
        </p>
        <p>By using Moodify, you agree to this privacy policy.</p>
      </main>
    </>
  );
}

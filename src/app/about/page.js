export default function About() {
  return (
    <div style={{
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: 'var(--color-primary)',
        marginBottom: '2rem'
      }}>
        About Productify
      </h1>

      <div style={{
        background: 'var(--color-lightest)',
        padding: '2rem',
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h2 style={{ color: 'var(--color-primary)' }}>Our Story</h2>
        <p>
          Welcome to Productify! We are passionate about creating a platform that
          empowers businesses and individuals to showcase their products effortlessly.
          Our journey began with a simple mission: to make product management accessible,
          secure, and enjoyable for everyone.
        </p>
      </div>

      <div style={{
        background: 'var(--color-accent)',
        padding: '2rem',
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h2 style={{ color: 'var(--color-primary)' }}>Our Mission</h2>
        <p>
          To provide innovative solutions while maintaining the highest standards
          of quality and user experience. We believe in building lasting
          relationships with our community through trust, simplicity, and excellence.
          Productify is designed to grow with you and your business.
        </p>
      </div>

      <div style={{
        background: 'var(--color-light)',
        padding: '2rem',
        borderRadius: '8px',
        border: '1px solid var(--color-accent)',
        marginBottom: '2rem'
      }}>
        <h2 style={{ color: 'var(--color-primary)' }}>Why Productify?</h2>
        <ul style={{ color: 'var(--color-secondary)' }}>
          <li>🚀 <strong>Fast & Modern:</strong> Built with Next.js for lightning-fast performance</li>
          <li>🔐 <strong>Secure:</strong> Enterprise-level security with Google authentication</li>
          <li>💡 <strong>User-Friendly:</strong> Intuitive design that anyone can use</li>
          <li>🆓 <strong>Free to Start:</strong> Begin your journey at no cost</li>
          <li>📱 <strong>Responsive:</strong> Works perfectly on all devices</li>
        </ul>
      </div>

      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '8px',
        border: '1px solid var(--color-accent)'
      }}>
        <h2 style={{ color: 'var(--color-primary)' }}>Contact Information</h2>
        <p><strong>Email:</strong> info@productify.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Address:</strong> 123 Innovation Street, Tech City, TC 12345</p>
        <p><strong>Support:</strong> Available 24/7 to help you succeed</p>
      </div>
    </div>
  );
}

import React from 'react';

const HeroSection = () => {
  return (
    <section style={styles.heroSection}>
      <div style={styles.heroContainer}>
        <div style={styles.reviewRating}>
          <span style={styles.stars}>⭐⭐⭐⭐⭐</span>
          <span style={styles.reviewText}>Basé sur 10,000+ avis</span>
        </div>
        <h1 style={styles.heroTitle}>Solution transparente avec notre magie !</h1>
        <p style={styles.heroSubtext}>
          UIFry est la plateforme de gestion de projet qui vise à aider les équipes à atteindre une gestion optimale.
        </p>
        <div style={styles.ctaButtons}>
          <button style={{ ...styles.ctaButton, ...styles.primaryButton }}>
            Commencez efficacement avec le produit UIFry SaaS
          </button>
          <button style={{ ...styles.ctaButton, ...styles.secondaryButton }}>Obtenez une démo gratuite</button>
        </div>
        <div style={styles.companyLogos}>
          <img src="logoipsum1.png" alt="Logo Entreprise 1" style={styles.logo} />
          <img src="logoipsum2.png" alt="Logo Entreprise 2" style={styles.logo} />
          <img src="logoipsum3.png" alt="Logo Entreprise 3" style={styles.logo} />
          <img src="logoipsum4.png" alt="Logo Entreprise 4" style={styles.logo} />
        </div>
      </div>
      <div style={styles.heroGraphics}>
        <div style={styles.graphicSwitch}></div>
        <div style={styles.graphicChart}></div>
        <div style={styles.graphicPrice}>$5476</div>
        <div style={styles.avatars}>
          <img src="avatar1.png" alt="Avatar 1" style={styles.avatar} />
          <img src="avatar2.png" alt="Avatar 2" style={styles.avatar} />
          <img src="avatar3.png" alt="Avatar 3" style={styles.avatar} />
          <div style={styles.addAvatar}>+</div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4rem',
    backgroundColor: '#000',
    color: 'white',
  },
  heroContainer: {
    maxWidth: '50%',
  },
  reviewRating: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.2rem',
    marginBottom: '1rem',
  },
  stars: {
    color: 'gold',
    marginRight: '0.5rem',
  },
  reviewText: {
    color: '#ccc',
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  heroSubtext: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    lineHeight: '1.5',
  },
  ctaButtons: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
  },
  ctaButton: {
    padding: '1rem 2rem',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: 'none',
  },
  primaryButton: {
    backgroundColor: '#39ff14',
    color: 'black',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    color: '#000',
  },
  companyLogos: {
    display: 'flex',
    gap: '1rem',
  },
  logo: {
    width: '100px',
  },
  heroGraphics: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  graphicSwitch: {
    width: '80px',
    height: '40px',
    backgroundColor: '#39ff14',
    borderRadius: '20px',
  },
  graphicChart: {
    width: '120px',
    height: '60px',
    backgroundColor: '#1a1a1a',
  },
  graphicPrice: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  avatars: {
    display: 'flex',
    gap: '0.5rem',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  addAvatar: {
    width: '40px',
    height: '40px',
    backgroundColor: '#39ff14',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
  },
};

export default HeroSection;

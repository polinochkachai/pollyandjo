
import '../index.css'
import heroImg from "../assets/background.png"
const HeroSection = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroImg})`}}>
      <div className="hero-bg" />
      <div className="hero-bg-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-line">EXPLORE.</span>
          <span className="hero-title-line">PROTECT.</span>
          <span className="hero-title-line">RETURN.</span>
        </h1>

        <p className="hero-text">
          Hey, it's Polly and Jo here. We're travelling across Scotland exploring the world while supporting sustainable non-profit initiatives.
        </p>

        <div className="hero-signature">POLLY & JO</div>
    
      </div>
      
    </section>
  );
};

export default HeroSection;
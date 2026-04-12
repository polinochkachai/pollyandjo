import '../index.css'
import portrait from "../assets/photo.png"
const WhySection = () => {
  return (
    <section className="why-section">
        <h2 className="section-title">WHY ARE WE DOING THAT?</h2>
        <p className="hero-text">
          We got a simple answer here : we just do care. With this we want to raise awareness and support some amazing projects in their good-doing.  Note, we do not keep any money for ourselves, you support the initiatives directly.    
        </p>
        
        <p className="why-signature">POLLY & JO</p>
        <img className='portrait' src={portrait}></img>
    </section>
    
  );
};

export default WhySection;
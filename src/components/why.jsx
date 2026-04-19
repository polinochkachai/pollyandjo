import '../index.css'
import portrait from "../assets/photo.png"
const WhySection = () => {
  return (
    <section className="why-section">
        <h2 className="section-title">WHY ARE WE DOING THAT?</h2>
        <p className="hero-text">
          We got a simple answer here: we just do care. With this we want to raise awareness and support some amazing projects in their good-doing. We believe, that while being lucky enough, to choose to go on adventures, we shall not forget about those who are less fortunate, both people and animals. This landing page was created to collect some of the projects that we would like to support, locally and globally, and to give an impulse to donate to those initiatives that matter the most to you. It is not a commertial page - we do not keep any money for ourselves, you support the projects directly. 
        </p>
        
        <p className="why-signature">POLLY & JO</p>
        <img className='portrait' src={portrait}></img>
    </section>
    
  );
};

export default WhySection;
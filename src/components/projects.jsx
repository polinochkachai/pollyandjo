import '../index.css'
import seawatch from '../assets/android-chrome-512x512-1.png'
import maggies from "../assets/maggiesLogo.5119edb80a35.png"
import marine from "../assets/MCS_Logo_TwoTone_Inkx2.png"
export function ProjectCard({
  name,
  nameSub,
  showLogo,
  learnmore,
  donation_link,
  logo,
  imagePosition,
  description
}) {
  return (
    <div className="project-card">
      <div className="project-card-inner">

        {showLogo && (
          <div className="project-logo-container">
            <div className="project-logo">
              <img className="project-img" src ={logo}></img>
            </div>
          </div>
        )}

        <div
          className={`project-content ${
            imagePosition === "left" ? "row" : "row-reverse"
          }`}
        >
          {!showLogo && <div className="project-image" />}

          <div className="project-text">
            {showLogo ? (
              <>
                <div className="project-name-large">{name}</div>
                {nameSub && (
                  <div className="project-name-sub">{nameSub}</div>
                )}
              </>
            ) : (
              <div className="project-name-large">{name}</div>
            )}

            <p className="project-desc">{description}</p>
          </div>
        </div>

        <div className="project-actions">
          <a  href={learnmore} className="action-link">
            <span className="action-arrow">→</span> LEARN MORE
          </a>

          <a href={donation_link} className="action-link">
            <span className="action-arrow">→</span> DONATE
          </a>
        </div>

      </div>
    </div>
  );
}

const ProjectsSection = () => {
  
  const seawatchtext = "";
  const maggiestext = "This project might be known by many of you, bcause of the beautiful buildings they commision for people with cancer and their families. Maggie’s Centres are warm and welcoming places built alongside NHS hospitals that provide the support that people with cancer and their family and friends need ";
  const marineconservation= "The ocean biome is the largest on Earth, covering approximately 139 million square miles or over 70% of the planet’s surface. Ocean and marine wildlife is one of the reasons we travelled to Scotland. And we most certainly want to help keep the ocean as beautiful as it is."
  return (
    <section className="projects-section" >
      <hr className="divider"></hr>
      <h2 className="section-title" id="projects">THE PROJECTS WE SUPPORT</h2>

      <ProjectCard
        name="Sea-Watch e.V"
        showLogo={true}
        logo= {seawatch}
        imagePosition="right"
        learnmore="https://sea-watch.org/en/"
        donation_link=""
        description={seawatchtext}
      />

      <ProjectCard
        name="MAGGIE'S"
        showLogo={true}
        logo= {maggies}
        imagePosition="left"
        learnmore="https://www.maggies.org/"
        donation_link="https://www.justgiving.com/page/pollyandjo-maggies?utm_medium=FR&utm_source=CL"
        description={maggiestext}
      />

      <ProjectCard
        name="Marine Conservation Society"
        showLogo={true}
        logo={marine}
        imagePosition="left"
        learnmore="https://www.mcsuk.org/"
        donation_link="https://www.justgiving.com/page/pollyandjo-ocean?newPage=true"
        description={marineconservation}
      />
      <hr className="divider"></hr>
    </section>
  );
};

export default ProjectsSection;
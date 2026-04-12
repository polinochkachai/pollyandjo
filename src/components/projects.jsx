import '../index.css'
import seawatch from '../assets/android-chrome-512x512-1.png'
import maggies from "../assets/maggiesLogo.5119edb80a35.png"
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
  const placeholderDesc =
    "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.";
  const seawatchtext = "";
  const maggiestext = "";
  return (
    <section className="projects-section" >
      <hr className="divider"></hr>
      <h2 className="section-title" id="projects">THE PROJECTS WE SUPPORT</h2>

      <ProjectCard
        name="Sea-Watch e.V"
        showLogo={true}
        logo= {seawatch}
        imagePosition="right"
        description={seawatchtext}
      />

      <ProjectCard
        name="MAGGIE'S"
        showLogo={true}
        logo= {maggies}
        imagePosition="left"
        description={maggiestext}
      />

      <ProjectCard
        name="Sea Watch"
        showLogo={false}
        imagePosition="left"
        description={placeholderDesc}
      />
      <hr className="divider"></hr>
    </section>
  );
};

export default ProjectsSection;
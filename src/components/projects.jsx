import '../index.css'
import seawatch from '../assets/android-chrome-512x512-1.png'
import maggies from "../assets/maggiesLogo.5119edb80a35.png"
export function ProjectCard({
  name,
  nameSub,
  showLogo,
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
          <button className="action-link">
            <span className="action-arrow">→</span> LEARN MORE
          </button>

          <button className="action-link">
            <span className="action-arrow">→</span> DONATE
          </button>
        </div>

      </div>
    </div>
  );
}

const ProjectsSection = () => {
  const placeholderDesc =
    "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.";

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">THE PROJECTS WE SUPPORT</h2>

      <ProjectCard
        name="Sea-Watch"
        nameSub="e.V"
        showLogo={true}
        logo= {seawatch}
        imagePosition="right"
        description={placeholderDesc}
      />

      <ProjectCard
        name="MAGGIE'S"
        showLogo={true}
        logo= {maggies}
        imagePosition="left"
        description={placeholderDesc}
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
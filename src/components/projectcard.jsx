import '../index.css'
export default function ProjectCard ({ name, nameSub, showLogo, imagePosition, description }){
  name,
  <div className="projectCard">
    <div className="projectCardInner">
      {showLogo && (
        <div className="projectLogoContainer">
          <div className="projectLogo">
            <div style={{ fontSize: "20px", color: "#3a7ca5" }}>⚓</div>
            <div className="projectLogoText">Sea-Watch.org</div>
          </div>
        </div>
      )}

      <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", flexDirection: imagePosition === "left" ? "row" : "row-reverse" }}>
        {!showLogo && (
          <div className="projectImage" />
        )}
        <div style={{ flex: 1 }}>
          {showLogo ? (
            <>
              <div className="projectNameLarge">{name}</div>
              {nameSub && <div className="projectNameSub">{nameSub}</div>}
            </>
          ) : (
            <div className="projectName">{name}</div>
          )}
          <p className="projectDesc">{description}</p>
        </div>
      </div>

      <div className="projectActions">
        <button
          className="actionLink"
          onMouseEnter={(e) => { e.target.style.background = "#f5f0ea"; }}
          onMouseLeave={(e) => { e.target.style.background = "transparent"; }}
        >
          <span className="actionArrow">→</span> Learn More
        </button>
        <button
          className="actionLink"
          onMouseEnter={(e) => { e.target.style.background = "#f5f0ea"; }}
          onMouseLeave={(e) => { e.target.style.background = "transparent"; }}
        >
          <span className="actionArrow">→</span> Donate
        </button>
      </div>
    </div>
  </div>
}
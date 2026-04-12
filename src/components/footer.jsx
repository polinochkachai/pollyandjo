import '../index.css'
import icon from "../assets/lets-icons_insta.png";
import imagefooter from "../assets/Mask group.png";
import Popup from 'reactjs-popup'

const PolicyButton = ({ ButtonName, Content }) => {
  return (
    <Popup
      trigger={<p className="transparency-btn">{ButtonName}</p>}
      modal
      nested
      onOpen={() => (document.body.style.overflow = "hidden")}
      onClose={() => (document.body.style.overflow = "")}
    >
    
      {(close) => (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className='modal-header'>
              <span className="close-btn" onClick={close}>
                ×
              </span>

              <h3>{ButtonName}</h3>
            </div>

            <p className='modal-body'>{Content}</p>

          </div>
        </div>
      )}
    </Popup>
  );
};
const InstaIcon= ({name}) => {
  return ( 
    <section className="instagram">
        <img className='icon' src={icon}></img>
        <p className='nickname'>{name}</p>
    </section>
  );
};
const Footer =()=>{
  
    return(
        <section style={{ backgroundImage: `url(${imagefooter})`}} className='footer'>
          
          <div className="left">
            <InstaIcon name="@cwreality" />
            <InstaIcon name="@johanneshafer" />
          </div>
          
          <div className="right">
            <PolicyButton ButtonName="Privacy" Content="Your privacy content here..." />
            <PolicyButton ButtonName="Transparency" Content="Transparency content here..." />
        </div>
        </section>
    )
}
export default Footer;
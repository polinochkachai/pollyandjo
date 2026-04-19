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
const InstaIcon= ({name, link}) => {
  return ( 
    <section className="instagram">
        <img className='icon' src={icon}></img>
        <p className='nickname'><a href={link}>{name}</a></p>
    </section>
  );
};
const Footer =()=>{
  
    return(
        <section style={{ backgroundImage: `url(${imagefooter})`}} className='footer'>
          
          <div className="left">
            <InstaIcon name="@cwreality" link="https://www.instagram.com/cwreality" />
            <InstaIcon name="@johanneshafer" link="https://www.instagram.com/johanneshafer" />
          </div>
          
          <div className="right">
            <PolicyButton ButtonName="Privacy" Content="1.Responsible for data processing on this page is Polina Ioshina com3polina@gmail.com 2. General Information on Data Processing

We do not collect any personal data, except in cases where you actively provide us with information (e.g., by using external buttons, social media content, or making donations).

3. Social Media Links and Content

Our website contains links to the social networks: Instagram. When you click on these buttons, you will be redirected to the respective pages of the website operator. Data processing is carried out directly by the social media providers, whose privacy policies apply on their respective sites.

Processing by Instagram (Meta):
Clicking on the social media buttons may result in personal data being transmitted to the respective providers. We have no influence over data processing by Meta. Please refer to the provider’s privacy policies: www.facebook.com/privacy/policy/

4. Donation Portal
Our website includes a button that redirects you to the donation portals JustGiving and FundraisingBox. The donation process and the associated processing of personal data (e.g., name, email address, payment information) take place on the effektiv-spenden.org website and are subject to the provider’s privacy policy.

Please read the privacy policy on www.justgiving.com/about/info/privacy-policy/privacy-policy-v30 and on fundraisingbox.com/en/privacy/privacy-policy-for-website-users for more detailed information on data processing.
" />
            <PolicyButton ButtonName="Transparency" Content="This website is opensource, dThis website is hosted on Netlify and is designed to be as simple and privacy-friendly as possible.

We do not collect, store, or process any personal data from visitors.

No forms
No user accounts
No tracking or analytics tools
No cookies for data collection

When you visit this site, your interaction is not tracked or recorded by us.

Please note that Netlify, as the hosting provider, may automatically collect minimal technical information (such as IP addresses or request logs) for security and operational purposes. This data is handled solely by Netlify and is not accessed or used by us.

If you have any questions about this website or its privacy practices, feel free to reach out." />
        </div>
        </section>
    )
}
export default Footer;
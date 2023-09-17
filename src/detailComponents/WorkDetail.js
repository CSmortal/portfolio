import { useLocation, useNavigate } from "react-router-dom"
import "../css/WorkDetail.css"

export default function WorkDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, description_short, description, role, techStack, otherTech, url, repository, image } =  location.state


  const techStackLen = techStack.length
  const otherTechLen = otherTech.length

  let parsedTechStack = "", parsedOtherTech = ""
  
  for (let i = 0; i < techStackLen; i++) {
    parsedTechStack += techStack[i]

    if (i < techStackLen - 1) {
      parsedTechStack += ", "
    }
    
  }

  for (let i = 0; i < otherTechLen; i++) {
    parsedOtherTech += otherTech[i];

    if (i < otherTechLen - 1) {
      parsedOtherTech += ", "
    }
    
  }

  const handleLink = (link) => {
    window.open(link, "_blank")
  }

  const handleLinkClick = (event) => {
    const linkElement = event.currentTarget
    linkElement.classList.add('clicked')
    handleLink(linkElement.innerText)
  }

  const handleBackButtonClick = () => {
    navigate(-1);
  }

  return (
    <div className="grid-item-workDetail">
      <img className="back-button" src="back.png" onClick={handleBackButtonClick}/>
      <p className="project-name">{name}</p>
      <img className="grid-item_image" src={`${process.env.PUBLIC_URL}/${image}`} />
      <p className="project-description-short">{description_short}</p>
      <p className="project-description-full">{description}</p>
      
      <div className="entire_section">
        <div className="iconContainer">
          <div className="my-role_icon">
            <img className="my-role_img" src="role.png" />
            <p>Role</p>
          </div>
        </div>

        <div className="section_desc">
          <p>{role}</p>
        </div>
      </div>


      <div className="entire_section">
        <div className="iconContainer">
          <div className="tech-stack_icon">
            <img className="tech-stack_img" src="tech_stack.png"/>
            <p>Tech stack</p>
          </div>
        </div>

        <div className="section_desc">
          <p>{parsedTechStack}</p>
        </div>
      </div>


      <div className="entire_section">
        <div className="iconContainer">
          <div className="other-technologies_icon">
            <img className="other-technologies_img" src="other-tech.png"/>
            <p>Others</p>
          </div>
        </div>

        <div className="section_desc">
          <p>{parsedOtherTech}</p>
        </div>
      </div>


      <div className="entire_section">
        <div className="iconContainer">
          <div className="url_icon">
            <img className="url_img" src="url.png"/>
            <p>URL</p>
          </div>
        </div>

        <div className="section_desc">
          { url.startsWith("https://")
              ? <p className="clickableLink" onClick={(e) => handleLinkClick(e)}>{url}</p>
              : <p>{url}</p>
          }
        </div>
      </div>


      <div className="entire_section">
        <div className="iconContainer">
          <div className="repository_icon">
            <img className="repository_img" src="github.png"/>
            <p>Repository</p>
          </div>
        </div>

        <div className="section_desc">
          { repository.startsWith("https://github.com") 
                ? <p className="clickableLink" onClick={(e) => handleLinkClick(e)}>{repository}</p>
                : <p>{repository}</p>
          }
          
        </div>
      </div>

      

    </div>
  )
}
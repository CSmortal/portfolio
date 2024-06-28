import { useState } from "react"
import "./css/AppBar.css"

export default function AppBar() {
  const [clickedLinks, setClickedLinks] = useState([])

  const handleLinkClick = (link) => {
    setClickedLinks((prevClickedLinks) => [...prevClickedLinks, link])
  }

  const handleOpenResume= () => {
    handleLinkClick("Resume")
    window.open(`${process.env.PUBLIC_URL}/Resume - Joven Pua Zai Xiong.pdf`)
  }

  const handleGoToGithub = () => {
    handleLinkClick("Github")
    window.open("https://github.com/CSmortal")
  }

  const handleOpenEmail = () => {
    handleLinkClick("Email")
    window.location.href = "mailto:jovenpua51apps@gmail.com"
  }

  const handleOpenLinkedIn = () => {
    handleLinkClick("LinkedIn")
    window.open("https://www.linkedin.com/in/joven-pua-zai-xiong-468387206/")
  }

  return (
    <div className='appBar'>

      <h2 className="appBar-name">{"<Joven Pua/>"}</h2>

      <div className="portfolio-links">

          <p 
            onClick={handleOpenResume}
            className={clickedLinks.includes('Resume') ? 'clicked' : ''}
          >
            Resume
          </p>

          <p 
            onClick={handleGoToGithub}
            className={clickedLinks.includes('Github') ? 'clicked' : ''}
          >
            Github
          </p>

          <p 
            onClick={handleOpenEmail}
            className={clickedLinks.includes('Email') ? 'clicked' : ''}
          >
            Email
          </p>

          <p 
            onClick={handleOpenLinkedIn}
            className={clickedLinks.includes('LinkedIn') ? 'clicked' : ''}
          >
            LinkedIn
          </p>

      </div>

    </div>
  )
}
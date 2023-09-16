import "./css/AppBar.css"

export default function AppBar() {

  const handleOpenResume= () => {
    window.open("/Resume - Joven Pua Zai Xiong.pdf")
  }

  const handleGoToGithub = () => {
    window.open("https://github.com/CSmortal")
  }

  const handleOpenEmail = () => {
    window.location.href = "mailto:jovenpua51@gmail.com"
  }

  const handleOpenLinkedIn = () => {
    window.open("https://www.linkedin.com/in/joven-pua-zai-xiong-468387206/")
  }

  return (
    <div className='appBar'>

      <h2 className="appBar-name">{"<Joven Pua class=CSmortal />"}</h2>

      <div className="portfolio-links">

          <p onClick={handleOpenResume}>Resume</p>

          <p onClick={handleGoToGithub}>Github</p>

          <p onClick={handleOpenEmail}>Email</p>

          <p onClick={handleOpenLinkedIn}>LinkedIn</p>

      </div>

    </div>
  )
}
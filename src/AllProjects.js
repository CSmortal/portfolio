import {allSchoolProjects, allPersonalProjects, allWorks} from "./allProjectsInfo";
import Surface from './surfaceComponents/Surface';
import "./css/AllProjects.css"

export default function AllProjects() {

  return (
    <div className="allProjects-container">


      <h1 className="intro-name">Joven Pua Zai Xiong</h1>

      <div className="intro-desc">
        <p>
            I am a fresh Computer Science undergraduate at the National University of Singapore (NUS).
        </p>
        {/* <p>
            During my free time, I enjoy my fair share of combat-heavy games, K-pop, as well as learn new software development technologies to stay competitive.
        </p> */}
        <p>
          I am passionate in building mobile and web applications, and I am interested in backend/full-stack software engineering roles.
        </p>
        <p>
          Feel free to scroll down and view the projects I have done.
        </p>
      </div>




      {/* <hr></hr> */}
      
      <div className="projectsContainer">
        <h2 className="projectsType-title">Projects from Work Experience</h2>
        <div className="gridContainer">
          {
            allWorks && allWorks.map(work => (
              <Surface 
                details={work}
              />
            ))
          }
          
        </div>
      </div>

      {/* <hr></hr> */}

      <div className="projectsContainer">
        <h2 className="projectsType-title">Personal Projects</h2>
        <div className="gridContainer">
          {
            allPersonalProjects && allPersonalProjects.map(personalProj => (
              <Surface
                details={personalProj}
              />
            ))
          }
        </div>
      </div>
  
      {/* <hr></hr> */}

      <div className="projectsContainer">
        <h2 className="projectsType-title">School Projects</h2>
        <div className="gridContainer">
          { allSchoolProjects && allSchoolProjects.map(schoolProj => (
            <Surface
              details={schoolProj}
            />
          ))}
        </div>
      </div>
      

      <div className="spaceAtEnd"></div>

    </div>
  );

}
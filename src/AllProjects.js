import {allSchoolProjects, allPersonalProjects, allWorks} from "./allProjectsInfo";
import Surface from './surfaceComponents/Surface';
import "./css/AllProjects.css"

export default function AllProjects() {

  return (
    <div className="allProjects-container">


      <h1 className="intro-name">Joven Pua Zai Xiong</h1>

      <div className="intro-desc">
        <p>
            Hello! I am a passionate software engineer with 1 year of professional experience in Spring, Java and MySQL.
        </p>

        <p>
           I have a keen interest in building web applications, and enjoy solving complex problems through innovative solutions.
        </p>

        <p>
           Currently, I am working at CrimsonLogic Pte Ltd (contracted by Evo Outsourcing Solutions Pte Ltd) as a Software Engineer where I maintain and improve a web application (for a foreign judiciary) that
          digitalises legal case filing. 
        </p>

        <p>
          During my time in my current role, I have created new workflows to model complex business logic for filing new legal cases, 
          as well as fixed errors in production such as incorrect statistical reports and application errors resulting from more complex permutations in the legal case.
        </p>

        <p>
          I have also had previous work experiences which you can view in my resume attached.
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
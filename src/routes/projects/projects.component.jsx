import Project from "../../components/project/project.component";
import {ProjectsContainer} from "./projects.styles";
import {projectData} from '../../data/project-data'


const Projects = () => {


    const projects = projectData.map((data, index) =>
        <Project
            key ={index}
            data = {data}
        />

    )

    return(
        <ProjectsContainer>

            <h1> My Projects</h1>
            <p>Below are some of my academic and personal projects</p>
            {projects}

        </ProjectsContainer>

    )
}

export  default Projects
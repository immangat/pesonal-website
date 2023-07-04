import Button from "../button/button.component";
import img from '../../assets/project-images/quiz.png'
import {BUTTON_TYPE_CLASSES} from "../button/button.styles";
import {ButtonContainer, ProjectContainer, ProjectInfo} from "./project.styles";
import file from "../../assets/managt_resume.pdf";


const Project = ({data}) => {
    const {projectName, projectDescription, projectImage, website, github} = data

    return (<ProjectContainer>
        <ProjectInfo>
            <h1>{projectName}</h1>
            <p>{projectDescription}</p>
        </ProjectInfo>

        <ButtonContainer>
            <a
                href={github}
                target="_blank"
                style={{
                    textDecoration: "inherit",
                    color: "inherit",
                    cursor: "pointer",
                }} rel="noreferrer">
                <Button
                    type="button"
                    buttonType={BUTTON_TYPE_CLASSES.white}

                > GitHub Link
                </Button>
            </a>
            <a
                href={website}
                target="_blank"
                style={{
                    textDecoration: "inherit",
                    color: "inherit",
                    cursor: "pointer",
                }} rel="noreferrer">
                <Button
                    type="button"
                    buttonType={BUTTON_TYPE_CLASSES.white}

                > Website
                </Button>
            </a>
        </ButtonContainer>
        <img src={projectImage} alt={projectName}/>

    </ProjectContainer>)
}

export default Project
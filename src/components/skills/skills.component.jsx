import {CodeContainer, SkillContainer, SkillsContainer} from "./skills.styles";
import {useEffect, useState} from "react";
import {skills} from '../../data/code-data'
import TypeWriter from "../type-writer/type-writer.component";

const Skills = () => {

    const [counter, setCounter] = useState(0);
    const selectedSkill = skills.length > 0 ? skills[counter % skills.length] : null;

    useEffect(() => {
        setTimeout(() => setCounter(counter + 1), 2000);
    }, [counter]);

    return (
        <SkillsContainer>
            <SkillContainer>
                <h3>SKILLS:</h3>
                <h1>
                    <TypeWriter
                        text = {selectedSkill.language.toUpperCase()}
                        delay={112}
                    />
                </h1>
            </SkillContainer>

            <CodeContainer>
                <TypeWriter
                    text = {selectedSkill.code}
                    delay={selectedSkill.code.length / 2000}
                    type= 'code'
                />
            </CodeContainer>
        </SkillsContainer>
    );
};

export default Skills;

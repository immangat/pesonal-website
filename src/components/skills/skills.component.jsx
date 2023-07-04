import {CodeContainer, SkillContainer, SkillsContainer} from "./skills.styles";
import {useEffect, useState} from "react";
import CodeBlock from "../code-block/code-block.component";
import TypeWriter from "../type-writer/type-writer.component";

const Skills = () => {
    const skills = [
        {
            "language": "java",
            "code": "public class HelloWorld {\n" +
                "    public static void main(String[] args) {\n" +
                "        System.out.println(\"Hello, World!\");\n" +
                "    }\n" +
                "}\n"
        },
        {
            "language": "python",
            "code": "print(\"Hello, World!\")"
        },
        {
            "language": "javascript",
            "code": "console.log(\"Hello, World!\");"
        },
        {
            "language": "react",
            "code": "import React from 'react';\n\nfunction HelloWorld() {\n  return (\n    <div>\n      <h1>Hello, World!</h1>\n    </div>\n  );\n}\n\nexport default HelloWorld;"
        },
        {
            "language": "sql",
            "code": "SELECT 'Hello, World!';"
        },
        {
            "language": "nosql",
            "code": "db.collection('greetings').insertOne({ message: 'Hello, World!' });"
        },
        {
            "language": "java spring",
            "code": "@RestController\npublic class HelloWorldController {\n\n    @GetMapping(\"/hello\")\n    public String helloWorld() {\n        return \"Hello, World!\";\n    }\n}"
        },
        {
            "language": "html",
            "code": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Hello, World!</title>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n</body>\n</html>"
        },
        {
            "language": "css",
            "code": "h1 {\n    color: blue;\n}"
        }
    ]


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
                    delay={selectedSkill.code / 2000}
                    type= 'code'
                />
            </CodeContainer>
        </SkillsContainer>
    );
};

export default Skills;

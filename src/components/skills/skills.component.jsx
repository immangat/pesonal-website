const Skills = () => {
    const java = "public class HelloWorld {\n" +
        "    public static void main(String[] args) {\n" +
        "        System.out.println(\"Hello, World!\");\n" +
        "    }\n" +
        "}\n"
    return (
        <div>
            <div>
                <div>
                    <span>
                        SKILLS:
                    </span>
                    <span>
                        JAVA
                    </span>
                </div>
            </div>
            <div>
                <textarea value={java}>

                </textarea>
            </div>
        </div>
    )
}

export default Skills
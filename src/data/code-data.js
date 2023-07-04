export const skills = [
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
        "code": "def hello_world():\n" +
            "    print(\"Hello, World!\")\n" +
            "\n" +
            "hello_world()"
    },
    {
        "language": "javascript",
        "code": "function helloWorld() {\n" +
            "    console.log(\"Hello, World!\");\n" +
            "}\n" +
            "\n" +
            "helloWorld();"
    },
    {
        "language": "react",
        "code": "import React from 'react';\n" +
            "\n" +
            "function HelloWorld() {\n" +
            "  return (\n" +
            "    <div>\n" +
            "      <h1>Hello, World!</h1>\n" +
            "    </div>\n" +
            "  );\n" +
            "}\n" +
            "\n" +
            "export default HelloWorld;"
    },
    {
        "language": "sql",
        "code": "CREATE TABLE Customers (\n" +
            "           id INT PRIMARY KEY, \n" +
            "           name VARCHAR(50), \n" +
            "           email VARCHAR(100));\n"
    },
    {
        "language": "nosql",
        "code": "db.collection('greetings').insertOne({\n" +
            "    message: 'Hello, World!'\n" +
            "});"
    },
    {
        "language": "java spring",
        "code": "@RestController\n" +
            "public class HelloWorldController {\n" +
            "\n" +
            "    @GetMapping(\"/hello\")\n" +
            "    public String helloWorld() {\n" +
            "        return \"Hello, World!\";\n" +
            "    }\n" +
            "}"
    },
    {
        "language": "html",
        "code": "<!DOCTYPE html>\n" +
            "<html>\n" +
            "<head>\n" +
            "    <title>Hello, World!</title>\n" +
            "</head>\n" +
            "<body>\n" +
            "    <h1>Hello, World!</h1>\n" +
            "</body>\n" +
            "</html>"
    },
    {
        "language": "css",
        "code": "h1 {\n" +
            "    color: blue;\n" +
            "    font-size: 24px;\n" +
            "}"
    }
]

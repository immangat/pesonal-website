import {useEffect, useState} from "react";
import CodeBlock from "../code-block/code-block.component";


const TypeWriter = ({text, delay, type, language}) => {

    const [currentText, setCurrentText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    const toRender = type ?  <CodeBlock
        code = {currentText}
        language={language}
    /> : currentText
    useEffect( () => {
        setCurrentText('');
        setCurrentIndex(0);
    }, [text])
    return (
        <span>{toRender}</span>
    )
}

export default TypeWriter
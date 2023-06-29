import { But } from "./button.styles"
const Button = ({ buttonType, children, ...otherProps }) => {


    return (
        <But
            butType={buttonType}
            {...otherProps}
        >
            <span>
                {children}
            </span>
        </But>
    )
}

export default Button
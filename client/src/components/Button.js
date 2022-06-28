
const Button = ({ text, onClick, width }) => {
    return (
        <div className="button" 
            style={{width: width ?? '4rem'}} 
            onClick={onClick}>
            {text}
        </div>
    )
}

export default Button;
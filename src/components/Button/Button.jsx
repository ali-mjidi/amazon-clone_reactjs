import "./style.scss";

/*
	This is the yellow button that uses for 'add to cart' and 'proceed to checkout' buttons
*/

function Button({ children, className, onClick }) {
    return (
        <button className={`btn ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;

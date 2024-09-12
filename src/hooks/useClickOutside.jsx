import { useEffect, useRef } from "react";

/*
	This custom hook is to handle close target element when user clicks outside of the element,
*/

function useClickOutside(handler) {
    const elementRef = useRef();

    useEffect(() => {
        const checkHandler = event => {
            if (!elementRef.current.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener("mousedown", checkHandler);

        return () => {
            document.removeEventListener("mousedown", checkHandler);
        };
    }, []);

    return elementRef;
}

export { useClickOutside };

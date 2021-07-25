import { useState, useEffect, useRef, useCallback } from "react";

const useSticky = (defaultVal = false) => {
    const [isSticky, setIsSticky] = useState(defaultVal);
    const ref = useRef(null);

    const toggleStickiness = useCallback(({ top, bottom }) => {
        if (top <= 0 && bottom > 2 * 394) {
            console.log(top);
            !isSticky && setIsSticky(true);
        } else {
            isSticky && setIsSticky(false);
        }
    }, [isSticky]);

    useEffect(() => {
        const handleScroll = () => {
            toggleStickiness(ref.current.getBoundingClientRect());
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [toggleStickiness]);

    return { ref, isSticky };
}

export default useSticky;
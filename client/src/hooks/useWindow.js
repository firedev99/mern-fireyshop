import { useState, useEffect } from "react";

function useWindow() {
    function getSize() {
        return {
            width: typeof window !== 'undefined' && window.innerWidth,
            height: typeof window !== 'undefined' && window.innerHeight,
        }
    }

    const [windowSize, setWindowSize] = useState(getSize);
    useEffect(() => {
        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowSize;
}

export { useWindow };
import { useCallback } from "react";
import { useState } from "react"


export const useToggle = () => {
    const [state, setState] = useState(false);
    const handler = useCallback(() => {
        setState((prevValue) => !prevValue);
    }, []);

  return [state, handler];
};

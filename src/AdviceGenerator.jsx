import { useState } from "react";
import AdviceComponent from "./components/AdviceComponent ";


function AdviceGenerator() {
    const [opacityState, setOpacityState] = useState(0);    

    return (
        <>
            <AdviceComponent opacityState={opacityState} setOpacityState={setOpacityState}  /> 
        </>
    )
}
export default AdviceGenerator;
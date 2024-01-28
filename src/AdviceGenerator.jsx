import { useEffect } from "react";
import { useState } from "react";
import AdviceComponent from "./components/AdviceComponent ";


function AdviceGenerator() {
    const [advice, setAdvice] = useState({});
    const [opacityState, setOpacityState] = useState(0);
    const newmMensage = async () => {
        try {
            setOpacityState(0);
            const response = await fetch('https://api.adviceslip.com/advice').then(res => res.json()).then(
                (data) => {
                    setAdvice(data.slip)
                });
            setOpacityState(1)
        } catch (error) {
            console.error('Erro:', error);
        }
    };
    useEffect(() => {
        newmMensage();
    }, []);
    return (
        <>
            <AdviceComponent advice={advice} opacityState={opacityState} newmMensage={newmMensage}></AdviceComponent>
        </>
    )
}
export default AdviceGenerator;
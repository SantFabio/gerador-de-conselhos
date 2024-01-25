import { useState, useEffect } from "react";
import iconDice from "./assets/svg/icon-dice.svg"

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
            <div className="container">
                <span className="AdvanceNumber" style={{ opacity: opacityState }}>ADVANCE #{advice.id}</span>
                <p className="text" style={{ opacity: opacityState }}>{advice.advice}</p>
                <div className="pattern-divider">
                    <hr />
                    <div className="rectangleGroup">
                        <div className="rectangle"></div>
                        <div className="rectangle"></div>
                    </div>
                    <hr />
                </div>
                <div className="dice" onClick={newmMensage}>
                    <img src={iconDice} alt="Icone de dado" />
                </div>

            </div>
        </>
    )
}
export default AdviceGenerator;
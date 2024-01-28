import iconDice from "../assets/svg/icon-dice.svg"

function AdviceComponent({newmMensage, advice, opacityState}){

    return (
        <>
            <div className="container">
                <span className="advanceNumber" style={{ opacity: opacityState }}>ADVANCE #{advice.id}</span>
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
export default AdviceComponent;
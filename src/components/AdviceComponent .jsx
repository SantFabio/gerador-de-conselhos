import { useDispatch, useSelector } from "react-redux";
import iconDice from "../assets/svg/icon-dice.svg"
import { addAdvice } from "./actions/adviceAction"
import { useEffect } from "react";

function AdviceComponent() {
    const state = useSelector(state =>  state );
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log(state);
    })
    return (
        <>
            <div className="container">
                <span className="advanceNumber">ADVANCE #{state.id}</span>
                <p className="text">{state.advice}</p>
                <div className="pattern-divider">
                    <hr />
                    <div className="rectangleGroup">
                        <div className="rectangle"></div>
                        <div className="rectangle"></div>
                    </div>
                    <hr />
                </div>
                <div className="dice" onClick={() => { dispatch(addAdvice())}}>
                    <img src={iconDice} alt="Icone de dado" />
                </div>
            </div>
        </>
    )
}
export default AdviceComponent;
// {id: 195, advice: 'Exercise in the rain can really make you feel alive.'}
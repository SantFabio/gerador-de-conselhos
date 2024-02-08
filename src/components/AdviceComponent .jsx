import { useDispatch, useSelector } from "react-redux";
import iconDice from "../assets/svg/icon-dice.svg"
import { addAdvice } from "./actions/adviceAction"
import { useEffect } from "react";

function AdviceComponent({ opacityState, setOpacityState }) {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        setOpacityState(1);
    }, [state])

    useEffect(() => {
        setOpacityState(0);
        dispatch(addAdvice());
    }, [])
    return (
        <>
            <div className="container">
                <span className="advanceNumber" style={{ opacity: opacityState }} >ADVANCE #{state ? state.id : ""}</span>
                <p className="text" style={{ opacity: opacityState }} >{state ? state.advice : ''}</p>
                <div className="pattern-divider">
                    <hr />
                    <div className="rectangleGroup">
                        <div className="rectangle"></div>
                        <div className="rectangle"></div>
                    </div>
                    <hr />
                </div>
                <div className="dice" style={{ opacity: opacityState }} onClick={() => { dispatch(addAdvice()); setOpacityState(0); }}>
                    <img src={iconDice} alt="Icone de dado" />
                </div>
            </div>
        </>
    )
}
export default AdviceComponent;

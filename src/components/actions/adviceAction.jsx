
export function addAdviceOnState(item) {
        return { type: 'ADD_ADVICE', payload: item };

}
export function addAdvice() {
    return async (dispatch) => {
        try {
            await fetch('https://api.adviceslip.com/advice')
                .then(res => res.json())
                .then((data) => {
                    dispatch(addAdviceOnState(data.slip))
                });
        } catch (error) {
            console.error('Erro ao buscar conselho:', error);
        }
    }
}

// export function addAdvice() {
//     return async (dispatch) => {
//             await fetch('https://api.adviceslip.com/advice')
//                 .then(res => res.json())
//                 .then((data) => {
//                     dispatch(addAdviceOnState(data))
//                 });
//     }
// }
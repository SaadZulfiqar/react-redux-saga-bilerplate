const initialState = {
    gender: "male",
    age:20
};

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'AGE_UP_ASYNC': 
            newState.age += action.value;
            break;
        
        case 'AGE_DOWN_ASYNC': 
            newState.age -= action.value;
            break;
        case "CHNAGE_GENDER":
            newState.gender = action.value;
    }
    return newState;
};

export default reducer;
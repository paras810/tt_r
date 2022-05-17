const initialState = 5

const changeNumber = (state = initialState, action) => {

    if (action.type === "INCREMENT") {
        return state + action.payload
    }
    else if (state <=0) {
        return (  state = 0,
        alert('value is 0 so you can decrease the value')
        )
    }
    else if (action.type === "DECREMENT") {
        return state - action.payload
    }


    else {
        return state
    }


   
}

export default changeNumber;
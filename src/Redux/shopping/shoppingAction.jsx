const addItem=(product)=>{
    return{
        type:"ADD_ITEM",
        payload:product
    }
}


const removeItem=(product)=>{
    return{
        type:"REMOVE_ITEM",
        payload:product
    }
}

const inceriseItem=(product)=>{
    return{
        type:'INCERASE',
        payload:product
    }
}

const decriseItem=(product)=>{
    return{
        type:"DECRISE",
        payload:product
    }
}

const checkoutItem=()=>{
    return{
        type:"CHECKOUT"
    }
}


const cleareItem=()=>{
    return{
        type:"CLEARE"
    }
}

export {addItem,removeItem,decriseItem,checkoutItem,cleareItem,inceriseItem};
export const shortenTitle=(title)=>{
    const spliteTitle=title.split(" ")
    const newTitle=`${spliteTitle [0]} ${spliteTitle [1]}`
    return newTitle
}


export const isCart=(state,id)=>{
    const result=!!state.selectedItems.find(item=>item.id===id)
    return result
}


export const cartQuantity=(state,id)=>{
    const index=state.selectedItems.findIndex(item=>item.id===id)

    if(index===-1){
        return false
    } else{
       return state.selectedItems[index].quantity
    }
}
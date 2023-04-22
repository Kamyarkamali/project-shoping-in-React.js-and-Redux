const initialState={
    loading:false,
    users:[],
    error:""
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "FEATCH_API":
            return{
                ...state,
                loading:true,
            }
        case "FEACTH_SUCSSES":
            return{
                ...state,
                loading:false,
                users:action.payload
            }
        case "ERROR FILED":
            return{
                loading:false,
                error:action.payload
            }
        default: return state
    }
}

export default reducer
import initialState from "../store/initialState";

export const TagReducer=(state=initialState.tags,action)=>{
    const {type,payload}=action;

    switch(type){

        case 'ADD_Tag':
            return {}

    }

}
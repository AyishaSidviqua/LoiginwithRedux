import {preReducer} from '../Module/PreRegister/store/preReducer'
import {postReducer} from '../Module/PostRegister/store/PostReducer'
import {loginReducer} from "../Module/LoginScreen/store/loginReducer"
// export const reducers={
//     preReducer
// }
const reducers: 
{ 
    preReducer: typeof preReducer ,postReducer:typeof postReducer,loginReducer:typeof loginReducer} = {preReducer,postReducer,loginReducer}

export default reducers
import {ADD_TODO,DEL_TODO} from '../constants/ActionType';

const initialState=[
	{
		text:'我的第一个redux',
		id:0
	}
]
export default function todos(state=initialState,action){
	switch(action.type){
		case ADD_TODO:
		return [
		{
			id:state.reduce((maxId,todo)=>Math.max(maxId,todo.id),-1)+1,
			text:action.text
		},
		...state
		]
		break
		case DEL_TODO:
		var temp=state.filter(function(item){
			return item.id!==action.id
		});
		return temp;
		break;
		default:
		return state;
	}
}
import * as types from '../constants/ActionType';

export const addTodo=text=>({type:types.ADD_TODO,text});
export const delTodo=id=>({type:types.DEL_TODO,id});

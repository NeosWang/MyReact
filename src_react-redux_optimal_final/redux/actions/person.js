import {ADD_PERSON} from '../constant'


// create action for adding person
export const addPerson = personObj =>({type:ADD_PERSON, data:personObj})
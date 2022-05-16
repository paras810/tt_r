import React,{useState} from "react";
import NoteContext from "./NoteContext";

const NoteState =(props)=>{
const s1 ={
    name:'paras',
    class: '5b'
}
const [state, setState] = useState(s1)

const update =()=>{
    setTimeout(() => {
        setState({
            name:'genius',
            class:'10d'
        })
    }, 2000);
}

const number = 9315318031
const text = "navbar ul list"
return(<>

<NoteContext.Provider value={{state, update, number,text}}>
    {props.children}
</NoteContext.Provider>

</>)


}




export default NoteState
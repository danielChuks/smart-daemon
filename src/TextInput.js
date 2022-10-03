import React from 'react'
import {atom, useRecoilState} from 'recoil';

export const inputState = atom({
    key: "inputState",
    default: "",
  });
  

function TextInput() {
    const [input, setInput] = useRecoilState(inputState);
    
    const onChange = (event) => setInput(event.target.value)

  return (
    <div>
        <h1>Text Input</h1>
            <input
                type='text' 
                value={input}
                onChange={onChange}
            />
            <br />
            {'Echo'}
            <br />
            {input}
    </div>
  )
}


export default TextInput
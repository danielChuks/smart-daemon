import { selector, useRecoilValue } from 'recoil';
import { inputState } from './TextInput';


const charCounterText = selector({
    key: 'charCounterText',
    get: ({get}) => {
        const text = get(inputState)
        return text.length;
    },
});


const CharCout = () => {
    const count = useRecoilValue(charCounterText)
    return (
        <div>Count: {count} </div>
      )    
}
  

export default CharCout;
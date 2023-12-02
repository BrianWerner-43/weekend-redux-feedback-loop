import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'


function Feeling() {
    let [feeling, setFeeling] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const collectFeeling = (e) => {
        e.preventDefault()
        console.log('Giving data to the server');

        dispatch({
            type: 'ADD_FEELING',
            payload: feeling
        })
        history.push('/understanding')
    }

    return (
        <>
         <h2>How are you feeling today?</h2>
         <form>
            <div data-testid="input">
            <label>Feeling ? </label>
                <input
                placeholder={'Feeling'}
                value={feeling}
                type={'number'}
                onChange={(event) => setFeeling(event.target.value)}
                />
                
                <button  data-testid="next" onClick={collectFeeling}>Next</button>
            </div>
           
         </form>
        
        
        </>
    )

// The next button will need the data-testid="next"
// The input will also need the data-testid="input"
}


export default Feeling;
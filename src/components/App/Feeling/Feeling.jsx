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
     <div>
        <div className="h2-feel">
         <h2>How are you feeling today?</h2>
        </div>
         <form>
            <div>
            <p className="p-tag">Feeling 1-5 </p>
                <input
                className="feel-input"
                data-testid="input" 
                placeholder={'Feeling'}
                value={feeling}
                type={'number'}
                onChange={(event) => setFeeling(event.target.value)}
                />
                
                <button  data-testid="next" onClick={collectFeeling}>Next</button>
            </div> 
         </form>
     </div>
        
        </>
    )


}


export default Feeling;
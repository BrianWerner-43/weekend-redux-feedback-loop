import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function Understanding() {
    let [understanding, setUnderstanding] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    // This function will collect the value of the imput and move to the next page
    const collectUnderstanding = (e) => {
        e.preventDefault()
        console.log('In collectUnderstanding')

        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understanding
        })
        history.push('/supported')
    }

    return (
        <>
         <h2>How well are you understanding the content ?</h2>
         <form>
            <div>
                <label> Understanding ? </label>
                <input
                data-testid="input"
                placeholder={'Understanding'}
                value={understanding}
                type={'number'}
                onChange={(event) => setUnderstanding(event.target.value)}
                />

                <button data-testid="next" onClick={collectUnderstanding}>Next</button>

            </div>
         </form>
        
        </>
    )




}

export default Understanding;
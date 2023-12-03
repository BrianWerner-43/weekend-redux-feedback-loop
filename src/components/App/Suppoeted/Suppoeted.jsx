import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function Supported() {
    let [supported, setSupported] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    // This function will collect the value of the imput and move to the next page
    const collectSupported = (e) => {
        e.preventDefault()
        console.log('In collectSupported');

        dispatch({
            type: 'ADD_SUPPORTED',
            payload: supported
        })
        history.push('/comments')
    }

    return (
        <>
        <div className="h2-feel">
         <h2>How well are you being supported 1-5</h2>
         </div>
         <form>
            <div>
                <p className="p-tag">Supported ? </p> 
                <input
                className="feel-input"
                data-testid="input"
                placeholder={'supported'}
                value={supported}
                type={'text'}
                onChange={(event) => setSupported(event.target.value)}
                />

                <button data-testid="next" onClick={collectSupported}>Next</button>

            </div>
         </form>
        
        </>
    )




}

export default Supported;
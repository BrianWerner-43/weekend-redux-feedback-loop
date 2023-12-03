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
        console.log('In collectSupported', collectSupported);

        dispatch({
            type: 'ADD_SUPPORTED',
            payload: supported
        })
        history.push('/comments')
    }

    return (
        <>
         <h2>How well are you being supported ?</h2>
         <form>
            <div>
                <label> Supported ? </label>
                <input
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
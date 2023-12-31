import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function Comments() {
    let [comments, setComments] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    // This function will collect the value of the imput and move to the next page
    const collectComments = (e) => {
        e.preventDefault()
        console.log('In collectComments', collectComments);

        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments
        })
        history.push('/review')
    }

    return (
        <>
        <div className="h2-feel">
         <h2>Any comments you want to leave ?</h2>
         </div>
         <form>
            <div>
                 <p className="p-tag">Comments</p> 
                <input
                className="feel-input"
                data-testid="input"
                placeholder={'comments'}
                value={comments}
                type={'text'}
                onChange={(event) => setComments(event.target.value)}
                />

                <button data-testid="next" onClick={collectComments}>Next</button>

            </div>
         </form>
        
        </>
    )




}

export default Comments;
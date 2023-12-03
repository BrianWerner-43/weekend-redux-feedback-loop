import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Review() {
    const history = useHistory();
    const dispatch = useDispatch();

    const feelingInfo = useSelector(store => store.feelingData);
    const understandingInfo = useSelector(store => store.understandingData);
    const supportInfo = useSelector(store => store.supportedData);
    const commentInfo = useSelector(store => store.commentData);


    const postInfoToServer = () => {

        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feelingInfo,
                understanding: understandingInfo,
                support: supportInfo,
                comments: commentInfo
            }
        })
        .then((res) => {
            dispatch({
                type: "CLEAR_INPUTS"
            })
            history.push('/thankYou')
            console.log('In our post route !!');    
        })
        .catch((err) => {
            console.log('Error in post route', err)
        })
       

    }

    return (

        <>
        <div className="h1-comment">
         <h1>Review Your Feedback</h1>
         </div>
         <div>
            <div className="p-tags">
            <p>Feelings: {feelingInfo}</p>
            <p>Understanding: {understandingInfo}</p>
            <p>Support: {supportInfo}</p>
            <p>Comments: {commentInfo}</p>
            </div>

            <button data-testid="next" className="submit-btn" onClick={postInfoToServer}>Submit</button>
         </div>
        
        </>
    )


}

export default Review;
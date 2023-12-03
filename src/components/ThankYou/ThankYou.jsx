import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function ThankYou() {

    const history = useHistory();

    const restFeedback = () => {

        history.push('/')
    }

    return (
        <>
        <div>
          <div className="h1-head">
          <header>
            <h1>Feedback!</h1>
          </header>
          </div>
          <div className="h3">
          <h3>Thank You !</h3>
          </div>

               
          <button data-testid="next" className="feedback-btn" onClick={restFeedback}>Leave New Feedback</button>

          </div>
        
        </>
    )

}

export default ThankYou;
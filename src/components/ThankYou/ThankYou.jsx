import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function ThankYou() {

    const history = useHistory();

    const restFeedback = () => {

        history.push('/')
    }

    return (
        <>
        <div>
          <header>
            <h1>Feedback!</h1>
          </header>

          <h1>Thank You !</h1>

              
          <button data-testid="next" onClick={restFeedback}>Leave New Feedback</button>

          </div>
        
        </>
    )

}

export default ThankYou;
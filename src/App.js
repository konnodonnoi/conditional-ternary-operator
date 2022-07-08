
import './App.css';

function App() {
  /**
   * Challenge: Replace the if/else below with a ternary
   * to determine the text that should display on the page
   */
  const isGoingOut = true
  
   // Use ternary here
  // if(isGoingOut === true) {
  //     answer = "Yes"
  // } else {
  //     answer = "No"
  // }
  
  return (
      <div className="state">
          <h1 className="state--title">do i feel like going out tonight?</h1>
          <div className="state--value">
              <h1>{isGoingOut && true ? "yes" : "no"}</h1>
          </div>
      </div>
  )
}

export default App;

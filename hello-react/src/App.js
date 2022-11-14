import './App.css';
import ironhackLogo from "./images/ironhack-logo-xs.png";
import menuTopXs from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div className="App">
      <div className="TopHalf">
        <div className="App-logo">
        <div>
          <img src={ironhackLogo} alt="ironhack logo" />
        </div>
        <div>
          <img src={menuTopXs} alt="menu icon" />
        </div>
        </div>

        <div className="UpperText">
        <div><h1 className="SayHello">Say hello to ReactJS</h1>
        </div>
        <div>
          <p>You will learn how to use <br></br>
          the most popular frontend library, <br></br>
          and become a super Ninja developer.</p>
          </div>
        <div className="awesome"><p>Awesome!</p></div>
        </div>
      </div>
      <div className="BottomHalf">
        <div>
        <img src={icon1} alt="icon" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
        <img src={icon2} alt="icon" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
        <img src={icon3} alt="icon" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div>
        <img src={icon4} alt="icon" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
      

    </div>

  );
}

export default App;

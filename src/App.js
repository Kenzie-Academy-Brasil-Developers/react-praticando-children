import "./App.css";
import CenteredCard from "./components/CenteredCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CenteredCard
          children={
            <div>
              <p>Children 1</p>
              <p>Children 2</p>
              <p>Children 3</p>
            </div>
          }
        />
      </header>
    </div>
  );
}

export default App;

import './App.css';

function App() {
  const planets = [
    {name: "Mars", isGasplanet: false},
    {name: "Earth", isGasplanet: false},
    {name: "Jupiter", isGasplanet: true},
    {name: "Venus", isGasplanet: false},
    {name: "Neptune", isGasplanet: true},
    {name: "Uranus", isGasplanet: true},
  ];
  return (
    <div className="App">
      {planets.map((planet, key) =>
        planet.isGasplanet && <h1>{planet.name}</h1>
      )}
    </div>
  );
   
}

export default App;

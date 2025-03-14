// define a list of words
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
// generate random index to access these words randomly
function generateRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  // to keep JSX code leaner
  const description = reactDescriptions[generateRandomInt(2)];

  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

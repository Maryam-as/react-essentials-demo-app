import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";

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
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept() {
  return (
    <li>
      <img src="..." alt="..." />
      <h3>TITLE</h3>
      <p>DESCRIPTION</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        {/* for styling purposes */}
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept />
            <CoreConcept />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

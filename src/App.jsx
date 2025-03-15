import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";

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
// use object destructuring
function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
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
            {/* use spread operator to pull out key/value pairs and 
            add them as props to the CoreConcept items */}
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

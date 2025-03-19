import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  // useState hook returns an array with exactly two elements which we can store in two separate constants using array destructuring
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    // store these identifiers in the state
    setSelectedTopic(selectedButton);
  }
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
        {/* for styling purposes */}
        <section id="examples">
          <h2>Examples</h2>
          {/* create a list of buttons with menu element */}
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {/* output data conditionally using ternary expression */}
          {!selectedTopic ? <p>Please select a topic.</p> : null}
          {selectedTopic ? (
            <div id="tab-content">
              {/* use the state to access the data dynamically */}
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null}
        </section>
      </main>
    </div>
  );
}

export default App;

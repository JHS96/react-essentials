import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data.js';

const concepts = CORE_CONCEPTS.map((concept, index) => (
  <CoreConcept key={concept.title + index} {...concept} />
));

export default function CoreConcepts() {
  return (
    <section id='core-concepts'>
      <h2>Core Concepts</h2>
      <ul>{concepts}</ul>
    </section>
  );
}

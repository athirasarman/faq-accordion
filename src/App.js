
import './App.css';
import Accordion from './Acordion/accordion';

function App() {
  const accordionItems = [
    { title: 'Accordion Item 1', content: 'Content for Accordion Item 1' },
    { title: 'Accordion Item 2', content: 'Content for Accordion Item 2' },
    { title: 'Accordion Item 3', content: 'Content for Accordion Item 3' },
  ];
  return (
    <div className="App">
      <img className='image' src="./assets/images/background-pattern-mobile.svg" alt='Image' />
      <Accordion items={accordionItems} />

  FAQs

What is Frontend Mentor, and how will it help me?

Frontend Mentor offers realistic coding challenges to help developers improve their 
frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
all levels and ideal for portfolio building.

Is Frontend Mentor free?

Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
option providing access to a range of projects suitable for all skill levels.

Can I use Frontend Mentor projects in my portfolio?

Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
way to showcase your skills to potential employers!

How can I get help if I'm stuck on a Frontend Mentor challenge?

The best place to get help is inside Frontend Mentor's Discord community. There's a help 
channel where you can ask questions and seek support from other community members.
    </div>
  );
}

export default App;

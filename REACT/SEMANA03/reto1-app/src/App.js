import './App.css';
//import emojis from './data/emojis.json'
import { emojis } from './utils/constants/emojis'
import Instruction from './components/instruction';
import Emojis from './components/emojis';

function App() {
  const greeting = "greting";
  const displayEmojiName = event => alert(event.target.id);

  return (
    <div className="container">
      <h1 id={greeting}>Emojis App</h1>
      <Instruction text="Click on an emoji to view the emoji name."/>
      <ul>
        {
          emojis.map(emoji => (
            <Emojis action={displayEmojiName} emoji={emoji}/>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
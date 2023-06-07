import Profiles from './profile/Profile';
import YBC from './ProfilePic.jpeg'
import './App.css';



function App() {
  return (
    <div className="App">
      <Profiles fullName="Daniel James" bio="bachelor degree in Computer Science" profession="web developer" imge={YBC}/> 
    </div>
  );
}

export default App;

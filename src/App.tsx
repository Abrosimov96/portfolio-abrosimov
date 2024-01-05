import { Header } from './layout/header/Header';
import { CV } from './layout/sections/cv/CV';
import { Main } from './layout/sections/main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <CV />
    </div>
  );
}

export default App;

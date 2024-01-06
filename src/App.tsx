import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { Contact } from './layout/sections/contact/Contact';
import { CV } from './layout/sections/cv/CV';
import { Main } from './layout/sections/main/Main';
import { Projects } from './layout/sections/projects/Projects';
import { Skills } from './layout/sections/skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <CV />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import { AboutUs } from './components/aboutUs/aboutUs';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <AboutUs />
    </>
  );
}

export default App;

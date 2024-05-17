import './App.css';
import ClientInfo from './components/clientInfo/ClientInfo';
import Footer from './components/footer/Footer';
import Logo from './components/logo/Logo';

function App() {
  return (
    <main>
      <div>
        <Logo />
      </div>
      
      <ClientInfo />

        <div>
          <Footer />
        </div>

    </main>
  );
}

export default App;

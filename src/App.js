import './App.css';
import Footer from './components/footer/Footer';
import Header from "./components/header/Header"
import PlayerPlaylist from './components/playlist/PlayerPlaylist';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <>
      <Header />
      <div className='player-container'>
        <div className='side-bar'>
          <Sidebar />
        </div>
        <div className='player-playlist'>
          <PlayerPlaylist />
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
}

export default App;

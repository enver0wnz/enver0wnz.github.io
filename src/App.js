import './styles.css';
import { FaDiscord } from 'react-icons/fa';
import Navbar from './Navbar';
import Cards from './Cards';

const App = () => {

  window.addEventListener('scroll', () => {
    const cards = document.getElementById('cards-div');
    if (window.scrollY > 250 && cards.classList.contains('active') === false) {
      cards.classList.add('active');
    }
  });

  return (
    <div className="App">
      <Navbar />
      <div className="Homepage-header">
        <p className="p-reluminate"> RELUMINATE.GG </p>

        <div className="homepage-header-div">
          <p className="p-reluminate-2" id="p-header-1"> CONNECTING THE LEAGUE OF LEGENDS COMMUNITY </p>
          <p className="p-reluminate-2" id="p-header-2"> ONE SOUL AT A TIME </p>
        </div>

        <a rel="noreferrer" href="https://discord.com/invite/Fn8d3UAD6y" target="_blank" className="discord-button"> LINK TO DISCORD <FaDiscord size={30} color={'#7289d9'}/> </a>
      </div>
      <div className="Homepage-about">
        <p className="p-reluminate" id="cards-header"> COMING SOON </p>
        <Cards />
      </div>
    </div>
  );
};

export default App;

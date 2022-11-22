import './Cards.css';
import { FaDiscord } from 'react-icons/fa';
import amongus from './assets/amongus.png';
import anime from './assets/anime.png';

const Cards = props => {

  return (
    <div id="cards-div">

      <div className="Homepage-Card">
        <div className="circle-div-1">
          <div className="circle-div-2">
            <img src={amongus} alt="amongus"/>
          </div>
        </div>
        <p className="card-title">ABOUT ME</p>
        <div className="card-data">
          <p>I analyze healthcare data. Lots of it.
          <br></br>
          Grandmaster support
          <br></br>
          NA's finest Elo terrorist
          <br></br>
          Hardstyle enjoyer
          <br></br>
          Weeb
          </p>
        </div>
      </div>

      <div className="Homepage-Card">
        <div className="circle-div-1">
          <div className="circle-div-2">
            <img className="card-icon" src={anime} alt="anime"/>
          </div>
        </div>
        <p className="card-title">THE PROJECT</p>
        <div className="card-data">
          <p>Everyone has a reason for playing league.
          <br></br>
          Whether you're trying to climb the ladder,
          <br></br>
          find a duo, or escape reality. I'm building a
          <br></br>
          community for it all.
          </p>
        </div>
      </div>

      <div className="Homepage-Card">
        <div className="circle-div-1">
          <div className="circle-div-2">
            <FaDiscord size={30} color={'#7289d9'}/>
          </div>
        </div>
        <p className="card-title">FREE COACHING</p>
        <div className="card-data">
          <p>Join the Discord!
          <br></br>
          I'll teach you the fundamentals and show
          <br></br>
          you how to climb in both league and life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
import './Navbar.css';
import { BsTwitter } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { BsTwitch } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className="NavbarBox">
      <ul id="navbar-ul1">
        <li><p>RELUMINATE.GG</p></li>
        <li><a rel="noreferrer" id="YoutubeLogoLink" target="_blank" href="https://www.youtube.com/channel/UCCFZYqqjipVLVR7rrLG-PWA"><AiFillYoutube color="#FF0000" className="LogoLinks" id="youtubeLogo"/></a></li>
        <li><a rel="noreferrer" id="TwitterLogoLink" target="_blank" href="https://twitter.com/enverOwnz"><BsTwitter color="#00acee" className="LogoLinks" id="twitterLogo"/></a></li>
        <li><a rel="noreferrer" id="TwitchLogoLink" target="_blank" href="https://www.twitch.tv/enverownz"><BsTwitch color="#6441A4" className="LogoLinks" id="twitchLogo"/></a></li>
      </ul>
    </div>
  );
};

export default Navbar;
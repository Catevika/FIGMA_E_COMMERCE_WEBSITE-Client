import { useLocation } from 'react-router-dom';
import fbIconBlack from '../../assets/icons/social-outline-facebook-black.svg';
import fbIcon from '../../assets/icons/social-outline-facebook.svg';
import instaIconBlack from '../../assets/icons/social-outline-instagram-black.svg';
import instaIcon from '../../assets/icons/social-outline-instagram.svg';
import youtubeIconBlack from '../../assets/icons/social-outline-youtube-black.svg';
import youtubeIcon from '../../assets/icons/social-outline-youtube.svg';
import './SocialLineIcons.css';


const SocialLineIcons = () => {
  const location = useLocation();

  return (
    <p className='social-line-icons'>
      <img src={location.pathname.includes('home/4') ? instaIconBlack : instaIcon} alt='Instagram icon' />
      <img src={location.pathname.includes('home/4') ? fbIconBlack : fbIcon} alt='Facebook icon' />
      <img src={location.pathname.includes('home/4') ? youtubeIconBlack : youtubeIcon} alt='Youtube icon' />
    </p>
  );
};

export default SocialLineIcons;
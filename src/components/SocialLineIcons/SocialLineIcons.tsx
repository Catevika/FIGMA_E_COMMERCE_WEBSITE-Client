import fbIcon from '../../assets/icons/social-outline-facebook.svg';
import instaIcon from '../../assets/icons/social-outline-instagram.svg';
import youtubeIcon from '../../assets/icons/social-outline-youtube.svg';
import './SocialLineIcons.css';


const SocialLineIcons = () => {
  return (
    <p className='social-line-icons'>
      <img src={instaIcon} alt='Instagram icon' />
      <img src={fbIcon} alt='Facebook icon' />
      <img src={youtubeIcon} alt='Youtube icon' />
    </p>
  );
};

export default SocialLineIcons;
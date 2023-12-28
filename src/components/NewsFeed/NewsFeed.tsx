import { NewsFeedImage } from '../../types';
import './NewsFeed.css';

type Props = {
  Home2NewsFeedImages: NewsFeedImage[];
};

const NewsFeed = ({ Home2NewsFeedImages }: Props) => {

  return (
    <div className='newsFeed-container'>
      <div className='newsFeed-texts'>
        <p className='newsFeed label-1'>NewsFeed</p>
        <h4>Instagram</h4>
        <p className='newsFeed text-3'>Follow us on social media for more discount & promotions</p>
        <p className="newsFeed label-2">@3legant_official</p>
      </div>
      <div className='newsFeed-images'>{Home2NewsFeedImages.map(image => <img src={image.url} key={image.id} alt={`Person-${image.id} with a headband`} />)}</div>
    </div>
  );
};

export default NewsFeed;
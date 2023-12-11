import { Link } from 'react-router-dom';
import arrowrighticon from '../../assets/icons/arrow-right.svg';
import { Article } from '../../types';
import './ArticleCard.css';

type Props = {
  article: Article;
};

const ArticleCard = ({ article }: Props) => {
  const { articleUrl, title } = article;

  return (
    <>
      <img src={articleUrl} alt='Living room' />
      <div className='home1-articles-card-text'>
        <p className='label-2'>{title}</p>
        <Link to='#' className='home1-link btn-small'>Read More <img src={arrowrighticon} alt="arrow-right icon" /></Link>
      </div>
    </>
  );
};

export default ArticleCard;
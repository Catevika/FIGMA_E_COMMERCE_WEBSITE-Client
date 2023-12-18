import { articles } from '../../../data';
import ArticleCard from '../ArticleCard/ArticleCard';
import './HomeArticles.css';

const HomeArticles = () => {
  return (
    <div className='home1-articles-container'>
      <div className='home1-articles-content'>
        {articles.map((article) => <div key={article.id} className='home1-articles-card'>
          {article ? <ArticleCard article={article} /> : null}
        </div>)}
      </div>
    </div>
  );
};

export default HomeArticles;
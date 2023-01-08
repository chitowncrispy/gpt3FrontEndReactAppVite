import './article.css'

interface ArticleParams {
  imageUrl: string;
  date: string;
  title: string;
}

const Article = (articleParams: ArticleParams) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={articleParams.imageUrl} alt='blog'/>
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{articleParams.date}</p>
          <h3>{articleParams.title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
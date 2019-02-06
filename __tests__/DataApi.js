import DataApi from '../lib/DataApi';
import {data} from '../lib/testData';

const api = new DataApi(data);

describe('DataApi', ()=> {

  it('exposes articles as an object',()=>{
    const articles = api.getArticles();
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });


  it('exposes authors as an object',()=>{
    const authors = api.getAuthors();
   
    const authorsId = data.authors[0].id;
    const authorsFirstName = data.authors[0].firstName;
    expect(authors).toHaveProperty(authorsId);
    expect(authors[authorsId].firstName).toBe(authorsFirstName);
  });

});
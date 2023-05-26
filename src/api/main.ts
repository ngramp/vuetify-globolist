import * as types from "./types";
import { ApiClient } from "./client";
// Usage example
async function main() {
  try {
    // Fetch all articles
    const articles: types.Article[] = await ApiClient.get<types.Article>();
    console.log('All articles:', articles);

    // Create a new article
    const newArticle: types.Article = {
      id: 1,
      title: 'New Article',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };
    const createdArticle: types.Article = await ApiClient.create<types.Article>(newArticle);
    console.log('Created article:', createdArticle);

    // Fetch a single article
    const articleId = createdArticle.id; // Assuming the API returns the ID of the created article
    const article: types.Article = await ApiClient.getById<types.Article>(articleId);
    console.log(`Fetched article with ID ${articleId}:`, article);

    // Update an article
    const updatedArticle: Partial<types.Article> = {
      title: 'Updated Article',
      content: 'New content goes here.',
    };
    const updated: types.Article = await ApiClient.update<types.Article>(articleId, updatedArticle);
    console.log('Updated article:', updated);

    // Delete an article
    await ApiClient.remove(articleId);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
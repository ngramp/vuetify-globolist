const axios = require('axios');

const baseUrl = 'https://localhost:5000/api'; 

// Function to fetch users
async function getUsers() {
  try {
    const response = await axios.get(`${baseUrl}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

// Function to fetch articles
async function getArticles() {
  try {
    const response = await axios.get(`${baseUrl}/articles`);
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
}

// Function to fetch comments for an article
async function getComments(articleId) {
  try {
    const response = await axios.get(`${baseUrl}/articles/${articleId}/comments`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
}
// Usage example
// eslint-disable-next-line no-unused-vars
async function main() {
  try {
    const users = await getUsers();
    console.log('Users:', users);

    const articles = await getArticles();
    console.log('Articles:', articles);

    const articleId = '123'; // Replace with the desired article ID
    const comments = await getComments(articleId);
    console.log(`Comments for article ${articleId}:`, comments);
  } catch (error) {
    console.error('Error:', error);
  }
}
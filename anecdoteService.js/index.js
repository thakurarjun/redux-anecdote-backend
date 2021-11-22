import axios from "axios";

const anecdoteData = axios.get('http://localhost:3001/anecdotes').then(response => {
  const anecdote = response.data
  console.log(anecdote)
});
console.log(anecdoteData);

const anecdoteData = axios.put('http://localhost:3001/anecdotes/:id').then(response => {
  const anecdote = response.data
  console.log(anecdote)
});
console.log(anecdoteData);
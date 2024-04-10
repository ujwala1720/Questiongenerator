/** @type {import('tailwindcss').Config }*/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

const socket = io();
const generateButton = document.getElementById('generate');
const numberInput = document.getElementById('number');
const difficultySelect = document.getElementById('difficulty');
const topicInput = document.getElementById('topic');
const questionsContainer = document.getElementById('questions');

generateButton.addEventListener('click', () => {
  const number = parseInt(numberInput.value);
  const difficulty = difficultySelect.value;
  const topic = topicInput.value;
  socket.emit('generateQuestions', { number, difficulty, topic });
});

socket.on('question', ({ text, index }) => {
  const questionElement = document.createElement('p');
  questionElement.textContent = `${index}. ${text}`;
  questionsContainer.appendChild(questionElement);
});

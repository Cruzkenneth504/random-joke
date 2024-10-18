const giphyApiKey = "rhyFmIDFnBiyW9sSgeyJau9BjuybaNdT";

document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('joke-img');
  const button = document.getElementById('joke-btn');
  const jokeText = document.getElementsByClassName('joke-text')[0];
  const paragraph = document.getElementById('joke-paragraph');

  // Ensure the image is hidden by default
  image.classList.add('hidden');

  button.addEventListener('click', async () => {
    await getRandomGif();
    await getRandomJoke();
    paragraph.textContent = "Click again for a new joke";
  });

  async function getRandomGif() {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}&tag=funny`);
      const data = await response.json();
      image.src = data.data.images.original.url;
      image.classList.remove('hidden'); // Show the image when a new GIF is fetched
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  }

  async function getRandomJoke() {
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
        },
      });
      const data = await response.json();
      jokeText.textContent = data.joke;
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  }

});


const movieInput = document.getElementById('movieInput');
const searchButton = document.getElementById('searchButton');
const movieDetails = document.getElementById('movieDetails');

searchButton.addEventListener('click', () => {

    const userInput = movieInput.value;
    const apiKey = 'da884dbe';
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${userInput}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log('nitish',data);
            if (data.Response === 'True') {
                movieDetails.innerHTML = `
                    <h2>${data.Title}</h2>
                    <img src="${data.Poster}" alt="${data.Title} poster">
                    <p>Year: ${data.Year}</p>
                    <p>Director: ${data.Director}</p>
                    <p>Plot: ${data.Plot}</p>
                `;
            } else {
                movieDetails.innerHTML = `<p>Movie not found!</p>`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            movieDetails.innerHTML = `<p>An error occurred. Please try again later.</p>`;
        });
});

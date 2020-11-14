export const API_KEY = 'NTZn3JDv4dGVumbcYQkffzFAE6dnoY1K';
export const LIMIT = '10';

export const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURI(category)}&limit=${LIMIT}`;

    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            url: img.images?.downsized_medium.url,
            title: img.title,
        }
    });

    return gifs;
}
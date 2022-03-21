

export const getGifs = async (category) => {
    //Funcion que consulta la API de giphy y regresa una lista con los gifs
    const Url = `https://api.giphy.com/v1/gifs/search?apiKey=vvlTlGvStgux3sBpF8Ivmcc7mfQgSgZS&q=${encodeURI(category)}&limit=10`;
    
    //Hacer el request
    const response = await fetch( Url );
    const { data } = await response.json();

    //Parcear la respuesta
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }            
    });

    return gifs;
}

const loadAnimals = async (callback) => {
    let url = 'https://agriness-api.herokuapp.com/api/animals';

    const response = await fetch(url);
    const animals = await response.json();
    callback(animals);
}

export default loadAnimals;
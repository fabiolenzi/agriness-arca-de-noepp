const url = 'https://agriness-api.herokuapp.com/api/animals/';

const AnimalsApi = {
    getAnimals: async () => {
        const response = await fetch(url);
        AnimalsApi.HandleResponse(response);
        return response.json();
    },

    deleteAnimal: async (id) => {
        const response = await fetch(`${url}${id}`, { method: 'DELETE' });
        AnimalsApi.HandleResponse(response);
        return id;
    },

    editAnimal: async (animal) => {
        const response = await fetch(`${url}${animal.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(animal)
        });
        AnimalsApi.HandleResponse(response);
        return response.json();
    },

    HandleResponse: res => {
        if (!res.ok) {
            throw Error(res.responseText);
        }
        return res;
    }
}

export default AnimalsApi;
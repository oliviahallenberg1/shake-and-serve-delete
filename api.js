export function fetchAllCocktails() {
    return fetch(`${process.env.EXPO_PUBLIC_API_URL}search.php?f=a`)
    .then(response => {
      if (!response.ok) 
        throw new Error('Something went wrong!' + response.statusText);

      return response.json()
    })
};

export function fetchCocktailsByName(keyword) {
    return fetch(`${process.env.EXPO_PUBLIC_API_URL}search.php?s=${keyword}`)
    .then(response => {
      if (!response.ok) 
        throw new Error('Something went wrong!' + response.statusText);

      return response.json()
    })
};

export function fetchCocktailsByIngredient(ingredient) {
    return fetch(`${process.env.EXPO_PUBLIC_API_URL}filter.php?i=${ingredient}`)
    .then(response => {
      if (!response.ok) 
        throw new Error('Something went wrong!' + response.statusText);

      return response.json()
    })
};

export function fetchCocktailsByCategory(category) {
    return fetch(`${process.env.EXPO_PUBLIC_API_URL}filter.php?c=${category}`)
    .then(response => {
      if (!response.ok) 
        throw new Error('Something went wrong!' + response.statusText);

      return response.json()
    })
};


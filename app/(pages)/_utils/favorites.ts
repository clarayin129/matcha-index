export const getFavorites = (): string[] => {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export const isFavorite = (id: string): boolean => {
  return getFavorites().includes(id);
};

export const toggleFavorite = (id: string): boolean => {
  const favs = getFavorites();
  let updatedFavs;
  let isFavorite;

  if (favs.includes(id)) {
    updatedFavs = favs.filter((favId) => favId !== id);
    isFavorite = false;
  } else {
    updatedFavs = [...favs, id];
    isFavorite = true;
  }

  localStorage.setItem('favorites', JSON.stringify(updatedFavs));
  return isFavorite;
};

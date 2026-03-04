const getImageUrl = (path, name) => {
    return new URL(`../assets/images/${path}/${name}`, import.meta.url).href
};

export default getImageUrl;
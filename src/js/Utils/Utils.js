const getRandomNumer = (num = 100) => {
    return Math.floor(Math.random() * num + 1);
};

const getJson = async (url) => {
    const promise = await fetch(url);
    const data = await promise.json();

    return data;
};
export { getRandomNumer, getJson };

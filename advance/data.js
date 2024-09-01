async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        return data;
    } catch (e) {
        console.error("Error fetching data: ", e);
        return [];
    }
}

window.fetchData = fetchData;

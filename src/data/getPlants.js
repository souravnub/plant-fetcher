"use server";
export async function getPlantsData(page = 1) {
    const res = await fetch(
        `https://perenual.com/api/species-list?key=${process.env.API_KEY}&page=${page}`
    );
    const json = await res.json();
    return json;
}

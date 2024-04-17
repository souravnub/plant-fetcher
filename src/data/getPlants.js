"use server";
export async function getPlantsData(page = 1, q = "") {
    const res = await fetch(
        `https://perenual.com/api/species-list?key=${process.env.API_KEY}&page=${page}&q=${q}`
    );
    const json = await res.json();
    return json;
}

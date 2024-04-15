"use server";
export async function getPlant(id) {
    const res = await fetch(
        `https://perenual.com/api/species/details/${id}?key=${process.env.API_KEY}
`
    );
    const json = await res.json();
    return json;
}

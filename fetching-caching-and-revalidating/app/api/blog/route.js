export const revalidate = 3600; // 1 saat
// Bu yapılar otomatik olarak cacheleniyor...
export async function GET(request) {
    const res = await fetch("endpoint", {cache: "force-cache", next: { revalidate: 3600 }, tag: ["collection"]});

    if(!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return Response.json(res.json());
}



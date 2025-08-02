export const revalidate = 0; // 1 saat
// Bu yapılar otomatik olarak cacheleniyor...
export async function GET(request) {
    const res = await fetch("endpoint",
        { cache: "no-cache" });

    if(!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return Response.json(res.json());
}



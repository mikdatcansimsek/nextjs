 export const Todos = [
    "Example Todo 1",
    "Example Todo 2"
]

export async function GET() {
    return Response.json(Todos);
}
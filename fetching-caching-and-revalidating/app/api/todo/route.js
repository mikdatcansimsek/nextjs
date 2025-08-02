export async function GET(request) {
    var response = await fetch("todoendpoint");
    return Response.json(response.json());
}
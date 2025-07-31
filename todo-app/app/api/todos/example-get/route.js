export async function GET(request) {
    const serarchParams = request.nextUrl.searchParams;

    const name = serarchParams.get("name");
    const lastName = serarchParams.get("lastName");
    return Response.json({name: name, lastName: lastName});
}

//query param gelirse nasıl yakalanır...
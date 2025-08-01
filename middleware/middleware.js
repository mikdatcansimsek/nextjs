import { NextResponse } from "next/server";

export function middleware(request) {

    console.log("Middleware is running");
    const requestCookie = request.cookies.get("token");
    
    const allCookies = request.cookies.getAll();
    //console.log("All Cookies:", allCookies);

    request.cookies.has("token");
    request.cookies.delete("token2");


    const response = NextResponse.next();
    response.cookies.set("token", "my token");
    const responseCookie = response.cookies.get("token");

    console.log("Request Cookie:", requestCookie);
    console.log("Response Cookie:", responseCookie);



    // //console.log("Cookie:", cookie);

    // allCookies = response.cookies.getAll();
    // console.log(allCookies);







    //console.log(request);

    // if (!request.nextUrl.pathname.includes("/login")) {
    //     return NextResponse.redirect(new URL("/auth/login", request.url));
    // }
}

// export const config = {
//     matcher: ['/log',"/"]
// }
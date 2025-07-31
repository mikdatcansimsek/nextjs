import { cookies, headers } from 'next/headers';

export const revalidate = 1;

export async function GET() {

    const cookieStore = cookies();
    const token = cookieStore.get("token");
    const headerList = headers();
    const secretKey = headerList.get("secret-key");


    const result = await fetch("http://localhost:9500/todos", { 
        cache: "no-cache",
        // next : { revalidate: 1 }
    }).then(response => response.json());
    return new Response(secretKey, {
        status: 200,
        headers: { 'Set-cookie': 'token=' + token}
    });
}
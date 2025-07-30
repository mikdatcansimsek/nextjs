'use server';

import { redirect } from "next/navigation";

export async function createPost(data) {

    console.log("Creating post with data:", data);
    //dbye kaydet

    redirect("/blog");//navigate yaparak sayfaya dönderiyor
}
'use client';

import { useEffect } from "react";

export default function TodoPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/api/todo").then((res) => res.json()).then((data) => setData(data));
        axios.get("/api/todo").then((res) => setData(res.data));
    }, []); 
    return <></>
}
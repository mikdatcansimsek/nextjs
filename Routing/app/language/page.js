'use client';

import { usePathname } from "next/navigation";


export default function LocalSwitcher() {

    const pathname = usePathname();

    function switchLocal(lang) {
        const newPath = `/${lang}${pathname}`;
        window.history.replaceState(null, '', newPath);
    }

    return (
        <>
            <button onClick={()=>switchLocal("en")}>English</button>
            <button onClick={() => switchLocal("tr")}>Türkçe</button>
        
        </>
    );
}

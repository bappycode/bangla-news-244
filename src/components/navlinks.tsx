import Link from 'next/link';
import React from 'react';

interface NavLinksProps {
    slug: string;
    title: string;
    topicId: string | null;
    url: string;
    scrapable: boolean;
}


const NavLinks = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/categories')
    const data = await res.json()
    const navs: NavLinksProps[] = data.data
    const filteresNavs= navs.filter(n => n.scrapable)
    return (
        <div className="flex gap-5 justify-center mt-5">
            <Link href="/">হোম</Link>
            {filteresNavs.map((n, i) => <Link href={`/category/${n.slug}`} key={i}>{n.title}</Link>)}
        </div>
    );
};

export default NavLinks;
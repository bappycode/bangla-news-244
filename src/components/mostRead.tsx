import React from 'react';
import Link from 'next/link'

interface MostReadnews {
    id: string,
    title: string,
}

const MostRead =async () => {
    const res = await fetch ('https://news-api-v2.vercel.app/api/news/most-read')
    const data = await res.json();
    const news:MostReadnews[] = data.data

    return (
        <div className='card p-2 bg-base-100 border border-gray-300'>
            <h1 className='font-bold text-red-700 mb-5'>সর্বাধিক পঠিত</h1>
            <div className='grid gap-3'>
                {news.map((n, i) => 
                 <Link key={n.id} href={`/news/${n.id}`}>
                <div className='flex gap-2 items center' key={n.id}>
                   <p className='font-bold text-red-600'>{i+1}</p> <h2>{n.title}</h2>
                </div>
                </Link>)}
                </div>
        </div>
    );
};

export default MostRead;
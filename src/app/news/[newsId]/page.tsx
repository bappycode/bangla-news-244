import Image from 'next/image';
import React from 'react';

const NewsDetails = async ({params}: {params: {newsId : string}}) => {
    const {newsId} = await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`)
    const data = await res.json()
    const news = data.data
    console.log(news)
    return (
        <div>
            <h1>{news.title}</h1>
            <Image src={`${news.imageUrl}`} height={400} width={300} alt={`${news.imageAlt}`}></Image>
            <p>{news.text}</p>
        </div>
    );
};

export default NewsDetails;
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
import Link from 'next/link'

interface Headlines {
    id: string;
    title: string;
}

const Marquee = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10')
    const data = await res.json()
    const Headlines: Headlines[] = data.data
    return (
        <div className="bg-red-700 text-white py-2 px-4">
            <div className="flex max-w-7xl mx-auto">
                <div className="bg-red-800 py-1 px-5 font-bold">সর্বশেষ</div>
                <MarqueeText direction="right" duration={10}>
                    {Headlines.map(h => 
                    <Link className="hover:underline" href={`/news/${h.id}`} key={h.id}><span>{h.title}</span><span className="mx-5">•</span></Link>)}
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;
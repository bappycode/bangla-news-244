import Image from "next/image";
import Link from "next/link";

interface News {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
}

const MainNews = ({news}: {news: News[]}) => {
    const [firstNews, ...otherNews] = news

// const otherNews = news.slice(1);
    return (
        <div className="flex gap-2">
                  <Link href={`/news/${firstNews.id}`}>
           <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image
      src={firstNews.imageUrl}
      alt={firstNews.imageAlt}
      height={300}
      width={400}
    />
  </figure>
  <div className="card-body">
    <p className="text-red-500 semi-bold">{firstNews.category}</p>
    <h2 className="card-title">{firstNews.title}</h2>
    <p>{firstNews.description}</p>
    </div>
  </div>
  </Link>
<div className="grid gap-2">
    {otherNews.slice(0, 4).map((n) => (
      <Link key={n.id} href={`/news/${n.id}`}>
        <div className="card bg-base-100 border border-gray-300 py-5">
          <p className="text-red-500 semi-bold">{n.category}</p>
          <div>{n.title}</div>
        </div>
      </Link>
    ))}
</div>
</div>
    );
};

export default MainNews;
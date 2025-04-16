import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={'/articles/breaking-news-123?lang=en'}>Read In English</Link>
      <Link href={'/articles/breaking-news-123?lang=fr'}>Read In French</Link>
    </div>
  );
}

import Link from "next/link";

export default function ArticleCard({ href, title, description, date, tags }) {
  return (
    <Link href={href}>
      <div className="flex-1 py-6 md:px-6 cursor-pointer transition-colors duration-300 hover:bg-gray-100">
        <div className="flex flex-row flex-wrap mb-1">{tags}</div>
        <h1 className="text-2xl font-medium mb-2">{title}</h1>
        <p className="mb-1 text-gray-600">{description}</p>
        <p className="text-sm font-light text-gray-600">{date}</p>
      </div>
    </Link>
  )
}
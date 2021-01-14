import Link from "next/link"

import Layout from "./Layout";

export default function Post({ title, date, tags, children }) {
  return (
    <Layout title={title}>
      <div className="flex items-center justify-center">
        <div className="max-w-screen-sm w-full px-12 md:px-6">
          <div className="flex flex-row flex-wrap mb-3 mt-4">
            {tags}
          </div>
          <h1 className="text-4xl md:text-6xl mb-2 font-medium">{title}</h1>
          <p className="text-lg font-light text-gray-600 mb-12">{date}</p>

          <div>
          {children}
          </div>

          <Link href="/#posts">
            <button className="mt-12 text-xl font-light text-gray-400 px-4 py-3 rounded-lg border-2 border-gray-300 w-max hover:bg-gray-100 transition-colors duration-300">&lt;- Back to blog posts</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
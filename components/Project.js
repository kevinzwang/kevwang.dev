import Link from "next/link"

import Layout from "./Layout";

export default function Project({ title, subtitle, challenge, result, tech }) {
  return (
    <Layout title={title}>
      <div className="flex items-center justify-center">
        <div className="max-w-screen-sm w-full px-12 md:px-6">
          <Link href="/#projects"><a className="text-2xl md:text-3xl font-light">Projects</a></Link>
          <h1 className="text-4xl md:text-6xl mb-2 font-medium">{title}</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-4">{subtitle}</p>

          <div className="flex flex-row flex-wrap mb-8">
            {tech}
          </div>

          <h2 className="text-3xl mb-4">
            Challenge
          </h2>
          <p className="mb-8">{challenge}</p>
          
          <h2 className="text-3xl mb-4">
            Result
          </h2>
          <p className="mb-8">{result}</p>

          <Link href="/#projects">
          <button className="text-xl font-light text-gray-400 px-4 py-3 rounded-lg border-2 border-gray-300 w-max hover:bg-gray-100 transition-colors duration-300">&lt;- Back to projects</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
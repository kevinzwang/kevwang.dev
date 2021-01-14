import Head from "next/head"
import { motion } from "framer-motion"

import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, title }) {
  const home = title == "Home"

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <Head>
        <title>{title} | Kev Wang</title>
      </Head>

      <Header home={home} />
      <div
        className={`relative min-h-screen ${home || "pt-16 md:pt-40"} pb-24`}>
        <main>
          {children}
        </main>

        <Footer />
      </div>
    </motion.div>
  )
}
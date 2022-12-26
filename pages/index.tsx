import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className="text-center my-4 max-w-4xl m-auto">
      <h1 style={inter.style} className="uppercase text-4xl my-8">
        use-cardano next.js starter
      </h1>

      <div style={inter.style} className="my-4 text-left ">
        This is a starter project for use-cardano, which is a React hook, context, and set of
        components for interacting with the Cardano blockchain. It is built on top of{" "}
        <a
          className="underline underline-offset-2"
          href="https://lucid.spacebudz.io/"
          rel="noreferrer"
          target="_blank"
        >
          Lucid
        </a>{" "}
        and provides a simple API for interacting with the Cardano blockchain.
      </div>

      <div style={inter.style} className="my-4 text-left">
        The aim of use-cardano in general, and the starter project specifically, is to serve as a
        simple starting point, but also to help developers get into Cardano dApp development. With
        this in mind, the examples are designed to be equally functional and educational.
      </div>

      <div style={inter.style} className="my-4 text-left">
        The starter project is built on top of Next.js, which is a React framework for building
        static and dynamic websites. It is a great choice for building dApps, as it is easy to use,
        and provides a lot of functionality out of the box. It also has a great developer
        experience, which makes it easy to get started.
      </div>

      <div style={inter.style} className="my-4 text-left">
        For styling, we are using Tailwind CSS, which is a utility-first CSS framework with a good
        balance of flexibility, composability, and ease of use. It is also very easy to use with
        Next.js, and provides a lot of functionality out of the box.
      </div>
    </div>
  )
}

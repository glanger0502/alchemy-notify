import Head from 'next/head'
import { Main } from '../components/Main'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Ethereum Address Activity</title>
        <meta name="description" content="Ethereum Address Activity" />
        <link rel="" href="/logo.png" />
      </Head>

      <main className="">
        <Main />
      </main>

      <footer className="flex flex-col w-[80%] mx-auto my-2">
        <h1>what this project purpose?</h1>
        <div>
          the project is used to subscribe ethereum address, then got the message by email,phone,telegram,discord robot.
        </div>
        <h1>How to use it ?</h1>
        <div>
          1. subscribe
          2. select the router to receive the message
          3. get the message
        </div>
      </footer>
    </div>
  )
}

import Head from 'next/head'
import { Main } from '../components/Main'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center">
      <Head>
        <title>Ethereum Address Activity</title>
        <meta name="description" content="Ethereum Address Activity" />
        <link rel="" href="/logo.png" />
      </Head>

      <main className="w-full flex">
        <Main />
      </main>

      <footer className="flex flex-col items-center justify-items-center">
        <div className='relative mx-auto my-0  w-[80%]'>
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
        </div>
      </footer>
    </div>
  )
}

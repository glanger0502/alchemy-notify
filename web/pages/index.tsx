import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, ListItem, OrderedList } from '@chakra-ui/react'
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

      <footer className="flex flex-col items-center justify-items-center w-full">
        <div className='relative mx-auto my-0 w-[70%]'>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    What is this project purpose?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                  the project is used to subscribe ethereum address, then got the message by email,phone,telegram,discord robot.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                  How to use it ?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <OrderedList>
                  <ListItem>subscribe</ListItem>
                  <ListItem>select the router to receive the message</ListItem>
                  <ListItem>get the message</ListItem>
                </OrderedList>
              </AccordionPanel>
            </AccordionItem>

          </Accordion>
        </div>
      </footer>
    </div>
  )
}

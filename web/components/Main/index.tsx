import { Heading,Text,Highlight } from '@chakra-ui/react'
import Image from 'next/image'
import logoPic from '../../public/logo.png';
import {History} from "../History";

export function Main() {
    return (
        <div>
            <div className='flex flex-row my-4 w-[90%] mx-auto'>
                <div className='relative mx-6'>
                    <Image src={logoPic} alt="Picture of the logo" width={80} height={80} />
                </div>
                <div className='flex flex-row items-center justify-items-center justify-between w-full'>
                    <div className='text-center mx-5'>
                        <ul className='flex flex-row'>
                            <li className='mx-4'><a href='/#'>首页</a></li>
                            <li className='mx-4'><a href='/#'>订阅</a></li>
                        </ul>
                    </div>
                    <div className='flex flex-row'>
                        <Image src={logoPic} alt="Picture of the logo" width={40} height={40} />
                        <Image src={logoPic} alt="Picture of the logo" width={40} height={40} />
                    </div>
                </div>
                
            </div>
            <div className="flex flex-col w-full items-center justify-items-center text-center my-6">
                <div className='m-4'>
                    <Heading>Ethereum Address Activity</Heading>
                    <Text className='text-right'>search the address activity</Text>
                </div>
                <div className='m-6 w-[90%]'>
                    <div className='flex flex-col items-center justify-items-center'>
                        <div className='flex flex-row'>
                            <div className='m-4 border-lime-400'>Address:</div>
                            <div className='m-4 min-w-min'>
                                <Highlight query='spotlight' styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}>0x460eB9889FB8DBb5c6143437F4146F7887BeA123</Highlight>
                            </div>
                        </div>
                        <div className='mx-4 flex flex-col w-[90%]'>
                            <div className='text-left'>
                                <label>History</label>
                            </div>
                            {/* <History /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
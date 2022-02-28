import { Fragment, ReactNode } from "react";
import { Menu, Transition } from '@headlessui/react'
import Title from "@components/Title";
import HamburgerIcon from '@icons/HamburgerIcon';

interface MenuButtonParams {
    active: boolean,
    children: ReactNode
}

const MenuButton = ({ active, children}: MenuButtonParams) => {
    console.log(active)
    return (
        <>
            <button
                className={`${ active 
                    ? 'bg-hasher-hover text-hasher-blue' 
                    : '' 
                    } flex gap-2 rounded items-center w-full px-4 py-2 text-md font-bold`
                }>
                {children}
            </button>  
        </>
    );
}

export default function Header() {

    return (
        <>
            <header className="bg-white border-b-2 border-hasher-gray flex gap-1 h-14 items-center justify-between p-3 sticky top-0 w-full z-30 md:max-w-md">
                <Title title='Hasher' classname='px-2 text-left w-full' />
                <Menu as='div' className='ml-3'>
                    <div className='flex items-center justify-center h-10 '>
                        <Menu.Button className='flex items-center p-2 text-sm rounded hover:bg-hasher-hover hover:opacity-80'>
                            <span className='sr-only'>Open navigation</span>
                            <HamburgerIcon height={28} width={28} />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'>
                        <Menu.Items className='absolute bg-white border-2 border-hasher-gray flex flex-col gap-2 p-2 right-0 rounded top-16 w-full z-30 focus:outline-none md:max-w-md'>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${ active 
                                            ? 'bg-hasher-blue text-white' 
                                            : '' 
                                            } flex gap-2 h-14 rounded items-center w-full px-4 py-2 text-md font-bold`
                                        }>
                                        Crypt
                                   </button> 
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${ active 
                                            ? 'bg-hasher-blue text-white' 
                                            : '' 
                                            } flex gap-2 h-14 rounded items-center w-full px-4 py-2 text-md font-bold`
                                        }>
                                        Decrypt
                                   </button> 
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </header>
        </>
    );
}
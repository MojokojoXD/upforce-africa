import { Popover,Transition } from "@headlessui/react";
import { FC } from "react";
import Link from 'next/link'
import { NewspaperIcon,DocumentIcon,ChevronDownIcon } from "@heroicons/react/24/outline";

interface ResourcesProps {
    
}
 
const Resources: FC<ResourcesProps> = () => {
    return ( 
        <Popover className='relative inline-block text-[.7em] font-normal text-gray-200 z-[1000]'>
                      {({ open, close }) => (
                        <>
                          <div>
                            <Popover.Button
                              className={`px-3 py-2 outline-0 ring-0 duration-75 ${
                                open
                                  ? 'bg-white text-gray-800 rounded-t-md ring-0 outline-0'
                                  : 'hover:bg-gray-700 hover:text-white hover:rounded-md'
                              }`}
                            >
                              Resources
                              <ChevronDownIcon className='h-3 w-3 inline' />
                            </Popover.Button>
                          </div>
                          <Transition
                            as='div'
                            enter='transition ease-out duration-100'
                            enterFrom='transform opacity-0 scale-95'
                            enterTo='transform opacity-100 scale-100'
                            leave='transition ease-in duration-75'
                            leaveFrom='transform opacity-100 scale-100'
                            leaveTo='transform opacity-0 scale-95'
                          >
                            <Popover.Panel className='absolute w-40 right-0 bg-white rounded-tl-md rounded-b-md px-2 py-2 text-gray-600'>
                              <div className='space-y-1'>
                                <Link
                                  href='/resources/blog'
                                  className='block hover:bg-indigo-500 py-2 px-2  group rounded transition-all ease-in-out duration-75 w-full'
                                  onClick={close}
                                >
                                  <span className='group-hover:text-gray-100 block text-center'>
                                    Blog
                                  </span>
                                </Link>
                                <Link
                                  href='/resources/service-providers'
                                  className='block w-full hover:bg-indigo-500 py-2 px-2 rounded group transition-all ease-in-out duration-75'
                                  onClick={close}
                                >
                                  <span className='group-hover:text-gray-100 block text-center'>
                                    Service Providers
                                  </span>
                                </Link>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
     );
}
 
export default Resources;
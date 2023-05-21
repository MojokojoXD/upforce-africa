import { FC } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { industries } from "../../../utils/vars"

interface MobileDropDownProps {
    label: string;
}

const IndustriesJSX:FC<{}> = () => {
    return (
        <>
            {
                industries.map(i => (
                    <div key={i.category}>
                        <div className="h-10 flex justify-end">
                            <span className="text-xs block uppercase w-3/4">{i.category}</span>
                        </div>
                        <div className="flex justify-end">
                            <ul className="text-slate-500 text-xs capitalize w-3/4 space-y-2 font-light">
                                {i.links.map((l) => (<li key={l.name}>{l.name}</li>))}
                            </ul>
                        </div>
                        
                    </div>
                ))
            }
        </>
    )
}
 

const dropdownData = {
    industries: <IndustriesJSX/>,
    'about us': <div>about us</div>
}

const MobileDropDown: FC<MobileDropDownProps> = ({label}) => {
    return ( 
        <Disclosure as={'div'}>
            {
                ({open,close}) => (

                    <>
                        <div className="flex justify-center flex-col mx-4 py-3">
                            <Disclosure.Button className={'btn btn-ghost btn-sm text-xs tracking-wider font-semibold antialiased hover:text-gray-500 hover:bg-transparent px-0 flex'}>
                                {label}
                                <ChevronDownIcon className="w-3 ml-1"/>
                            </Disclosure.Button>
                        </div>
                        <div className="bg-gray-50 rounded-lg shadow-inner">
                            <Disclosure.Panel>
                                <div className="grid grid-cols-2 p-4 gap-x-1 gap-y-5">
                                    {dropdownData[label]}
                                </div>
                            </Disclosure.Panel>
                        </div>
                    </>
                )
            }
        </Disclosure>
     );
}
 
export default MobileDropDown;
export default function Spinner(){
    return (
        <div className="relative h-screen w-full flex justify-center items-center col-span-full">
            <div className="absolute w-36 h-36 border-2 rounded-full border-t-purple-500 animate-spin "></div>
        </div>
    )
}
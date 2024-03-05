export default function Divider({children}) {
    return(
        <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-black"></div>
            <span className="flex-shrink mx-4 text-black">{children}</span>
            <div className="flex-grow border-t border-black"></div>
        </div>
    );
}
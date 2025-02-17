import Image from 'next/image';
import clsx from 'clsx';

export const Header = ({ pageName, title, headerText, imagePath, className } : 
    { 
        pageName: string,
        title: string, 
        headerText: string,
        imagePath?: string, 
        className?: string 
    }) => {
    return(
        <div className={
            clsx("mt-24 px-8 text-background bg-fontcolor flex flex-col space-y-4 justify-center items-center w-full h-80 lg:px-24 lg:flex-row lg:justify-between lg:space-y-0", 
            className)}>
            <div className="w-full h-full flex flex-col justify-center lg:w-1/3 lg:flex-1">
                <div className="relative">
                    <span className="absolute top-[-15px] left-0 font-raleway font-thin">{pageName}</span>
                    <h3 className="text-6xl">{title}</h3>
                </div>
                <p className="font-raleway text-sm mt-4">
                {headerText}
                </p>
            </div>
            <div className="hidden flex-0 lg:flex w-full lg:w-1/2 justify-end">
                {
                    imagePath && <Image src={imagePath} width={180} height={180} className="object-cover" alt="Event Picture" />
                }
            </div>
        </div>
    );
};
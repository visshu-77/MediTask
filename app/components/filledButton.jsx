import Link from 'next/link';

export default function fillButton({ name, link = "/" }) {
    return (
        <div className='flex flex-col justify-center item-center'>
            <Link href={link} className="bg-white text-primary p-2 rounded-xl text-sm font-semibold">
                {name}
            </Link>
        </div>
    );
}
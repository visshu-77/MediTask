import Link from 'next/link';

export default function TransparentButton({ name, link='/'}){
    return(
        <div className='flex flex-col justify-center item-center'>
            <Link href={link} className='border rounded-xl p-2 text-sm font-semibold'>
            {name}
            </Link>
        </div>
    )
}
import Image from 'next/image';
import p1 from './photos/p1.avif';
import p2 from './photos/p2.avif';
import p3 from './photos/p3.avif';
import p4 from './photos/p4.avif';
import p5 from './photos/p5.avif';
import p6 from './photos/p6.avif';
import Link from 'next/link';

export const images = [
    {
        id: 'p1',
        name: 'Tusker of Kabini',
        src: p1,
        location: 'Kabini, Karnataka'
    },
    {
        id: 'p2',
        name: 'Gateway of India',
        src: p2,
        location: 'Mumbai, Maharastra'
    },
    {
        id: 'p3',
        name: 'The Great Himalayas',
        src: p3,
        location: 'Himachal, India'
    },
    {
        id: 'p4',
        name: 'Eastern Himalayas',
        src: p4,
        location: 'Arunachal, India'
    },
    {
        id: 'p5',
        name: 'The Thar Desert',
        src: p5,
        location: 'Rajasthan, India'
    },
    {
        id: 'p6',
        name: 'Taj Mahal',
        src: p6,
        location: 'Agra, India'
    }
];

export default function PhotoFeed() {
    return (
        <div className='flex flex-wrap h-full gap-16'>
            {
                images.map(({ id, location, name, src }) => (
                    <Link key={id} href={`/photo-feed/${id}`}>
                        <div className='flex flex-col gap-4 text-center bg-white'>
                            <Image style={{ height: '350px', width: '400px' }} src={src} alt="No image found" />
                            <h3 className='font-bold'>{name}</h3>
                            <h4 className='font-semibold'>{location}</h4>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}
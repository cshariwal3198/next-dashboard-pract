import Link from "next/link";

export default function ProductList() {

    const productsList = [
        {
            name: 'Product 1',
            href: '/products/1'
        },
        {
            name: 'Product 2',
            href: '/products/2'
        },
        {
            name: 'Product 3',
            href: '/products/3'
        }
    ];

    return (
        <div>
            <h1>Product list</h1>
            <div className="flex flex-col">
                {
                    productsList.map(({ href, name }) => <Link key={href} href={href}>{name}</Link>)
                }
            </div>
            <Link href='/dashboard'>Default</Link>  
        </div>
    );
}
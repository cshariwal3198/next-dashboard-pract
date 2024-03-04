import Link from "next/link";

const Page = () => {
    return (
        <>
            <h1>welcome</h1>
            <Link href='/products'>Products</Link>
            <Link href='/dashboard'>Dashboard</Link>
        </>
    )
}

export default Page;
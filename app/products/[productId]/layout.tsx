export default function ProductLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <div>Product details header</div>
            {children}
        </>
    )
}

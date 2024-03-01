export default function ProductLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div>Product details header</div>
            {children}
        </>
    )
}

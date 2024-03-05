export default function PhotoLayout({ children, modal }: {
    modal: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <>
            {modal}
            {children}
        </>
    );
}
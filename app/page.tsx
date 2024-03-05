import StyledLink from "@/components/styled-link";

const Page = () => {
    return (
        <>
            <h1>welcome</h1>
            <div className="flex flex-col gap-2">
                <StyledLink href='/products'>Products</StyledLink>
                <StyledLink href='/dashboard'>Dashboard</StyledLink>
            </div>
        </>
    )
}

export default Page;
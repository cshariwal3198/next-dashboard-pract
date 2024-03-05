import StyledLink from "@/components/styled-link";

const Page = () => {
    return (
        <>
            <h1> Home component </h1>
            <div className="flex flex-col gap-2 justify-center items-center">
                <StyledLink href='/products'>Products</StyledLink>
                <StyledLink href='/dashboard'>Dashboard</StyledLink>
                <StyledLink href='/photo-feed'>Photo Feed</StyledLink>
            </div>
        </>
    )
}

export default Page;
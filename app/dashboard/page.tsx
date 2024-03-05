import StyledLink from "@/components/styled-link";

export default async function DashBoardUI() {
    return (
        <div className=" flex flex-col gap-2">
            <h5>Dash board page content</h5>
            <StyledLink href='/'>Home</StyledLink>
        </div>
    )
}
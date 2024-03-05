import StyledLink from "@/components/styled-link";

export default async function Notification() {
    return (
        <div className="flex flex-col">
            Notification screen UI
            <StyledLink href='/dashboard/archieved'>Archieved notifications</StyledLink>
        </div>
    )
}
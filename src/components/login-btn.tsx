import { Button } from "@nextui-org/react"
import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginButtonComponent() {
    const { data: session, status } = useSession()
    console.log(status);

    if (session) {
        return (
            <div className="flex items-center gap-2">
                <h1>{session.user?.name}</h1>

            </div>

        )
    }
    return (
        <div>
            <Button onClick={() => signIn()}>Masuk</Button>
        </div>
    )
}
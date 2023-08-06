import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, Divider } from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function ProfileDropdown() {
    const { data: session, } = useSession()
    return (
        <Dropdown>
            <DropdownTrigger>
                <Avatar size="sm" color="primary" />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                {session?.user ?
                    <DropdownItem isDisabled variant="light" isReadOnly>
                        <h1 className="font-black text-center">
                            {session.user.name}
                        </h1>
                    </DropdownItem>
                    : <DropdownItem isDisabled variant="light" isReadOnly>
                        <h1 className="font-black text-center">
                            -
                        </h1>
                    </DropdownItem>}
                <DropdownItem variant="light" isReadOnly isDisabled><Divider /></DropdownItem>
                {session?.user ?
                    <DropdownItem key="copy">Dashboard</DropdownItem>
                    : <DropdownItem isDisabled isReadOnly variant="light" />}



                {session?.user ?
                    <DropdownItem
                        className="text-center"
                        color="danger"
                        onPress={() =>
                            signOut({ redirect: true, callbackUrl: '/auth/login' })}
                    >
                        Keluar
                    </DropdownItem> :
                    <DropdownItem
                        className="text-center"
                        color="primary"
                        onPress={() => signIn()}>
                        Masuk
                    </DropdownItem>}
            </DropdownMenu>
        </Dropdown >
    );
}

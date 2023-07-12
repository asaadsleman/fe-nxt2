"use client"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

function DropDownCatKey() {

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="shadow"
                >
                    Open Menu
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions">
                <DropdownItem key={1}>
                    key 1
                </DropdownItem>
                <DropdownItem key={2}>
                    key 2
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}


export default DropDownCatKey;
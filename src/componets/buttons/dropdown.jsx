import { Dropdown, DropdownItem } from "flowbite-react";

export function DropdownButton() {
  return (
    <Dropdown label="Dropdown button" dismissOnClick={false}>
      <DropdownItem> 
            Dashboard
      </DropdownItem>
      
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
  );
}
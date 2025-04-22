import { createTheme, Dropdown, DropdownItem, ThemeProvider } from "flowbite-react";

export function DropdownButton() {
  const customTheme = createTheme({
    button:{
      color:{
        primary: "bg-red-700 hover:bg-red-600 w-sm",
        secondary: "bg-blue-500 hover:bg-blue-600",
      },
      size:{
        smal: "w-sm"
      },
      position:{
        start : "left-0"
      }
    },
  })
  return (
    <ThemeProvider theme={customTheme}>
      <Dropdown  dismissOnClick={false} color="primary"  size="small">
        <DropdownItem> 
          <a href="#minhabunda">
              Dashboard
          </a>
        </DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownItem>Sign out</DropdownItem>
      </Dropdown>
    </ThemeProvider>
  );
}
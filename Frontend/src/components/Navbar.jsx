
import { Navbar } from "flowbite-react";

export default function Component() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img src="/Logotipo_BlancoNegro.svg" className="mr-3 h-10 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Sheet From Form</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      {/* <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link  href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse> */}
    </Navbar>
  );
}

import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

export default function NavbarComponent() {
    return (
        <div className='pt-2 pb-2 pl-4 pr-4'>
            <Navbar fluid rounded>
            <NavbarBrand as={Link} href='/'>
                <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>SDP SOLUTIONS</span>
            </NavbarBrand>
            {/* <NavbarToggle/>
            <NavbarCollapse>
                <NavbarLink href='#'>Home</NavbarLink>
                <NavbarLink href='#'>About</NavbarLink>
            </NavbarCollapse> */}
            </Navbar>
        </div>
    );
}
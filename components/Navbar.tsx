import Image from "next/image";
import Link from "next/link";

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <Link href={href} className="hover:text-primary-500 transition-colors">
      {children}
    </Link>
  </li>
);

const Navbar = () => {
  const mainLinks = [
    { href: "/benefits", label: "Benefits" },
    { href: "/security", label: "Security" },
    { href: "/features", label: "Features" },
    { href: "/about", label: "About" }
  ];
  
  const secondaryLinks = [
    { href: "/signin", label: "Signin" },
    { href: "/contact", label: "Contact" }
  ];
  
  return (
    <div className="border-b border-text-300 px-20">
      <nav className="flex justify-between py-4">
        <div className="flex gap-2 items-center">
          <Image 
            src="/images/logo.png" 
            alt="Paytron logo" 
            width={34} 
            height={34} 
            className="self-center"
          />
          <p className="font-semibold text-lg text-primary-500">Paytron</p>
        </div>
        
        <ul className="flex gap-5 self-center">
          {mainLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </ul>
        
        <ul className="flex gap-5 self-center">
          {secondaryLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
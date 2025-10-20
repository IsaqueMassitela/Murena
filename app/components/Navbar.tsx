"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre" },
    { href: "/Vivendas", label: "Vivendas" },
    { href: "/Contacto", label: "Contato" },
  ];

  return (
    <nav className="flex justify-between items-center p-4 bg-green-700 text-white">
      <h1 className="text-2xl font-bold">MURENA</h1>
      <div className="flex gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:underline ${
              pathname === link.href ? "font-semibold" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

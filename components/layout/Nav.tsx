// © 2025 JoeWork.co
"use client";

import { ThemeToggle } from "@/components/ThemeToggle"; // Assuming this exists from starter
import { siteConfig } from "@/config/site"; // For brand name
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link"; // Using next/link for client-side navigation
import { usePathname } from "next/navigation"; // To highlight active links
import { useState } from "react";

const Nav = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);

  // Adjust hrefs if using next-intl Link for automatic locale prefixing
  // For now, assuming paths are handled by middleware or Link component correctly
  const navLinks = [
    { href: "/", label: "Home" },
    {
      label: "Use Cases",
      dropdown: [
        { href: "/use-cases/sunat", label: "SUNAT (Tax Filing)" },
        { href: "/use-cases/ecommerce", label: "Ecommerce Automation" },
        { href: "/use-cases/hr", label: "HR Processes" },
        { href: "/use-cases/contact-forms", label: "Contact Form Processing" },
        { href: "/use-cases", label: "View All Use Cases" },
      ],
    },
    { href: "/agency", label: "Agency" },
    { href: "/docs", label: "Docs" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between mx-auto px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* Placeholder for a logo if you have one */}
          {/* <Image src="/joework-logo.svg" alt="JoeWork.co Logo" width={32} height={32} /> */}
          <span className="font-bold sm:inline-block">{siteConfig.name}</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative">
                <button
                  onClick={() => setIsUseCasesOpen(!isUseCasesOpen)}
                  className={`flex items-center transition-colors hover:text-foreground/80 ${isActive("/use-cases") ? "text-foreground" : "text-foreground/60"}`}
                >
                  {link.label}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${isUseCasesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isUseCasesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 rounded-md bg-popover p-2 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block w-full px-3 py-2 text-sm rounded-md transition-colors hover:bg-accent hover:text-accent-foreground ${isActive(item.href) ? "bg-accent text-accent-foreground" : ""}`}
                        onClick={() => {
                          setIsUseCasesOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-foreground/80 ${isActive(link.href) ? "text-foreground" : "text-foreground/60"}`}
                onClick={() => {
                  setIsUseCasesOpen(false);
                  setIsMobileMenuOpen(false);
                }}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background shadow-lg animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col space-y-1 p-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setIsUseCasesOpen(!isUseCasesOpen)}
                    className="flex justify-between items-center w-full py-2 font-medium text-foreground/80 hover:text-foreground"
                  >
                    {link.label}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform ${isUseCasesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isUseCasesOpen && (
                    <div className="pl-4">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block py-2 text-sm text-foreground/70 hover:text-foreground ${isActive(item.href) ? "text-foreground font-semibold" : ""}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2 text-foreground/80 hover:text-foreground ${isActive(link.href) ? "text-foreground font-semibold" : ""}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;

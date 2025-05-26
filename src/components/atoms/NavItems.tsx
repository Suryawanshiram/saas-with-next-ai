"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
  { label: "Subscription", href: "/subscription" },
];

const NavItems = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-5">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={cn(
            pathname === item.href &&
              "text-primary font-semibold hover:bg-blue-300 px-3 py-1 rounded-md"
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;

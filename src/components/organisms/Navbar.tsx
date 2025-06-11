// src/components/organisms/Navbar.tsx
import Image from "next/image";
import Link from "next/link";
import NavItems from "../atoms/NavItems";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="navbar flex p-6 gap-5 items-center justify-between max-w-7xl w-full">
      <Link href="/" className="bg-gray-500">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={46}
          height={44}
          unoptimized // ⬅️ required for SVGs in next/image
        />
      </Link>
      <div className="flex items-center gap-5">
        <NavItems />
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign in</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;

import {
  LoggedInAuthButton,
  NotLoggedInAuthButton,
} from "@/components/auth/auth-buttons";
import { cn } from "@/lib/utils";
import { useOidc } from "@/oidc";
import { Link, NavLink } from "react-router";
import authItIcon from "../../assets/authit-icon-black.svg";

const navigation = [
  { name: "Public", href: "/" },
  { name: "Protected", href: "/protected" },
];

export function Header() {
  const { isUserLoggedIn } = useOidc();
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="https://auth.it" className="-m-1.5 p-1.5">
            <span className="sr-only">Auth.it</span>
            <img alt="" src={authItIcon} className="h-8 w-auto" />
          </Link>
        </div>

        <div className="flex gap-x-4 lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn("text-sm/6 font-semibold text-gray-800", {
                  "font-extrabold": isActive,
                })
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          {isUserLoggedIn ? <LoggedInAuthButton /> : <NotLoggedInAuthButton />}
        </div>
      </nav>
    </header>
  );
}

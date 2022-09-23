// import Counter from "../components/counter";
import Link from "next/link";
import { useRouter } from "next/router";
import Counter from "./counter";
import "./NavBar";
import { cls } from "../libs/utils";

export default function NavBar() {
  const router = useRouter();
  // console.log(router.pathname);

  return (
    <>
      <nav>
        <ul className="flex bg-slate-400 justify-around">
          <li>
            <Link href="/">
              <a
                className={cls(router.pathname === "/" ? "bg-yellow-200" : " ")}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/counter">
              <a
                className={cls(
                  router.pathname === "/counter" ? "bg-yellow-200" : " "
                )}
              >
                Counter
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className={cls(
                  router.pathname === "/about" ? "bg-yellow-200" : " "
                )}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/users">
              <a
                className={cls(
                  router.pathname === "/users" ? "bg-yellow-200" : " "
                )}
              >
                Users
              </a>
            </Link>
          </li>
          <li>
            <Link href="/users/ssr">
              <a
                className={cls(
                  router.pathname === "/users/ssr" ? "bg-yellow-200" : " "
                )}
              >
                Users(SSR)
              </a>
            </Link>
          </li>
          <li>
            <Link href="/todo">
              <a
                className={cls(
                  router.pathname === "/todo" ? "bg-yellow-200" : " "
                )}
              >
                To Do
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

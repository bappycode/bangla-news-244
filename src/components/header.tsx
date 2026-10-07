import Image from "next/image";
import NavLinks from "./navlinks";
import Link from "next/link";
import UserInfo from "./userInfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="relative mx-auto w-full max-w-7xl px-4 py-5 sm:px-8">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-md bg-[#111827] shadow-sm">
              <Image
                className="h-10 w-10 object-contain"
                height={40}
                width={40}
                src="/logo.webp"
                alt="Bangla News 24"
                priority
              />
            </div>

            <span className="text-2xl font-bold leading-none text-red-700 sm:text-3xl">
              Bangla News 24
            </span>
          </div>

          <span className="mt-2 block text-base text-neutral-500 sm:text-lg">
            {date}
          </span>
        </div>
      </div>


      <UserInfo/>
      <NavLinks />
    </header>
  );
};

export default Header;
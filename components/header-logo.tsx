import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="hidden items-center lg:flex">
        <Image src="/brand.png" alt="Finance logo" height={100} width={90} />

        <p className="ml-2.5 text-2xl font-semibold text-white">Personal Finance</p>
      </div>
    </Link>
  );
};

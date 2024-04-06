import BestSeller from "@/components/marketing/best-seller";
import BestSellingCollection from "@/components/marketing/best-selling-collection";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import UserAuthLogin from "@/components/auth/user-auth-login";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center">

      <div className="flex justify-end items-center my-5">
        <Link
          href="/signup"
          className={cn(buttonVariants({variant: "ghost"}), "flex items-center")}
        > Sign Up
          <Icons.chevronRight className="ml-2 h-4 w-4"/>
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Icons.logo/>
        <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight">
          Sign in to your account
        </h2>
      </div>

      <UserAuthLogin/>
    </div>
  );
}

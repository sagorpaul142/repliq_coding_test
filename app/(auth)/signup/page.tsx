import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import React from "react";
import { UserAuthSignup } from "@/components/auth/user-auth-signup";

export const metadata = {
  title: "Create an account",
  description: "Create an account to get started.",
}

export default function RegisterPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center">

      <div className="flex justify-end items-center my-5">
        <Link
          href="/"
          className={cn(
            buttonVariants({variant: "ghost"}), "flex items-center")}
        > Login
          <Icons.chevronRight className="ml-2 h-4 w-4"/>
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Icons.logo/>
        <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight">
          Sign in to your account
        </h2>
      </div>

      <UserAuthSignup/>

    </div>
  )
}
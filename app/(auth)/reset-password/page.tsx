import React from 'react';
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import UserAuthResetPassword from "@/components/auth/user-auth-reset-password";

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center">

      <div className="flex justify-between items-center my-5">
        <Link
          href="/"
          className={cn(
            buttonVariants({variant: "ghost"}), "flex items-center")}
        >
          <>
            <Icons.chevronLeft className="mr-2 h-4 w-4"/>
            Login
          </>
        </Link>
        <Link
          href="/signup"
          className={cn(
            buttonVariants({variant: "ghost"}), "flex items-center")}
        > Sign Up
          <Icons.chevronRight className="ml-2 h-4 w-4"/>
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Icons.logo/>
      </div>

      <UserAuthResetPassword/>

    </div>
  );
};
"use client"
import React from 'react';
import { Input } from '../ui/input';
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import * as z from "zod";
import { userAuthLoginSchema } from "@/lib/validations/auth";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface UserAuthLoginProps extends React.HTMLAttributes<HTMLDivElement> {
}

type FormData = z.infer<typeof userAuthLoginSchema>;
const UserAuthLogin = ({className, ...props}: UserAuthLoginProps) => {
  const router = useRouter();
  const {
    handleSubmit,
  } = useForm<FormData>({
  });
  const onSubmit = (data: FormData) => {
    router.push("/home")
  }
  return (
    <div
      className={cn(
        "mt-6 sm:mx-auto sm:w-full sm:max-w-[480px] xl:max-w-[580px]",
        className
      )}
      {...props}
    >
      <div className="px-6 py-12 shadow-xl mx-2 md:mx-0 sm:rounded-lg sm:px-12 border">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3"
        >
          <div>
            <Label htmlFor="phone"
                   className="block text-sm font-semibold leading-6">
              Phone number
            </Label>
            <div className="mt-2">
              <Input
                variant="ny"
                type="tel"
                placeholder="Phone number"
                id="phone"
                autoComplete="tel"
              />
            </div>
          </div>

          <div>
            <Label
              htmlFor="password"
              className="block text-sm font-medium leading-6"
            >
              Password
            </Label>
            <div className="mt-2">
              <Input
                id="password"
                variant="ny"
                placeholder="Password"
                type="password"
                autoCapitalize="none"
                autoComplete="password"
                autoCorrect="off"
              />
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="text-sm leading-6">
              <Link href="/reset-password" className="font-semibold hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>

          <div>
            <button
              className={cn(
                buttonVariants(),
                "flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
              )}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
      <p className="my-5 text-center text-sm text-muted-foreground">
        <Link
          href="/signup"
          className="font-semibold leading-6 hover:text-brand underline underline-offset-4"
        >
          Don&apos;t have an account? Sign Up
        </Link>
      </p>
    </div>
  );
};

export default UserAuthLogin;
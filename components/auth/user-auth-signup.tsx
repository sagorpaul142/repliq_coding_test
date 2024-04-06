"use client";
import * as React from "react";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { userAuthSignupSchema } from "@/lib/validations/auth";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

interface UserAuthSignupProps extends React.HTMLAttributes<HTMLDivElement> {
}

type FormData = z.infer<typeof userAuthSignupSchema>;

export function UserAuthSignup({className, ...props}: UserAuthSignupProps) {
  const router = useRouter();

  const {
    handleSubmit,
  } = useForm<FormData>({});

  async function onSubmit(data: FormData) {
    router.push("/")
  }

  return (
    <div
      className={cn(
        "mt-6 sm:mx-auto sm:w-full sm:max-w-[480px] xl:max-w-[580px]",
        className
      )}
      {...props}
    >
      <div className=" px-6 py-12 shadow-xl mx-2 md:mx-0 sm:rounded-lg sm:px-12 border">
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="space-y-3"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <Label
                htmlFor="first_name"
                className="block text-sm font-medium leading-6"
              >
                First Name
              </Label>
              <div className="mt-2">
                <Input
                  id="first_name"
                  variant="ny"
                  placeholder="First Name"
                  type="text"
                  autoCapitalize="none"
                  autoComplete="given-name"
                  autoCorrect="off"
                />
              </div>
            </div>

            <div>
              <Label
                htmlFor="last_name"
                className="block text-sm font-medium leading-6"
              >
                Last Name
              </Label>
              <div className="mt-2">
                <Input
                  id="last_name"
                  variant="ny"
                  placeholder="Last Name"
                  type="text"
                  autoCapitalize="none"
                  autoComplete="family-name"
                  autoCorrect="off"
                />
              </div>
            </div>
          </div>

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

          <div>
            <button
              className={cn(
                buttonVariants(),
                "flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
              )}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <p className="mt-5 mb-2 text-center text-sm text-muted-foreground">
        <Link
          href="/"
          className="font-semibold leading-6 hover:text-brand underline underline-offset-4"
        >
          Already have an account? Login
        </Link>
      </p>
    </div>
  );
}
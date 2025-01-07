import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Logo from "@/icons/Logo";
import { Field, useForm } from "react-hook-form";
import { useState } from "react";
import PasswordHiddenPlaceHolder from "@/icons/PasswordHiddenPlaceHolder";
import PasswordShownPlaceHolder from "@/icons/PasswordShownPlaceholder";
import SocialLoginGroup from "./SocialLoginGroup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
type Props = {
  className?: string;
};

type LoginFormValues = {
  emailOrUsername: string;
  password: string;
};
const LoginCard = ({ className }: Props) => {
  const [showIcon, setShowIcon] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(
      z.object({
        emailOrUsername: z.string().trim(),
        password: z.string().min(8).trim(),
      })
    ),
  });
  const mutation = useMutation({
    mutationFn: (values: LoginFormValues) => {
      return axios.post("/login", values);
    },
  });

  const onSubmit = async (values: any) => {
    await mutation.mutateAsync(values);
    form.reset();
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className={className}>
            <CardHeader>
              <div className="flex justify-center flex-col items-center">
                <Logo />
                <CardTitle className="text-white text-3xl">
                  Log in to Spotify
                </CardTitle>
              </div>
            </CardHeader>
            <CardDescription className="flex items-center flex-col gap-4 mt-4 mb-8">
              <SocialLoginGroup />
            </CardDescription>

            <CardContent>
              <div className="mt-8 bg-custom w-[686px] h-px"></div>
              <div className=" mt-4 flex flex-col items-center gap-4">
                <FormField
                  control={form.control}
                  name="emailOrUsername"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-secondary ml-2">
                        Email or username
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Email or username"
                          className="w-[324px]"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-secondary ml-2">
                        Password
                      </FormLabel>
                      <FormControl>
                        <div className="flex">
                          <Input
                            placeholder="Password"
                            onClick={(e: React.MouseEvent) => {
                              e.preventDefault();
                              setShowIcon(!showIcon);
                            }}
                            type={showPassword ? "text" : "password"}
                            className="w-[324px]"
                            {...field}
                          />
                          {showIcon ? (
                            <div className="flex -ml-8 mt z-50">
                              <PasswordHiddenPlaceHolder
                                handleClick={(e: React.MouseEvent) => {
                                  e.preventDefault();
                                  setShowPassword(false);
                                  const inputElement =
                                    e.target as HTMLInputElement;
                                  inputElement.focus();
                                }}
                              />
                            </div>
                          ) : (
                            <div className="flex -ml-8 mt z-50">
                              <PasswordShownPlaceHolder
                                handleClick={(e: React.MouseEvent) => {
                                  e.preventDefault();
                                  setShowPassword(true);
                                  const inputElement =
                                    e.target as HTMLInputElement;
                                  inputElement.focus();
                                }}
                              />
                            </div>
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter className="flex items-center flex-col gap-4">
              <Button
                variant="default"
                className="w-[324px]"
                type="submit"
                disabled={!form.formState.isValid}
              >
                Log In
              </Button>
              <span className="text-secondary underline">
                <a className="hover:text-tertiary"> Forgot your password? </a>
              </span>
              <div className="flex items-center gap-2 ">
                <span className="text-secondary ">Don't have an account?</span>
                <span className="text-secondary underline">
                  <a className="hover:text-tertiary">Sign up for Spotify.</a>
                </span>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </>
  );
};
LoginCard.displayName = "LoginCard";
export default LoginCard;

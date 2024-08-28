"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { login } from "@/actions/login";
import { loginSchema } from "@/schemas";
import AlertDestructive from "./alert";
import AlertSuccess from "./sucess";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface Props {
  role: string;
}
export function ProfileForm({ role }: Props) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      id: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log("form login role:", role);
    login(values, role);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        method="POST"
      >
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ID {role}</FormLabel>
              <FormControl>
                <input
                  type="text"
                  placeholder="ID"
                  {...field}
                  className="input input-bordered w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <input
                  type="password"
                  placeholder="Password"
                  {...field}
                  className="input input-bordered w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <AlertDestructive>Invalid Credentials</AlertDestructive>
        <AlertSuccess>Email sent!</AlertSuccess>
        <button type="submit" className={"btn border-hidden bg-HMIF-200"}>
          Submit
        </button>
      </form>
    </Form>
  );
}

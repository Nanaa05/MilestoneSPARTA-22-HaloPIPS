"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { register } from "@/actions/register";
import { createSchema } from "@/schemas";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof createSchema>>({
    resolver: zodResolver(createSchema),
    defaultValues: {
      username: "",
      password: "",
      name: "",
      angkatan: 0,
      kampus: "",
      jurusan: "",
      rate: 0,
      idline: "",
      jabatan: "",
      role: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof createSchema>) {
    register(values);
  }

  const [role, setRole] = useState("HMIF");

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        method="POST"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <input
                  type="text"
                  placeholder="Username"
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
                  placeholder="******"
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <input
                  type="text"
                  placeholder="Name"
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
          name="angkatan"
          render={({ field }) => (
            <FormItem>
              <FormLabel>angkatan</FormLabel>
              <FormControl>
                <input
                  type="text"
                  placeholder="angkatan"
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
          name="kampus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kampus</FormLabel>
              <FormControl>
                <input
                  type="text"
                  placeholder="Kampus"
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
          name="jurusan"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Jurusan</FormLabel>
              <FormControl>
                <input
                  type="text"
                  placeholder="Jurusan"
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
          name="rate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rate</FormLabel>
              <FormControl>
                <input
                  type="text"
                  placeholder="Rate"
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
          name="idline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>idline</FormLabel>
              <FormControl>
                <input
                  type="text"
                  placeholder="idline"
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
          name="jabatan"
          render={({ field }) => (
            <FormItem>
              <FormLabel>jabatan</FormLabel>
              <FormControl>
                <input
                  type="text"
                  placeholder="jabatan"
                  {...field}
                  className="input input-bordered w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <label className="label cursor-pointer">
          <span className="label-text">TPB/HMIF?</span>
          <input
            type="checkbox"
            className="toggle"
            defaultChecked
            onChange={() => {
              if (role === "HMIF") {
                setRole("TPB");
              } else {
                setRole("HMIF");
              }
            }}
          />
        </label> */}
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>role</FormLabel>
              <FormControl>
                <input
                  type="text"
                  placeholder="role"
                  {...field}
                  className="input input-bordered w-full"
                  // value={role}
                  // style={{ display: "none" }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          onClick={() => console.log("clicked")}
          type="submit"
          className={"btn border-hidden bg-HMIF-200"}
        >
          Submit
        </button>
      </form>
    </Form>
  );
}

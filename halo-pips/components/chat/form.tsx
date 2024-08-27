"use client";
import { IoSend } from "react-icons/io5";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { chatSchema } from "@/schemas";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { send } from "@/actions/sendMessage";

interface Props {
  chatID: string;
  userID: string;
}
export function ChatForm({ chatID, userID }: Props) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof chatSchema>>({
    resolver: zodResolver(chatSchema),
    defaultValues: {
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof chatSchema>) {
    send(values, { chatID, userID });
    form.reset();
  }
  useEffect(() => {
    const listener = (event: React.KeyboardEvent) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
        // callMyFunction();
      }
    };
  }, []);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        method="POST"
      >
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center">
                  <Input
                    type="text"
                    className="flex-1 border-none bg-color-white"
                    placeholder="Type a message..."
                    {...field}
                  ></Input>
                  <Button type="submit" variant={"ghost"} className="ml-2">
                    {" "}
                    <IoSend className="h-full" />
                  </Button>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

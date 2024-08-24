"use client";
import React, { useState, useRef, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  chatID: string;
}

const Messages = ({ chatID }: Props) => {
  const [messages, setMessages] = useState("");
  useEffect(() => {
    axios
      .get(`/api/chat/messages?chatId=${chatID}`)
      .then((response) => {
        setMessages(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // Fetch data from the database every second
    const intervalId = setInterval(() => {
      axios
        .get(`/api/chat/messages?chatId=${chatID}`)
        .then((response) => {
          setMessages(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <ScrollArea className="h-96 w-auto rounded-md border mb-2 flex flex-col-reverse">
      {/* {messages} */}
      {messages &&
        JSON.parse(messages)
          .reverse()
          .map(
            (x: any) =>
              x && (
                <div key={x.time} className="bg-HMIF-100">
                  <Separator className="my-2" />
                  <div className="text-sm">{JSON.stringify(x)}</div>
                </div>
              )
          )}
    </ScrollArea>
  );
};

export default Messages;

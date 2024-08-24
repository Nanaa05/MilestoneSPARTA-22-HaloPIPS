"use client";
import React, { useState, useRef, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  chatID: string;
}

const Messages = ({ chatID }: Props) => {
  const messageEndRef = useRef(null);
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
    }, 600);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // auto scroll
  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [messages]);
  return (
    <ScrollArea className="h-96 w-auto rounded-md border mb-2 flex flex-col-reverse">
      {/* {messages} */}
      {messages &&
        JSON.parse(messages).map(
          (x: any) =>
            x && (
              <div key={x.time}>
                <Separator className="my-2" />
                <div className="text-sm">{JSON.stringify(x)}</div>
              </div>
            )
        )}
      <div ref={messageEndRef} />
    </ScrollArea>
  );
};

export default Messages;

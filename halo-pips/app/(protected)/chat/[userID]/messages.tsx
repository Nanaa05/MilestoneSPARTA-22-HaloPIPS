"use client";
import React, { useState, useRef, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import axios from "axios";

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
    <div className="flex-1 flex flex-col-reverse overflow-y-auto p-4 bg-HMIF-300 border-black">
      <div ref={messageEndRef} />
      {/* {messages} */}
      {messages &&
        JSON.parse(messages)
          .reverse()
          .map(
            (x: any) =>
              x && (
                <div key={x.time}>
                  <Separator className="my-2" />
                  <div className="text-sm">{JSON.stringify(x)}</div>
                </div>
              )
          )}
    </div>
  );
};

export default Messages;

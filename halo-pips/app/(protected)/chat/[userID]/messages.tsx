"use client";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { Card, CardContent } from "@/components/ui/card";
interface Props {
  chatID: string;
}

const Messages = ({ chatID }: Props) => {
  const session = useSession();
  const id = session.data?.user.id;
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
    <div className="flex-1 flex flex-col-reverse overflow-y-auto p-4 bg-HMIF-200 border-black">
      <div ref={messageEndRef} />
      {/* {messages} */}
      {messages &&
        JSON.parse(messages)
          .reverse()
          .map(
            (x: any) =>
              x && (
                <div key={x.time}>
                  {x.userID == id ? (
                    <div className="flex justify-end">
                      <div className="chat chat-end">
                        <div className="chat-bubble max-w-3/4 w-fit h-fit bg-HMIF-400 ">
                          <div className="w-fit max-w-full h-fit text-HMIF-600 text-end overflow-hidden pr-6">
                            {x.content}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex">
                      <div className="chat chat-start">
                        <div className="chat-bubble w-fit h-fit max-w-3/4 bg-HMIF-300 text-start text-HMIF-600">
                          {x.content}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
          )}
    </div>
  );
};

export default Messages;

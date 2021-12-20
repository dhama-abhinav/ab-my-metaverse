import React, { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

function Messages() {
  const { user } = useMoralis();
  const endOfMessages = useRef(null);
  const MINS_DUR = 15;
  const { data, loading, error } = useMoralisQuery("Messages", (query) =>
    query
      .ascending("createdAt")
      .greaterThan("createdAt",
       new Date(Date.now() - 1000 * 60 * MINS_DUR)
      ),
      [],
      {
          live:true
      }
  );
      console.log(data)
  return (
    <div className="">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>
      <div className='space-y-10 p-4' >{/* messages */}
      {
          data.map( message => (
              <Message key={message.id} message={message} />
          ))
      }
      </div>
      <div className="flex justify-center ">
        {/* send msg button */}
        <SendMessage endOfMessages={endOfMessages} />
      </div>
      <div ref={endOfMessages} className="text-center text-gray-500 ">
        <p>You're upto date {user.getUsername()}!!</p>
      </div>
    </div>
  );
}

export default Messages;

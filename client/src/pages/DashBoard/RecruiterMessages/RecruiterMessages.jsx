import React, { useState } from "react";
import { FaPaperPlane, FaPlus } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const contacts = [
  { id: 1, name: "Sophia Carter", msg: "Yes, I'm available next week.", time: "10:30 AM", unread: 2, online: true },
  { id: 2, name: "Ethan Bennett", msg: "Great, looking forward to it!", time: "Yesterday", unread: 1, online: false },
  { id: 3, name: "Olivia Hayes", msg: "Can you send over the latest designs?", time: "", unread: 0, online: false },
  { id: 4, name: "Liam Foster", msg: "Got it, thanks!", time: "", unread: 0, online: false },
  { id: 5, name: "Ava Morgan", msg: "Perfect, I'll review this today.", time: "", unread: 0, online: false },
];

export default function RecruiterMessages() {
  const [selected, setSelected] = useState(contacts[0]);
  const [messages, setMessages] = useState([
    { from: "Sophia", text: "Hi Alex, thanks for reaching out. I'm very interested in the Software Engineer position at your company. I've attached my resume for your review.", time: "10:25 AM" },
    { from: "Me", text: "Hi Sophia, I've reviewed your resume and I'm impressed with your experience. I'd like to schedule a call to discuss the role further. Are you available next week?", time: "10:28 AM" },
    { from: "Sophia", text: "Yes, I'm available next week. Please let me know what time works best for you.", time: "10:30 AM" }
  ]);
  const [newMsg, setNewMsg] = useState("");

  const sendMessage = () => {
    if (!newMsg.trim()) {
      toast.error("Message cannot be empty!");
      return;
    }
    const msgObj = { from: "Me", text: newMsg, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) };
    setMessages([...messages, msgObj]);
    setNewMsg("");
    toast.success("Message sent!");
  };

  return (
    <div className="flex h-screen bg-base-200">
      {/* Left Sidebar */}
      <div className="w-1/4 border-r border-gray-200 bg-white">
        <div className="p-4">
          <input
            type="text"
            placeholder="Search chats"
            className="input input-bordered w-full"
          />
        </div>
        <ul className="menu p-2">
          {contacts.map((c) => (
            <li
              key={c.id}
              className={`p-2 rounded-lg cursor-pointer hover:bg-gray-100 flex justify-between items-center ${
                selected.id === c.id ? "bg-blue-100" : ""
              }`}
              onClick={() => setSelected(c)}
            >
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-offset-2 ring-blue-400">
                    <img
                      src={`https://i.pravatar.cc/150?img=${c.id + 1}`}
                      alt={c.name}
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">{c.name}</h4>
                  <p className="text-sm text-gray-500 truncate w-40">{c.msg}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                {c.time && <span className="text-xs text-gray-400">{c.time}</span>}
                {c.unread > 0 && (
                  <span className="badge badge-primary badge-sm mt-1">
                    {c.unread}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={`https://i.pravatar.cc/150?img=${selected.id + 1}`} alt={selected.name} />
              </div>
            </div>
            <div>
              <h3 className="font-bold">{selected.name}</h3>
              <span className="text-sm text-gray-500">{selected.online ? "Online" : selected.msg}</span>
            </div>
          </div>
          <div className="flex space-x-4 text-gray-500">
            <FaPlus className="cursor-pointer hover:text-blue-500" />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((m, i) => (
            <div key={i} className={`chat ${m.from === "Me" ? "chat-end" : "chat-start"}`}>
              <div className="chat-bubble">{m.text}</div>
              <span className="text-xs text-gray-400">{m.time}</span>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t flex items-center space-x-3">
          <input
            type="text"
            value={newMsg}
            onChange={(e) => setNewMsg(e.target.value)}
            placeholder="Write a message..."
            className="input input-bordered w-full"
          />
          <button onClick={sendMessage} className="btn btn-primary">
            <FaPaperPlane />
          </button>
        </div>
      </div>

      {/* Toaster */}
      <Toaster position="bottom-right" />
    </div>
  );
}

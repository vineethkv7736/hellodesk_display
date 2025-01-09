"use client";
import { useState, useEffect } from "react";
import { rtdb } from "@/firebase";
import { onValue, ref } from "firebase/database";
import Header from "./header";

export default function Page() {
  const [message, setMessage] = useState("");
  const [currentToken, setCurrentToken] = useState(-1);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const starCountRef = ref(rtdb, "isRunning");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setIsRunning(data);
    });

    const tokenRef = ref(rtdb, "CurrentToken");
    onValue(tokenRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setCurrentToken(data);
    });

    const messageRef = ref(rtdb, "message");
    onValue(messageRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setMessage(data);
    });
  }, []);
  useEffect(() => {
    if (currentToken >= 0) {
      const utterance = new SpeechSynthesisUtterance(`Token number ${currentToken}`);
      speechSynthesis.speak(utterance); // Speak the token number
    }
  }, [currentToken]);

  useEffect(() => {
    if (isRunning) {
      const utterance = new SpeechSynthesisUtterance(`Token number ${currentToken}`);
      speechSynthesis.speak(utterance); // Speak the token number
    }
    else
    {
      const utterance = new SpeechSynthesisUtterance(`Its break Time.. ${message}`);
      speechSynthesis.speak(utterance); // Speak the token number
    }
  }, [isRunning]);
  return (
    <div>
      <Header />

      {isRunning ? (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
          <div className="text-center">
            <h1 className="text-10xl">Token No</h1>
            <h1 className="text-13xl font-bold">{currentToken}</h1>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
          <h1 className="text-13xl font-bold font-serif">
           Break
          </h1>
          <marquee className="text-3xl">{message}</marquee>
        </div>
      )}
    </div>
  );
}
import React from "react";

export const Commands = () => {
  const [ask, setAsk] = useState("");
  const [reply, setReply] = useState("");

  const sendData = async () => {
    speakFunction();
    try {
      const url = "http://localhost:1974";
      await axios
        .post(`${url}/api/post`, {
          ask,
        })
        .then((response) => setReply(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  const speakFunction = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.start();

    const speak = (sentence) => {
      const text_speak = new SpeechSynthesisUtterance(sentence);

      text_speak.rate = 1;
      text_speak.pitch = 1;

      window.speechSynthesis.speak(text_speak);
    };

    recognition.onresult = async (e) => {
      let current = e.resultIndex;
      let transcript = e.results[current][0].transcript;

      setAsk(`${transcript}`);
      speak(reply);
    };
  };
  return <></>;
};

import React from "react";
import logo from "../../../assets/logo-jarvis.gif";
import scss from "./Home.module.scss";

export const Home = () => {
  const speakFunction = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    const speak = (sentence) => {
      const text_speak = new SpeechSynthesisUtterance(sentence);

      text_speak.rate = 1;
      text_speak.pitch = 1;

      window.speechSynthesis.speak(text_speak);
    };

    recognition.start();
    recognition.onresult = async (e) => {
      let current = e.resultIndex;
      let transcript = e.results[current][0].transcript;

      if (transcript === "Открой Google") {
        window.open("https://www.google.com/");
        const finalText = "К вашим услугам сэр.";
        speak(finalText);
      } else if (transcript === "Давай посмотрим видео") {
        window.open("https://www.youtube.com");
        const finalText = "Приятного просмотра сэр.";
        speak(finalText);
      } else if (transcript === "Открой понравившиеся видео в YouTube") {
        window.open("https://www.youtube.com/playlist?list=LL");
        const finalText = "К вашим услугам сэр.";
        speak(finalText);
      } else if (transcript === "Открой наш сайт") {
        window.open("https://devx-kg.netlify.app/");
        const finalText = "К вашим услугам сэр.";
        speak(finalText);
      } else if (transcript === "Джарвис нужно перевести") {
        window.open("https://www.deepl.com/ru/translator");
        const finalText = "К вашим услугам сэр.";
        speak(finalText);
      } else if (transcript === "протокол чат помощник") {
        window.open("https://chat.openai.com/");
        const finalText = "протокол чат помощник активирован сэр.";
        speak(finalText);
      } else if (transcript === "Джарвис поставь Мстителей") {
        window.open("https://ww6.frkp.lol/film/843649/");
        const finalText = "Приятного просмотра сэр.";
        speak(finalText);
      } else if (transcript === "Открой моё резюме") {
        window.open(
          "https://www.canva.com/design/DAFgg-OFJPg/uYyhEZf-4lL1x3rTBxwB2A/edit?utm_content=DAFgg-OFJPg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        );
        const finalText = "К вашим услугам сэр.";
        speak(finalText);
      } else if (transcript === "протокол уютный вечер") {
        window.open("https://www.youtube.com/watch?v=hFoKgX3IHY4");
        const finalText = "Приятного отдыха сэр.";
        speak(finalText);
      } else if (transcript === "Джарвис Какая сегодня погода") {
        window.open(
          "https://www.google.com/search?q=%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0%20%D0%B2%20%D0%9A%D0%B0%D1%80%D0%B0%D0%BA%D0%BE%D0%BB"
        );
        const finalText = "Я нашел некоторую информацию по сегодняшней погоде сэр.";
        speak(finalText);
      } else if (transcript === "Джарвис") {
        const finalText = "Да, сэр, ДЖАРВИС вашим услугам.";
        speak(finalText);
      } else if (transcript === "Расскажи про себя") {
        const finalText =
          "Меня зовут Джарвис, и я ваш личный помощник. Моего разработчика зовут Шерболот Арбаев";
        speak(finalText);
      } else if (transcript === "Джарвис что ты можешь") {
        const finalText = "Выполнять ваши поручения сэр.";
        speak(finalText);
      } else if (transcript === "Привет Джарвис") {
        const timeGreetings = () => {
          let day = new Date();
          let hr = day.getHours();

          let currentTime = new Date().toLocaleTimeString();

          if (hr >= 0 && hr < 12) {
            speak(`Доброе утро сэр, с возвращением. Время ${currentTime}`);
          } else if (hr == 12) {
            speak(`Здравствуйте сэр, с возвращением. Время ${currentTime}`);
          } else if (hr > 12 && hr <= 17) {
            speak(`Добрый день сэр, с возвращением. Время ${currentTime}`);
          } else {
            speak(`Добрый вечер сэр, с возвращением. Время ${currentTime}`);
          }
        };
        timeGreetings();
      } else {
        window.open(`https://www.google.com/search?q=${transcript}`);
        const finalText = `Я нашел некоторую информацию по ${transcript} в Google`;
        speak(finalText);
      }
    };
  };

  return (
    <>
      <div className={scss.container}>
        <div className={scss.logo}>
          <img src={logo} alt="Logo-Jarvis" />
        </div>
        <button onClick={speakFunction} className={scss.button} type="submit">
          Start
        </button>
      </div>
    </>
  );
};

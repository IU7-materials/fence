import React, { useState } from "react";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";
import Mail from "./Mail";
import "./App.css";

const questions = [
  {
    title: "Вопрос №1",
    description: "Описание вопроса №1",
  },
  {
    title: "Вопрос №2",
    description: "Описание вопроса №2",
  },
  {
    title: "Вопрос №3",
    description: "Описание вопроса №3",
  },
];

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];

  const pages = [
    {
      id: 1,
      content: (
        <div className="page1">
          <div className="modal">
            <div className="modal-content">
              <div className="modal-image">
                <img src="https://hgwipn3sa-res.cloudinary.com/image/upload/w_auto,f_auto,q_auto,g_auto,c_fill,h_650,dpr_2/wkb2zkbhb4filwpsjzv1.jpg" />
              </div>
              <div className="modal-text">
                <header className="header">
                  <img
                    className="header-logo"
                    src="https://hgwipn3sa-res.cloudinary.com/image/upload/w_auto,f_auto,q_auto,g_auto,c_fill,h_37,dpr_1/ganmznyxybqyedc01ooj.png"
                    alt="Логотип"
                  />
                  <span className="header-text">Заборы от производителя</span>
                </header>
                <h2 className="test-text">
                  Пройдите тест за 2 минуты и узнайте стоимость забора
                </h2>
                <div className="experience-text">Опыт работы 15+ лет</div>
                <button className="calculate-button" onClick={goToNextPage}>
                  Рассчитать стоимость
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div>
          <div className="page2">{question.title}</div>
          <div>{question.description}</div>
          <div></div>

          <Contacts />
          <Mail />
          {questionIndex > 0 && (
            <button onClick={() => setQuestionIndex(questionIndex - 1)}>
              Назад
            </button>
          )}
          {questionIndex < questions.length - 1 && (
            <button onClick={() => setQuestionIndex(questionIndex + 1)}>
              Далее
            </button>
          )}
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div>
          <div className="page3">Укажите Ваши контактные данные</div>
          <ContactForm />
          <button onClick={goToPreviousPage}>Назад</button>
        </div>
      ),
    },
  ];

  const [currentPage, setCurrentPage] = useState(pages[0]);

  function goToNextPage() {
    const currentIndex = pages.findIndex((page) => page.id === currentPage.id);
    if (currentIndex < pages.length - 1) {
      setCurrentPage(pages[currentIndex + 1]);
    }
  }

    function goToPreviousPage() {
      const currentIndex = pages.findIndex((page) => page.id === currentPage.id);
      if (currentIndex > 0) {
        setCurrentPage(pages[currentIndex - 1]);
      }
    }
  
    return (
      <div className="overlay">
        <div className="modal-window">{currentPage.content}</div>
      </div>
    );
  }
  
  export default App;
  
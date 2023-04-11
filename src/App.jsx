//импортируем функции
import React, { useState } from 'react';
import Contacts from './Contacts';
import ContactForm from './ContactForm';
import Mail from './Mail';
import './App.css';
import { questions } from './questions';

function App() {
  const [page, setPage] = useState(1); //неизменяемая переменная
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex]; //достаем из массива элемент по индексу
  const [answers, setAnswers] = useState([]);
  console.log(answers);

  return (
    <div className="overlay">
      <div className="modal-window">
        {page === 1 && (
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
                  <button
                    className="calculate-button"
                    onClick={() => setPage(2)}
                  >
                    Рассчитать стоимость
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

{page === 2 && (
  <div>
    <div className="page2">{question.title}</div>
    <div>{question.description}</div>
    <div>{question.type === 'text' && <Contacts />}</div>
    <div>
      {question.type === 'radioimage' && (
        <div className="options-grid">
          {question.options.map((option) => (
            <div
              className="option-block"
              onClick={() => {
                console.log(option);
                answers[questionIndex] = option;
                setAnswers([...answers]); /*обновляем массив*/
                setQuestionIndex(questionIndex + 1);
              }}
            >
              {option.title}
              <img className="option-image" src={option.imageUrl} />
            </div>
          ))}
        </div>
      )}
    </div>
    {questionIndex > 0 && (
      <button onClick={() => setQuestionIndex(questionIndex - 1)}>
        Назад
      </button>
    )}
    {/*Если индекс !=0 то работает кнопка назад, изменяем индекс вопроса на текущее значение -1 */}
    {questionIndex < questions.length - 1 && (
      <button onClick={() => setQuestionIndex(questionIndex + 1)}>
        Далее
      </button>
    )}
  </div>
)}

        {page === 3 && (
          <div>
            <div className="page3">Укажите Ваши контактные данные</div>
            <ContactForm />
            <button onClick={() => setPage(2)}>Назад</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

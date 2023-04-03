//импортируем функции
import { useState } from "react";
import Contacts from "./Contacts";
import ContractForm from "./ContactForm";

const questions = [
  {
  title:'Вопрос №1',
  description:'Описание вопроса №1',
  },
  {
    title:'Вопрос №2',
    description:'Описание вопроса №2',
  },
  {
    title:'Вопрос №3',
    description:'Описание вопроса №3',
  },
];



function App() {
  const [page, setPage] = useState(1); //неизменяемая переменная
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];//достаем из массива элемент по индексу

  return (
    <div>
      {page === 1 && (
        <div className="page1">
          <div className="modal">
            <div><img src="https://hgwipn3sa-res.cloudinary.com/image/upload/w_auto,f_auto,q_auto,g_auto,c_fill,h_650,dpr_2/wkb2zkbhb4filwpsjzv1.jpg"/></div>
            <div>
              <h2>Пройдите тест за 2 минуты и узнайте стоимость забора</h2>
              <div>Опыт работы 15+ лет</div>
              <button onClick={() => setPage(2)}>Рассчитать стоимость</button>
            </div>
          </div>
        </div>
      )}
      
     {page === 2 && (
        <div>
          <div className="page2">{question.title}</div>
          <div>{question.description}</div>
          <div></div>
          
          <Contacts/>
          <Mail/>
          {questionIndex>0 && (<button onClick={() => setQuestionIndex(questionIndex-1)}>Назад</button>)}
          {/*Если индекс !=0 то работает кнопка назад, изменяем индекс вопроса на текущее значение -1 */}
          {questionIndex < questions.length-1 && (<button onClick={() => setQuestionIndex(questionIndex+1)}>Далее</button>)}
        </div>
      )}
   

    {page === 3 && (
      <div>
        <div className="page3">Укажите Ваши контактные данные</div>
        <ContractForm/>
        <button onClick={() => setPage(2)}>Назад</button>
      </div>
    )}
    </div>
  );
}

function Mail() {
  return (
    <div>
      <h3>Укажите материал забора</h3>
      <input type="text"/> 
    </div>
        );
}




export default App;

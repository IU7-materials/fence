import { useState } from "react";
import Contacts from "./Contacts";



function App() {
  const [page, setPage] = useState(1);
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
          <div className="page2">Общая длина вашего забора, включая ворота и калитки</div>
          <Contacts/>
          <Mail/>
        </div>
      )}
    </div>
  );
}

function Mail() {
  return (
    <div>
      <h3>Укажите свою почту</h3>
      <input type="text"/> 
    </div>
  );
}



export default App;


        import { useState } from "react";

        function ContactForm() {
            const [name, setName] = useState('');
            const [phone, setPhone] = useState('');
            const [email, setEmail] = useState('');
            const [preferredMethod, setPreferredMethod] = useState('');
            const [allowDataUsage, setAllowDataUsage] = useState(false);
            const [nameError, setNameError] = useState('');
            const [phoneError, setPhoneError] = useState('');
          
            const handleNameChange = (event) => {
              const nameValue = event.target.value;
              setName(nameValue);
              // Check if name contains only letters
              const regex = /^[a-zA-Z\s]*$/;
              if (!regex.test(nameValue)) {
                setNameError('Name can only contain letters');
              } else {
                setNameError('');
              }
            };
          
            const handlePhoneChange = (event) => {
              const phoneValue = event.target.value;
              setPhone(phoneValue);
              // Check if phone number contains only digits
              const regex = /^(\+)?[0-9]*$/;
              if (!regex.test(phoneValue)) {
                setPhoneError('Phone can only contain numbers and "+" symbol');
              } else {
                setPhoneError('');
              }
            };
          
            const handleEmailChange = (event) => {
              const emailValue = event.target.value;
              setEmail(emailValue);
            };
          
            const handlePreferredMethodChange = (event) => {
              const preferredMethodValue = event.target.value;
              setPreferredMethod(preferredMethodValue);
            };
          
            const handleAllowDataUsageChange = (event) => {
              const allowDataUsageValue = event.target.checked;
              setAllowDataUsage(allowDataUsageValue);
            };
          
            const handleSubmit = (event) => {
              event.preventDefault();
              // Handle form submission here
            };
          
            return (
              <form onSubmit={handleSubmit}>
                <div>
                  <h3>Контактная информация</h3>
                  <div>
                    <label htmlFor="name">Имя</label>
                    <input id="name" type="text" value={name} onChange={handleNameChange} />
                    {nameError && <div className="error">{nameError}</div>}
                  </div>
                  <div>
                    <label htmlFor="phone">Телефон</label>
                    <input id="phone" type="tel" value={phone} onChange={handlePhoneChange} />
                    {phoneError && <div className="error">{phoneError}</div>}
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" value={email} onChange={handleEmailChange} />
                  </div>
                  <div>
                    <label htmlFor="preferredMethod">Предпочитаемый способ связи</label>
                    <select id="preferredMethod" value={preferredMethod} onChange={handlePreferredMethodChange}>
                      <option value=""></option>
                      <option value="phone">Телефон</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                  <div>
                    <input id="allowDataUsage" type="checkbox" checked={allowDataUsage} onChange={handleAllowDataUsageChange} />
                    <label htmlFor="allowDataUsage">Я согласен с обработкой моих персональных данных</label>
                  </div>
                </div>
                <button type="submit">Отправить</button>
              </form>
            );
          }    

          export default ContactForm;

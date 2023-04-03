
import { useState } from "react";

export function ContactForm2() {
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
        // Check if phone contains only numbers and "+" symbol
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

    return (
        <div>
            <h3>Оставьте заявку</h3>
            <form>
                <div>
                    <label htmlFor="name">Имя</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange} />
                    {nameError && <span className="error">{nameError}</span>}
                </div>
                <div>
                    <label htmlFor="phone">Телефон</label>
                    <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} onClick={() => setPhone('+7')} />
                    {phoneError && <span className="error">{phoneError}</span>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label htmlFor="preferredMethod">Предпочитаемый способ связи</label>
                    <select id="preferredMethod" value={preferredMethod} onChange={handlePreferredMethodChange}>
                        <option value="">Выберите</option>
                        <option value="phone">Телефон</option>
                        <option value="email">Email</option>
                    </select>
                </div>
                <div>
                    <input type="checkbox" id="allowDataUsage" checked={allowDataUsage} onChange={handleAllowDataUsageChange} />
                    <label htmlFor="allowDataUsage">Согласен на обработку персональных данных</label>
                </div>
                <button type="submit">Отправить</button>
            </form>
        </div>

    );
}

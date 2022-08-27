import React from 'react';
import { useCreateAuthMutation } from 'redux/UserSrote';
import { useState } from 'react';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [createAuth] = useCreateAuthMutation();

  const handleSubmit = e => {
    e.preventDefault();
    // Значення полів "Інпуту"
    const user = {
      name,
      email,
      password,
    };

    createAuth(user);

    // //  Перевірка на ім'я, щоб не було однакових
    // const contactsName = data.some(el => contact.name === el.name);
    // if (contactsName) {
    //   showWarning(`${contact.name} is already in contacts.`);
    // } else {
    //   createContact(contact);
    //   showSuccess(`${contact.name} is add.`);
    //   // navigate('/contacts');
    // }
    reset();
    // };
  };

  // очищення інпута
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;

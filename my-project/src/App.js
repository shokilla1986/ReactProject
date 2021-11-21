import "./App.css";
import { useState, useEffect, useCallback } from "react";

const MessagerComponent = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  const AddMessage = useCallback(() => {
    setMessages([...messages, { text: value, author: "Dima" }]);
    setValue("");
  });

  const changeMessage = useCallback(() => {
    setMessages([...messages, { text: "Hello", author: "Robo" }]);
  }, [messages]);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (messages.length && lastMessage.author === "Dima") {
      setTimeout(() => {
        changeMessage();
      }, 1000);
    }
    console.log(lastMessage);
  }, [messages, AddMessage, changeMessage]);

  const changeValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <MessagesList messages={messages} />
      <hr />
      <hr />
      <input
        placeholder="Введите сообщение"
        value={value}
        onChange={changeValue}
      />
      <button onClick={AddMessage}>AddMessage</button>
    </div>
  );
};

const MessagesList = ({ messages = [] }) => {
  return (
    <div>
      {messages.map((message) => (
        <div>
          <div>
            {message.author}: {message.text}
          </div>
        </div>
      ))}
    </div>
  );
};

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        MyFirst React App
        <h3>Hello {props.name}</h3>
        <MessagerComponent />
      </header>
    </div>
  );
}

export default App;

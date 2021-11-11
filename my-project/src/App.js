import "./App.css";

const MessageComponent = (props) => {
  return (
    <div>
      <h4>Сообщение пользователя:</h4>
      <h5>{props.message}</h5>
    </div>
  );
};

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        MyFirst React App
        <h3>Hello {props.name}</h3>
        <MessageComponent message={props.message} />
      </header>
    </div>
  );
}

export default App;

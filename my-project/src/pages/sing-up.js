import { LoginForm } from "../components";
import { firebaseApp } from "../api/firebase";

const onSubmit = (email, password) => {
  return firebaseApp.auth().createUserWithEmailAndPassword(email, password);
};

export function SingUpPage() {
  return (
    <div>
      <LoginForm
        submitButton="Зарегистрироваться"
        title={"Регистрация"}
        onSubmit={onSubmit}
      />
    </div>
  );
}

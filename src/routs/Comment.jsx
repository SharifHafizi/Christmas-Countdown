import { useRef, useState } from "react";
export default function Comment() {
  const name = useRef();
  const message = useRef();
  const [Name, setName] = useState();
  const [Message, setMessage] = useState();

  const handleClick = () => {
    const temp = { name: name.current.value, message: message.current.value };
    localStorage.setItem("initial value", JSON.stringify(temp));
    const localStorageData = JSON.parse(localStorage.getItem("initial value"));
    setName(() => localStorageData.name);
    setMessage(() => localStorageData.message);
  };

  const currentDate = new Date().toJSON().slice(0, 10);
  console.log(currentDate);
  const currentTime = new Date().toLocaleTimeString("no-NO");

  return (
    <div className="comment">
      <h1>Send New Year Message to Your Beloved One </h1>
      <input ref={name} type="text" placeholder="Your Name" />
      <br />
      <input ref={message} type="text" placeholder="Message" />
      <br />
      <button onClick={handleClick}>Submit</button>
      <div className="greetingsBox">
        <p>Greeting From: {Name}</p>
        <p>Message: {Message}</p>
        <p>
          Date:{currentDate}🕒 {currentTime}
        </p>
      </div>
    </div>
  );
}

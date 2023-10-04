import { useCallback, useEffect, useState } from "react";
import "./index.css";


export const PasswordApp = () => {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const PasswordGenerator = useCallback(() => {
    // memoized

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) {
      str = str + "01234567890123456789";
    }
    if (char) {
      str = str + "!@#$%^&*_!@#$%^&*_";
    }

    for (let i = 1; i <= length; i++) {
      let char = str.charAt(Math.floor(Math.random() * str.length + 1));
      pass = pass + char;
    }

    setPassword(pass);
  }, [length, number, char, setPassword]);

  useEffect(() => {
    // can only be made by this also
    PasswordGenerator();
  }, [length, number, char, setPassword]);

  return (
    <div className="container1 p-5 h-screen flex flex-col justify-center items-center bg-slate-700 font- ">
      <h1 className="text-4xl text-gray-200">Password Generator</h1>
      <div className="innerDiv overflow-hidden w-3/6 p-5 flex justify-center rounded-lg">
        <input
          type="text"
          className="py-2 px-3 w-full rounded-lg text-black font-semibold"
          placeholder="Password"
          value={password}
          readOnly
        />
        <button className="p-3 mx-2 rounded-lg bg-stone-600 text-gray-200">
          Copy
        </button>
      </div>
      <div className="w-3/6 ml-10">
        {/* Range */}
        <input
          onChange={(e) => {
            // event triggered on changed value
            setLength(e.target.value);
          }}
          type="range"
          min={8}
          max={30}
          value={length}
          className="cursor-pointer mx-2"
        />
        <label className="text-xl my-2 text-gray-200">Length: {length}</label>
        {/* numberInput */}
        <input
          className="ml-4 cursor-pointer zoom w-5 h-5"
          type="checkbox"
          id="numberInput"
          defaultChecked={number}
          onChange={() => {
            setNumber(
              (prev) =>
                // if(number) setNumber(false); else setNumber(true)
                !prev
            );
          }}
        />
        <label className="text-xl ml-2 my-2 text-gray-200">Numbers</label>
        {/* characterInput */}
        <input
          className="ml-4 cursor-pointer zoom w-5 h-5"
          type="checkbox"
          id="characterInput"
          defaultChecked={char}
          onClick={() => {
            setChar((prev) => !prev); // true then false then true
          }}
        />
        <label className="text-xl ml-2 text-gray-200">Characters</label>
      </div>
    </div>
  );
};

export default PasswordApp;
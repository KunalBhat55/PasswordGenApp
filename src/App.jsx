import { useCallback, useEffect, useRef, useState } from "react";
import "./index.css";



export const PasswordApp = () => {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);

  const passwordRef = useRef(null)

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

    if(pass.length > 22 && number && char){
      setStrength(99) ;return
    }
    if(pass.length > 8 && pass.length < 16){ // Can add num & char conditons
      setStrength(50);
    }
    else if(pass.length >= 16){
      setStrength(88)
    }else{
      setStrength(20)
    }

    setPassword(pass);
  }, [length, number, char, setPassword]);

  const copyToClipboard = useCallback(() => {
     passwordRef.current.select()
     window.navigator.clipboard.writeText(password)
     
  },[password]);

  useEffect(() => {
    // can only be made by this also
    PasswordGenerator();
  }, [length, number, char, setPassword]);  

  return (
    <div className="container1 p-5 h-screen flex flex-col justify-center items-center bg-slate-700">
      <h1 className="text-4xl text-gray-200">Password Generator</h1>
      <div className="innerDiv overflow-hidden w-3/6 p-5 flex justify-center rounded-lg">
        <input
          type="text"
          className="input input-bordered w-full max-w-md text-white font-semibold"
          placeholder="Password"
          value={password}
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyToClipboard}  className="btn p-3 mx-2 rounded-lg bg-stone-600 text-gray-200">
          Copy
        </button>
      </div>
      <div className="w-3/6 flex gap-3 justify-center">
        {/* Range */}
        <input
          onChange={(e) => {
            // event triggered on changed value
            setLength(e.target.value);
          }}
          type="range"
          min={8}
          max={25}
          value={length}
          className="range-lg cursor-pointer"
        />
        <label className="text-xl  text-gray-200">Length: {length}</label>
        {/* numberInput */}
        <input
          className="checkbox"
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
        <label className="text-xl text-gray-200">Numbers</label>
        {/* characterInput */}
        <input
          className="checkbox"
          type="checkbox"
          id="characterInput"
          defaultChecked={char}
          onClick={() => {
            setChar((prev) => !prev); // true then false then true
          }}
        />
        <label className="text-xl  text-gray-200">Characters</label>
      </div>
      <label className="mt-8 text-xl text-white">Strength</label>
      <div
        type="range"
        className="radial-progress transition-all mt-4 text-xl font-semibold"
        style={{ "--value": `${ strength }`, "--thickness": "3px" }}
      >
        {strength}%
      </div>
    </div>
  );
};

export default PasswordApp;
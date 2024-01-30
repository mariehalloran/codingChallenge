import "./App.css";
import { useEffect, useState } from "react";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function App() {
  const [flag, setFlag] = useState("Loading...");

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "Https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/646f6c"
      );
      let theFlag = await response.text();
      let stringArr = theFlag?.split("");
      let currentString = "";
      for (let i = 0; i < stringArr?.length; i++) {
        await sleep(500);
        currentString = currentString.concat(stringArr[i]);
        setFlag(currentString);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <text>{flag}</text>
    </div>
  );
}

export default App;



/* 
const jsdom = require("jsdom");
async function test() {
  let response = await fetch(
    "https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge"
  );
  let firstHtml = await response.text();
  const dom = new jsdom.JSDOM(firstHtml);
  const d1 = dom.window.document.querySelectorAll('[data-class^="23"]');
  for (let elm of d1) {
    const d2 = new jsdom.JSDOM(elm.outerHTML);
    const c = d2.window.document.querySelectorAll('[data-tag$="93"]');
    if (c) {
      const d3 = new jsdom.JSDOM(c[0].outerHTML);
      const m = d3.window.document.querySelectorAll('[data-id*="21"]');
      if (m) {
        const d4 = new jsdom.JSDOM(m[0].outerHTML);
        const i = d4.window.document.querySelector("i");
        console.log(i.outerHTML);
      }
    }
  }

}

test(); */

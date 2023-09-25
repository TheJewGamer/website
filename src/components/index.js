import React, {useState } from "react";

//gets a random quote from the list and helps write it
export default function RandomQuote() {
  //vars
  var quoteList = [
    "Life is Boring and PointLess. It's up to you to make it fun and meaningful.",
    "Remember It's Dangerous to go Alone!",
    "Pain, Misery, and All Of The Above.",
    "You can tell a lot about a company by the quality of the chairs their employees sit in.",
    "It seems like we only get one of these life things. We better make it worth something.",
    "In the end all we have is our Name. We better make it mean something.",
    "The small things matter.",
    "Nothing is ever simple.",
    "If something is worth doing, it's gonna require you to get your hands dirty.",
    "If it was easy everyone would do it.",
    "Trust is free, but it must be kept.",
    "Embrace the unknown.",
    "Hey did you know this text is random?",
    "Don't let anyone tell you are wasting your time doing something. It is your's to waste.",
    "Remember to have fun.",
    "Nothing really lasts so don't worry about it.",
    "Water in your whisky is bad, but Whisky in your water is good.",
    "Contrary to popular belief a printer's main function is to not print.",
    "Don't take life too seriously",
    "No task is ever below you no matter how far up the ladder you've climbed."
  ];

  //state stuff
  const [quote, setText] = useState("");
  const [started, setStarted] = useState(false);

  //check to see if already done
  if (started) {
    //already running so just return the quote as it is
    return <h2>{quote}</h2>
  }
  else {
    //get random quote
    let randIndex = Math.floor(Math.random() * quoteList.length);
    let quoteToType = quoteList[randIndex]
    let timer;

    //not started so write the text
    setStarted(true);

    let i = -1;
    timer = setInterval(() => {
      i++;
      if (i === quoteToType.length - 1) clearInterval(timer);
      setText((prev) => prev + quoteToType[i]);
    }, 30);
    return (
      <h2>{quote}</h2>
    );
  }
}
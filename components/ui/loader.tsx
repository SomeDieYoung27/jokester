import Image from "next/image";
import { useState, useEffect } from "react";
export const Loader = () => {
  const didYouKnowList = [
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I would avoid the sushi if I was you. Its a little fishy.",
    "What do you call fake spaghetti? An impasta!",
    "How does a penguin build its house? Igloos it together.",
    "I'm reading a book about anti-gravity. It's impossible to put down.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "Did you hear about the cheese factory that exploded? There was nothing left but de-brie.",
    "What orange and sounds like a parrot? A carrot.",
    "Parallel lines have so much in common. Its a shame they will never meet.",
    "Why dont some couples go to the gym? Because some relationships dont work out.",
    "I told my computer I needed a break, and now it wont stop sending me Kit Kats.",
    "Why did the coffee file a police report? It got mugged.",
    "How does a rabbi make coffee? Hebrews it!",
    "I used to play piano by ear, but now I use my hands.",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "Why was the math book sad? It had too many problems.",
  ];

  const initialRandomIndex = Math.floor(Math.random() * didYouKnowList.length);
  const [randomDidYouKnow, setRandomDidYouKnow] = useState<string>(
    didYouKnowList[initialRandomIndex]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * didYouKnowList.length);
      setRandomDidYouKnow(didYouKnowList[randomIndex]);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [didYouKnowList]);

  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 reliative animate-bounce">
        <Image alt="logo" fill src="/logo.png" />
      </div>
      <p className="text-sm text-muted-foreground">The Muses are thinking...</p>
      <div className="w-96 text-sm text-muted-foreground p-6 rounded-md shadow-md transition duration-500 mx-auto text-center bg-gradient-to-br from-purple-400 to-emerald-200">
        <p className="text-black font-bold text-lg mb-2">Did you know?</p>
        <p className="text-gray-800">{randomDidYouKnow}</p>
      </div>
    </div>
  );
};

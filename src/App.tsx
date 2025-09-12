import { useState } from "react";
import "./App.css";
import { Figures } from "./components/figures";
import { figureData } from "./data/figuresData";
import { FigureDetail } from "./components/FigureDetail";
import { IFigure } from "./models/IFigures";

function App() {
  const [clickedFig, setClickedFig] = useState<IFigure | null>(null);
  const [figures, setFigures] = useState<IFigure[]>(figureData);

  const handleRate = (id: Number, newValue: number) => {
    setFigures((prev) =>
      prev.map((f) => (f.id === id ? { ...f, rating: newValue } : f))
    );
    if (clickedFig) {
      setClickedFig({ ...clickedFig, rating: newValue });
    }
  };

  return (
    <>
      {clickedFig ? (
        <FigureDetail
          clickedFig={clickedFig}
          setClickedFig={setClickedFig}
          onRate={handleRate}
        />
      ) : (
        <Figures figures={figures} setClickedFig={setClickedFig} />
      )}
    </>
  );
}

export default App;

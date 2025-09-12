import { Dispatch, SetStateAction } from "react";
import { IFigure } from "../models/IFigures";
import "../styles/figureCard.css";
import { Rating } from "@mui/material";

interface FiguresProps {
  figures: IFigure[];
  setClickedFig: Dispatch<SetStateAction<IFigure | null>>;
}

export const Figures = ({ figures, setClickedFig }: FiguresProps) => {
  console.log(figures[0].rating);
  return (
    <>
      <h1> Mini Figures</h1>
      <div className="displayFigures">
        {figures.map((f) => (
          <div
            key={f.id}
            className="figure-card"
            onClick={() => setClickedFig(f)}
          >
            <img src={f.img} alt={f.name} className="figure-img" />
            <h2>{f.name}</h2>
            <Rating
              name="read-only"
              value={f.rating}
              readOnly
              sx={{
                "& .MuiRating-iconFilled": { color: "#1DB2F0" },
                "& .MuiRating-iconEmpty": { color: "#B0BEC5" },
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

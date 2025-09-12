import { Dispatch, SetStateAction, useState } from "react";
import { IFigure } from "../models/IFigures";
import { Rating } from "@mui/material";
import { VoteModal } from "./VoteModal";
import "../styles/figureDetail.css";

interface ClickedFigureProps {
  clickedFig: IFigure;
  setClickedFig: Dispatch<SetStateAction<IFigure | null>>;
  onRate: (id: number, newValue: number) => void;
}
export const FigureDetail = ({
  clickedFig,
  setClickedFig,
  onRate,
}: ClickedFigureProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="wrapper">
      <h1>{clickedFig.name}</h1>
      <img src={clickedFig.img} alt={clickedFig.name} />
      <Rating
        name={`rating-${clickedFig.id}`}
        value={clickedFig.rating}
        readOnly
        size="large"
        onChange={(event, newValue) => {
          if (newValue !== null) {
            onRate(clickedFig.id, newValue);
          }
        }}
        sx={{
          "& .MuiRating-iconFilled": { color: "#1DB2F0" },
          "& .MuiRating-iconEmpty": { color: "#B0BEC5" },
        }}
      />

      <p> {clickedFig.description} </p>
      <div className="buttons">
        <button onClick={() => setClickedFig(null)}> Back </button>
        <button onClick={() => setOpen(true)}> Vote </button>
      </div>
      <VoteModal
        open={open}
        onClose={() => setOpen(false)}
        figure={clickedFig}
        onRate={onRate}
      />
    </div>
  );
};

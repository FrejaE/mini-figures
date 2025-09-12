import { Rating, Modal, Box, Button } from "@mui/material";
import { IFigure } from "../models/IFigures";
import "../styles/voteModal.css";

interface VoteModalProps {
  open: boolean;
  onClose: () => void;
  figure: IFigure;
  onRate: (id: number, newValue: number) => void;
}

export const VoteModal = ({
  open,
  onClose,
  figure,
  onRate,
}: VoteModalProps) => {
  return (
    <Modal className="modal" open={open} onClose={onClose}>
      <Box className="vote_modal">
        <h2>Rate {figure.name}</h2>
        <Rating
          name="simple-controlled"
          value={figure.rating}
          onChange={(event, newValue) => {
            if (newValue !== null) {
              onRate(figure.id, newValue);
            }
          }}
          sx={{
            "& .MuiRating-iconFilled": { color: "#1DB2F0" },
            "& .MuiRating-iconEmpty": { color: "#B0BEC5" },
          }}
          size="large"
        />
        <div style={{ marginTop: "1rem" }}>
          <Button variant="contained" onClick={onClose}>
            Done
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

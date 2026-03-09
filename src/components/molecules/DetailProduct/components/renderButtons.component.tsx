import AddIcon from "@mui/icons-material/Add";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";

import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { formatPriceFromCents } from "@/utils/constants/formatPrice";
import { theme } from "@/utils/ThemeProvider";

import DetailProductStyles from "../detailProduct.styles";

const { colors } = theme;

type RenderButtonsProps = {
  quantity: number;
  error: string | null;
  handleDecrement: () => void;
  handleIncrement: () => void;
  handleAddWithQuantity: () => void;
  finalTotalPrice: number;
};

const RenderButtons = ({
  quantity,
  error,
  handleDecrement,
  handleIncrement,
  handleAddWithQuantity,
  finalTotalPrice,
}: RenderButtonsProps) => {
  return (
    <>
      <div className="detailProduct__quantity-wrapper">
        <div className="detailProduct__quantity-selectors">
          <div className="quantity__selector">
            <IconButton onClick={handleDecrement} size="small">
              <RemoveIcon fontSize="small" />
            </IconButton>

            <Typography variant="p2" weight="bold">
              {quantity}
            </Typography>

            <IconButton onClick={handleIncrement} size="small">
              <AddIcon fontSize="small" />
            </IconButton>
          </div>
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleAddWithQuantity}
          >
            <Typography variant="p2" weight="bold">
              {formatPriceFromCents(finalTotalPrice)} Add to bag
            </Typography>
          </Button>
        </div>
        {error && (
          <div className="detailProduct__error">
            <InfoOutlinedIcon
              fontSize="small"
              sx={{ color: colors.error[200], fontSize: 15 }}
            />
            <Typography variant="p3" color={colors.error[200]}>
              {error}
            </Typography>
          </div>
        )}
      </div>
      <style jsx>{DetailProductStyles}</style>
    </>
  );
};

export default RenderButtons;

import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

import { theme } from "@/utils/ThemeProvider";

const { colors } = theme;

const Spinner = () => {
  return (
    <Stack sx={{ color: colors.buttons.orange }} spacing={2} direction="row">
      <CircularProgress color="inherit" />
    </Stack>
  );
};
export default Spinner;

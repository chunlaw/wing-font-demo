import {
  Box,
  Button,
  Divider,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import AppContext from "../AppContext";
import { Download } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { AVAILABLE_FONTS } from "../utils/text";
import { useTemplateRotation } from "../utils/hooks";
import { FontHeader } from "./FontHeader";

const Main = () => {
  const { msg, setMsg } = useContext(AppContext);
  const navigate = useNavigate();
  const msgShown = useTemplateRotation(msg);

  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
      width="100%"
      alignItems="center"
      gap={2}
      py={2}
      my={1}
      overflow="scroll"
    >
      <TextField
        label="隨便試 (Try it!!)"
        value={msg}
        onChange={({ target: { value } }) => setMsg(value)}
        fullWidth
      />
      <Box width="100%" overflow="auto">
        {AVAILABLE_FONTS.map((family) => (
          <Box key={family} mb={2}>
            <FontHeader family={family} />
            <Box>
              <Typography
                sx={{ ...msgSx, cursor: "pointer" }}
                fontFamily={family}
                onClick={() => navigate(`/specimen/${family}`)}
              >
                {msgShown}
              </Typography>
            </Box>
            <Divider />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Main;

const msgSx: SxProps<Theme> = {
  fontSize: 36,
  textWrap: "nowrap",
};

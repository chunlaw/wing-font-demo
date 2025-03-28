import {
  Box,
  Divider,
  SxProps,
  TextField,
  Theme,
  Typography,
  Button,
} from "@mui/material";
import { useContext, useState } from "react";
import AppContext from "../AppContext";
import { useNavigate } from "react-router-dom";
import { AVAILABLE_FONTS } from "../utils/text";
import { useTemplateRotation } from "../utils/hooks";
import { FontHeader } from "./FontHeader";
import IntroDialog from "./components/IntroDialog";

const Main = () => {
  const { msg, setMsg } = useContext(AppContext);
  const navigate = useNavigate();
  const msgShown = useTemplateRotation(msg);
  const [isDialog, setIsDialog] = useState<boolean>(false);

  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
      width="100%"
      alignItems="center"
      gap={2}
      my={1}
      overflow="scroll"
    >
      <div
        style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "left" }}
      >
        <Typography variant="body1" mb={1}>
          Wing Font
          係一套免費開源的工具，方便大家製作不同字體以供開發／教學等用途。
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsDialog(true)}
          sx={{
            alignSelf: "flex-start",
            mb: 2,
            borderRadius: "9999px",
          }}
        >
          了解更多！
        </Button>
      </div>
      <TextField
        label="隨便試 (Try it!!)"
        value={msg}
        onChange={({ target: { value } }) => setMsg(value)}
        fullWidth
      />
      <Box width="100%" overflow="auto">
        {AVAILABLE_FONTS.map((font) => (
          <Box key={font.name} mb={1}>
            <FontHeader family={font.displayName} />
            <Box>
              <Typography
                sx={{ ...msgSx, cursor: "pointer" }}
                fontFamily={font.name}
                onClick={() => navigate(`/specimen/${font.name}`)}
              >
                {msgShown}
              </Typography>
            </Box>
            <Divider />
          </Box>
        ))}
      </Box>
      <IntroDialog open={isDialog} onClose={() => setIsDialog(false)} />
    </Box>
  );
};

export default Main;

const msgSx: SxProps<Theme> = {
  fontSize: 36,
  textWrap: "nowrap",
};

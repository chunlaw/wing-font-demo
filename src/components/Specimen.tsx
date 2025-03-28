import { Box, TextField, Typography, SxProps, Theme } from "@mui/material";
import { useContext } from "react";
import AppContext from "../AppContext";
import { useParams } from "react-router-dom";
import { useTemplateRotation } from "../utils/hooks";
import { FontHeader } from "./FontHeader";

const Specimen = () => {
  const { msg, setMsg } = useContext(AppContext);
  const { family } = useParams<{ family: string }>();
  const msgShown = useTemplateRotation(msg);

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100vh"
      gap={2}
      py={2}
    >
      <FontHeader family={family!} />
      <TextField
        label="隨便試 (Try it!!)"
        value={msg}
        onChange={({ target: { value } }) => setMsg(value)}
        fullWidth
        sx={{ maxWidth: "600px" }}
      />
      <Box flex={1} display="flex" width="100%">
        <Typography sx={msgSx} fontFamily={family}>
          {msgShown}
        </Typography>
      </Box>
    </Box>
  );
};

export default Specimen;

const msgSx: SxProps<Theme> = {
  fontSize: 72,
  textWrap: "wrap",
};

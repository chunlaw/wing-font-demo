import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import IntroDialog from "../components/IntroDialog";

const Header = () => {
  const [isDialog, setIsDialog] = useState<boolean>(false);

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      my={1}
    >
      <Typography variant="h5">Wing Font Generator</Typography>
      <Box display="flex" gap={1}>
        <Button
          onClick={() => setIsDialog(true)}
          variant="contained"
          size="small"
          color="success"
        >
          介紹
        </Button>
        <Button
          onClick={() =>
            window.open("https://github.com/sponsors/chunlaw", "_blank")
          }
          variant="contained"
          size="small"
        >
          捐助
        </Button>
      </Box>
      <IntroDialog open={isDialog} onClose={() => setIsDialog(false)} />
    </Box>
  );
};

export default Header;

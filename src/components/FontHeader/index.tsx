import { Box, Button } from "@mui/material";
import { Download } from "@mui/icons-material";

interface FontHeaderProps {
  family: string;
}

export const FontHeader = ({ family }: FontHeaderProps) => {
  return (
    <Box
      display="flex"
      gap={1}
      alignItems="center"
      justifyContent="space-between"
    >
      {family}
      <Box display="flex" gap={1}>
        <Button
          onClick={() =>
            window.open(`https://fonts.chunlaw.io/${family}.ttf`, "_blank")
          }
          size="small"
          variant="outlined"
          endIcon={<Download />}
        >
          ttf
        </Button>
        <Button
          onClick={() =>
            window.open(`https://fonts.chunlaw.io/${family}.woff`, "_blank")
          }
          size="small"
          variant="outlined"
          endIcon={<Download />}
        >
          woff
        </Button>
      </Box>
    </Box>
  );
};

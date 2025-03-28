import { Box, Button, Menu, MenuItem } from "@mui/material";
import { Download } from "@mui/icons-material";
import { useRef, useState } from "react";

interface FontHeaderProps {
  family: string;
}

export const FontHeader = ({ family }: FontHeaderProps) => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleDownload = (format: "ttf" | "woff") => {
    window.open(`https://fonts.chunlaw.io/${family}.${format}`, "_blank");
    setOpen(false);
  };

  return (
    <Box
      display="flex"
      gap={1}
      alignItems="center"
      justifyContent="space-between"
    >
      {family}
      <Button
        ref={btnRef}
        onClick={() => setOpen(true)}
        size="small"
        variant="text"
        endIcon={<Download />}
        sx={{
          borderRadius: "9999px",
          color: "secondary.main",
        }}
      >
        免費下載
      </Button>

      <Menu
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={btnRef.current}
      >
        <MenuItem onClick={() => handleDownload("ttf")}>.ttf</MenuItem>
        <MenuItem onClick={() => handleDownload("woff")}>.woff</MenuItem>
      </Menu>
    </Box>
  );
};

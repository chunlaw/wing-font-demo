import { Box, Button } from "@mui/material";
import { Download } from "@mui/icons-material";
import { useState } from 'react';
import { GenericDialog } from '../GenericDialog';

interface FontHeaderProps {
  family: string;
}

export const FontHeader = ({ family }: FontHeaderProps) => {
  const [open, setOpen] = useState(false);

  const handleDownload = (format: 'ttf' | 'woff') => {
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
          onClick={() => setOpen(true)}
          size="small"
          variant="text"
          endIcon={<Download />}
          sx={{ 
            borderRadius: '9999px',
            color: 'secondary.main',
          }}
        >
          免費下載
        </Button>

      <GenericDialog 
        open={open}
        onClose={() => setOpen(false)}
        title="選擇格式"
      >
        <Box display="flex" gap={1} pt={1}>
          <Button onClick={() => handleDownload('ttf')} variant="contained">TTF</Button>
          <Button onClick={() => handleDownload('woff')} variant="contained">WOFF</Button>
        </Box>
      </GenericDialog>
    </Box>
  );
};

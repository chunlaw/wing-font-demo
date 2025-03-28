import { Box, Button, Link, Typography, IconButton } from "@mui/material";
import { useTheme } from "../../ThemeContext";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const Header = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      my={1}
    >
      <Link
        href="/"
        sx={{ textDecoration: "none", color: "inherit" }}
        paddingY={2}
      >
        <Typography variant="h5" letterSpacing={-1}>
          Wing Font
        </Typography>
      </Link>
      <Box display="flex" gap={1} alignItems="center">
        <Button
          onClick={() =>
            window.open("https://github.com/sponsors/chunlaw", "_blank")
          }
          variant="contained"
          size="small"
          sx={{
            borderRadius: "9999px",
          }}
        >
          捐助
        </Button>
        <IconButton onClick={toggleTheme} color="inherit">
          {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;

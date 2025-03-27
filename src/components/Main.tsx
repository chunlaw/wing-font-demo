import {
  Box,
  Button,
  Divider,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useMemo, useState } from "react";
import AppContext from "../AppContext";
import { Download } from "@mui/icons-material";

const Main = () => {
  const { msg, setMsg } = useContext(AppContext);
  const [templateIdx, setTemplateIdx] = useState<number>(
    Math.floor(Math.random() * TEMPLATES.length),
  );
  const msgShown = useMemo(() => {
    return msg || TEMPLATES[templateIdx];
  }, [msg, templateIdx]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemplateIdx(Math.floor(Math.random() * TEMPLATES.length));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
      <Box width="100%">
        {AVAILABLE_FONTS.map((family) => (
          <Box key={family} mb={2}>
            <Box display="flex" gap={1}>
              {family}
              <Button size="small" variant="outlined" endIcon={<Download />}>
                tff
              </Button>
              <Button size="small" variant="outlined" endIcon={<Download />}>
                woff
              </Button>
            </Box>
            <Box>
              <Typography sx={msgSx} fontFamily="ChironSungHK-Noto-lshk">
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

const AVAILABLE_FONTS = [
  "ChironSungHK-Noto-lshk",
  "ChironSungHK-Noto-yale",
  "ChironSungHK-Noto-cangjie",
  "ChironSungHK-Noto-lshk-It",
  "ChironSungHK-Noto-yale-It",
  "ChironSungHK-Noto-cangjie-It",
];

const msgSx: SxProps<Theme> = {
  fontSize: 36,
  textWrap: "nowrap",
};

const TEMPLATES: string[] = [
  "勒到呼吸困難才知變扯線木偶",
  "拳頭若放開　可擁抱四周",
  "活著自活著 萬象在逝水中暢泳",
  "如果心聲真有療效　誰怕暴露更多",
  "回望最初　當喪失是得著可不可",
  "立志助世人脫貧以為　便偉大到像多麼有為",
  "誰能憑愛意要富士山私有",
  "惟有我聽過你對我哭訴",
  "各有各唱自己歌　各找自我",
  "寂寞在流動　某些真的假的夢",
  "如海嘯衝擊我　使我向下沉",
  "我會在旁　開心玩　四處捐",
  "我為你偷偷心動　感覺神情凝重",
  "旋轉兜圈的感覺太逼真",
  "我這樣討厭　他完美如此　能共你好好地相處",
  "曳搖共對輕舟飄　互傳誓約慶春曉",
  "甜蜜地與愛人　風裏飛奔",
  "願一生中苦痛快樂也體驗",
  "想不想也日夜懷念　連甜夢也不夠甜",
  "遲了悔改　只好講抵你離開",
  "荒誕像這一切也變成往常",
  "別要我洗去　我的雙腳泥濘",
  "留在彼此的身邊　牽著手再繼續飛",
  "永遠有一個吻未嘗",
  "望著他雙眼想別人　人留下了留不低那片心",
];

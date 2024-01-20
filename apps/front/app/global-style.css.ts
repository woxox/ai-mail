import { baseToken, colorToken } from "@/theme/theme.css";
import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  width: "100vw",
  height: "100vh",
});

globalStyle("body", {
  color: colorToken["text"],
  backgroundColor: colorToken["background.surface"],
  ...baseToken.transition.colors,
});

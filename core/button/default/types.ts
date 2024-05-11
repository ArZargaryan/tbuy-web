export type ButtonProps = {
  variant: "primary" | "secondary";
  height?: string;
  width?: string;
  max_width?: string;
  padding?: string;
  margin?: string;
  font_size?: string;
  font_weight?: number;
  flex?: string;
  display?: "flex" | "block" | "inline-flex" | "inline-block";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  align_self?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  gap?: string;
};

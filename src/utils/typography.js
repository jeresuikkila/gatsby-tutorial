import Typography from "typography"

const typography = new Typography({
  title: "Valuemotive",
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  scaleRatio: 2,
  headerFontFamily: ["Nunito", "sans-serif"],
  bodyFontFamily: ["Montserrat", "sans-serif"],
  headerGray: 10,
  bodyGray: 10,
  googleFonts: [
    {
      name: "Nunito",
      styles: ["400", "700"],
    },
    {
      name: "Montserrat",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
})

export const { scale, rhythm, options } = typography
export default typography

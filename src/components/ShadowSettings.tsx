export class ShadowSettings {
  horizontal: number;
  vertical: number;
  blur: number;
  spread: number;
  opacity: number;
  inset: boolean;
  showColorPicker: boolean;
  bgColor: string;
  boxColor: string;
  shadowColor: string;

  constructor(
    horizontal = 10,
    vertical = 10,
    blur = 30,
    spread = 3,
    opacity = 50,
    inset = false,
    showColorPicker = false,
    bgColor = "#ffffff",
    boxColor = "#83C9C3",
    shadowColor = "#000000"
  ) {
    this.horizontal = horizontal;
    this.vertical = vertical;
    this.blur = blur;
    this.spread = spread;
    this.opacity = opacity;
    this.inset = inset;
    this.showColorPicker = showColorPicker;
    this.bgColor = bgColor;
    this.boxColor = boxColor;
    this.shadowColor = shadowColor;
  }

  clone(): ShadowSettings {
    return new ShadowSettings(
      this.horizontal,
      this.vertical,
      this.blur,
      this.spread,
      this.opacity,
      this.inset,
      this.showColorPicker,
      this.bgColor,
      this.boxColor,
      this.shadowColor
    );
  }

  getCSS() {
    return `${this.horizontal}px ${this.vertical}px ${this.blur}px ${
      this.spread
    }px ${this.shadowColor}${this.getHexOpacity()} ${
      this.inset ? "inset" : ""
    }`;
  }

  private getHexOpacity() {
    return Math.round((this.opacity / 100) * 255)
      .toString(16)
      .padStart(2, "0");
  }

  getBoxShadow() {
    return `box-shadow: ${this.getCSS()};`;
  }
}

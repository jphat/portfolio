export default interface HeroType {
  alt: string,
  caption?: string,
  credit?: string,
  height?: number,
  src: string,
  thumbnail: string,
  type: "image" | "embed" | "3d",
  width?: number,
}
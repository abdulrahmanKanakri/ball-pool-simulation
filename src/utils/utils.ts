import { Sprite } from "@/types";

export function loadSprite(filename: string): Sprite {
  const sprite = new Image();
  sprite.src = new URL(`../assets/images/${filename}`, import.meta.url).href;
  return sprite;
}

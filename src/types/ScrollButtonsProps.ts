import type { ScrollDirection } from "./ScrollDirection";

export type ScrollButtonProps = {
  direction: ScrollDirection;
  onClick: () => void;
};
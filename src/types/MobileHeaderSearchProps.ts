export type MobileHeaderSearchProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onCityChange: (city: string) => void;
};
export function getAirQualityStatus(index: number) {
  if (index === 1) return "Dobra";
  if (index === 2) return "Umiarkowana";
  if (index === 3) return "Niezdrowa dla wrażliwych";
  if (index === 4) return "Niezdrowa";
  if (index === 5) return "Bardzo niezdrowa";

  return "Niebezpieczna";
}
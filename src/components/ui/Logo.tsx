import { Link } from "react-router-dom";
import logoIcon from "../../assets/images/logoIcon.png";

export default function Logo() {
  return (
    <Link
      to="/"
      aria-label="Przejdź do strony głównej"
      className="flex items-center justify-center gap-3 text-[clamp(1.5rem,1vw+0.6rem,1.875rem)] font-semibold"
    >
      <img src={logoIcon} alt="Logo aplikacji Pogoda" className="w-12" />

      <span>Pogoda</span>
    </Link>
  );
}

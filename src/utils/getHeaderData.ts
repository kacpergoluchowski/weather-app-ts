type HeaderData = {
  title: string;
  subtitle: string;
};

type GetHeaderDataParams = {
  pathname: string;
  city: string;
};

export function getHeaderData({
  pathname,
  city,
}: GetHeaderDataParams): HeaderData {
  const pageConfig: Record<string, HeaderData> = {
    "/": {
      title: city,
      subtitle: "25 maj 2026, 07:48",
    },

    "/forecast": {
      title: "Prognoza tygodniowa",
      subtitle: city,
    },

    "/favorites": {
      title: "Ulubione lokalizacje",
      subtitle: "Zapisane miasta i lokalizacje",
    },

    "/air-quality": {
      title: "Jakość powietrza",
      subtitle: city,
    },

    "/radar": {
      title: "Radar opadów",
      subtitle: city,
    },

    "/settings": {
      title: "Ustawienia",
      subtitle: "Personalizacja aplikacji",
    },
  };

  return (
    pageConfig[pathname] ?? {
      title: "Pogoda",
      subtitle: city,
    }
  );
}
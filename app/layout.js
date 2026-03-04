import "@/styles/app.scss";

export const metadata = {
  title: "Asociația Kutumia",
  description:
    "Asociația Kutumia este o organizație non-guvernamentală, non-profit, născută din inițiativa a trei femei care și-au unit experiențele cu credința că prin educație și învățare construim oameni și comunități de viitor.",
  siteName: "Asociația Kutumia",
  url: "https://kutumia.ro",
  type: "website",

  icons: {
    icon: "/favicon.png",
  },

  metadataBase: new URL("https://kutumia.ro"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/ogimage.png",
  },
};

const SlinkApp = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
export default SlinkApp;

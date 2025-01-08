import { Helmet, HelmetProvider } from "react-helmet-async";
import "../../index.css";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider"; // Adjust the path as needed

// Import fonts via CSS (use @font-face in your CSS file or Google Fonts in index.html)
import "./fonts.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <html lang="en" />
        <title>Sarthak's Portfolio</title>
        <meta name="description" content="My New Modern Portfolio" />
      </Helmet>
      <div className="antialiased font-geist-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </div>
    </HelmetProvider>
  );
};

export default Layout;

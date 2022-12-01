import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";
import theme from "./theme";

export default function ChakraProviderSSR({ cookies, children }) {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <ChakraProvider resetCSS theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}

export function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}

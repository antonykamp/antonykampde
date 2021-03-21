import { Link, Text, Box } from "@chakra-ui/react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dom } from "@fortawesome/fontawesome-svg-core";

const SocialNetworks = [
  { logo: faEnvelope, link: "mailto:info@antonykamp.de" },
  { logo: faGithub, link: "https://github.com/antonykamp" },
  { logo: faLinkedin, link: "https://cz-gymnasium.jena.de" },
];
export default function DefaultFooter() {
  return (
    <Box
      as="footer"
      width="100%"
      background="#153351"
      margin="4"
      paddingY={["0", "3"]}
      alignItems="center"
      fontSize={["x-small", "sm"]}
    >
      <style>{dom.css()}</style>
      <Box textAlign="center" color="gray.300" m={["2", "3"]}>
        {SocialNetworks.map((item) => {
          return (
            <Link mx="6" variant="darkLinkStyle" href={item.link}>
              <FontAwesomeIcon size="2x" icon={item.logo} />
            </Link>
          );
        })}
      </Box>
      <Text textAlign="center" m={["1", "2"]} textColor="gray.300">
        {"© 2021 Antony Kamp. "}
        <Link variant="darkLinkStyle" href="legal">
          Impressum
        </Link>
        {". "}
        <Link variant="darkLinkStyle" href="data-protection">
          Datenschutz
        </Link>
        {" Powered by "}
        <Link variant="darkLinkStyle" href="https://nextjs.org/">
          next.js
        </Link>
        {", "}
        <Link variant="darkLinkStyle" href="https://vercel.com/">
          vercel
        </Link>
      </Text>
    </Box>
  );
}

import { Heading, Link, Text, Stack } from "@chakra-ui/layout";
import Layout from "../components/layout";

export default function Impressum() {
  return (
    <Layout>
      <Stack spacing="10">
        <Heading textAlign="center">Impressum</Heading>
        <Stack spacing="0">
          <Heading marginBottom="4" fontSize="xl" id="m46">
            Diensteanbieter
          </Heading>
          <Text>Antony Kamp</Text>
          <Text>Stahnsdorferstraße 142B</Text>
          <Text>14482 Potsdam</Text>
          <Text>Germany</Text>
        </Stack>
        <Stack spacing="0">
          <Heading marginBottom="4" fontSize="xl" id="m56">
            Kontaktmöglichkeiten
          </Heading>
          <Text>
            E-Mail-Adresse:{" "}
            <a href="mailto:info@antonykamp.de">info@antonykamp.de</a>.
          </Text>
        </Stack>
        <Link
          href="https://datenschutz-generator.de/?l=de"
          title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas
          Schwenke
        </Link>
      </Stack>
    </Layout>
  );
}

import { Heading, Text, Stack } from "@chakra-ui/layout";
import Link from "next/link";
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
            <Link href="mailto:info@antonykamp.de">
              <a>info@antonykamp.de</a>
            </Link>
          </Text>
        </Stack>
        <Link href="https://datenschutz-generator.de/?l=de">
          <a>
            Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas
            Schwenke
          </a>
        </Link>
      </Stack>
    </Layout>
  );
}

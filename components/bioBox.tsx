import { Stack, Text } from "@chakra-ui/layout";
import Link from "next/link";

export interface BioItem {
  startDate: string;
  endDate?: string;
  jobDescription: string;
  location: string;
  locationLink?: string;
}

export function BioBox({
  startDate,
  endDate,
  jobDescription,
  location,
  locationLink,
}: BioItem) {
  return (
    <Stack textAlign="left" spacing="0">
      <Text fontWeight="bold" fontSize="2xl">
        {startDate}
        {endDate && " - " + endDate}
      </Text>
      <Text fontSize="xl">
        {jobDescription + " @"}
        {locationLink ? (
          <Link href={locationLink}>
            <a style={{ color: "#153351" }}>{location}</a>
          </Link>
        ) : (
          location
        )}
      </Text>
    </Stack>
  );
}

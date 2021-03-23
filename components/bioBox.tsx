import { Link, Stack, Text } from "@chakra-ui/layout";

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
      <Text fontWeight="bold" fontSize="2xl">{startDate}{endDate && (" - " + endDate)}</Text>
      <Text fontSize="xl">
          {jobDescription + " @"}{locationLink? (<Link color="brand.900" href={locationLink}>{location}</Link>): location}
      </Text>
    </Stack>
  );
}

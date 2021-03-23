import { Link, Stack, Text } from "@chakra-ui/layout";

export interface AwardItem {
  date: string;
  title: string;
  location: string;
  locationLink?: string;
}

export function AwardBox({ date, title, location, locationLink }: AwardItem) {
  return (
    <Stack textAlign="left" spacing="0">
      <Text fontWeight="bold" fontSize="2xl">
        {locationLink ? <Link href={locationLink}>{location}</Link> : location}
      </Text>
      <Text fontSize="xl">
      {title}
      </Text>
      <Text colorScheme="gray">{date}</Text>
    </Stack>
  );
}

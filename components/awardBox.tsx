import { Stack, Text } from "@chakra-ui/layout";
import Link from "next/link";

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
        {locationLink ? (
          <Link href={locationLink}>
            <a>{location}</a>
          </Link>
        ) : (
          location
        )}
      </Text>
      <Text fontSize="xl" color="brand.900">
        {title}
      </Text>
      <Text color="gray">{date}</Text>
    </Stack>
  );
}

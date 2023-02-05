import { Box, Text } from "rebass";
export default function ({ year }) {
  return (
    <Box p={[4, 5, 6]} color="#4B4B4B">
      <Text fontSize={18}>© {year}</Text>
    </Box>
  );
}

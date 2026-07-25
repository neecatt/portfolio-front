// @ts-nocheck
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Select,
  Spinner,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { FiChevronDown, FiChevronUp, FiClock } from "react-icons/fi";

export const ContentOrderEditor = ({ items, saveOrder }) => {
  const [orderedItems, setOrderedItems] = useState(items || []);
  const [selectedId, setSelectedId] = useState("");
  const [saving, setSaving] = useState(false);
  const toast = useToast();
  const label = "experience";
  const selectedIndex = orderedItems.findIndex((item) => String(item.id) === selectedId);

  useEffect(() => setOrderedItems(items || []), [items]);

  const persist = async (next, successTitle) => {
    setOrderedItems(next);
    try {
      setSaving(true);
      await saveOrder(next);
      toast({ title: successTitle, status: "success", duration: 1800, isClosable: true });
    } catch (error) {
      setOrderedItems(items || []);
      toast({ title: `Could not save ${label} order`, status: "error", duration: 3000, isClosable: true });
    } finally {
      setSaving(false);
    }
  };

  const moveSelected = (direction) => {
    const target = selectedIndex + direction;
    if (selectedIndex < 0 || target < 0 || target >= orderedItems.length) return;
    const next = [...orderedItems];
    [next[selectedIndex], next[target]] = [next[target], next[selectedIndex]];
    setSelectedId(String(next[target].id));
    persist(next, `${label[0].toUpperCase()}${label.slice(1)} order saved`);
  };

  const sortByDate = () => {
    const getLatestYear = (value) => {
      if (value?.latest) return 9999;
      const years = String(value?.date || "").match(/\d{4}/g) || [];
      return years.length ? Math.max(...years.map(Number)) : 0;
    };
    const next = [...orderedItems].sort((a, b) =>
      getLatestYear(b) - getLatestYear(a)
    );
    setSelectedId(next[0]?.id ? String(next[0].id) : "");
    persist(next, `${label[0].toUpperCase()}${label.slice(1)} sorted by date`);
  };

  return (
    <Box mt={5} p={{ base: 4, md: 5 }} bg="blackAlpha.300" border="1px solid" borderColor="whiteAlpha.200" borderRadius="lg">
      <Heading size="xs" mb={2} color="#64ffda" textTransform="uppercase" letterSpacing="wide">
        Display order
      </Heading>
      <Text color="gray.400" fontSize="sm" mb={4}>
        Select an existing {label} to change its position in the public portfolio.
      </Text>

      {orderedItems.length === 0 ? (
        <Text color="gray.500">No experiences available yet.</Text>
      ) : (
        <>
          <Flex gap={2} direction={{ base: "column", md: "row" }} mb={4}>
            <Select flex="1" value={selectedId} onChange={(event) => setSelectedId(event.target.value)} placeholder={`Select a ${label}`} bg="whiteAlpha.100" borderColor="whiteAlpha.300" color="white">
              {orderedItems.map((item, index) => (
                <option key={item.id} value={item.id} style={{ color: "#111" }}>
                  {index + 1}. {item.jobTitle} — {item.companyName}
                </option>
              ))}
            </Select>
            <Flex gap={2} wrap="wrap">
              <Button size="sm" onClick={sortByDate} isDisabled={saving} leftIcon={<FiClock />} colorScheme="teal">
                Sort by date
              </Button>
              <Button size="sm" onClick={() => moveSelected(-1)} isDisabled={selectedIndex <= 0 || saving} leftIcon={<FiChevronUp />} variant="outline" colorScheme="teal">
                Move up
              </Button>
              <Button size="sm" onClick={() => moveSelected(1)} isDisabled={selectedIndex < 0 || selectedIndex === orderedItems.length - 1 || saving} rightIcon={<FiChevronDown />} variant="outline" colorScheme="teal">
                Move down
              </Button>
            </Flex>
          </Flex>

          <VStack align="stretch" spacing={2}>
            {orderedItems.map((item, index) => (
              <Flex key={item.id} align="center" gap={3} p={3} borderRadius="md" border="1px solid" borderColor={String(item.id) === selectedId ? "#64ffda" : "whiteAlpha.200"} bg={String(item.id) === selectedId ? "whiteAlpha.150" : "whiteAlpha.050"} cursor="pointer" onClick={() => setSelectedId(String(item.id))}>
                <Text color="#64ffda" minW="24px" fontWeight="bold">{index + 1}</Text>
                <Box flex="1" minW={0}>
                  <Text color="white" fontWeight="medium" noOfLines={1}>{item.jobTitle}</Text>
                  <Text color="gray.500" fontSize="xs" noOfLines={1}>{item.companyName} • {item.date}</Text>
                </Box>
                {saving && String(item.id) === selectedId && <Spinner size="sm" color="#64ffda" />}
              </Flex>
            ))}
          </VStack>
        </>
      )}
    </Box>
  );
};

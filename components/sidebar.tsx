import {
  Box,
  List,
  ListIcon,
  ListItem,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
  Link,
  Text,
} from "@chakra-ui/react";
import { FiHome, FiSearch, FiPlus, FiHeart } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import NextImage from "next/image";
import NextLink from "next/link";

const navMenu = [
  {
    name: "Home",
    icon: FiHome,
    route: "/",
  },
  {
    name: "Search",
    icon: FiSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: VscLibrary,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: FiPlus,
    route: "/",
  },
  {
    name: "Liked Songs",
    icon: FiHeart,
    route: "/",
  },
];

const playlists = new Array(50).fill(1).map((_, i) => `Playlist ${i + 1}`);

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      fontWeight="700"
      color="gray.400"
    >
      <Box paddingY="20px">
        <Box marginBottom="30px" paddingX="20px">
          <NextImage src="/logo.png" height={50} width={165} />
        </Box>
        <Box marginBottom="40px">
          <List spacing={4}>
            {navMenu.map((item) => (
              <ListItem
                key={item.name}
                paddingX="20px"
                fontSize="16px"
                _hover={{ color: "white" }}
                transition="color 200ms linear"
              >
                <LinkBox>
                  <NextLink href={item.route} passHref>
                    <LinkOverlay display="flex" alignItems="center">
                      <ListIcon
                        as={item.icon}
                        marginRight="14px"
                        width="25px"
                        height="25px"
                      />
                      {item.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box>
          <List spacing={4}>
            {musicMenu.map((item) => (
              <ListItem
                key={item.name}
                paddingX="20px"
                fontSize="16px"
                color="gray.400"
                _hover={{ color: "white" }}
                transition="color 200ms linear"
              >
                <LinkBox>
                  <NextLink href={item.route} passHref>
                    <LinkOverlay display="flex" alignItems="center">
                      <ListIcon
                        as={item.icon}
                        marginRight="14px"
                        width="25px"
                        height="25px"
                        bg="gray.400"
                        padding="4px"
                        borderRadius="2px"
                        color="gray.700"
                      />

                      {item.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      <Box paddingX="20px">
        <Divider borderBottomWidth="1.5px" />
      </Box>

      <Box height="calc(100vh - 440px)" overflowY="auto" padding="16px 20px">
        <List spacing={2}>
          {playlists.map((playlist) => (
            <ListItem _hover={{ color: "white" }}>
              <LinkBox width="100%">
                <NextLink href="/">
                  <LinkOverlay>{playlist}</LinkOverlay>
                </NextLink>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;

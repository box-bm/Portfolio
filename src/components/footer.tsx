import { Card, Grid, Text } from "@nextui-org/react";
import { Box } from "./box";
import { sites } from "../../lib/data/sites";
import Link from "next/link";
import socialMedia from "../../lib/data/socialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <Card css={{ borderRadius: 0 }} variant="flat">
        <Card.Body>
          <Grid.Container>
            <Grid xs={12} md={6}>
              <Box css={{ padding: "10px 12px" }}>
                <Text h3>Box BM Web site</Text>
                <Text blockquote>
                  "Measuring programming progress by lines of code is like
                  measure the progress of aircraft construction by weight."
                  <br />
                  <Text b span>
                    Bill Gates
                  </Text>
                </Text>
                <Text>

                </Text>
              </Box>
            </Grid>
            <Grid xs={12} md={3}>
              <Box css={{ padding: "10px 12px" }}>
                <Text h4>Links</Text>
                <ul>
                  {sites.map(({ name, path }) => (
                    <li key={name}>
                      <Link href={path}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </Box>
            </Grid>
            <Grid xs={12} md={3}>
              <Box css={{ padding: "10px 12px" }}>
                <Text h4>Social Media</Text>
                <ul>
                  {socialMedia.map(({ name, url, icon }) => (
                    <li key={name}>
                      <Link
                        href={url}
                        style={{ display: "flex", columnGap: 10 }}
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={icon} />
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Box>
            </Grid>
          </Grid.Container>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Text b>© 2023, brandonmanzo.dev</Text>
        </Card.Footer>
      </Card>
    </footer>
  );
};

export default Footer;

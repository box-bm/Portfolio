import { Card, CardBody, CardFooter, Divider } from "@heroui/react";
import { Box } from "@/components/box";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SitesProps from "../../lib/models/sitesProps";

type Props = SitesProps;

const Footer = ({ socialMedia, sites }: Props) => {
  return (
    <footer>
      <Card shadow="none" className="rounded-none border-1 border-gray-200">
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-1">
              <Box className="p-3">
                <h3 className="text-lg font-bold">Box BM Web site</h3>
                <blockquote className="text-sm">
                  &quot;Measuring programming progress by lines of code is like
                  measure the progress of aircraft construction by weight.&quot;
                  <br />
                  <span className="font-bold">Bill Gates</span>
                </blockquote>
              </Box>
            </div>
            <div className="col-span-1 md:col-span-1">
              <Box className="p-3">
                <h4 className="text-md font-semibold">Links</h4>
                <ul>
                  {sites.map(({ name, path }) => (
                    <li key={name}>
                      <Link href={path}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </Box>
            </div>
            <div className="col-span-1 md:col-span-1">
              <Box className="p-3">
                <h4 className="text-md font-semibold">Social Media</h4>
                <ul>
                  {socialMedia.map(({ name, url, icon }) => (
                    <li key={name}>
                      <Link
                        href={url}
                        className="flex gap-2"
                        target="_blank"
                      >
                        {icon && <FontAwesomeIcon icon={icon} />}
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Box>
            </div>
          </div>
        </CardBody>
        <Divider />
        <CardFooter>
          <span className="font-bold">© 2023, brandonmanzo.dev</span>
        </CardFooter>
      </Card>
    </footer>
  );
};

export default Footer;

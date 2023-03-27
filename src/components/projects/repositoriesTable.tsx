import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Badge,
  Col,
  Input,
  Row,
  Table,
  Tooltip,
  Text,
} from "@nextui-org/react";
import { IconButton } from "../buttons/iconButton";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Box } from "../box";

type Props = {
  repositories: GithubRepository[];
};

const RepositoriesTable = ({ repositories }: Props) => {
  const [filterValue, setFilterValue] = useState("");
  const [repos, setRepos] = useState(repositories);

  const onClickAction = (url: string) => {
    window.open(url);
  };

  useEffect(() => {
    if (filterValue) {
      setRepos(
        repositories.filter(
          (repo) =>
            repo.name?.toLowerCase().includes(filterValue.toLowerCase()) ||
            repo.description
              ?.toLowerCase()
              .includes(filterValue.toLowerCase()) ||
            repo.topics
              ?.join("|")
              .toLowerCase()
              .includes(filterValue.toLowerCase())
        )
      );
    } else {
      setRepos(repositories);
    }
  }, [filterValue]);

  return (
    <>
      <Box css={{ marginBottom: 10, marginTop: 26, maxWidth: 400 }}>
        <Input
          placeholder="Search by name or description"
          labelPlaceholder="Search"
          clearable
          fullWidth
          onChange={(e) => setFilterValue(e.target.value)}
          value={filterValue}
          onClearClick={(_e) => setFilterValue("")}
        />
      </Box>
      <Table
        bordered
        shadow={false}
        sticked
        lined
        css={{ minWidth: "100%", maxH: "30px" }}
      >
        <Table.Header>
          <Table.Column>Name</Table.Column>
          <Table.Column>Description</Table.Column>
          <Table.Column>Tags</Table.Column>
          <Table.Column>Access</Table.Column>
        </Table.Header>
        <Table.Body items={repos}>
          {(repos ?? []).map((repository) => (
            <Table.Row key={`repo_${repository.id}`}>
              <Table.Cell>
                <Text b>{repository.name}</Text>
              </Table.Cell>
              <Table.Cell>
                <Text
                  css={{
                    maxWidth: 400,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  {repository.description}
                </Text>
              </Table.Cell>
              <Table.Cell
                css={{
                  display: "flex",
                  flexWrap: "wrap",
                  overflowWrap: "break-word",
                  rowGap: 3,
                  columnGap: 2,
                  minHeight: 50,
                }}
              >
                {(repository.topics ?? []).map((topic) => (
                  <Badge key={topic} variant="flat">
                    {topic}
                  </Badge>
                ))}
              </Table.Cell>

              <Table.Cell>
                <Row justify="center" align="center" css={{ width: 60 }}>
                  {repository.html_url && (
                    <Col>
                      <Tooltip content="Github">
                        <IconButton
                          onClick={() => onClickAction(repository.html_url!)}
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </IconButton>
                      </Tooltip>
                    </Col>
                  )}
                  {repository.homepage && (
                    <Col>
                      <Tooltip content="WebSite">
                        <IconButton
                          onClick={() => onClickAction(repository.homepage!)}
                        >
                          <FontAwesomeIcon icon={faGlobe} />
                        </IconButton>
                      </Tooltip>
                    </Col>
                  )}
                </Row>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default RepositoriesTable;

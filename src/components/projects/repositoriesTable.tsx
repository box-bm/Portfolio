import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Badge,
  Input,
  Table,
  Tooltip,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableColumn,
} from "@heroui/react";
import { IconButton } from "../buttons/iconButton";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Box } from "@/components/box";
import useSWR from "swr";
import { githubRepositories } from "../../../lib/endpoints";
import { fetcher } from "../../../lib/utils/fetcher";

const RepositoriesTable = () => {
  const { data, isLoading } = useSWR<GithubRepository[]>(
    githubRepositories,
    fetcher
  );
  const [filterValue, setFilterValue] = useState("");
  const [repos, setRepos] = useState(data);

  const onClickAction = (url: string) => {
    window.open(url);
  };

  useEffect(() => {
    if (filterValue) {
      setRepos(
        data?.filter(
          (repo) =>
            repo.name?.toLowerCase().includes(filterValue.toLowerCase()) ||
            repo.description
              ?.toLowerCase()
              .includes(filterValue.toLowerCase()) ||
            repo.topics
              ?.join("|")
              .toLowerCase()
              .includes(filterValue.toLowerCase())
        ) ?? []
      );
    } else {
      setRepos(data ?? []);
    }
  }, [filterValue, data]);

  return (
    <>
      <Box css={{ marginBottom: 10, marginTop: 26, maxWidth: 400 }}>
        <Input
          placeholder="Search by name or description"
          fullWidth
          onChange={(e) => setFilterValue(e.target.value)}
          value={filterValue}
        />
      </Box>
      <Table
        className="w-full"
        aria-label="Repositories"
        selectionMode="single"
        selectionBehavior="replace"
      >
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Description</TableColumn>
          <TableColumn>Tags</TableColumn>
          <TableColumn>Access</TableColumn>
        </TableHeader>
        <TableBody
          items={repos}
          loadingState={isLoading ? "loading" : undefined}
        >
          {(repos ?? []).map((repository) => (
            <TableRow key={`repo_${repository.id}`}>
              <TableCell>
                <span className="font-bold">{repository.name}</span>
              </TableCell>
              <TableCell>
                <span className="max-w-[400px] text-ellipsis overflow-hidden whitespace-nowrap">
                  {repository.description}
                </span>
              </TableCell>
              <TableCell
                className="flex flex-wrap break-words gap-y-1 gap-x-1 min-h-[50px]"
              >
                {(repository.topics ?? []).map((topic) => (
                  <Badge key={topic} variant="flat">
                    {topic}
                  </Badge>
                ))}
              </TableCell>

              <TableCell>
                {repository.html_url && (
                  <Tooltip content="Github">
                    <IconButton
                      onPress={() => onClickAction(repository.html_url!)}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </IconButton>
                  </Tooltip>
                )}
                {repository.homepage && (
                  <Tooltip content="WebSite">
                    <IconButton
                      onPress={() => onClickAction(repository.homepage!)}
                    >
                      <FontAwesomeIcon icon={faGlobe} />
                    </IconButton>
                  </Tooltip>
                )}

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default RepositoriesTable;

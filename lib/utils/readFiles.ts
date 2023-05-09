import * as fs from "fs";
import _path from "path";

const readFiles = (path: string): string => {
  const filePath = _path.join(process.cwd(), path);
  const fileContents = fs.readFileSync(filePath, "utf8");

  return fileContents;
};

export default readFiles;

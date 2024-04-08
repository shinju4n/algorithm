import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";

const prompt = (question) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
};

const selectFolder = async (folders) => {
  for (let i = 0; i < folders.length; i++) {
    console.log(`${i + 1}. ${folders[i]}`);
  }

  const userInput = await prompt("폴더를 입력하세요: ");
  const selectedIndex = parseInt(userInput);

  if (
    isNaN(selectedIndex) ||
    selectedIndex < 1 ||
    selectedIndex > folders.length
  ) {
    console.error("잘못된 입력입니다.");
    return null;
  }

  return folders[selectedIndex - 1];
};

const getFolderList = () => {
  const folders = fs.readdirSync(process.cwd(), { withFileTypes: true });
  const excludeFolders = ["node_modules", ".git"];
  return folders
    .filter(
      (folder) => folder.isDirectory() && !excludeFolders.includes(folder.name)
    )
    .map((folder) => folder.name);
};

const createTestFiles = async () => {
  const folderList = getFolderList();

  if (folderList.length === 0) {
    console.error("폴더가 없습니다.");
    return;
  }

  const selectedFolderName = await selectFolder(folderList);

  if (!selectedFolderName) {
    return;
  }

  const testName = await prompt("테스트 이름을 입력하세요: ");
  const testFolderPath = path.join(process.cwd(), selectedFolderName, testName);

  if (!fs.existsSync(testFolderPath)) {
    fs.mkdirSync(testFolderPath, { recursive: true });
    const functionFileContent = "";
    const testFileContent = `test('${testName} test', () => {\n  // Write your test here\n});`;
    const readmeFileContent = "";

    fs.writeFileSync(
      path.join(testFolderPath, "function.js"),
      functionFileContent
    );
    fs.writeFileSync(
      path.join(testFolderPath, `${testName}.test.js`),
      testFileContent
    );
    fs.writeFileSync(path.join(testFolderPath, "index.md"), readmeFileContent);

    console.log(`테스트 폴더 및 파일이 생성되었습니다.`);
  } else {
    console.error(`이미 해당 이름의 테스트가 존재합니다.`);
  }
};

createTestFiles();

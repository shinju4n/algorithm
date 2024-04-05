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

const createTestFiles = async () => {
  const testName = await prompt("테스트 이름을 입력하세요: ");
  const testFolder = path.join(process.cwd(), testName);

  if (!fs.existsSync(testFolder)) {
    fs.mkdirSync(testFolder, { recursive: true });
    const functionFileContent = "";
    const testFileContent = `test('${testName} test', () => {\n  // Write your test here\n});`;
    const readmeFileContent = "";

    fs.writeFileSync(path.join(testFolder, "function.js"), functionFileContent);
    fs.writeFileSync(
      path.join(testFolder, `${testName}.test.js`),
      testFileContent
    );
    fs.writeFileSync(path.join(testFolder, "index.md"), readmeFileContent);

    console.log(`테스트 폴더 및 파일이 생성되었습니다.`);
  } else {
    console.error(`이미 해당 이름의 테스트가 존재합니다.`);
  }
};

createTestFiles();

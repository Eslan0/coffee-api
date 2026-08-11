const { Project } = require("ts-morph");
const path = require("path");

const projectRoot = path.resolve("./");
const srcDir = path.resolve(projectRoot, "src");

const project = new Project({
  tsConfigFilePath: path.join(projectRoot, "tsconfig.json"),
  skipAddingFilesFromTsConfig: false,
});

const alias = "@";

function normalize(p) {
  return p.replace(/\\/g, "/");
}

function isRelativeImport(value) {
  return value.startsWith(".");
}

function toAlias(importPath, filePath) {
  const absolute = path.resolve(path.dirname(filePath), importPath);

  const normalizedSrc = normalize(srcDir);
  const normalized = normalize(absolute);

  if (!normalized.startsWith(normalizedSrc)) return importPath;

  const relative = normalize(path.relative(srcDir, absolute));

  return `${alias}/${relative}`;
}

const files = project.getSourceFiles(["src/**/*.ts", "src/**/*.js"]);

let changedFiles = 0;
let changedImports = 0;

for (const file of files) {
  let fileChanged = false;

  const imports = file.getImportDeclarations();

  for (const imp of imports) {
    const value = imp.getModuleSpecifierValue();

    if (!isRelativeImport(value)) continue;

    const newValue = toAlias(value, file.getFilePath());

    if (newValue !== value) {
      imp.setModuleSpecifier(newValue);
      console.log(`✔ ${value} > ${newValue}`);
      fileChanged = true;
      changedImports++;
    }
  }

  if (fileChanged) {
    file.saveSync(); // OK aqui
    changedFiles++;
  }
}

console.log("\nfiles changed:", changedFiles);
console.log("imports changed:", changedImports);

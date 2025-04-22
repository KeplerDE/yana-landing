#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const defaultConfig = {
  brand: "YourBrand",
  title: "Transform Your Style",
  description: "Персональный стилист: стиль, уверенность и индивидуальность.",
  primaryColor: "#3B82F6",
  accentColor: "#F59E0B",
  outputDir: "./dist",
};

function parseArgs() {
  const args = process.argv.slice(2);
  const config = { ...defaultConfig };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith("--")) {
      const key = arg.slice(2).replace(/-./g, x => x[1].toUpperCase());
      config[key] = args[i + 1];
      i++;
    }
  }

  return config;
}

function createConfigFile(config) {
  const configDir = path.join(process.cwd(), "src", "lib");
  const configPath = path.join(configDir, "landing-config.ts");

  if (!fs.existsSync(configDir)) fs.mkdirSync(configDir, { recursive: true });

  const configContent = `// Generated config
export const landingConfig = {
  brand: "${config.brand}",
  title: "${config.title}",
  description: "${config.description}",
  primaryColor: "${config.primaryColor}",
  accentColor: "${config.accentColor}",
};`;

  fs.writeFileSync(configPath, configContent, "utf8");
  console.log(`✅ Конфиг сгенерирован: ${configPath}`);
}

function updateMetadata(config) {
  const layoutPath = path.join(process.cwd(), "src", "app", "layout.tsx");
  if (!fs.existsSync(layoutPath)) {
    console.error("❌ layout.tsx не найден");
    return;
  }

  let layoutContent = fs.readFileSync(layoutPath, "utf8");

  layoutContent = layoutContent.replace(
    /title: "[^"]*"/,
    `title: "${config.brand} | ${config.title}"`
  );

  layoutContent = layoutContent.replace(
    /description: "[^"]*"/,
    `description: "${config.description}"`
  );

  fs.writeFileSync(layoutPath, layoutContent, "utf8");
  console.log(`✅ Метаданные обновлены в layout.tsx`);
}

function buildProject(config) {
  try {
    console.log("🔨 Сборка проекта...");
    execSync("npm run build", { stdio: "inherit" });

    if (!fs.existsSync(config.outputDir)) {
      fs.mkdirSync(config.outputDir, { recursive: true });
    }

    execSync(`cp -r ./.next ${config.outputDir}/`);
    execSync(`cp -r ./public ${config.outputDir}/`);
    execSync(`cp ./package.json ${config.outputDir}/`);

    console.log(`✅ Готово! Результат: ${config.outputDir}`);
  } catch (e) {
    console.error("❌ Ошибка сборки:", e.message);
    process.exit(1);
  }
}

function main() {
  const config = parseArgs();
  console.log("⚙️ Конфигурация:", config);

  createConfigFile(config);
  updateMetadata(config);
  buildProject(config);
}

main();

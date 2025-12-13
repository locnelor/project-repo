import { existsSync } from "node:fs"
import { join } from "node:path"
import { defineLibraryConfig } from "./library";
import { defineApplicationConfig } from "./application";


export const defineConfig = (config?: any) => {
  const type = existsSync(join(process.cwd(), "index.html")) ? "application" : "library";
  switch (type) {
    case "application":
      return defineApplicationConfig(config)
    case "library":
      return defineLibraryConfig()
  }
}
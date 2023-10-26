import { Login as LoginDesign } from "@cosmicdapp/design";
import React from "react";
import { config } from "../../../config";
import { pathTokens } from "../../paths";
import cosmWasmLogo from "./assets/comdexer.png";

export function Login(): JSX.Element {
  return <LoginDesign pathAfterLogin={pathTokens} appName="Wallet" appLogo={cosmWasmLogo} config={config} />;
}

import { PageLayout } from "@cosmicdapp/design";
import { useSdk } from "@cosmicdapp/logic";
import { Typography } from "antd";
import React, { useState } from "react";
import { FormSearchName } from "./components/FormSearchName";
import { MainStack } from "./style";
import { TokenList } from "./components/TokenList";

const { Title } = Typography;

export function Tokens(): JSX.Element {
  const { address } = useSdk();
  const [currentAddress, setCurrentAddress] = useState(address);

  return (
    <PageLayout>
      <MainStack>
        <Title>DONATE TO A CAUSE</Title>
        <FormSearchName currentAddress={currentAddress} setCurrentAddress={setCurrentAddress} />
        <TokenList currentAddress={currentAddress} />
      </MainStack>
    </PageLayout>
  );
}

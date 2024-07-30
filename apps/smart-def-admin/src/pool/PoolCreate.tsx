import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { InvestmentTitle } from "../investment/InvestmentTitle";

export const PoolCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="investments"
          reference="Investment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvestmentTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <NumberInput label="totalLiquidity" source="totalLiquidity" />
      </SimpleForm>
    </Create>
  );
};

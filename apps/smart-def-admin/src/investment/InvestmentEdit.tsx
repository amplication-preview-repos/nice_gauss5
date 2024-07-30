import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AnalyticsTitle } from "../analytics/AnalyticsTitle";
import { PoolTitle } from "../pool/PoolTitle";
import { UserTitle } from "../user/UserTitle";

export const InvestmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceArrayInput
          source="analyticsItems"
          reference="Analytics"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnalyticsTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="investmentDate" source="investmentDate" />
        <ReferenceInput source="pool.id" reference="Pool" label="pool">
          <SelectInput optionText={PoolTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { InvestmentTitle } from "../investment/InvestmentTitle";
import { UserTitle } from "../user/UserTitle";

export const AnalyticsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="analysisDate" source="analysisDate" />
        <ReferenceInput
          source="investment.id"
          reference="Investment"
          label="investment"
        >
          <SelectInput optionText={InvestmentTitle} />
        </ReferenceInput>
        <NumberInput label="profit" source="profit" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

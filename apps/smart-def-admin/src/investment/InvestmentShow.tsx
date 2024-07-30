import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { INVESTMENT_TITLE_FIELD } from "./InvestmentTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { POOL_TITLE_FIELD } from "../pool/PoolTitle";

export const InvestmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="investmentDate" source="investmentDate" />
        <ReferenceField label="pool" source="pool.id" reference="Pool">
          <TextField source={POOL_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Analytics"
          target="investmentId"
          label="AnalyticsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="analysisDate" source="analysisDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="investment"
              source="investment.id"
              reference="Investment"
            >
              <TextField source={INVESTMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="profit" source="profit" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

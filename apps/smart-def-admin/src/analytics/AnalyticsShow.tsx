import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { INVESTMENT_TITLE_FIELD } from "../investment/InvestmentTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AnalyticsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};

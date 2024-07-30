import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { INVESTMENT_TITLE_FIELD } from "../investment/InvestmentTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AnalyticsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AnalyticsItems"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};

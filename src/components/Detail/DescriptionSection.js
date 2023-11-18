import React from 'react';
import { DataTable } from 'react-native-paper';
import Typography from '../Global/Typography';
import VStack from '../Global/VStack';

export default function DescriptionSection({ data }) {
  return (
    <VStack gap="10px">
      <Typography size="large" weight="medium">
        Description & Specification
      </Typography>
      <Typography size="medium" weight="light" color="secondary">
        {data.description}
      </Typography>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>
            <Typography size="medium" weight="bold" color="secondary">
              Specification
            </Typography>
          </DataTable.Title>
        </DataTable.Header>

        {data.specifications?.map((item) => (
          <DataTable.Row>
            <DataTable.Cell>{item?.title}</DataTable.Cell>
            <DataTable.Cell>{item?.description}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </VStack>
  );
}

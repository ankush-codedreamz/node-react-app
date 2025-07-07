import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  Box,
  Tabs,
  List,
  Link,
  InlineStack
} from "@shopify/polaris";

import {useState, useCallback} from 'react';

function TabsDefaultExample() {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'home',
      content: 'Home',
      accessibilityLabel: 'Home',
      panelID: 'home-content'
    },
    {
      id: 'products',
      content: 'Products',
      panelID: 'products-content',
    },
    {
      id: 'orders',
      content: 'Orders',
      panelID: 'orders-content',
    },
  ];

  const tabComponents = {
    home: () => (
      <Card>
      <Layout.Section>
      <BlockStack gap="200">
      <Text as="h2" variant="headingMd">
        Node React App
      </Text>
      <Text as="p" variant="bodyMd">
        This is my first App using Remix, Prisma, Polaris, App Brodge, GraphQL API.<br/>
        This app contains: 
        <List type="bullet">
        <List.Item>Product Management</List.Item>
        <List.Item>Order Management</List.Item>
        <List.Item>and much more...</List.Item>
      </List>
        <br/>      
        Let's Build it. 🚀
      </Text>
      </BlockStack>
      </Layout.Section>
      </Card>
    ),
    products: () => (
      <Layout.Section>
      <BlockStack gap="500">
        <Card>
        <Text as="h2" variant="headingMd">
          Products Management
        </Text>
        <Text as="p" variant="bodyMd">
          App Actions:<br/>
          Create product, Get product, Update product, Delete product.
        </Text>
        </Card>
        <Card>
        <Text as="h2" variant="headingMd">
          Create Product
        </Text>
        <Text as="p" variant="bodyMd"></Text>
      </Card>   
      </BlockStack>
      </Layout.Section>
    ),
    orders: () => (
      <div className=""></div>
    )
  };

  const TabComponent = tabComponents[tabs[selected].id];
  const tabContent = TabComponent ? <TabComponent /> : <p>Something went wrong!</p>;


  return (
    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        {tabContent}
    </Tabs>
  );
}

export default TabsDefaultExample;
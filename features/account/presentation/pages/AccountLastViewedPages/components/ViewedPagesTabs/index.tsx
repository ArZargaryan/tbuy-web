import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import styles from "./viewed-pages-tabs.module.scss";
import { Product } from "@libs/domain/model/product";
import { Service } from "@libs/domain/model/service";
import CardsList from "@libs/presentation/components/cards/CardsList";
import InfiniteCard from "@libs/presentation/components/cards/InfiniteCardList";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface TabsProps {
  products: Product[];
  services: Service[];
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

function ViewedPagesTabs(props: TabsProps) {
  const { products, services } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  }
  return (
    <div className={styles.tabs}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="ապրանքներ" {...a11yProps(0)} />
          <Tab label="ծառայություններ" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CardsList cards={products} loading={false} extra_type="account" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CardsList cards={services} loading={false} extra_type="account" />
      </TabPanel>
    </div>
  );
}

export default ViewedPagesTabs;

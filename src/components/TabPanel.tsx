// TabPanel.tsx
import React from "react";

interface TabPanelProps {
  children: React.ReactNode;
  value: string | number;
  index: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && children}
    </div>
  );
};

export default TabPanel;

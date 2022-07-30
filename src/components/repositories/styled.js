import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 8px;
  border: 1px solid #5c677b;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: #373e47;
  padding: 8px 16px;
  margin: 0 16px;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 2px 1px 3px rgba(205,217,229,255);
    font-weight: bold;
  }

  &:hover {
    background-color: #444c56;
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
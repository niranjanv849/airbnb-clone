import React, { useState } from "react";
import { Tabs } from "antd";
import TabsContent from "./TabsContent";
import style from "../style/tabsContent.module.css";

export default function TabsSection() {
  const [data, setData] = useState([
    {
      tab: "Mountain cabins",
      tabData: [
        {
          col: 1,
          colData: [
            { title: "Orlando", description: "Florida" },
            { title: "Orlando", description: "Florida" },
            { title: "Orlando", description: "Florida" },
          ],
        },
        {
          col: 2,
          colData: [
            { title: "Orlando", description: "Florida" },
            { title: "Orlando", description: "Florida" },
            { title: "Orlando", description: "Florida" },
          ],
        },
        {
          col: 3,
          colData: [
            { title: "Orlando", description: "Florida" },
            { title: "Orlando", description: "Florida" },
            { title: "Orlando", description: "Florida" },
          ],
        },
        {
          col: 4,
          colData: [
            { title: "Orlando", description: "Florida" },
            { title: "Orlando", description: "Florida" },
            { title: "Orlando", description: "Florida" },
          ],
        },
      ],
    },
    {
      tab: "Beach destinations",
      tabData: [
        {
          col: 1,
          colData: [
            { title: "xyz", description: "Florida" },
            { title: "Orlando", description: "Florida" },
            { title: "Orlando", description: "Florida" },
          ],
        },
        {
          col: 2,
          colData: [
            { title: "Orlando", description: "Florida" },
            { title: "Orlando", description: "Florida" },
            { title: "Orlando", description: "Florida" },
          ],
        },
        {
          col: 3,
          colData: [
            { title: "Orlando", description: "Florida" },
            { title: "Orlando", description: "Florida" },
            { title: "Orlando", description: "Florida" },
          ],
        },
        {
          col: 4,
          colData: [
            { title: "Orlando", description: "Florida" },
            { title: "Orlando", description: "Florida" },
            { title: "Orlando", description: "Florida" },
          ],
        },
      ],
    },
    {
      tab: "Popular destinations",
      tabData: [
        {
          col: 1,
          colData: [
            { title: "abcd", description: "Florida" },
            { title: "Orlando", description: "Florida" },
            { title: "Orlando", description: "Florida" },
          ],
        },
        {
          col: 2,
          colData: [
            { title: "Orlando", description: "Florida" },
            { title: "Orlando", description: "Florida" },
            { title: "Orlando", description: "Florida" },
          ],
        },
        {
          col: 3,
          colData: [
            { title: "Orlando", description: "Florida" },
            { title: "Orlando", description: "Florida" },
            { title: "Orlando", description: "Florida" },
          ],
        },
        {
          col: 4,
          colData: [
            { title: "Orlando", description: "Florida" },
            { title: "Orlando", description: "Florida" },
            { title: "Orlando", description: "Florida" },
          ],
        },
      ],
    },
  ]);
  const { TabPane } = Tabs;
  return (
    <div className={style.TabsSection}>
      <h1>Inspiration for future getaways</h1>
      <Tabs defaultActiveKey="1">
        {data.map((item, i) => (
          <TabPane tab={item.tab} key={i + 1}>
            <TabsContent data={item.tabData} />
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}

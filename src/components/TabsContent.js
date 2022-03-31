import React from "react";
import style from "../style/tabsContent.module.css";

export default function TabsContent({ data }) {
  return (
    <div className={style.TabsContent}>
      <div className="row">
        {data.map((item) => (
          <div className="col-sm-6 col-lg-3">
            {item.colData.map((data) => (
              <div className="mb-4">
                <h4>{data.title}</h4>
                <p>{data.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

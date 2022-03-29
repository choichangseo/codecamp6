import { DatePicker, Space } from "antd";
import { useState } from "react";
import "antd/dist/antd.css";

export default function CalenderPage() {
  const [dates, setDates] = useState("");

  const datepick = (date: any, dates: any) => {
    setDates(dates);
  };

  return (
    <>
      <Space direction="vertical">
        <DatePicker onChange={datepick} />
      </Space>
      <div>{dates}</div>
    </>
  );
}

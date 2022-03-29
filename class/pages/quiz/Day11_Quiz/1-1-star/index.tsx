import { Rate } from "antd";
import { useState } from "react";
import "antd/dist/antd.css";

export default function StarPage() {
  const [value, setValue] = useState(3);

  const handleChange = (value: number) => {
    setValue(value);
    alert(`${value}`);
  };

  return (
    <>
      <Rate onChange={handleChange} value={value} />
      <div>{value}</div>
    </>
  );
}

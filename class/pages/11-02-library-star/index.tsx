import { useState } from "react";
import { Rate } from "antd";

export default function LibraryStarPage() {
  const [value, setValue] = useState(3);

  const handleChange = (value: number) => {
    setValue(value);
  };

  return (
    <div>
      <Rate onChange={handleChange} value={value} />
      <div>{value}asdasd</div>
    </div>
  );
}

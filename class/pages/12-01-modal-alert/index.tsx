import { Modal } from "antd";
import "antd/dist/antd.css";

export default function MadaAlertPage() {
  const onClickSuccessButton = () => {
    Modal.success({ content: "게시물 등록에 성공했습니다." });
  };

  const onClickFailButton = () => {
    Modal.error({ content: "게시물 등록에 실패했습니다." });
  };
  return (
    <div>
      <button onClick={onClickSuccessButton}>성공</button>
      <button onClick={onClickFailButton}>실패</button>
    </div>
  );
}

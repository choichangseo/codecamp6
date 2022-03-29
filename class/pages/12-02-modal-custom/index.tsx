import { useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";

export default function ModalCustomPage() {
  const [isOpen, setisOpen] = useState(false);
  const [password, setPassword] = useState("");

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const showModal = () => {
    setisOpen(true);
  };

  const handleOk = () => {
    setisOpen(false);
  };

  const handleCancel = () => {
    setisOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        비밀번호 입력: <input type="password" onChange={onChangePassword} />
      </Modal>
    </>
  );
}

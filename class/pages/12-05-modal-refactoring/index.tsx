import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";
import "antd/dist/antd.css";

export default function ModalCustomPage() {
  const [isOpen, setisOpen] = useState(false);

  const onToggleModal = () => {
    setisOpen((prev) => !prev);
  };

  const handleComplete = (data) => {
    console.log(data);
    onToggleModal();
  };

  return (
    <>
      <Button onClick={onToggleModal}>Open Modal</Button>
      {isOpen && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}

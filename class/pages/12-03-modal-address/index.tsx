import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";
import "antd/dist/antd.css";

export default function ModalCustomPage() {
  const [isOpen, setisOpen] = useState(false);

  const handleComplete = (data) => {
    console.log(data);
    setisOpen(false);
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
      {/* {모달 삭제하고 새로 만드는 방법} */}
      {isOpen && (
        <Modal
          title="Basic Modal"
          visible={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
      {/* {모달 숨겼다가 나타나게 하는 방법} */}
      {/* <Modal
        title="Basic Modal"
        visible={isOpen} 
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcode onComplete={handleComplete} />
      </Modal> */}
    </>
  );
}

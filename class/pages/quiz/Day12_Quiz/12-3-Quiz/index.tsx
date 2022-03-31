import { useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import DaumPostcode from "react-daum-postcode";

export default function ModalPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myhome, setMyhome] = useState("");
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleComplete = (data: any) => {
    setIsModalVisible(false);
    setMyhome(data.address);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      {isModalVisible && (
        <Modal
          title="게시글 등록"
          visible={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
      <div>{myhome}</div>
    </>
  );
}

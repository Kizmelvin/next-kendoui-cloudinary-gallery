import { useState } from "react";
import styles from "../styles/Home.module.css";
import Modal from "./Modal";
import {
  Card,
  CardHeader,
  CardImage,
  CardTitle,
  CardBody,
  Avatar,
} from "@progress/kendo-react-layout";

const CloudAssets = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const baseUrl = "https://res.cloudinary.com/kizmelvin/image";

  return (
    <>
      <div className={styles.grid}>
        {data &&
          data.resources.map((item) => {
            const { format, public_id, version, type } = item;
            return (
              <div
                style={{ padding: "10px" }}
                key={version}
                onClick={() => {
                  setIsOpen(true);
                  setModalData(item);
                }}
              >
                <Card>
                  <CardHeader className="k-hbox">
                    <Avatar type="icon" size="small" shape="circle">
                      <img
                        src="https://a.storyblok.com/f/51376/x/da286b5766/cloudinary.svg"
                        alt="avatar"
                        width="45px"
                        height="45px"
                      />
                    </Avatar>
                    <CardTitle
                      style={{
                        marginBottom: "4px",
                      }}
                    >
                      {"Image Title"}{" "}
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <CardImage
                      src={`${baseUrl}/${type}/v${version}/${public_id}.${format}`}
                      alt="first from cloud.."
                      width="420px"
                      height="300px"
                    />
                  </CardBody>
                </Card>
              </div>
            );
          })}
      </div>
      {isOpen && (
        <Modal baseUrl={baseUrl} data={modalData} setIsOpen={setIsOpen} />
      )}
    </>
  );
};
export default CloudAssets;

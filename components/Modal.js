import { Button } from "@progress/kendo-react-buttons";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";
import { Typography } from "@progress/kendo-react-common";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardActions,
  CardImage,
  Avatar,
} from "@progress/kendo-react-layout";

function Modal({ baseUrl, data, setIsOpen }) {
  const { format, public_id, version, type } = data;
  const closeDialog = () => {
    setIsOpen(false);
  };
  return (
    <Dialog onClose={closeDialog} width={620} height={720}>
      <Card>
        <CardHeader
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Avatar type="icon" size="medium" shape="circle">
            <img
              src={`${baseUrl}/${type}/v${version}/${public_id}.${format}`}
              alt="dialog avatar"
              width="45px"
              height="45px"
            />
          </Avatar>
          <CardTitle>Image Title</CardTitle>
          <CardActions>
            <Button primary={true} look="outline" onClick={closeDialog}>
              X
            </Button>
          </CardActions>
        </CardHeader>
        <CardBody>
          <img
            src={`${baseUrl}/${type}/v${version}/${public_id}.${format}`}
            alt="dialog image"
            width="550"
            height="450"
          />
        </CardBody>
      </Card>
      <DialogActionsBar>
        <Typography.h3 margin={"xlarge"} padding={5}>
          Details: This Image is from{" "}
          <span>
            <a
              href="https://res.cloudinary.com/kizmelvin"
              target="_blank"
              rel="noreferrer"
            >
              Cloudinary
            </a>
          </span>
        </Typography.h3>
        <Typography.h3 margin={"xlarge"}>
          Credits:{" "}
          <span>
            <a href="https://unsplash.com/">Unsplash</a>
          </span>
        </Typography.h3>
      </DialogActionsBar>
    </Dialog>
  );
}
export default Modal;

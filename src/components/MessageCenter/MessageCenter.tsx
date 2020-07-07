import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonImg,
  IonBackButton,
  IonButtons,
  IonList,
  IonItem,
  IonText,
  IonRadioGroup,
  IonLabel,
  IonRadio,
  IonTextarea,
  IonSelectOption,
  IonSelect,
  IonInput,
  IonButton,
  IonRouterLink,
  IonProgressBar,
} from "@ionic/react";

import { FileChooser, FileChooserOriginal } from "@ionic-native/file-chooser";

import "./MessageCenter.scss";

import iconBack from "../../images/icon-back.png";
import imgUpload from "../../images/icon-upload.png";
import iconCloud from "../../images/icon-cloudupload.png";
import iconCancel from "../../images/icon-cancel.png";
import { url } from "inspector";
import { debug } from "console";

const MessageCenter: React.FC = () => {
  const [image, setImage] = useState("");

  const openFile = async () => {
    const data = await FileChooser.open();
    setImage(data);
    console.log("a: ", data);
    console.debug(123);
  };

  return (
    <IonPage className="appointment">
      <IonHeader className="ion-no-border appointment__header">
        <IonToolbar className="appointment__toolbar">
          <IonButtons slot="start">
            <Link to="/">
              <IonImg className="icon icon-back" src={iconBack} alt="" />
            </Link>
          </IonButtons>

          <IonTitle className="appointment__title-header">
            Message Center
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="mypicture">
          <IonText className="mypicture__title">Upload Picture</IonText>
          <IonList className="mypicture__draglist">
            <IonImg className="img img--upload" src={imgUpload} alt="" />
            <IonImg src={image} alt="" />
            <IonList className="mypicture__browser">
              <IonText className="mypicture__desc">Drag files here or </IonText>
              <IonButton
                onClick={openFile}
                className="btn btn--browse color color--blue"
              >
                browse
              </IonButton>
            </IonList>
          </IonList>
          <IonList className="ion-no-padding">
            <IonText className="mypicture__title">
              Write a relevant message
            </IonText>
            <IonTextarea
              style={{ height: 130 }}
              className="childDaily__comment"
              placeholder="Write Comment"
            ></IonTextarea>
          </IonList>
          <IonButton className="btn btn--send">Submit</IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default MessageCenter;

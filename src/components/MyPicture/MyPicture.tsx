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
import "./MyPicture.scss";

import iconBack from "../../images/icon-back.png";
import imgUpload from "../../images/icon-upload.png";
import iconCloud from "../../images/icon-cloudupload.png";
import iconCancel from "../../images/icon-cancel.png";

const MyPicture: React.FC = () => {
  const [week, setWeek] = useState(["Week 1"]);
  const [day, setDay] = useState(["Monday"]);
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

          <IonTitle className="appointment__title-header">My Picture</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="mypicture">
          <IonText className="mypicture__title">Upload Picture</IonText>
          <IonList className="mypicture__draglist">
            <IonImg className="img img--upload" src={imgUpload} alt="" />
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
          <IonList className="mypicture__list ion-no-padding">
            <IonList className="mypicture__item ion-no-padding">
              <IonImg className="icon icon--cloud" src={iconCloud} alt="" />
              <IonList className="mypicture__width">
                <IonList className="mypicture__list-text ion-no-padding">
                  <IonText className="mypicture__text">
                    Name of file.jpg
                  </IonText>
                  <IonText className="mypicture__text">10 kb of 20 kb</IonText>
                </IonList>
                <IonProgressBar
                  className="mypicture__progress"
                  value={0.5}
                ></IonProgressBar>
              </IonList>
              <IonButton className="btn btn--cancel ion-no-padding">
                <IonImg className="icon icon--cancel" src={iconCancel} alt="" />
              </IonButton>
            </IonList>
            <IonList className="mypicture__item ion-no-padding">
              <IonImg className="icon icon--cloud" src={iconCloud} alt="" />
              <IonList className="mypicture__width">
                <IonList className="mypicture__list-text ion-no-padding">
                  <IonText className="mypicture__text">
                    Name of file.jpg
                  </IonText>
                  <IonText className="mypicture__text">13 kb of 20 kb</IonText>
                </IonList>
                <IonProgressBar
                  className="mypicture__progress"
                  value={0.7}
                ></IonProgressBar>
              </IonList>
              <IonButton className="btn btn--cancel ion-no-padding">
                <IonImg className="icon icon--cancel" src={iconCancel} alt="" />
              </IonButton>
            </IonList>
            <IonList className="mypicture__item ion-no-padding">
              <IonImg className="icon icon--cloud" src={iconCloud} alt="" />
              <IonList className="mypicture__width">
                <IonList className="mypicture__list-text ion-no-padding">
                  <IonText className="mypicture__text">
                    Name of file.jpg
                  </IonText>
                  <IonText className="mypicture__text">10 kb of 20 kb</IonText>
                </IonList>
                <IonProgressBar
                  className="mypicture__progress"
                  value={0.5}
                ></IonProgressBar>
              </IonList>
              <IonButton className="btn btn--cancel ion-no-padding">
                <IonImg className="icon icon--cancel" src={iconCancel} alt="" />
              </IonButton>
            </IonList>
            <IonList className="mypicture__item ion-no-padding">
              <IonImg className="icon icon--cloud" src={iconCloud} alt="" />
              <IonList className="mypicture__width">
                <IonList className="mypicture__list-text ion-no-padding">
                  <IonText className="mypicture__text">
                    Name of file.jpg
                  </IonText>
                  <IonText className="mypicture__text">13 kb of 20 kb</IonText>
                </IonList>
                <IonProgressBar
                  className="mypicture__progress"
                  value={0.7}
                ></IonProgressBar>
              </IonList>
              <IonButton className="btn btn--cancel ion-no-padding">
                <IonImg className="icon icon--cancel" src={iconCancel} alt="" />
              </IonButton>
            </IonList>
          </IonList>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default MyPicture;

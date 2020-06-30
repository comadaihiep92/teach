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
} from "@ionic/react";

import "./PaintClassroom.scss";

import iconBack from "../../images/icon-back.png";
import imgChild from "../../images/img-child.png";
import imgChild2 from "../../images/img-child2.png";
import imgChild3 from "../../images/img-child3.png";

const PaintClassroom: React.FC = () => {
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
            Paint Classroom
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="paintClass">
          <IonList className="paintClass__item">
            <IonImg className="img img--child" src={imgChild} alt="" />
            <IonText className="paintClass__text">Alya Ali.</IonText>
            <IonLabel className="paintClass__point">+1</IonLabel>
          </IonList>
          <IonList className="paintClass__item">
            <IonImg className="img img--child" src={imgChild2} alt="" />
            <IonText className="paintClass__text">Yassmin Ali.</IonText>
            <IonLabel className="paintClass__point">+3</IonLabel>
          </IonList>
          <IonList className="paintClass__item">
            <IonImg className="img img--child" src={imgChild} alt="" />
            <IonText className="paintClass__text">Ayshwarya Ali.</IonText>
            <IonLabel className="paintClass__point">+1</IonLabel>
          </IonList>
          <IonList className="paintClass__item">
            <IonImg className="img img--child" src={imgChild3} alt="" />
            <IonText className="paintClass__text">Mohsen Ahmed.</IonText>
            <IonLabel className="paintClass__point">+2</IonLabel>
          </IonList>
          <IonList className="paintClass__item">
            <IonImg className="img img--child" src={imgChild} alt="" />
            <IonText className="paintClass__text">Alya Ali.</IonText>
            <IonLabel className="paintClass__point">+1</IonLabel>
          </IonList>
          <IonList className="paintClass__item">
            <IonImg className="img img--child" src={imgChild3} alt="" />
            <IonText className="paintClass__text">Yassin Ali.</IonText>
            <IonLabel className="paintClass__point">+3</IonLabel>
          </IonList>
          <IonList className="paintClass__item">
            <IonImg className="img img--child" src={imgChild} alt="" />
            <IonText className="paintClass__text">Ayshwarya Ali.</IonText>
            <IonLabel className="paintClass__point">+3</IonLabel>
          </IonList>
          <IonList className="paintClass__item">
            <IonImg className="img img--child" src={imgChild3} alt="" />
            <IonText className="paintClass__text">Mahmoud Ali.</IonText>
            <IonLabel className="paintClass__point">+2</IonLabel>
          </IonList>
          <IonList className="paintClass__item">
            <IonImg className="img img--child" src={imgChild3} alt="" />
            <IonText className="paintClass__text">Alya Ali.</IonText>
            <IonLabel className="paintClass__point">+1</IonLabel>
          </IonList>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PaintClassroom;

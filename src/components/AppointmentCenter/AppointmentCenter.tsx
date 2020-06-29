import React from "react";
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
} from "@ionic/react";

import "./AppointmentCenter.scss";

import iconBack from "../../images/icon-back.png";
import iconClock from "../../images/icon-clock.png";
import img1 from "../../images/img-parent.png";
import img2 from "../../images/img-parent2.png";

const AppointmentCenter: React.FC = () => {
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
            Appointment Center
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="appointment__list">
          <IonText className="appointment__title">
            Parents are sure to be present
          </IonText>

          <IonList className="appointment__item ion-no-padding">
            <IonList className="appointment__sub-item">
              <IonText className="appointment__reminder">
                Appointment reminder
              </IonText>
              <IonList className="appointment__times">
                <IonImg className="icon icon--clock" src={iconClock} alt="" />
                <IonText className="appointment__date">Friday: at 4 pm</IonText>
              </IonList>
              <IonList className="appointment__list-image">
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img1} alt="" />
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img2} alt="" />
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img1} alt="" />
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img2} alt="" />
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img1} alt="" />
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img2} alt="" />
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img1} alt="" />
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img2} alt="" />
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
              </IonList>
            </IonList>
            <IonList className="appointment__sub-item">
              <IonText className="appointment__reminder">
                Appointment reminder
              </IonText>
              <IonList className="appointment__times">
                <IonImg className="icon icon--clock" src={iconClock} alt="" />
                <IonText className="appointment__date">Friday: at 4 pm</IonText>
              </IonList>
              <IonList className="appointment__list-image">
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img1} alt="" />
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img2} alt="" />
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img1} alt="" />
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img2} alt="" />
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img1} alt="" />
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img2} alt="" />
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img1} alt="" />
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img2} alt="" />
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
              </IonList>
            </IonList>
            <IonList className="appointment__sub-item">
              <IonText className="appointment__reminder">
                Appointment reminder
              </IonText>
              <IonList className="appointment__times">
                <IonImg className="icon icon--clock" src={iconClock} alt="" />
                <IonText className="appointment__date">Friday: at 4 pm</IonText>
              </IonList>
              <IonList className="appointment__list-image">
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img1} alt="" />
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img2} alt="" />
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img1} alt="" />
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img2} alt="" />
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img1} alt="" />
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img2} alt="" />
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img1} alt="" />
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img2} alt="" />
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
              </IonList>
            </IonList>
            <IonList className="appointment__sub-item">
              <IonText className="appointment__reminder">
                Appointment reminder
              </IonText>
              <IonList className="appointment__times">
                <IonImg className="icon icon--clock" src={iconClock} alt="" />
                <IonText className="appointment__date">Friday: at 4 pm</IonText>
              </IonList>
              <IonList className="appointment__list-image">
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img1} alt="" />
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img2} alt="" />
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img1} alt="" />
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img2} alt="" />
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img1} alt="" />
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img2} alt="" />
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img1} alt="" />
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonImg className="img img--parent" src={img2} alt="" />
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
              </IonList>
            </IonList>
          </IonList>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AppointmentCenter;

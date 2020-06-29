import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonImg,
  IonText,
  IonList,
  IonItem,
  IonToolbar,
  IonAlert,
  IonLabel,
  IonRouterLink,
} from "@ionic/react";
import React from "react";
import "./Home.scss";

import iconPicture from "../images/icon-mypicture.png";
import iconMessage from "../images/icon-message.png";
import iconSchool from "../images/icon-document.png";
import iconInfoChild from "../images/icon-infochild.png";
import iconAppointment from "../images/icon-appointment.png";
import iconAttendance from "../images/icon-attendance.png";
import iconNotification from "../images/icon-notification.png";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="home">
          <IonHeader className="ion-no-border home__header">
            <IonTitle className="ion-text-center home__title-header">
              Home
            </IonTitle>
            <IonList className="home__noti">
              <IonImg
                className="icon icon--noti"
                src={iconNotification}
                alt=""
              />
              <IonLabel className="home__label">1</IonLabel>
            </IonList>
          </IonHeader>

          <IonList className="home__list">
            <IonRouterLink href="#" className="home__link">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconPicture}
                  alt=""
                ></IonImg>
                <IonText className="home__title">My Pictures</IonText>
              </IonList>
            </IonRouterLink>
            <IonRouterLink href="#" className="home__link">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconMessage}
                  alt=""
                ></IonImg>
                <IonText className="home__title">Message Center</IonText>
              </IonList>
            </IonRouterLink>
            <IonRouterLink href="#" className="home__link">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconSchool}
                  alt=""
                ></IonImg>
                <IonText className="home__title">School Documents</IonText>
              </IonList>
            </IonRouterLink>
            <IonRouterLink href="/childdailyinfo" className="home__link">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconInfoChild}
                  alt=""
                ></IonImg>
                <IonText className="home__title">
                  Child Daily information
                </IonText>
              </IonList>
            </IonRouterLink>
            <IonRouterLink href="/appointmentcenter" className="home__link">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconAppointment}
                  alt=""
                ></IonImg>
                <IonText className="home__title">Appointment Center</IonText>
              </IonList>
            </IonRouterLink>
            <IonRouterLink href="#" className="home__link">
              <IonList className="home__item">
                <IonImg
                  className="home__image"
                  src={iconAttendance}
                  alt=""
                ></IonImg>
                <IonText className="home__title">Attendance</IonText>
              </IonList>
            </IonRouterLink>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;

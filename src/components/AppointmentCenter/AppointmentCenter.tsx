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
  IonModal,
  IonButton,
  IonLabel,
  IonRouterLink,
  IonTextarea,
  IonInput,
  IonFab,
  IonFabButton,
  IonRadio,
} from "@ionic/react";

import "./AppointmentCenter.scss";

import iconBack from "../../images/icon-back.png";
import iconClock from "../../images/icon-clock.png";
import img1 from "../../images/img-parent.png";
import img2 from "../../images/img-parent2.png";
import iconClose from "../../images/icon-close.png";
import imgChild from "../../images/img-child.png";

const AppointmentCenter: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
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

          <IonModal isOpen={showModal} cssClass="modal">
            <IonList className="modal__list">
              <IonList className="modal__item">
                <IonImg className="img img--avata" src={img2} alt="" />
                <IonList className="modal__content">
                  <IonText className="modal__text">
                    Ali M.<IonLabel className="modal__ref">(Father)</IonLabel>
                  </IonText>
                  <IonRouterLink className="modal__link">
                    View Profile
                  </IonRouterLink>
                </IonList>
                <IonButton className="btn-modal btn-modal--cancel">
                  Cancel
                </IonButton>
              </IonList>
              <IonList className="modal__item">
                <IonImg className="img img--avata" src={imgChild} alt="" />
                <IonList className="modal__content">
                  <IonText className="modal__text">
                    Alya Ali.
                    <IonLabel className="modal__ref">(Dauther)</IonLabel>
                  </IonText>
                  <IonRouterLink href="/paintclassroom" className="modal__link">
                    Paint Clasroom
                  </IonRouterLink>
                </IonList>
                <IonButton className="btn-modal btn-modal--desire">
                  Desire Child
                </IonButton>
              </IonList>

              <IonTextarea
                style={{ height: 200, marginTop: 20, marginBottom: 20 }}
                className="childDaily__comment"
                placeholder="Write Comment"
              ></IonTextarea>
              <IonList className="yesno">
                <IonItem lines="none" className="yesno__item">
                  <IonLabel className="yesno__text">Yes</IonLabel>
                  <IonRadio className="yesno__input"></IonRadio>
                </IonItem>
                <IonItem lines="none" className="yesno__item">
                  <IonLabel className="yesno__text">No</IonLabel>
                  <IonRadio className="yesno__input"></IonRadio>
                </IonItem>
              </IonList>
            </IonList>
            <IonFab
              className="modal__close"
              vertical="top"
              horizontal="end"
              slot="fixed"
            >
              <IonFabButton
                className="btn-modal btn-modal--close"
                onClick={() => setShowModal(false)}
              >
                <IonImg className="icon icon--close" src={iconClose} alt="" />
              </IonFabButton>
            </IonFab>
          </IonModal>

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
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img1} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img2} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>

                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img1} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img2} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img1} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img2} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img1} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img2} alt="" />
                  </IonButton>
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
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img1} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img2} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>

                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img1} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img2} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img1} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img2} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img1} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img2} alt="" />
                  </IonButton>
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
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img1} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img2} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>

                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img1} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img2} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img1} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img2} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img1} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img2} alt="" />
                  </IonButton>
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
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img1} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img2} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>

                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img1} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img2} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img1} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img2} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Ali</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img1} alt="" />
                  </IonButton>
                  <IonText className="appointment__name">Jack</IonText>
                </IonList>
                <IonList className="appointment__item-image">
                  <IonButton
                    className="ion-no-padding appointment__button"
                    onClick={() => setShowModal(true)}
                  >
                    <IonImg className="img img--parent" src={img2} alt="" />
                  </IonButton>
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

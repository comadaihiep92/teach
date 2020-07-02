// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   IonPage,
//   IonContent,
//   IonHeader,
//   IonToolbar,
//   IonTitle,
//   IonImg,
//   IonBackButton,
//   IonButtons,
//   IonList,
//   IonItem,
//   IonText,
//   IonRadioGroup,
//   IonLabel,
//   IonRadio,
//   IonTextarea,
//   IonSelectOption,
//   IonSelect,
//   IonInput,
//   IonButton,
// } from "@ionic/react";

// import "./ChildDailyInfo.scss";

// import iconBack from "../../images/icon-back.png";
// import iconDrop from "../../images/icon-drop.png";
// import imgSandwitch from "../../images/img-sandwitch.png";
// import imgBanana from "../../images/img-banana.png";
// import imgApple from "../../images/img-apple.png";
// import imgMangojuice from "../../images/img-mangojuice.png";

// const ChildDailyInfo: React.FC = () => {
//   const [week, setWeek] = useState(["Week 1"]);
//   const [day, setDay] = useState(["Monday"]);

//   return (
//     <IonPage className="appointment">
//       <IonHeader className="ion-no-border appointment__header">
//         <IonToolbar className="appointment__toolbar">
//           <IonButtons slot="start">
//             <Link to="/">
//               <IonImg className="icon icon-back" src={iconBack} alt="" />
//             </Link>
//           </IonButtons>

//           <IonTitle className="appointment__title-header">
//             Child Daily Information
//           </IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent>
//         <IonList className="childDaily">
//           <IonList className="childDaily__list">
//             <IonText className="childDaily__title">How often to eat</IonText>
//             <IonRadioGroup>
//               <IonList className="childDaily__radio ion-no-padding">
//                 <IonItem
//                   lines="none"
//                   className="childDaily__radio-item ion-no-padding"
//                 >
//                   <IonLabel className="childDaily__label">0 Times</IonLabel>
//                   <IonRadio
//                     className="childDaily__rdo"
//                     value="0 Times"
//                   ></IonRadio>
//                 </IonItem>
//                 <IonItem
//                   lines="none"
//                   className="childDaily__radio-item ion-no-padding"
//                 >
//                   <IonLabel className="childDaily__label">1 Times</IonLabel>
//                   <IonRadio
//                     className="childDaily__rdo"
//                     value="1 Times"
//                   ></IonRadio>
//                 </IonItem>
//                 <IonItem
//                   lines="none"
//                   className="childDaily__radio-item ion-no-padding"
//                 >
//                   <IonLabel className="childDaily__label">2 Times</IonLabel>
//                   <IonRadio
//                     className="childDaily__rdo"
//                     value="2 Times"
//                   ></IonRadio>
//                 </IonItem>
//                 <IonItem
//                   lines="none"
//                   className="childDaily__radio-item ion-no-padding"
//                 >
//                   <IonLabel className="childDaily__label">3 Times</IonLabel>
//                   <IonRadio
//                     className="childDaily__rdo"
//                     value="3 Times"
//                   ></IonRadio>
//                 </IonItem>
//               </IonList>
//             </IonRadioGroup>
//             <IonTextarea
//               className="childDaily__comment"
//               placeholder="Write Comment"
//             ></IonTextarea>
//           </IonList>
//           <IonList className="childDaily__list ion-no-padding">
//             <IonText className="childDaily__title">The menu of the day</IonText>
//             <IonList className="childDaily__list-day ion-no-padding">
//               <IonSelect
//                 className="list-day__item"
//                 value={week}
//                 onIonChange={(e) => setWeek(e.detail.value)}
//               >
//                 <IonSelectOption value="Week 1">Week 1</IonSelectOption>
//                 <IonSelectOption value="Week 2">Week 2</IonSelectOption>
//                 <IonSelectOption value="Week 3">Week 3</IonSelectOption>
//                 <IonSelectOption value="Week 4">Week 4</IonSelectOption>
//               </IonSelect>

//               <IonSelect
//                 className="list-day__item"
//                 value={day}
//                 onIonChange={(e) => setDay(e.detail.value)}
//               >
//                 <IonSelectOption value="Monday">Monday</IonSelectOption>
//                 <IonSelectOption value="Tuesday">Tuesday</IonSelectOption>
//                 <IonSelectOption value="Wednesday">Wednesday</IonSelectOption>
//                 <IonSelectOption value="Thursday">Thursday</IonSelectOption>
//                 <IonSelectOption value="Friday">Friday</IonSelectOption>
//                 <IonSelectOption value="Saturday">Saturday</IonSelectOption>
//                 <IonSelectOption value="Sunday">Sunday</IonSelectOption>
//               </IonSelect>
//             </IonList>
//             <IonRadioGroup>
//               <IonList className="childDaily__radio childDaily__radio--big ion-no-padding">
//                 <IonList className="childDaily__radio-item childDaily__radio-height">
//                   <IonImg
//                     className="img img--fruit"
//                     src={imgSandwitch}
//                     alt=""
//                   />
//                   <IonLabel className="childDaily__label">
//                     Cheese Sandwitch
//                   </IonLabel>
//                   <IonRadio className="childDaily__rdo"></IonRadio>
//                 </IonList>
//                 <IonList className="childDaily__radio-item childDaily__radio-height">
//                   <IonImg className="img img--fruit" src={imgBanana} alt="" />
//                   <IonLabel className="childDaily__label">Banana</IonLabel>
//                   <IonRadio className="childDaily__rdo"></IonRadio>
//                 </IonList>
//                 <IonList className="childDaily__radio-item childDaily__radio-height">
//                   <IonImg className="img img--fruit" src={imgApple} alt="" />
//                   <IonLabel className="childDaily__label">Apple</IonLabel>
//                   <IonRadio className="childDaily__rdo"></IonRadio>
//                 </IonList>
//                 <IonList className="childDaily__radio-item childDaily__radio-height">
//                   <IonImg
//                     className="img img--fruit"
//                     src={imgMangojuice}
//                     alt=""
//                   />
//                   <IonLabel className="childDaily__label">Mango Juice</IonLabel>
//                   <IonRadio className="childDaily__rdo"></IonRadio>
//                 </IonList>
//               </IonList>
//             </IonRadioGroup>
//             <IonTextarea
//               className="childDaily__comment"
//               placeholder="Write Comment"
//             ></IonTextarea>
//           </IonList>
//           <IonList className="childDaily__list ion-no-padding">
//             <IonText className="childDaily__title">Nap time:</IonText>
//             <IonList className="childDaily__radio ion-no-padding">
//               <IonItem lines="none" className="childDaily__input">
//                 <IonLabel position="floating" className="label label--blue">
//                   Duration
//                 </IonLabel>
//                 <IonInput
//                   type="number"
//                   placeholder="Select"
//                   value=""
//                 ></IonInput>
//               </IonItem>
//               <IonItem
//                 lines="none"
//                 className="childDaily__input ion-margin-start"
//               >
//                 <IonLabel position="floating" className="label label--blue">
//                   Time the child slept
//                 </IonLabel>
//                 <IonInput
//                   type="number"
//                   placeholder="Select time"
//                   value=""
//                 ></IonInput>
//               </IonItem>
//             </IonList>
//           </IonList>
//           <IonList className="childDaily__list ion-no-padding">
//             <IonText className="childDaily__title">Bowel movement:</IonText>
//             <IonRadioGroup>
//               <IonList className="childDaily__radio ion-no-padding">
//                 <IonList className="childDaily__radio-item">
//                   <IonLabel className="childDaily__label">Yes</IonLabel>
//                   <IonRadio className="childDaily__rdo" value="yes"></IonRadio>
//                 </IonList>
//                 <IonList className="childDaily__radio-item ion-margin-start">
//                   <IonLabel className="childDaily__label">No</IonLabel>
//                   <IonRadio className="childDaily__rdo" value="no"></IonRadio>
//                 </IonList>
//                 <IonItem
//                   lines="none"
//                   className="childDaily__input ion-margin-start"
//                 >
//                   <IonLabel position="floating" className="label label--blue">
//                     How many
//                   </IonLabel>
//                   <IonInput type="number" value="3"></IonInput>
//                 </IonItem>
//               </IonList>
//             </IonRadioGroup>
//           </IonList>
//           <IonList className="childDaily__list ion-no-padding">
//             <IonText className="childDaily__title">Record injuries:</IonText>
//             <IonRadioGroup>
//               <IonList className="childDaily__radio ion-no-padding">
//                 <IonList className="childDaily__radio-item">
//                   <IonLabel className="childDaily__label">Yes</IonLabel>
//                   <IonRadio className="childDaily__rdo" value="yes"></IonRadio>
//                 </IonList>
//                 <IonList className="childDaily__radio-item ion-margin-start">
//                   <IonLabel className="childDaily__label">No</IonLabel>
//                   <IonRadio className="childDaily__rdo" value="no"></IonRadio>
//                 </IonList>
//                 <IonItem
//                   lines="none"
//                   className="childDaily__input ion-margin-start"
//                 >
//                   <IonLabel position="floating" className="label label--blue">
//                     Where
//                   </IonLabel>
//                   <IonInput
//                     type="number"
//                     placeholder="Write here"
//                     value=""
//                   ></IonInput>
//                 </IonItem>
//                 <IonItem
//                   lines="none"
//                   className="childDaily__input ion-margin-start"
//                 >
//                   <IonLabel position="floating" className="label label--blue">
//                     When
//                   </IonLabel>
//                   <IonInput
//                     type="number"
//                     placeholder="Select"
//                     value=""
//                   ></IonInput>
//                 </IonItem>
//               </IonList>
//             </IonRadioGroup>
//             <IonTextarea
//               className="childDaily__comment"
//               placeholder="Write Comment"
//             ></IonTextarea>
//           </IonList>
//           <IonButton className="btn btn--send">Send</IonButton>
//         </IonList>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default ChildDailyInfo;

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
  IonProgressBar,
  IonCheckbox,
} from "@ionic/react";

import "./ChildDailyInfo.scss";

import iconBack from "../../images/icon-back.png";
import iconSelected from "../../images/icon-selected.png";
import imgSandwitch from "../../images/img-sandwitch.png";
import imgBanana from "../../images/img-banana.png";
import imgApple from "../../images/img-apple.png";
import imgMangojuice from "../../images/img-mangojuice.png";

const ChildDailyInfo: React.FC = () => {
  const [eat, setEat] = useState("");
  const [week, setWeek] = useState(["Week 1"]);
  const [day, setDay] = useState(["Monday"]);
  // const [menu, setMenu] = useState("Banana");
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  const [bowel, setBowel] = useState("");
  const [record, setRecord] = useState("");

  // const checkboxList = [
  //   { val: "Pepperoni", isChecked: true },
  //   { val: "Sausage", isChecked: false },
  //   { val: "Mushroom", isChecked: false },
  // ];

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
            Child Daily Information
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="childDaily">
          <IonList className="childDaily__list">
            <IonText className="childDaily__title">How often to eat</IonText>
            <IonRadioGroup
              value={eat}
              onIonChange={(e) => setEat(e.detail.value)}
            >
              <IonList className="childDaily__radio ">
                <IonItem
                  lines="none"
                  className="childDaily__radio-item ion-no-padding"
                >
                  <IonRadio
                    className="childDaily__rdo"
                    value="0 Times"
                  ></IonRadio>

                  {eat === "0 Times" ? (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected childDaily__selected--show"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label childDaily__label--check">
                        0 Times
                      </IonLabel>
                    </>
                  ) : (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label">0 Times</IonLabel>
                    </>
                  )}
                </IonItem>
                <IonItem
                  lines="none"
                  className="childDaily__radio-item ion-no-padding"
                >
                  <IonRadio
                    className="childDaily__rdo"
                    value="1 Times"
                  ></IonRadio>
                  {eat === "1 Times" ? (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected childDaily__selected--show"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label childDaily__label--check">
                        1 Times
                      </IonLabel>
                    </>
                  ) : (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label">1 Times</IonLabel>
                    </>
                  )}
                </IonItem>
                <IonItem
                  lines="none"
                  className="childDaily__radio-item ion-no-padding"
                >
                  <IonRadio
                    className="childDaily__rdo"
                    value="2 Times"
                  ></IonRadio>
                  {eat === "2 Times" ? (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected childDaily__selected--show"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label childDaily__label--check">
                        2 Times
                      </IonLabel>
                    </>
                  ) : (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label">2 Times</IonLabel>
                    </>
                  )}
                </IonItem>
                <IonItem
                  lines="none"
                  className="childDaily__radio-item ion-no-padding"
                >
                  <IonRadio
                    className="childDaily__rdo"
                    value="3 Times"
                  ></IonRadio>
                  {eat === "3 Times" ? (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected childDaily__selected--show"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label childDaily__label--check">
                        3 Times
                      </IonLabel>
                    </>
                  ) : (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label">3 Times</IonLabel>
                    </>
                  )}
                </IonItem>
              </IonList>
            </IonRadioGroup>
            {/* <IonList className="childDaily__stick">
              <IonText className="childDaily__text">
                “Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book .....”
              </IonText>
              <IonLabel className="childDaily__assign">- Ahmed Mohsen</IonLabel>
            </IonList> */}
            <IonTextarea
              className="childDaily__comment"
              placeholder="Write Comment"
            ></IonTextarea>
          </IonList>
          <IonList className="childDaily__list ion-no-padding">
            <IonText className="childDaily__title">The menu of the day</IonText>
            <IonList className="childDaily__list-day ion-no-padding">
              <IonSelect
                className="list-day__item"
                value={week}
                onIonChange={(e) => setWeek(e.detail.value)}
              >
                <IonSelectOption value="Week 1">Week 1</IonSelectOption>
                <IonSelectOption value="Week 2">Week 2</IonSelectOption>
                <IonSelectOption value="Week 3">Week 3</IonSelectOption>
                <IonSelectOption value="Week 4">Week 4</IonSelectOption>
              </IonSelect>

              <IonSelect
                className="list-day__item"
                value={day}
                onIonChange={(e) => setDay(e.detail.value)}
              >
                <IonSelectOption value="Monday">Monday</IonSelectOption>
                <IonSelectOption value="Tuesday">Tuesday</IonSelectOption>
                <IonSelectOption value="Wednesday">Wednesday</IonSelectOption>
                <IonSelectOption value="Thursday">Thursday</IonSelectOption>
                <IonSelectOption value="Friday">Friday</IonSelectOption>
                <IonSelectOption value="Saturday">Saturday</IonSelectOption>
                <IonSelectOption value="Sunday">Sunday</IonSelectOption>
              </IonSelect>
            </IonList>

            <IonList className="childDaily__menu-list">
              {checked1 ? (
                <IonItem
                  lines="none"
                  className="childDaily__menu-item ion-no-padding"
                >
                  {/* <IonRadio
                      name="menulist"
                      className="childDaily__rdo"
                      value="Cheese Sandwitch"
                    ></IonRadio> */}
                  <IonCheckbox
                    className="childDaily__rdo"
                    value="Cheese Sandwitch"
                    checked={checked1}
                    onIonChange={(e) => setChecked1(e.detail.checked)}
                  />

                  <IonImg
                    className="icon icon--selected childDaily__selected childDaily__selected--show"
                    src={iconSelected}
                    alt=""
                  />
                  <IonList className="childDaily__menu-text childDaily__menu-text--check">
                    <IonImg
                      className="img img--fruit"
                      src={imgSandwitch}
                      alt=""
                    />
                    <IonText>Cheese Sandwitch</IonText>
                  </IonList>
                </IonItem>
              ) : (
                <IonItem
                  lines="none"
                  className="childDaily__menu-item ion-no-padding"
                >
                  {/* <IonRadio
                    name="menulist"
                    className="childDaily__rdo"
                    value="Cheese Sandwitch"
                  ></IonRadio> */}
                  <IonCheckbox
                    className="childDaily__rdo"
                    value="Cheese Sandwitch"
                    checked={checked1}
                    onIonChange={(e) => setChecked1(e.detail.checked)}
                  />

                  <IonImg
                    className="icon icon--selected childDaily__selected"
                    src={iconSelected}
                    alt=""
                  />
                  <IonList className="childDaily__menu-text">
                    <IonImg
                      className="img img--fruit"
                      src={imgSandwitch}
                      alt=""
                    />
                    <IonText>Cheese Sandwitch</IonText>
                  </IonList>
                </IonItem>
              )}
              {checked2 ? (
                <IonItem
                  lines="none"
                  className="childDaily__menu-item ion-no-padding"
                >
                  {/* <IonRadio
                      name="menulist"
                      className="childDaily__rdo"
                      value="Banana"
                    ></IonRadio> */}
                  <IonCheckbox
                    className="childDaily__rdo"
                    value="Banana"
                    checked={checked2}
                    onIonChange={(e) => setChecked2(e.detail.checked)}
                  />

                  <IonImg
                    className="icon icon--selected childDaily__selected childDaily__selected--show"
                    src={iconSelected}
                    alt=""
                  />
                  <IonList className="childDaily__menu-text childDaily__menu-text childDaily__menu-text--check">
                    <IonImg className="img img--fruit" src={imgBanana} alt="" />
                    <IonText>Banana</IonText>
                  </IonList>
                </IonItem>
              ) : (
                <IonItem
                  lines="none"
                  className="childDaily__menu-item ion-no-padding"
                >
                  {/* <IonRadio
                    name="menulist"
                    className="childDaily__rdo"
                    value="Banana"
                  ></IonRadio> */}
                  <IonCheckbox
                    className="childDaily__rdo"
                    value="Banana"
                    checked={checked2}
                    onIonChange={(e) => setChecked2(e.detail.checked)}
                  />

                  <IonImg
                    className="icon icon--selected childDaily__selected"
                    src={iconSelected}
                    alt=""
                  />
                  <IonList className="childDaily__menu-text">
                    <IonImg className="img img--fruit" src={imgBanana} alt="" />
                    <IonText>Banana</IonText>
                  </IonList>
                </IonItem>
              )}
              {checked3 ? (
                <IonItem
                  lines="none"
                  className="childDaily__menu-item ion-no-padding"
                >
                  {/* <IonRadio
                    name="menulist"
                    className="childDaily__rdo"
                    value="Apple"
                  ></IonRadio> */}
                  <IonCheckbox
                    className="childDaily__rdo"
                    value="Apple"
                    checked={checked3}
                    onIonChange={(e) => setChecked3(e.detail.checked)}
                  />

                  <IonImg
                    className="icon icon--selected childDaily__selected childDaily__selected--show"
                    src={iconSelected}
                    alt=""
                  />
                  <IonList className="childDaily__menu-text childDaily__menu-text childDaily__menu-text--check">
                    <IonImg className="img img--fruit" src={imgApple} alt="" />
                    <IonText>Apple</IonText>
                  </IonList>
                </IonItem>
              ) : (
                <IonItem
                  lines="none"
                  className="childDaily__menu-item ion-no-padding"
                >
                  {/* <IonRadio
                    name="menulist"
                    className="childDaily__rdo"
                    value="Apple"
                  ></IonRadio> */}
                  <IonCheckbox
                    className="childDaily__rdo"
                    value="Apple"
                    checked={checked3}
                    onIonChange={(e) => setChecked3(e.detail.checked)}
                  />
                  <IonImg
                    className="icon icon--selected childDaily__selected"
                    src={iconSelected}
                    alt=""
                  />
                  <IonList className="childDaily__menu-text">
                    <IonImg className="img img--fruit" src={imgApple} alt="" />
                    <IonText>Apple</IonText>
                  </IonList>
                </IonItem>
              )}
              {checked4 ? (
                <IonItem
                  lines="none"
                  className="childDaily__menu-item  ion-no-padding"
                >
                  {/* <IonRadio
                    name="menulist"
                    className="childDaily__rdo"
                    value="Mango Juice"
                  ></IonRadio> */}
                  <IonCheckbox
                    className="childDaily__rdo"
                    value="Mango Juice"
                    checked={checked4}
                    onIonChange={(e) => setChecked4(e.detail.checked)}
                  />
                  <IonImg
                    className="icon icon--selected childDaily__selected childDaily__selected--show"
                    src={iconSelected}
                    alt=""
                  />
                  <IonList className="childDaily__menu-text childDaily__menu-text childDaily__menu-text--check">
                    <IonImg
                      className="img img--fruit"
                      src={imgMangojuice}
                      alt=""
                    />
                    <IonText>Mango Juice</IonText>
                  </IonList>
                </IonItem>
              ) : (
                <IonItem
                  lines="none"
                  className="childDaily__menu-item ion-no-padding"
                >
                  {/* <IonRadio
                    name="menulist"
                    className="childDaily__rdo"
                    value="Mango Juice"
                  ></IonRadio> */}
                  <IonCheckbox
                    className="childDaily__rdo"
                    value="Mango Juice"
                    checked={checked4}
                    onIonChange={(e) => setChecked4(e.detail.checked)}
                  />
                  <IonImg
                    className="icon icon--selected childDaily__selected"
                    src={iconSelected}
                    alt=""
                  />
                  <IonList className="childDaily__menu-text">
                    <IonImg
                      className="img img--fruit"
                      src={imgMangojuice}
                      alt=""
                    />
                    <IonText>Mango Juice</IonText>
                  </IonList>
                </IonItem>
              )}
            </IonList>
            {/* </IonRadioGroup> */}
            {/* <IonList className="childDaily__stick">
              <IonText className="childDaily__text">
                “Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book .....”
              </IonText>
              <IonLabel className="childDaily__assign childDaily__assign--blue">
                - Ahmed Mohsen
              </IonLabel>
            </IonList> */}
            <IonTextarea
              className="childDaily__comment"
              placeholder="Write Comment"
            ></IonTextarea>
          </IonList>
          <IonList className="childDaily__list ion-no-padding">
            <IonText className="childDaily__title">Nap time:</IonText>
            <IonList className="childDaily__radio ion-no-padding">
              <IonItem lines="none" className="childDaily__input">
                <IonLabel
                  position="floating"
                  className="label label--blue label--top"
                >
                  Duration
                </IonLabel>
                <IonSelect
                  className="childDaily__input-text input input--small childDaily__select"
                  placeholder="Select"
                  value="1 Hour"
                >
                  <IonSelectOption>1 Hour</IonSelectOption>
                  <IonSelectOption>2 Hour</IonSelectOption>
                  <IonSelectOption>3 Hour</IonSelectOption>
                </IonSelect>
                {/* <IonInput
                  className="childDaily__input-text input input--small"
                  type="text"
                  placeholder="Select"
                  value="1 Hour"
                ></IonInput> */}
              </IonItem>
              <IonItem
                lines="none"
                className="childDaily__input ion-margin-start"
              >
                <IonLabel
                  position="floating"
                  className="label label--blue label--top"
                >
                  Time the child slept
                </IonLabel>
                {/* <IonInput
                  type="text"
                  className="childDaily__input-text input input--small"
                  placeholder="Select time"
                  value="02:00 PM : 03:00 PM"
                ></IonInput> */}
                <IonSelect
                  className="childDaily__input-text input input--small childDaily__select"
                  placeholder="Select time"
                  value="02:00 PM : 03:00 PM"
                >
                  <IonSelectOption>02:00 PM : 03:00 PM</IonSelectOption>
                  <IonSelectOption>03:00 PM : 04:00 PM</IonSelectOption>
                  <IonSelectOption>04:00 PM : 05:00 PM</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
          </IonList>
          <IonList className="childDaily__list ion-no-padding">
            <IonText className="childDaily__title">Bowel movement:</IonText>
            <IonRadioGroup
              value={bowel}
              onIonChange={(e) => setBowel(e.detail.value)}
            >
              <IonList className="childDaily__radio childDaily__radio-padding">
                <IonItem
                  lines="none"
                  className="childDaily__radio-item childDaily__radio-item-yes ion-no-padding"
                >
                  <IonRadio className="childDaily__rdo" value="yes"></IonRadio>
                  {bowel === "yes" ? (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected childDaily__selected--show"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label childDaily__label--check childDaily__label-yes">
                        Yes
                      </IonLabel>
                    </>
                  ) : (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected "
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label childDaily__label-yes">
                        Yes
                      </IonLabel>
                    </>
                  )}
                </IonItem>
                <IonItem
                  lines="none"
                  className="childDaily__radio-item childDaily__radio-item-yes ion-no-padding"
                >
                  <IonRadio className="childDaily__rdo" value="no" />
                  {bowel === "no" ? (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected childDaily__selected--show"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label childDaily__label--check childDaily__label-yes">
                        No
                      </IonLabel>
                    </>
                  ) : (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label childDaily__label-yes">
                        No
                      </IonLabel>
                    </>
                  )}
                </IonItem>

                {/* <IonItem
                  lines="none"
                  className="childDaily__radio-item  childDaily__radio-item-yes label--right  ion-no-padding"
                >
                  <IonLabel className="childDaily__label childDaily__label--check childDaily__label-yes label--right">
                    3 Times
                  </IonLabel>
                </IonItem> */}

                {/* <IonItem
                  lines="none"
                  className="childDaily__radio-item  childDaily__radio-item-yes  ion-no-padding"
                >
                  <IonImg
                    className="icon icon--selected childDaily__selected childDaily__selected--show"
                    src={iconSelected}
                    alt=""
                  />
                  <IonLabel className="childDaily__label childDaily__label-yes">
                    No
                  </IonLabel>
                  <IonRadio className="childDaily__rdo" value="no"></IonRadio>
                </IonItem> */}
                <IonItem
                  lines="none"
                  className="childDaily__input ion-margin-start"
                >
                  <IonLabel
                    position="floating"
                    className="label label--blue label--top"
                  >
                    How many
                  </IonLabel>
                  <IonInput
                    className="input input--small"
                    type="number"
                    value="3"
                  ></IonInput>
                </IonItem>
              </IonList>
            </IonRadioGroup>
          </IonList>
          <IonList className="childDaily__list ion-no-padding">
            <IonText className="childDaily__title">Record injuries:</IonText>
            <IonRadioGroup
              value={record}
              onIonChange={(e) => setRecord(e.detail.value)}
            >
              <IonList className="childDaily__radio childDaily__radio-padding">
                <IonItem
                  lines="none"
                  className="childDaily__radio-item childDaily__radio-item-yes ion-no-padding"
                >
                  <IonRadio className="childDaily__rdo" value="yes"></IonRadio>
                  {record === "yes" ? (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected childDaily__selected--show"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label childDaily__label--check childDaily__label-yes">
                        Yes
                      </IonLabel>
                    </>
                  ) : (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected "
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label childDaily__label-yes">
                        Yes
                      </IonLabel>
                    </>
                  )}
                </IonItem>
                <IonItem
                  lines="none"
                  className="childDaily__radio-item childDaily__radio-item-yes ion-no-padding"
                >
                  <IonRadio className="childDaily__rdo" value="no" />
                  {record === "no" ? (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected childDaily__selected--show"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label childDaily__label--check childDaily__label-yes">
                        No
                      </IonLabel>
                    </>
                  ) : (
                    <>
                      <IonImg
                        className="icon icon--selected childDaily__selected"
                        src={iconSelected}
                        alt=""
                      />
                      <IonLabel className="childDaily__label childDaily__label-yes">
                        No
                      </IonLabel>
                    </>
                  )}
                </IonItem>
                <IonItem
                  lines="none"
                  className="childDaily__input ion-margin-start"
                >
                  <IonLabel
                    position="floating"
                    className="label label--blue label--top"
                  >
                    Where
                  </IonLabel>
                  <IonInput
                    className="input input--small"
                    placeholder="Write here"
                    type="text"
                    value="Twinky Finger"
                  ></IonInput>
                </IonItem>

                <IonItem
                  lines="none"
                  className="childDaily__input childDaily__input-width ion-margin-start"
                >
                  <IonLabel
                    position="floating"
                    className="label label--blue label--top"
                  >
                    When
                  </IonLabel>
                  {/* <IonInput
                    className="input input--small"
                    placeholder="Select"
                    type="text"
                    value="11:00 AM"
                  ></IonInput> */}
                  <IonSelect
                    className="childDaily__input-text input input--small childDaily__select"
                    placeholder="Select"
                    value="11:00 AM"
                  >
                    <IonSelectOption>10:00 AM</IonSelectOption>
                    <IonSelectOption>11:00 AM</IonSelectOption>
                    <IonSelectOption>12:00 AM</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonList>
            </IonRadioGroup>
            <IonTextarea
              className="childDaily__comment"
              placeholder="Write Comment"
            ></IonTextarea>
          </IonList>
          <IonButton className="btn btn--send">Send</IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ChildDailyInfo;

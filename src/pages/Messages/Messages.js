import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { ChoosePhotoWidget, ProfileCardWidget } from "../../components/Widgets";
import { GeneralInfoForm } from "../../components/Forms";
import { MessagesTable } from '../../components/Tables'
import Profile3 from "../../assets/img/team/profile-picture-3.jpg";
import { pageEmails } from "../../data/tables";


export default () => {
  return (
    <>
      <h1 className="my-5 text-center">Wiadomości</h1>
      <MessagesTable {...pageEmails}/>

    </>
  );
};
 
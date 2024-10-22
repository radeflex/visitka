import React from "react";
import ContactsStyles from "./Contacts.module.css";
import { Container, Link } from "@mui/material";
import vk from "../../img/vk.png";
import github from "../../img/github.png";
import tg from "../../img/tg.jpg";
import gmail from "../../img/gmail.png";
import phone from "../../img/phone.png";

export default function Contacts() {
  return (
    <div>
      <Container className={ContactsStyles.container}>
        <h1 className={ContactsStyles.title}>Contacts</h1>
        <div className={ContactsStyles.contacts}>
          <Link href="https://vk.com/vvvagabond">
            <img className={ContactsStyles.contactsItem} src={vk} alt="vk" />
          </Link>
          <Link href="https://github.com/radeflex">
            <img className={ContactsStyles.contactsItem} src={github} alt="github" />
          </Link>
          <Link href="https://t.me/radeflex">
            <img className={ContactsStyles.contactsItem} src={tg} alt="tg" />
          </Link>
          <Link href="mailto:maks.krav61@gmail.com">
            <img className={ContactsStyles.contactsItem} src={gmail} alt="gmail" />
          </Link>
          <Link href="callto:+7(908)189-24-90">
            <img className={ContactsStyles.contactsItem} src={phone} alt="phone" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

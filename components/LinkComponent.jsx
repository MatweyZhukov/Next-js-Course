//Global
import Link from "next/link";

//Styles
import linkStyles from "../styles/LinkComponent.module.css";

export default function LinkComponent({ title, href }) {
  return (
    <Link className={linkStyles.link} href={href}>
      {title}
    </Link>
  );
}

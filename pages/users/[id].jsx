//Global
import { useRouter } from "next/router";

//Components
import MainContainer from "../../components/MainContainer";

//Styles
import styles from "../../styles/user.module.scss";

export default function User({ user }) {
  const { query } = useRouter();

  return (
    <MainContainer keywords={"user page"}>
      <div className={styles.user}>
        <h1>User with id {query.id}</h1>
        <div>Name of user - {user.name}</div>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    ),
    user = await response.json();

  return {
    props: { user },
  };
}

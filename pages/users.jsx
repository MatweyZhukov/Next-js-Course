//Components
import LinkComponent from "../components/LinkComponent";
import MainContainer from "../components/MainContainer";

//Styles
import usersStyles from "../styles/Users.module.scss";

const users = ({ users }) => {
  return (
    <MainContainer keywords={"users page"}>
      <div className={usersStyles.users}>
        <h1>Users List</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <LinkComponent
                key={user.id}
                href={`/users/${user.id}`}
                title={user.name}
              />
            </li>
          ))}
        </ul>
      </div>
    </MainContainer>
  );
};

export default users;

export async function getStaticProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users"),
    users = await response.json();

  return {
    props: { users },
  };
}

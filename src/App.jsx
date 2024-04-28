import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button  from './Button/Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import ToDoList from './ToDoList.jsx'

function App() {
  const fruits=[{id:1,name:"apple",calories:95},
  {id:2,name:"onrange",calories:45},
  {id:3,name:"banana",claories:105},
  {id:4,name:"coconut",calories:159},
  {id:5,name:"pineapple",calories:37}];
  return (
    <>
      <Header></Header>
      <Footer></Footer>
      <Food></Food>
      <Card></Card>
      <Card></Card>
      <Button></Button>
      <Student name="Spongebob" age={30} isStudent={true}></Student>
      <Student name="patrix" age={42} isStudent={false}/>
      <Student name="suidward" age={50} isStudent={false}></Student>
      <Student name="sandy" age={27} isStudent={true}></Student>
      <Student></Student>
      <UserGreeting isLoggedIn={false} username="Rekha"></UserGreeting>
      <ToDoList></ToDoList>
      </>
  );
}

export default App

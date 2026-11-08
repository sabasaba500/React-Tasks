
const userData = {
  firstName: "Saba", 
  lastName: "Chrelashvili", 
  title: "Student", 
};

function User() {
  return (
    <div id="user" data-testid="user">
      <h1>
        {userData.firstName} {userData.lastName}
      </h1>
      <p>{userData.title}</p>
    </div>
  );
}

function App() {
  return (
    <div id="app">
      <h1>Time to Practice</h1>
      <p>Welcome To React Mziuri Course!</p>
      <User />
    </div>
  );
}

export default App;
import { useAppDispatch, useAppSelector } from './app/hooks'
import { useEffect } from 'react';
import { addUser, fetchUsers } from './reducers/action-creators';
import './App.css'

function App() {
  const dispatch = useAppDispatch()
  const { users, isLoading, error } = useAppSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const handleAddUser = () => {
    const name = prompt() || "Default name";
    dispatch(addUser({ id: 11, name, email: "r.gusseinov@mail.ru" }))
  }

  return (
    <>
      <h2>Simple blog</h2>
      <button onClick={handleAddUser}>Add User</button>

      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}

      {
        users && users.map(user => (
          <div key={user.id} style={{ borderBottom: "1px solid grey", paddingBottom: "15px" }}>
            <h3>{user.name}</h3>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))
      }

      <div className="card">
        {/* <UserContainer /> */}
        {/* <PostContainer /> */}
      </div>
    </>
  )
}

export default App

import './style.css'
import Trash from '../../assets/trash.svg'
function Home() {

  const users = [
    {
      id: '2342asdasds',
      name: 'Rodolfo',
      age: 33,
      email: 'rod@email.com',
    },
    {
      id: '2342as456456sds',
      name: 'Aline',
      age: 33,
      email: 'rod@email.com',
    },
    {
      id: '234223423456ds',
      name: 'Paulo',
      age: 66,
      email: 'paulo@email.com',
    },
  ]

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name='nome' type='text' />
        <input placeholder="Idade" name='idade' type='number' />
        <input placeholder="Email" name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>


      {users.map(user => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}

    </div>
  )
}

export default Home

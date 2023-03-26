import React from 'react'

const LoginForm = ({handleClick}) => {
  return (
    <div>
      <h3>Debe loguearse</h3>
      <form>
        <input role='email' type="text" onChange={(e) => e.target.value} />
        <input data-testid='pass' type="text" />
        <button onClick={handleClick}>Enviar</button>
      </form>
    </div>
  )
}

export default LoginForm

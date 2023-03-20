import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(){
        super()
        this.state = {
            name: 'Giselle'
        }
        console.log('1° Se crea el Constructor. Le pasé un valor al estado q ya existía.');
    }

    componentDidMount(){
        console.log('3° El componente componentDidMount() me da la instancia de cuando se monta. '
        + '3° Se montó el componente de Clase, se ejecuta cuando se monta/nace/aparece en el DOM. '
        + 'Se conoce como side effects, después de 1° y 2°, recién se ejecutan los side effects.'
        );
        setTimeout(()=>{
            this.setState({name: 'Ciro'})
        }, 5000)
    }

    componentDidUpdate(){
        console.log('4° Se actualizó el componente con componentDidUpdate(), pero necesitó la lógica de componentDidMount()');
    }

    componentWillUnmount(){
        console.log('5° cuando se desmonta/desaparece mi componente de clase.');
    }

  render() {
    console.log('2° Se ejecuta el RENDER de la clase, es decir se renderizan los diferentes elementos html. '
        + 'Estoy renderizando: ' + this.state.name);
    console.log();
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <h3>{this.state.name}</h3>
      </div>
    )
  }
}

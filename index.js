class Endereco {
  constructor(estado, cidade, rua, numero) {
    this.estado = estado,
    this.cidade = cidade,
    this.rua = rua
    this.numero = numero
  }
}

class Telefone {
  constructor(ddd, numero){
    this.ddd = ddd
    this.numero = numero 
  }
}

class Cliente {
  #cpf
  constructor(nome, cpf, endereco){
    this.nome = nome
    this.#cpf = cpf
    this.endereco = endereco
    this.telefone = new Set()
  }

  get privateClienteInfos(){
    return `CPF: ${this.#cpf}`
  }

  adicionarTelefone(newTelefone){
    for (let telefone of this.telefone){
      if (newTelefone.ddd === telefone.ddd && newTelefone.numero === telefone.numero){
        console.log('Este número de telefone já está cadastrado');
      } else {
        this.telefone.add(newTelefone)
      }
    }
  }

  infosCase(){
    return(
      'Informações em UpperCase: \n' +
      `Nome: ${this.nome.toUpperCase()} \n` +
      `Estado: ${this.endereco.estado.toUpperCase()} \n` +
      `Cidade: ${this.endereco.cidade.toUpperCase()} \n` +
      `Rua: ${this.endereco.rua.toUpperCase()} \n\n` +
      'Informações em LowerCase: \n' +
      `Nome: ${this.nome.toLowerCase()} \n` +
      `Estado: ${this.endereco.estado.toLowerCase()} \n` +
      `Cidade: ${this.endereco.cidade.toLowerCase()} \n` +
      `Rua: ${this.endereco.rua.toLowerCase()}`
    )
  }

  clienteDetails(){
    let clienteMessage = ''
    if (this.telefone.size === 0){
      clienteMessage = 'Nenhum telefone encontrado'
    } else {
      for (let telefone of this.telefone){
        clienteMessage += `Telefone: (${telefone.ddd})-${telefone.numero} \n`
      }
    }
  }

  removeTelefone(telefoneToRemove){
    if (this.telefone.size === 0){
      console.log('Nenhum telefone encontrado');
    } else {
      for(let telefone of this.telefone){
        if (telefone.ddd === telefoneToRemove.ddd && telefone.numero === telefoneToRemove.numero){
          this.telefone.delete(telefone)
        } else {
          console.log('Telefone não encontrado');
        }
      }
    }
  }
}

class Empresa{
  #cnpj
  constructor(nome, razaoSocial, cnpj, endereco) {
    this.nome = nome
    this.razaoSocial = razaoSocial
    this.#cnpj = cnpj
    this.endereco = endereco
    this.clientes = new Set()
    this.telefone = new Set()
  }

  get privateEmpresaInfos(){
    return `CNPJ: ${this.#cnpj}`
  }

  infosCase(){
    return(
      'Informações em UpperCase: \n' +
      `Nome: ${this.nome.toUpperCase()} \n` +
      `Razão Social: ${this.razaoSocial.toUpperCase()} \n` +
      `Estado: ${this.endereco.estado.toUpperCase()} \n` +
      `Cidade: ${this.endereco.cidade.toUpperCase()} \n` +
      `Rua: ${this.endereco.rua.toUpperCase()} \n\n` +
      'Informações em LowerCase: \n' +
      `Nome: ${this.nome.toLowerCase()} \n` +
      `Razão Social: ${this.razaoSocial.toLowerCase()} \n` +
      `Estado: ${this.endereco.estado.toLowerCase()} \n` +
      `Cidade: ${this.endereco.cidade.toLowerCase()} \n` +
      `Rua: ${this.endereco.rua.toLowerCase()}`
    )
  }

  adicionarCliente(cliente){
    this.clientes.add(cliente)
  }

  removeTelefone(telefoneToRemove){
    if (this.telefone.size === 0){
      console.log('Nenhum telefone encontrado');
    } else {
      for(let telefone of this.telefone){
        if (telefone.ddd === telefoneToRemove.ddd && telefone.numero === telefoneToRemove.numero){
          this.telefone.delete(telefone)
        } else {
          console.log('Telefone não encontrado');
        }
      }
    }
  }
}

export { Endereco, Telefone, Cliente, Empresa}
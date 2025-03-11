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
  constructor(nome, cpf, endereco) {
    this.nome = nome
    this.#cpf = cpf
    this.endereco = endereco
    this.telefone = new Set()
  }

  get clientePrivateInfo(){
    return `CPF: ${this.#cpf}`
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

  adicionarTelefone(telInfos) {
    this.telefone.add(telInfos)
  }

  removerTelefone(telefoneRemove) {
    if (this.telefone.size === 0) {
      console.log('Ainda não há telefones na lista')
    } else {
      for (let telefoneLista of this.telefone) {
        if (telefoneLista.ddd === telefoneRemove.ddd && telefoneLista.numero === telefoneRemove.numero) {
          console.log(`(${telefoneRemove.ddd})-${telefoneRemove.numero} foi removido da lista!`);
          this.telefone.delete(telefoneLista)
          break
        } else {
          console.log(`Não há um telefone registrado com - DDD: ${telefoneRemove.ddd} e Número: ${telefoneRemove.numero}`);
          break
        }
      }
    }
  }

  clienteDetails() { 
    let mensagem = ''
    for (let numero of this.telefone){
      mensagem += `DDD: ${numero.ddd} Número: ${numero.numero} \n`
    }
    return `Nome: ${this.nome} \n` +
      `Estado: ${this.endereco.estado} Cidade: ${this.endereco.cidade} Rua: ${this.endereco.rua} Número: ${this.endereco.numero} \n` +
      `${mensagem}`
  }
}

class Empresa {
  #cnpj
  constructor(nome, razaoSocial, cnpj, endereco) {
    this.nome = nome
    this.razaoSocial = razaoSocial
    this.#cnpj = cnpj
    this.endereco = endereco
    this.cliente = new Set()
    this.telefone = new Set()
  }

  get empresaPrivateInfo(){
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

  adicionarClientes(cliente){
    this.cliente.add(cliente)
  }

  removerTelefone(telefoneRemove) {
    if (this.telefone.size === 0) {
      console.log('Ainda não há telefones na lista')
    } else {
      for (let telefoneLista of this.telefone) {
        if (telefoneLista.ddd === telefoneRemove.ddd && telefoneLista.numero === telefoneRemove.numero) {
          console.log(`(${telefoneRemove.ddd})-${telefoneRemove.numero} foi removido da lista!`);
          this.telefone.delete(telefoneLista)
          // break
        } else {
          console.log(`Não há um telefone registrado com - DDD: ${telefoneRemove.ddd} e Número: ${telefoneRemove.numero}`);
          // break
        }
      }
    }
  }

  companyDetails(){
    let mensagem = ''
    for (let cliente of this.cliente){
      mensagem += cliente.clienteDetails() + '\n'
    }
    return `Razão Social: ${this.razaoSocial} \n` +
      `Nome: ${this.nome} \n` +
      '------------------------------------------ \n' +
      `${mensagem}`
    
  }
}

export { Endereco, Telefone, Cliente, Empresa}
import { useTransactions } from "../../providers/transactions"
import { ListStyled, TrasactionsStyled } from "./style"

const List = () => {

  const {list} = useTransactions()
  
  return(
    <ListStyled>
      <li className="header-list">
      <p>Nome da loja</p>
      <p>Dono da loja</p>
      <p>CPF</p>
      <p>Cartão</p>
      <p>Valor</p>
      <p>Hora</p>
      <p>Data</p>
      <p>Tipo</p>
      </li>
      <ul>
        {list ? list.map((item, index) => 
        <TrasactionsStyled color={index % 2 === 0 ? "#acabab" : ""}>
        <p>{item.store_name}</p>
        <p>{item.store_owner}</p>
        <p>{item.cpf}</p>
        <p>{item.card}</p>
        <p>{item.value}</p>
        <p>{item.hour}</p>
        <p>{item.date}</p>
        <p>{item.type}</p>
        </TrasactionsStyled>
        ) : <li>vazias</li>}
      </ul>
    </ListStyled>
  )
}
export default List
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { useGetEbacSportsQuery } from './services/api'

import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  // O RTK Query gerencia o estado da requisição
  const { data: produtos, isLoading } = useGetEbacSportsQuery()

  return (
    <>
      <GlobalStyle />
      <div className="container">
        {/* O Header agora buscará seus próprios dados da store */}
        <Header />
        {isLoading ? (
          <h2>Carregando...</h2>
        ) : (
          <Produtos produtos={produtos || []} />
        )}
      </div>
    </>
  )
}

export default App

import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { RootState } from '../store'
import { adicionar } from '../store/reducers/carrinho'
import { favoritar as favoritarAction } from '../store/reducers/favoritos'

import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
}

const ProdutosComponent = ({ produtos }: Props) => {
  const dispatch = useDispatch()

  const favoritos = useSelector((state: RootState) => state.favoritos.items)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)
    return IdsDosFavoritos.includes(produtoId)
  }

  const adicionarAoCarrinho = (produto: ProdutoType) => {
    dispatch(adicionar(produto))
  }

  const favoritar = (produto: ProdutoType) => {
    dispatch(favoritarAction(produto))
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={favoritar}
            aoComprar={adicionarAoCarrinho}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent

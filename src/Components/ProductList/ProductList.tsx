import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import styled from 'styled-components'

interface Product {
  id: number;
  nome: string;
  foto: string;
  preco: number;
  category: string;
  image: string;
}

const Container = styled.div`
    width: 1140px;
    display: block;
    margin: auto;
`
const TitlePage = styled.h1`
  font-family: 'Courgette', cursive;
  padding-top:30px;
  font-size: 30px;
  line-height: 48px;
  color: #6A8E84;
`
const Products = styled.div`
  padding-left:4px;
  display: flex;
  flex-wrap: wrap;
`
const ProductItem = styled.div`
  width: 228px;
  min-height: 200px;
  margin-right: 20px;
  margin-top:20px;
  padding:18px;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`
const ImageItem = styled.img`
  max-width: 100%;
`
const ProductTitle = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #3E4047;
  line-height: 24px;
`
const ProductPrice = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #6A8E84;
`
const ButtonAdd = styled.button`
  background-color: #837460;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 300;
  height: 36px;
  width: 100px;
  float: right;
  border: none;
  border-radius: 4px;
  padding: 4px;
  margin-top: -50px;
`


const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fazer a requisição para o JSON externo
        const response = await fetch('https://api.npoint.io/07aac9a75070f59bd496');
        const data = await response.json();
        console.log(data);

        // Atualizar o estado com os dados do JSON
        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <TitlePage>Lista de Produtos</TitlePage>
        <Products>
          {products.map((product) => (
            <ProductItem key={product.id}>
              <ImageItem src={product.foto} alt={product.nome} />
              <ProductTitle>{product.nome}</ProductTitle>
              <ProductPrice>R$ {product.preco.toFixed(2)}</ProductPrice>
              <ButtonAdd>Adicionar</ButtonAdd>
            </ProductItem>
          ))}
        </Products>
      </Container>
    </div>
  );
};

export default ProductList;

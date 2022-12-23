# Criar Catalogo
curl -X POST -H "Content-Type: application/json" -d '{ 
  "catalogName": "Nome do catalogo" 
 }' 
"http://localhost:8080/catalog"

# Inseri um produto no catalogo
curl -X POST -H "Content-Type: application/json" -d '{
  "catalogName": "My Catalog",
  "products": [
    {
      "productId": 1,
      "productName": "Product 1",
      "productPrice": 10.99,
      "productDescription": "This is the first product in my catalog"
    }
  ]
}' "http://localhost:8080/catalog"

curl -X POST -H "Content-Type: application/json" -d '{
  "catalogName": "Casaco",
  "products": [
    {"productId":25,"productName":"Casaco de couro","productPrice":30.9,"productDescription":"Não a descrição do produto"},
{"productId":26,"productName":"Casaco de couro","productPrice":30.9,"productDescription":"Não a descrição do produto"},
{"productId":27,"productName":"Casaco de couro","productPrice":30.9,"productDescription":"Não a descrição do produto"},
{"productId":28,"productName":"Casaco de couro","productPrice":30.9,"productDescription":"Não a descrição do produto"},
{"productId":29,"productName":"Casaco de couro","productPrice":30.9,"productDescription":"Não a descrição do produto"}
  ]
}' "http://localhost:8080/catalog"


# Casaco
{"productId":25,"productName":"Casaco de couro","productPrice":30.9,"productDescription":"Não a descrição do produto"},
{"productId":26,"productName":"Casaco de couro","productPrice":30.9,"productDescription":"Não a descrição do produto"},
{"productId":27,"productName":"Casaco de couro","productPrice":30.9,"productDescription":"Não a descrição do produto"},
{"productId":28,"productName":"Casaco de couro","productPrice":30.9,"productDescription":"Não a descrição do produto"},
{"productId":29,"productName":"Casaco de couro","productPrice":30.9,"productDescription":"Não a descrição do produto"}


# Bermuda
{"productId":30,"productName":"Bermuda jeans","productPrice":80.0,"productDescription":"Não a descrição do produto"}
{"productId":31,"productName":"Bermuda jeans","productPrice":80.0,"productDescription":"Não a descrição do produto"}
{"productId":32,"productName":"Bermuda jeans","productPrice":80.0,"productDescription":"Não a descrição do produto"}
{"productId":33,"productName":"Bermuda jeans","productPrice":80.0,"productDescription":"Não a descrição do produto"}
{"productId":34,"productName":"Bermuda jeans","productPrice":80.0,"productDescription":"Não a descrição do produto"}




# H2 #



# BERMUDA

{"productId":1,"productName":"Bermuda jeans","productPrice":80.0,"productDescription":"Não a descrição do produto"},
{"productId":2,"productName":"Bermuda jeans","productPrice":80.0,"productDescription":"Não a descrição do produto"},
{"productId":3,"productName":"Bermuda jeans","productPrice":80.0,"productDescription":"Não a descrição do produto"}


# Casaco


{"productId":4,"productName":"Casaco Jeans","productPrice":80.0,"productDescription":"Não a descrição do produto"},
{"productId":5,"productName":"Casaco Jeans","productPrice":80.0,"productDescription":"Não a descrição do produto"},
{"productId":6,"productName":"Casaco Jeans","productPrice":80.0,"productDescription":"Não a descrição do produto"}


curl -X POST -H "Content-Type: application/json" -d '{
  "catalogName": "Bermuda",
  "products": [
    {"productId":1,"productName":"Bermuda jeans","productPrice":80.0,"productDescription":"Não a descrição do produto"},
{"productId":2,"productName":"Bermuda jeans","productPrice":80.0,"productDescription":"Não a descrição do produto"},
{"productId":3,"productName":"Bermuda jeans","productPrice":80.0,"productDescription":"Não a descrição do produto"}
  ]
}' "http://localhost:8080/catalog"


curl -X POST -H "Content-Type: application/json" -d '{
  "catalogName": "Casaco",
  "products": [
    {"productId":4,"productName":"Casaco Jeans","productPrice":80.0,"productDescription":"Não a descrição do produto"},
{"productId":5,"productName":"Casaco Jeans","productPrice":80.0,"productDescription":"Não a descrição do produto"},
{"productId":6,"productName":"Casaco Jeans","productPrice":80.0,"productDescription":"Não a descrição do produto"}

  ]
}' "http://localhost:8080/catalog"






# Json-serve

{
"products": [
{
"id": 1,
"name": "Camisa Polo Preta",
"price": 89.99,
"description": "Camisa polo confeccionada em algodão, com gola redonda e mangas curtas. Possui bolsos frontais e botões de pressão na parte superior."
},
{
"id": 2,
"name": "Calça Jeans Azul Escuro",
"price": 149.99,
"description": "Calça jeans confeccionada em algodão e elastano, com cós com botões e fechamento por zíper. Possui cinco bolsos e lavagem escura."
},
{
"id": 3,
"name": "Tênis Converse All Star Preto",
"price": 199.99,
"description": "Tênis confeccionado em lona e solado emborrachado. Possui cadarço e logo da marca na lateral."
},
{
"id": 4,
"name": "Moletom Com Capuz Cinza",
"price": 99.99,
"description": "Moletom confeccionado em algodão e poliéster, com capuz e bolsos frontais. Possui fechamento por zíper e logo da marca na parte superior."
},
{
"id": 5,
"name": "Bermuda Jeans Branca",
"price": 129.99,
"description": "Bermuda jeans confeccionada em algodão e elastano, com cós com botões e fechamento por zíper. Possui cinco bolsos e lavagem clara."
},
{
"id": 6,
"name": "Camisa Social Branca",
"price": 199.99,
"description": "Camisa social confeccionada em algodão, com colarinho e punhos com botões. Possui tres bolsos frontais e fechamento por botões na parte superior."
},
{
"id": 7,
"name": "Camisa Polo",
"price": 59.99,
"description": "Camisa polo de algodão, modelo clássico e versátil"
},
{
"id": 8,
"name": "Calça Jeans",
"price": 99.99,
"description": "Calça jeans slim fit, confeccionada em tecido de alta qualidade"
},
{
"id": 9,
"name": "Tênis Converse",
"price": 149.99,
"description": "Tênis Converse All Star, modelo clássico e confortável"
},
{
"id": 10,
"name": "Moletom Nike",
"price": 79.99,
"description": "Moletom Nike, confeccionado em tecido macio e confortável"
},
{
"id": 11,
"name": "Blazer Slim Fit",
"price": 199.99,
"description": "Blazer slim fit, confeccionado em lã de alta qualidade"
},
{
"id": 12,
"name": "Camiseta Estampada",
"price": 39.99,
"description": "Camiseta estampada, modelo casual e descolado"
},
{
"id": 13,
"name": "Cinto de Couro",
"price": 49.99,
"description": "Cinto de couro, modelo clássico e versátil"
},
{
"id": 14,
"name": "Óculos Ray-Ban",
"price": 199.99,
"description": "Óculos Ray-Ban Wayfarer, modelo clássico e atemporal"
},
{
"id": 15,
"name": "Relógio Fossil",
"price": 299.99,
"description": "Relógio Fossil, modelo elegante e de alta qualidade"
}
]
}
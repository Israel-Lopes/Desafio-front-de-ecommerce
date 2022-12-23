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
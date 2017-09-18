<template>
  <div>
    <b-container class="pt-3">
    <b-row>
      <b-col v-for="product in filteredEven" :key="product.cod">
      <b-card-group deck
              class="mb-3">
        <b-card :title="product.name"
                :img-src="product.url"
                :img-alt="product.name"
                img-top
                style="max-width: 20rem; height: 30rem;"
                class="mb-2">
          <p class="card-text">
            {{ product.descricao }}
          </p>
          <b-button href="#" variant="primary">R${{  product.preco  }},00</b-button>
        </b-card>
      </b-card-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-for="product in filteredOdd" :key="product.cod">  
      <b-card-group deck
              class="mb-3">
        <b-card :title="product.name"
                :img-src="product.url"
                :img-alt="product.name"
                img-top
                style="max-width: 20rem; height: 30rem;"
                class="mb-2">
          <p class="card-text">
            {{ product.descricao }}
          </p>
          <b-button href="#" variant="primary">R${{  product.preco  }},00</b-button>
        </b-card>
      </b-card-group>
      </b-col> 
    </b-row>
    </b-container>
  </div>
</template>

<script>
/* {
  // GET /someUrl
  this.$http.get('/someUrl').then(response => {

    // get body data
    this.someData = response.body;

  }, response => {
    // error callback
  });
} */

export default {
  data: function () {
    return {
      productList: [
        {
          name:"Teclado show",
          cod: 1,
          descricao: "Teclado de alta qualidade.",
          preco: 100,
          url: "http://localhost:8080/static/produtos/teclado/teclado-1.jpg"
        },
        {
          name:"Teclado show",
          cod: 2,
          descricao: "Teclado de alta qualidade.",
          preco: 100,
          url: "http://localhost:8080/static/produtos/teclado/teclado-3.jpg"
        },
        {
          name:"Teclado medio",
          cod: 3,
          descricao: "Teclado de boa qualidade.",
          preco: 89,
          url: "http://localhost:8080/static/produtos/teclado/teclado-2.jpg"
        },
        {
          name:"Teclado medio",
          cod: 4,
          descricao: "Teclado de boa qualidade.",
          preco: 89,
          url: "http://localhost:8080/static/produtos/teclado/teclado-4.jpg"
        }
      ]
    }
  },
  computed: {
    filteredEven: function() {
        return this.productList.reduce(function (acc, product) {
          let r = product.cod % 2
          if (r == 0) {
            acc.push(product)
          }
          return acc
        }, [])
    },
    filteredOdd: function() {
        return this.productList.reduce(function (acc, product) {
          let r = product.cod % 2
          if (r != 0) { 
            acc.push(product)
          }
        
        return acc
        }, [])
    }
  }
}
</script>


<style>

</style>

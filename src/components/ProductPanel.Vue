<template>
  <div v-on:load="loadProducts">
    <b-container>
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
      productList: {}
    }
  },
  methods: {
    loadProducts: function () {
      console.log(" monted");
      debugger
      this.$http.get(`http://localhost:8000/api/produtos/${this.$route.params.categoria}`).then(response => {
        this.productList = response.body
        /* https://limitless-retreat-29336.herokuapp.com/api/produtos' */
      }, response => {
        console.log('erro de connexao')
      })
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

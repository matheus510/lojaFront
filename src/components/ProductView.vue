<template>
<div>
    <b-container class="pt-3">
        <b-row>
            <b-col>
                <b-card-group deck
                    class="mb-3">
                    <b-card :title="'opa'"
                            :img-src="product.url"
                            :img-alt="'aaa'"
                            img-right
                            style="max-width: 100vw; height: 40vh;"
                            class="mb-2">
                        <p class="card-text">
                            
                        </p>
                        <b-button href="#" variant="success">R$100,00</b-button>
                    </b-card>
                </b-card-group>
            </b-col>
        </b-row>
    </b-container>
</div>    
</template>
<script>
export default {
    data: function () {
        return {
            product: 
                {
                    name: "cabo 1",
                    cod: 1,
                    descricao: "Teclado de alta qualidade.",
                    preco: 100,
                    url: "http://localhost:8080/static/produtos/teclado/teclado-3.jpg"
                }
            ,
        }
    }
}
</script>
<style>
</style>
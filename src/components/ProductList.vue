<template>
    <div>
        <b-table striped hover :fields="fields" :items="productList">
            <template slot="cod" scope="data">
                {{  data.cod  }}
            </template>
            <template slot="nome" scope="data">
                {{  data.nome  }}
            </template>
            <template slot="descricao" scope="data">
                {{  data.descricao  }}
            </template>
            <template slot="preco" scope="data">
                {{  data.preco  }}
            </template>
            <template slot="edit" scope="data" href="data.url">
                edit
            </template>                        
        </b-table>    
    </div>    
</template>

<script>
export default {
    data: function () {
       return {
           fields: {
                cod: {
                    label: 'Cod'
                },
                nome: {
                    // A column that needs custom formatting
                    label: 'Nome'
                },
                categoria: {
                    // A regular column
                    label: 'Categoria'
                },
                descricao: {
                    label: 'descricao'
                },
                preco: {
                    // A regular column
                    label: 'Preco'
                },
                edit: {
                    label: 'Edit'
                }
            },
            items: {}
        }
    },
    computed: {

    },
    methods: {
        
    }
}
</script>

<style>

</style>

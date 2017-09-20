<template>
  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">Form</div>
      <div class="panel-body">
        <form v-on:submit="saveProduct" enctype="application/x-www-form-urlencoded">
            <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
            <button type=submit>manda</button>
        </form>    
      </div>
    </div>
  </div>  
</template>

<script>
import VueFormGenerator from 'vue-form-generator'
export default {
    data: function() {
        return {
            model: {
                categoria: "",
                nome: "",
                descricao: "",
                preco: 0
            },
            schema: {
                fields: [{
                    type: "select",
                    label: "Categoria",
                    model: "categoria",
                    values: function() {
                        return [
                            { id: "cabos", name: "Cabos" },
                            { id: "filtros de linha", name: "Filtros de linha" },
                            { id: "teclados", name: "Teclados" },
                            { id: "adaptadores", name: "Adaptadores" }
                        ]
                    },
                    default: "cabos"
                }, {
                    type: "input",
                    inputType: "text",
                    label: "Nome",
                    model: "nome",
                    disabled: false,
                    placeholder: "Nome do produto",
                    validator: VueFormGenerator.validators.string
                }, {
                    type: "input",
                    inputType: "text",
                    label: "Descrição",
                    model: "descricao",
                    min: 6,
                    required: true,
                    validator: VueFormGenerator.validators.string
                }, {
                    type: "input",
                    inputType: "number",
                    label: "Preco",
                    model: "preco",
                    validator: VueFormGenerator.validators.number
                },
                {
                    type: "image",
                    label: "Avatar",
                    model: "avatar",
                    required: true,
                    preview: true
                }]
            },
            formOptions: {
                validateAfterLoad: true,
                validateAfterChanged: true
            }
        }
    },
    methods: {
        prettyJSON: function(json) {
            if (json) {
                json = JSON.stringify(json, undefined, 4);
                json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
                return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
                    var cls = 'number';
                    if (/^"/.test(match)) {
                        if (/:$/.test(match)) {
                            cls = 'key';
                        } else {
                            cls = 'string';
                        }
                    } else if (/true|false/.test(match)) {
                        cls = 'boolean';
                    } else if (/null/.test(match)) {
                        cls = 'null';
                    }
                    return '<span class="' + cls + '">' + match + '</span>';
                });
            }
        },
        saveProduct: function (event) {
            event.preventDefault()
            return this.$http.post('http://localhost:8000/api/produtos/add', JSON.stringify(this.model))
                .then(response => {
                    console.log(response.body)
                    this.model = {}
                })
                .catch(console.error)
        }
    }
}
</script>

<style scoped>
html {
	font-family: Tahoma;
	font-size: 14px;
}

body {
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-size: 14px;
	line-height: 1.42857143;
	color: #333;
}

pre {
	overflow: auto;
}
	pre .string { color: #885800; }
	pre .number { color: blue; }
	pre .boolean { color: magenta; }
	pre .null { color: red; }
	pre .key { color: green; }    

h1 {
	text-align: center;
	font-size: 36px;
	margin-top: 20px;
	margin-bottom: 10px;
	font-weight: 500;
}

fieldset {
	border: 0;
}

.panel {
	margin-bottom: 20px;
	background-color: #fff;
	border: 1px solid transparent;
	border-radius: 4px;
	-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
	box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
	border-color: #ddd;
}

.panel-heading {
	color: #333;
	background-color: #f5f5f5;
	border-color: #ddd;

	padding: 10px 15px;
	border-bottom: 1px solid transparent;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;        
}

.panel-body {
	padding: 15px;
}				

.field-checklist .wrapper {
	width: 100%;
}
</style>

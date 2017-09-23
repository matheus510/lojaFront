<template>
    <div>
        <div class="container">
            <div class="panel panel-default">
                <div class="panel-heading">Form</div>
                <div class="panel-body">
                    <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
                    <input type=submit onsubmit="validation()">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueFormGenerator from 'vue-form-generator'
    import auth from '../auth'
	export default {
        data: function () {
            return {
            schema: {
                fields: [{
                    type: "input",
                    inputType: "text",
                    label: "username",
                    model: "username",
                    readonly: false,
                    featured: true,
                    disabled: false,
                    placeholder: "Username",
                    validator: VueFormGenerator.validators.string
                }, {
                    type: "input",
                    inputType: "password",
                    label: "Password",
                    model: "password",
                    min: 6,
                    validator: VueFormGenerator.validators.string
                }]
            },
            formOptions: {
                validateAfterLoad: true,
                validateAfterChanged: true
            },
            model: {
                username: "",
                password: ""
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
        submit () {
            let credentials = {
                username: this.model.username,
                password: this.model.password
            }
            
            auth.login(this, credentials, 'secretquote')
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

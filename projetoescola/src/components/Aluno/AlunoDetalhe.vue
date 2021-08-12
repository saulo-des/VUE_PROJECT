<template>
  <div>
    <!-- :btnVoltar="false" ELE QUANDO FALSE IRÁ ESCONDER MEU btnVoltar QUE CONSTA NO Titulo.vue -->
    <titulo :texto="`Aluno: ${aluno.nome}`"  :btnVoltar="!visualizando">
      <button v-show="visualizando" class="btn btnEditar" @click="editar()">Editar</button>
    </titulo>
    
    <table>
      <tbody>
        <tr>
          <td class="colPequeno">Matrícula:</td>
          <td>
            <label>{{ aluno.id }}</label>
          </td>
        </tr>
        <tr>
          <td class="colPequeno">Nome:</td>
          <td>
            <label v-if="visualizando">{{ aluno.nome }}</label>
            <input v-else v-model="aluno.nome" type="text" />
          </td>
        </tr>
        <tr>
          <td class="colPequeno">Sobrenome:</td>
          <td>
            <label v-if="visualizando">{{ aluno.sobrenome }}</label>
            <input v-else v-model="aluno.sobrenome" type="text" />
          </td>
        </tr>
        <tr>
          <td class="colPequeno">Data Nascimento:</td>
          <td>
            <label v-if="visualizando">{{ aluno.dataNasc }}</label>
            <input v-else v-model="aluno.dataNasc" type="text" />
          </td>
        </tr>
        <tr>
          <td class="colPequeno">Professor:</td>
          <td>
            <label v-if="visualizando">{{ aluno.professor.nome }}</label>
            <select v-else v-model="aluno.professor">
                <option v-for="(professor, index) in professores"
                :key="index" v-bind:value="professor">
                {{professor.nome}}
                </option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Titulo from "../_share/Titulo";

export default {
  components: {
    Titulo,
  },

  data() {
    return {
      professores :[],
      aluno: {},
      idAluno: this.$route.params.id,
      visualizando: true
    };
  },

  created() {
    this.$http
      .get("http://localhost:3000/alunos/" + this.idAluno)
      .then((res) => res.json())
      .then((aluno) => (this.aluno = aluno));

       this.$http
        .get("http://localhost:3000/professores")
        .then(res => res.json())
        .then(professor => this.professores = professor);
  },

  methods: {
    editar() {
      //VARIAVEL visualizando SERVE PARA MOSTRAR TIPO DE EDIÇÃO QUANDO FOR CLICADO EM EDITAR
      this.visualizando = !this.visualizando;
    },
  },
};
</script>

<style scoped>
.btnEditar{
    float: right;
    background-color: rgb(76, 186, 249);
}

.colPequeno {
    width: 20%;
    text-align: right;
    background-color: rgb(125, 217, 245);
    font-weight: bold;
}

input, select {
  margin: 0px;
  padding: 5px 10px;
  font-size: 0.9em;
  font-family: montserrat;
  border-radius: 5px;
  border: 1px solid silver;
  background-color: rgb(245, 245, 245);
  width: 95%;
}

select{
  height: 38px;
  width: 100%;
}
</style>

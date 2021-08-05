<template>
  <div>     
      <titulo :texto="`Aluno: ${aluno.nome}`"/>
        <table>
            <tbody>
                <tr>
                    <td class="colPequeno">Matrícula:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Nome:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Sobrenome:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Data Nascimento:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Professor</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
  </div>

</template>

<script>
import Titulo from '../_share/Titulo'

export default {
    components:{
        Titulo
    },

    data() {
        return {
            aluno: {},
            idAluno: this.$route.params.id
        }
    },

    created(){
         this.$http
        .get("http://localhost:3000/alunos/" + this.idAluno)
        .then((res) => res.json())
        .then((aluno) => (this.aluno = aluno));
    },

    methods: {
        name() {
            
        },
    }
};
</script>

<style scoped></style>

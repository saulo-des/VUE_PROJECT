import Vue from 'vue'
import Router from 'vue-router'
import Alunos from './components/Aluno/Alunos'
import Professor from './components/Professor/Professor.vue'
import Sobre from './components/Sobre/Sobre.vue'

Vue.use(Router);

export default new Router ({
    routes: [
        {
            path: '/professores',
            nome: 'Professores',
            component: Professor
        },
        {
            path: '/alunos/:prof_id',
            nome: 'Alunos',
            component: Alunos
        },
        {
            path: '/todosalunos',
            nome: 'Alunos',
            component: Alunos
        },
        {
            path: '/sobre',
            nome: 'Sobre',
            component: Sobre
        }
    ]
})
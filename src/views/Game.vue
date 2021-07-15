<template>
    <div class="background" v-if="modale">
        <div class="modale">
            <button v-on:click="restart">Recommencer</button>
            <button v-on:click="settings">Paramètres</button>
        </div>
    </div>
  <section>
      <div class="banner">
          <div class="banner--score">
              <p>score : 1000</p>
          </div>
          <div class="banner--errors">
              errors
          </div>
      </div>
      <div class="question">
          To be or not to be ?
      </div>
      <div class="answers">
          <card v-for="i in 7" :key="i"/>
      </div>
  </section>
</template>

<script>

import Card from '@/components/Card.vue'

export default {
    components: {
        'card': Card
    },
    data(){
        return {
            modale: false
        }
    },
    mounted(){
        window.addEventListener('keyup', (event) => {
            console.log(event.key);
            if(event.key === 'Escape'){
                console.log('escape');
                this.modale = !this.modale
            }
        })
    },
    methods: {
        restart(){
            console.log('restart');
        },
        settings(){
            console.log('settings');
        }
    }
}
</script>

<style scoped>
section{
    min-width: 100% !important;
    min-height: 100% !important;
    display: grid;
    grid-template-rows: 10vh 5vh 75vh 10vh;
    grid-template-columns: 10% 1fr 10%;
}

.banner{
    grid-row: 1/1;
    grid-column: 2/2;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.question{
    grid-row: 2/2;
    grid-column: 2/2;

    justify-self: center;

    font-weight: 800;
    font-size: 24pt;
}

.answers{
    width: 100%;
    grid-row: 3/3;
    grid-column: 2/2;

    justify-self: center;

    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    row-gap: 10px;
}

.background{
    z-index: 50;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: rgba(91, 30, 24, .8);
}

.modale{
    z-index: 150;
    background-color: #3498db;
    box-shadow: black 1px 3px 10px;
    border-radius: 5px;
    width: 60%;
    height: 40%;

    position: fixed;
    top: 10%;
    left: calc(50% - 30%);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.actions{
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>
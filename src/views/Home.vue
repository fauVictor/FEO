<template>
<div class="background">
    <div class="modale">
        <h1>FEO</h1>
        <div class="actions">
            <button v-on:click="begin">Commencer</button>
            <button v-on:click="configure">Configurer</button>
        </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  methods: {
      begin(){
          this.$router.push('/game')
      },
      configure(){
          this.$router.push('/settings')
      }
  }
}
</script>

<style scoped>
.background{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: #e74c3c;
}

.modale{
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

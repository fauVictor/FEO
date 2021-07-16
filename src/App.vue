<template>
  <router-view/>
</template>

<script>
export default {
    mounted(){
        this.$store.dispatch('INIT_APP')
    }
}
</script>

<style>
#app{
    min-width: 100vh;
    min-height: 100vh;
}
</style>

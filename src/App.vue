<template>
    <game />
</template>

<script>

import Game from './views/Game.vue'

export default {
    components: {
        'game': Game
    }
}
</script>

<style>
#app{
    min-width: 100vh;
    min-height: 100vh;
}

.logo{
    grid-column: 2/2;
    grid-row: 5/5;
    max-height: 100%;
}

.logo_1{
    justify-self: flex-start;
}
.logo_2{
    justify-self: flex-end;
}
</style>

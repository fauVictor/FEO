<template>
    <vue-flip v-on:click="handleClick" v-model="isActive" height="100%" width="100%">
        <template v-slot:front>
            <div class="card--front">
                <p>front</p>
            </div>
        </template>
        <template v-slot:back>
        <div class="card--back">
            <p class="card--back--item card--back--answer">reponse</p>
            <p class="card--back--item card--back--vote">10 % des votes</p>
            <p class="card--back--item card--back--point">16</p>
        </div>
        </template>
    </vue-flip>
</template>

<script>

import VueFlip from 'vue-flip'

export default {
    components:{
        'vue-flip': VueFlip
    },
    data(){
        return {
            modale: false,
            isActive: false
        }
    },
    methods: {
        handleClick(){
            this.isActive = !this.isActive
        }
    },
}
</script>

<style>
.answers .back, .answers .front{
    width: 100%;
    height: 100%;
}

.answers .front{
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #43c1ea;
}

.card--back{
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 1fr 10%;
}

.card--back--item{
    align-self: center;
}

.card--back--answer{
    grid-column: 1/1;
    justify-self: center;
}
.card--back--vote{
    grid-column: 2/2;
    justify-self: center;
}
.card--back--point{
    grid-column: 3/3;
}

.answers .back{
    background-color: #00C158;
}
</style>
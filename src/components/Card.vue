<template>
    <vue-flip v-model="card.isActive" height="100%" width="100%">
        <template v-slot:front>
            <div class="card--front">
                <p>{{ id + 1 }}</p>
            </div>
        </template>
        <template v-slot:back>
        <div class="card--back">
            <p class="card--back--item card--back--answer">{{ card.answer }}</p>
            <p class="card--back--item card--back--vote">{{ card.vote }}</p>
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
    props: ['id'],
    data(){
        return {
            modale: false,
            isActive: false
        }
    },
    computed: {
        card(){
            return this.$store.getters.getCard(this.$props.id)
        }
    }
}
</script>

<style>
.answers .back, .answers .front{
    width: 100%;
    height: 100%;

    font-size: 20pt;
    border-radius: 15px;
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
    grid-template-columns: 20% 1fr 1fr 10%;
}

.card--back--item{
    align-self: center;
}

.card--back--answer{
    grid-column: 2/2;
    justify-self: left;
    margin: 0;
    font-weight: 800;
}
.card--back--vote{
    grid-column: 3/3;
    justify-self: center;
    font-weight: 800;
}
.card--back--point{
    grid-column: 3/3;
}

.answers .back{
    background-color: #00C158;
}
</style>
<template>
    <vue-flip v-model="isActive" height="60px" width="60px">
        <template v-slot:front>
            <div class="error error--front">
                <div class="circle"></div>
            </div>
        </template>
        <template v-slot:back>
        <div class="error error--back">
            <img src="@/assets/vendor/cross.png" alt="">
        </div>
        </template>
    </vue-flip>
</template>

<script>

import VueFlip from 'vue-flip'

export default {
    components: {
        'vue-flip': VueFlip
    },
    props:{
        'id': Number
    },
    computed: {
        isActive(){
            return this.$store.getters.getError >= this.$props.id
        }
    }
}
</script>

<style>
.error{
    width: 60px;
    height: 60px;
}
.error img{
    width: 100%;
    height: 100%;
}
.circle {
    box-sizing: border-box;
    width: 60px;
    height: 60px;
    border: solid black 2px;
    border-radius: 100%;
}

</style>
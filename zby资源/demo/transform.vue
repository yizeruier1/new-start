<template>
    <div>

        <!-- <div class="warp">
            <div class="box" :style="{ transform: `rotate(${degg}deg)` }" @click="add">
                <img src="./banner1.png" alt="" />
                <img src="./banner2.png" alt="" />
                <img src="./banner3.png" alt="" />
                <img src="./banner2.png" alt="" />
            </div>
        </div> -->

        <div>{{ getTotalPrice(0.8) }}</div>
        <div>{{ getTotalPrice(0.5) }}</div>
        <div>{{ getTotalPrice(0.3) }}</div>

    </div>
</template>

<script>
    export default {
        name: 'transform',
        data(){
            return{
                degg: 0
            }
        },
        methods: {
            add(){
                this.degg += 90
            }
        },
        computed: {
            getTotalPrice(){
                return function(userDiscount){
                    return userDiscount * 100
                }
            }
        }
    }
</script>

<style>
    .warp{
        width: 710px;
        height: 340px;
        margin-left: 200px;
        position: relative;
        overflow: hidden;
    }
    .box{
        width: 1390px;
        height: 1390px;
        transition: all ease 1s;
        color: #fff;
        position: absolute;
        left: -340px;
        top: 0;
    }
    .box img{
        display: block;
        width: 710px;
        height: 340px;
        position: absolute;
        border-radius: 10px;
    }
    .box img:nth-child(1){
        left: 340px;
        top: 0;
    }
    .box img:nth-child(2){
        right: -185px;
        top: 525px;
        transform: rotate(90deg);
    }
    .box img:nth-child(3){
        left: 340px;
        bottom: 0;
        transform: rotate(180deg);
    }
    .box img:nth-child(4){
        left: -185px;
        top: 525px;
        transform: rotate(270deg);
    }
</style>
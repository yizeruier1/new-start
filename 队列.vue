<template>
    <div id="app">
        
        <div class="screenshots-box">
            <div class="table-box screenshots-list" v-for="(item, index) in showSlider" :key="index">
                <div class="table-box-lt"></div>
                <div class="table-box-lb"></div>
                <div class="table-box-rt"></div>
                <div class="table-box-rb"></div>
                <p>{{ item }}</p>
                <img src="./assets/logo.png" alt="" />
            </div>
        </div>

        
        <div>
            <input type="text" v-model="num" />
            <button @click="addNum">添加</button>
        </div>

    </div>
</template>

<script>

export default {
    name: 'App',
    data(){
        return {
            silderImgs: [],
            showSlider: [],
            sliderTimer: null,
            num: 0,
            xiab: 0
        }
    },
    methods: {
        addNum(){
            this.getLunbo(parseInt(this.num));
        },
        // 设置轮播图 数组
        getLunbo(index){
            for(var i = 0; i < index; i++){
                this.silderImgs.push(this.xiab);
                this.xiab++;
            }

            if(this.silderImgs.length > 0 && this.sliderTimer === null){
                this.wufenglb();
                this.sliderTimer = setInterval(() => {
                    this.wufenglb();
                }, 1300);
            }
        },


        //无缝轮播的 展示
        wufenglb(){
            if(this.silderImgs.length < 6){
                if(this.showSlider.length === 0){
                    this.showSlider = this.silderImgs.splice(0, this.silderImgs.length);
                }else{
                    if(this.showSlider.length + this.silderImgs.length < 6){
                        this.showSlider = this.showSlider.concat(this.silderImgs.splice(0, this.silderImgs.length));
                    }else{
                        if(this.showSlider.length === 6){
                            this.showSlider.splice(0, this.silderImgs.length);
                            this.showSlider = this.showSlider.concat(this.silderImgs.splice(0, this.silderImgs.length));
                        }else{
                            this.showSlider = this.showSlider.concat(this.silderImgs.splice(0, 6 - this.showSlider.length));
                        }
                    }
                }
                clearInterval(this.sliderTimer);
                this.sliderTimer = null;
            }else{
                if(this.showSlider.length === 0 || this.showSlider.length === 6){
                    this.showSlider = this.silderImgs.splice(0, 6);
                }else{
                    this.showSlider = this.showSlider.concat(this.silderImgs.splice(0, 6 - this.showSlider.length));
                }
            }
        },
    },
    mounted(){
        
    }
}
</script>

<style lang="stylus">
    body
    p
    img
        margin 0
        padding 0
    table-inner-border()
        width 15px
        height 15px
        position absolute
    // 表格盒子 和 四个角
    .table-box
        width 1200px
        min-height 300px
        border 1px solid #045885
        box-sizing border-box
        border-radius 4px
        padding-top 29px
        position relative
        .table-box-lt
            table-inner-border()
            border-top 1px solid #00bffe
            border-left 1px solid #00bffe
            border-top-left-radius 4px
            left -1px
            top -1px
        .table-box-lb
            table-inner-border()
            border-bottom 1px solid #00bffe
            border-left 1px solid #00bffe
            border-bottom-left-radius 4px
            left -1px
            bottom -1px
        .table-box-rt
            table-inner-border()
            border-top 1px solid #00bffe
            border-right 1px solid #00bffe
            border-top-right-radius 4px
            right -1px
            top -1px
        .table-box-rb
            table-inner-border()
            border-bottom 1px solid #00bffe
            border-right 1px solid #00bffe
            border-bottom-right-radius 4px
            right -1px
            bottom -1px
    .screenshots-box
        width 1200px
        min-height 168px
        overflow hidden
        margin-top 20px
        margin-bottom 30px
        .screenshots-list
            width 192px
            min-height 166px
            float left
            padding-top 0
            margin-right 9px
            text-align center
            &:nth-child(6n+6)
                margin-right 0
            p
                width 156px
                height 28px
                margin 0 auto
                margin-top 18px
                font-size 14px
                color #fff
                text-align center
            img
                display inline-block
                max-width 156px
                min-width 116px
                height 110px
                margin 0 auto

</style>

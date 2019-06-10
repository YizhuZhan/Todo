<template>
    <div id="footer">
        <span>Written by lamton{this.author}</span>
    </div>
</template>

<style lang="scss">
#footer {
    margin-top: 40px;
    text-align: center;
    color: #bfbfbf;
    font-size: 10px;
    text-shadow: 0px 1px 0px 1px;
}
</style>

<script>
export default {
    data(){
        return {
            author:'lamton'
        }
    },
}
</script>
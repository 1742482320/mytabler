<template>
    <div class="page">
        <div class="page-main">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "site-wrapper"
}
</script>

<style scoped>
    .page {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-pack: column;
        justify-content: center;
        min-height: 100%;
    }
    .page-main {
        -ms-flex: 1 1 auto;
        flex: 11 auto;
    }
</style>

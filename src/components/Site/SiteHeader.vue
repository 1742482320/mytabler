<template>
    <div class="header">
        <container>
            <div class="d-flex">
                <slot name="site-logo">
                    <site-logo :image-url="imageUrl" :herf="herf" :alt="alt"></site-logo>
                </slot>
                <div class="d-flex order-lg-2 ml-auto">
                    <slot></slot>
                </div>
                <a href="#" @click="toggleMenu" class="header-toggler d-lg-none ml-3 ml-lg-0">
                    <span class="header-toggler-icon"></span>
                </a>
            </div>
        </container>
    </div>
</template>

<script>
export default {
    name: "site-header",
    props: {
        imageUrl: {default: '/'},
        herf: {default: ''},
        alt: {default: 'Tabler'}
    },
    methods:{
        togglerMenu (e) {
            e.preventDefault();
            this.$emit('toggle-menu');
        }
    }
}
</script>

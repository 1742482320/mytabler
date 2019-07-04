<template>
    <ul :calss="className">
        <slot></slot>
    </ul>
</template>

<script>
export default {
    name: "t-nav",
    props: {
        tabbed: {default: false}
    },
    computd:{
        className(){
            const className = {nav: name};
            className[`nav-tabs`] = this.tabbed !== false;
            return className;
        }
    }
}
</script>

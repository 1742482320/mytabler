<template>
    <tag-wrapper :tag="tag" class="nav-item">
        <a v-click-out-side="hideDropdwon" @click="onClick" :class="className">
            <icon v-if="icon" :icon="icon" :prefix="iconPrefix"/>
            {{ lable }}
        </a>
        <dropdown-menu :show="dropdwonVisible">
            <slot></slot>
        </dropdown-menu>
    </tag-wrapper>
</template>
<script>
export default {
    name: 'nav-item',
    props:{
        tag: {default: "li",type: String},
        active: {default: false,type: Boolean},
        lable: {default: "",type: String},
        icon: {default: "",type: String},
        iconPrefix: {default: "fe",type: String},
        to: {default: ""},
    },
    data:()=>({
        dropdownVisible:false
    })
}
</script>
<style scoped>

</style>

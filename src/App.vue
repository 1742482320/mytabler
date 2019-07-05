<template>
    <site-wrapper>
        <site-header imageUrl="" @toggle-menu="toggleMenu">
          <div class="nav-item">
            <!-- <t-button :outline="true" size="sm" herf="https://github.com/tabler/tabler-vue" target="_blank">Source</t-button> -->
          </div>
        </site-header>
    </site-wrapper>
</template>

<script>
import SiteWrapper from "@/components/Site/SiteWrapper.vue"
import SiteHeader from "@/components/Site/SiteHeader.vue"

export default {
  name: 'app',
  data: ()=>({
    menuCollapsed: true
  }),
  methods:{
    toggleMenu(){
      this.menuCollapsed = !this.menuCollapsed;
    }
  }
}
</script>

<style lang="scss">
  // @import "./style/reboot.scss";
  @import "./style/mytabler.scss"
</style>

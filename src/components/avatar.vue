<template>
  <div class="users">
    <div class="c-avatar avat" :style="{'width':imgw&&imgw!=''?imgw:'auto'}">
      <img :src="src&&src!=''?src:'/jjenkins/gokinsui/imgs/avatars/def.png'" class="c-avatar-img " />
    </div>
    <div class="nicks">{{nick}}</div>
  </div>
</template>
<script>
export default {
  props: {
    src: String,
    nick: String,
    imgw: String,
  },
  data () {
    return {
    }
  },
}
</script>
<style lang="sass" scoped>
.users
  display: flex
  .avat
    height: 100%
    margin-right: 5px
  .nicks
    white-space: nowrap
</style>
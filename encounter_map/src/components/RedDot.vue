<template>
  <div class="container" @click="tapRed">
    <div class="picture">
      <img
        alt="red dot" id="red-dot" style="display: none"
        src="../assets/Snowball-lrg.webp"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RedDot',
  data: function () {
    return {
      x: 1,
      y: 1,
      turn: ['move']
    }
  },
  methods: {
    tapRed: function (event) {
      let x = event.clientX
      let y = event.clientY
      let dotRed = this.$el.querySelector('#red-dot')
      dotRed.style.display = ''
      dotRed.style.position = 'absolute'
      dotRed.style.left = (x - 100) + 'px'
      dotRed.style.top = (y - 100) + 'px'
    }
  }

}

// NB mapState then bind x and y to style left and style right

</script>

<style scoped>
.container{
  height: 100vh;
}
</style>

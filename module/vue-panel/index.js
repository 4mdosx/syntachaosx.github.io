const Panel = {
  template: `<div class="box clickable" @click="toggleZoom"> zoom: {{zoom}}</div>`,
  data() {
    return {
      zoom: 0.5,
    }
  },
  methods: {
    toggleZoom() {
      this.zoom = (this.zoom === 0.5 ? 1 : 0.5)
      document.querySelector('#canvas-1').style.zoom = this.zoom
    },
  },
  mounted() {
    document.querySelector('#canvas-1').style.zoom = this.zoom
  },
}

document.body.innerHTML += `
<style>
#vue-panel {
	position: absolute;
	right: 0;
	top: 0;
}
.clickable{
	cursor: pointer
}
</style>
`
Vue.createApp(Panel).mount('#vue-panel')

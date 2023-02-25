<template>
  <div class="wrapper-items">
    {{ selectedItems }}
  </div>
</template>

<script>
export default {
  props: {
    itemData: {
      type: Object,
      default: () => {}
    }
  },
  data  () {
    return {
      selectedItems: [],
    }
  },
  methods: {
    resetSelection () {
      this.selectedItems = []
    }
  }
}
</script>

<style scoped>
.wrapper-items {
  display: flex;
}

div {
  font-size: 12px;
}
</style>


























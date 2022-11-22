<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="spinner-border text-primary" role="status">
      <div
        class="spinner spinner-wrapper w-100"
        label="Loading..."
        :type="type"
        :variant="variant"
      ></div>
    </div>
    <h1 class="my-5">Loading...</h1>
  </div>
</template>

<script>
export default {
  name: 'BaseLoading',
  props: {
    variant: {
      required: false,
      type: String,
      default: 'info',
      validator: (value) => {
        return [
          'primary',
          'secondary',
          'danger',
          'warning',
          'success',
          'info',
          'light',
          'dark'
        ].includes(value)
      }
    },
    type: {
      required: false,
      type: String,
      default: 'border',
      validator: (value) => {
        return ['border', 'grow'].includes(value)
      }
    }
  }
}
</script>

<style lang="stylus">
.spinner-wrapper
  .spinner
    width 4rem
    height 4rem
</style>

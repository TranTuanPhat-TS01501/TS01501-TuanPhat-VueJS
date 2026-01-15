<template>
  <div class="col-6 offset-3 mt-4 text-center">
    <h1>{{ greeting }}</h1>
    
    <button 
      class="btn btn-primary" 
      v-bind:title="buttonTitle" 
      @click="changeGreeting"
    >
      Click để thay đổi
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Xin chào bạn!',
      buttonTitle: 'Nhấn để thay đổi lời chào'
    };
  },
  methods: {
    changeGreeting() {
      this.greeting = 'Hello, World!';
      this.buttonTitle = 'Lời chào mới đã được cập nhật';
    }
  }
}
</script>
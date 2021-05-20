<template>
  <div>
    <button @click="selectTab(1)"
    :class="{'active-tab' : currentTab == 1 }"
    > Current </button>
    
    <button @click="selectTab(2)"
    :class="{'active-tab' : currentTab == 2 }"
    > Last Month </button>
    
    <button @click="selectTab(3)"
    :class="{'active-tab' : currentTab == 3 }"
    > Previous Month </button>

    <div v-if="currentTab == 1">
      <h2>Some Title One </h2>
      <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
    </div>

    <div v-if="currentTab == 2">
      <h2>Some Title Two </h2>
      <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
    </div>

    <div  v-if="currentTab == 3">
      <h2>Some Title Three </h2>
      <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
    </div>


  </div>
</template>

<script>

export default {
  data() {
    return {
    currentTab: 1
}
  },
  methods: {
     
      selectTab(selectedTab) {
        this.currentTab = selectedTab
      }

    
  }
};
</script>

<style scoped>
</style>

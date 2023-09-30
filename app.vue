<template>
  <div class="main">
    <div class="test">
      <EBTextField
        placeholder="placeholder"
        v-model="test1"
      />
      <EBTextField
        type="password"
        placeholder="placeholder"
        v-model="test2"
      />
      <EBSelect v-model="test3" :items="items" />
      {{ test1 }}
      {{ test2 }}
      {{ test3 }}
    </div>
  </div>
</template>
<script setup lang="ts">
import EBTextField from "~/components/ui-kit/EBTextField/EBTextField.vue";
import EBSelect from "~/components/ui-kit/EBSelect/EBSelect.vue";

const onInput = (value: string) => {
  console.log(value)
}

const test1 = ref(null)
const test2 = ref('123123123')

const test3 = ref('111')
const items = ['111', '222', '333']

</script>

<style scoped>
.main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh ;
}

.test {
    display: flex;
    flex-direction: column;
    gap: 100px;
    width: 400px;
}
</style>
<template>
  <VTextField
    class="eb-text-field"
    :flat="true"
    variant="solo"
    bg-color="background"
    color="primary"
    :placeholder="props.placeholder"
    :type="getType"
    :append-inner-icon="getAppendInnerIcon"
    :model-value="props.modelValue"
    @update:modelValue="onInput"
    @click:append-inner="isVisible = !isVisible"
  />
</template>

<script setup lang="ts">
interface Props {
  modelValue: string | number | null
  placeholder?: string,
  type?: 'text' | 'password'
}
const props = withDefaults(defineProps<Props>(), {
  type: "text"
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const onInput = (value: string) => {
  emit('update:modelValue', value)
}

// password input
const isVisible = ref(false)
const getType = computed(() => {
  if (props.type !== 'password') {
    return props.type
  }
  return isVisible.value ? 'text' : 'password'
})
const getAppendInnerIcon = computed(() => {
  if (props.type !== 'password') {
    return undefined
  }
  return isVisible.value ? 'mdi-eye-off' : 'mdi-eye'
})
</script>

<style lang="scss" scoped>
.eb-text-field ::v-deep(.v-field) {
  border-radius: 15px;
}
</style>
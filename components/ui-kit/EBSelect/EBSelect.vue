<template>
  <VSelect
    class="eb-select"
    :flat="true"
    variant="solo"
    bg-color="background"
    color="primary"
    :items="props.items"
    :placeholder="props.placeholder"
    :model-value="props.modelValue"
    @update:model-value="onSelect"
  />
</template>

<script setup lang="ts">
interface Props {
  modelValue: Object | string | number | null
  items: Array<Object | string | number>,
  placeholder?: string,
}
const props = withDefaults(defineProps<Props>(), {
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: Object | string | number): void
}>()

const onSelect = (value: Object | string | number) => {
  emit('update:modelValue', value)
}
</script>

<style lang="scss" scoped>
.eb-select ::v-deep(.v-field) {
  border-radius: 15px;
}
</style>
<script setup>
import { ref } from 'vue'
import MonacoVue from './Monaco.vue';

defineProps({
  msg: String,
})

const count = ref(0)

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

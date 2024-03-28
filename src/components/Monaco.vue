<script>
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import * as monaco from 'monaco-editor'
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

// @ts-ignore
self.MonacoEnvironment = {
  getWorker(_, label) {
    if (['typescript', 'javascript'].includes(label)) {
      return new TsWorker()
    }
    return new EditorWorker();
  }
}

export default defineComponent({
  setup() {
    const root = ref();
    let editor;
    onMounted(() => {
      editor = monaco.editor.create(root.value, {
        language: 'typescript',
        value: `console.log("hello world"); `,
        theme: 'vs-light',
      })
    })
    onUnmounted(() => {
      editor.dispose()
    })
    return {
      root
    }
  }
});
</script>
<template>
    <div id="root" ref="root">

    </div>
</template>
<style scoped>
#root {
  width: 100%;
  height: 95%;
}
</style>
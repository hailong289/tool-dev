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
    const rootEditor = ref();
    const rootEditorPreview = ref();
    let editor;
    let editorPreview;
    onMounted(() => {
      editor = monaco.editor.create(rootEditor.value, {
        language: 'json',
        value: ``,
        theme: 'vs-white',
      });
      editorPreview = monaco.editor.create(rootEditorPreview.value, {
        language: 'json',
        value: formatJSON(`{"text": "Please enter JSON data."}`),
        theme: 'vs-white',
        autoIndent: true,
        formatOnPaste: true,
        formatOnType: true
      });
      editor.getModel().onDidChangeContent((event) => {
        editorPreview.setValue(formatJSON(editor.getValue()));
        editorPreview.getAction('editor.action.formatDocument').run();
      });
    })
    onUnmounted(() => {
      editor.dispose();
      editorPreview.dispose();
    })
    const formatJSON = (val) => {
      try {
        const res = JSON.parse(val);
        return JSON.stringify(res, null, 2)
      } catch {
        const errorJson = {
          "error": `Not json ${val}`
        }
        return JSON.stringify(errorJson, null, 2)
      }
    }
    return {
      rootEditor,
      rootEditorPreview
    }
  }
});
</script>
<template>
    <div class="container">
        <h2> JSON format </h2>
        <div class="content-editor">
          <div class="root-editor-write" ref="rootEditor"></div>
          <div class="root-editor-preview" ref="rootEditorPreview"></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import "../assets/scss/monaco.scss";
</style>
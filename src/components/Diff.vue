
<template>
  <div class="container">
    <h2> Diff </h2>
    <div class="select2 animated zoomIn">
      <p class="language">Ngôn ngữ</p>
      <select name="" id="" v-model="language" @change="onChangeLanguage">
        <option v-for="(item, index) in languages" :value="item">{{item}}</option>
      </select>
    </div>
    <div class="content-editor">
      <div class="root-editor-diff" ref="rootDiffEditor"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/scss/monaco";
.select2 {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  .language{
    color: black;
    margin: 0;
  }
}

</style>

<script setup>
  import {onMounted, ref} from "vue";
  import * as monaco from "monaco-editor";
  const rootDiffEditor = ref();
  const language = ref('javascript');
  let editor;
  const languages = ref([
    'plaintext',
    'php',
    'java',
    'javascript',
    'typescript',
    'python',
    'c',
    'cpp',
    'csharp',
    'kotlin',
    'html',
    'csp',
    'css',
    'scss',
    'cypher',
    'dart',
    'dockerfile',
    'ecl',
    'elixir',
    'flow9',
    'fsharp',
    'freemarker2',
    'go',
    'graphql',
    'ini',
    'julia',
    'less',
    'lexon',
    'lua',
    'liquid',
    'm3',
    'markdown',
    'mdx',
    'mips',
    'msdax',
    'mysql',
    'perl',
    'pgsql',
    'pla',
    'postiats',
    'powerquery',
    'proto',
    'pug',
    'qsharp',
    'razor',
    'redis',
    'redshift',
    'restructuredtext',
    'ruby',
    'rust',
    'sb',
    'scala',
    'scheme',
    'shell',
    'sol',
    'aes',
    'sparql',
    'sql',
    'st',
    'swift',
    'systemverilog',
    'verilog',
    'twig',
    'vb',
    'wgsl',
    'xml',
    'yaml',
    'json',
  ]);
  onMounted( () =>{
    editor = monaco.editor.createDiffEditor(rootDiffEditor.value, {
      originalEditable: true,
    });
    editor.setModel({
      original: monaco.editor.createModel('',language.value),
      modified: monaco.editor.createModel('',language.value),
    });
    const original = editor.getModel().original;
    const modified = editor.getModel().modified;
    original.onDidChangeContent((event) => {
      editor.setModel({original: original.getValue()});
    });
    modified.onDidChangeContent((event) => {
      editor.setModel({original: modified.getValue()});
    });
  });
  const onChangeLanguage = (event) => {
    const original = editor.getModel().original;
    const modified = editor.getModel().modified;
    editor.setModel({
      original: monaco.editor.createModel(original.getValue(),language.value),
      modified: monaco.editor.createModel(modified.getValue(),language.value),
    });
  }
</script>
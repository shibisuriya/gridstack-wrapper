# Simple grid

A simple grid container

<div ref="el"></div>

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'
import {Simple} from '@declarative-gridstack/react/examples'

const el = ref()
onMounted(() => {
  const root = createRoot(el.value)
  root.render(createElement(Simple, {}, null))
})
</script>

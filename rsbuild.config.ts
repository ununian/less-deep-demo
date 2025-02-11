import { defineConfig } from '@rsbuild/core';
import { pluginVue2 } from '@rsbuild/plugin-vue2';
import { pluginLess } from '@rsbuild/plugin-less';

export default defineConfig({
  plugins: [pluginVue2(), pluginLess()],
});

import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/main', component: '@/pages/Tabs/index.tsx' },
    { path: '/', component: '@/pages/Login/index.tsx' },
    { path: '/reset', component: '@/pages/Reset/index.tsx' },
  ],
  fastRefresh: {},
});

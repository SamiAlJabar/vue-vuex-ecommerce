<template>
    <div>
        <StickyHeader />
        <HeaderMain />
        <slot></slot>
    </div>
</template>
  
<script>
import StickyHeader from '@/components/navbar/StickyHeader.vue'
import HeaderMain from '@/components/navbar/HeaderMain.vue'

export default {
    name: 'MainLayout',
    components: {
        StickyHeader,
        HeaderMain
    }
}
</script>

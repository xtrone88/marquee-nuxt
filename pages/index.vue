<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    this.$router.replace('/:industries')
  }
})
</script>

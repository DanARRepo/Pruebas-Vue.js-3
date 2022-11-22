<template>
  <div class="search-form my-5">

    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <!-- Formulario -->
        <form>
          <!-- Grupo 1 (Input texto) -->
          <div
            class="form-group"
            id="input-group-1"
            label="BattleTag:"
            label-for="input-text"
            description="Format: YourProfile#1234"
            >
            <!-- <label>BattleTag</label> -->
            <input
              class="form-control"
              id="input-text"
              v-model="form.battleTag"
              type="text"
              size="lg"
              required
              placeholder="BattleTag">

          </div>

          <!-- Grupo 2 (Selector de región) -->
          <div class="form-group" id="input-group-3" label="Region:" label-for="input-region">
            <select
              class="form-control custom-select"
              id="input-region"
              v-model="form.region"
              size="lg"
              :options="regions"
              required>
            </select>
          </div>

          <!-- boton de envio -->
          <div class="d-flex justify-content-end mt-5">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import { regions } from '@/utils/regions'

export default {
  name: 'MainForm',
  data () {
    return {
      form: {
        battleTag: '',
        region: 'eu'
      }
    }
  },
  computed: {
    regions () {
      return regions.map(region => ({ value: region, text: region.toUpperCase() }))
    }
  },
  methods: {
    onSubmit () {
      const { region, battleTag } = this.form
      this.$router.push({ name: 'Profile', params: { region, battleTag: battleTag.replace('#', '-') } })
    }
  }
}
</script>

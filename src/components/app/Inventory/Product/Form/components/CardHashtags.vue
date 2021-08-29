<template>
  <BOverlay :show="loading">
    <BCard header-tag="h4" no-body>
      <BCardHeader>
        <BRow align-h="between" align-v="center">
          <BCol class="h4 mb-0">
            Hashtags
          </BCol>
        </BRow>
      </BCardHeader>
      <BCardBody>
        <BRow align-h="start" class="gap-3 mx-0" cols="6">
          <BBadge v-for="tag in model" :key="tag" pill variant="soft-secondary" v-text="tag" />
        </BRow>
      </BCardBody>
      <BCardFooter class="p-0">
        <BForm ref="form" @submit.prevent="addHashtag">
          <BFormInput v-model.trim="hashtag" class="border-0 rounded-0" />
        </BForm>
      </BCardFooter>
    </BCard>
  </BOverlay>
</template>

<script lang="ts">
import { Component, Emit, Prop, Ref, VModel, Vue } from 'vue-property-decorator'

@Component({})
export default class CardHashtags extends Vue {
  @VModel({ type: Object }) readonly model!: string[]
  @Prop({ type: Array }) readonly value!: string[]
  @Prop({ type: Boolean, default: false }) readonly loading!: boolean
  @Ref('form') readonly form!: HTMLFormElement

  protected hashtag = ''

  @Emit('input')
  protected addHashtag () {
    this.value.push(this.hashtag)
    this.form.reset()

    return this.value
  }
}
</script>

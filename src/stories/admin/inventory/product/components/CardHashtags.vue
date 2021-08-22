<template>
  <BCard header-tag="h4" no-body>
    <BCardHeader header-bg-variant="light">
      <BRow align-h="between" align-v="center">
        <BCol class="h4 mb-0">
          Hashtags
        </BCol>
      </BRow>
    </BCardHeader>
    <BCardBody>
      <BRow align-h="start" class="gap-3 mx-0" cols="6">
        <BBadge v-for="tag in model" :key="tag" variant="soft-secondary" pill v-text="tag" />
      </BRow>
    </BCardBody>
    <BCardFooter class="p-0">
      <BForm ref="form" @submit.prevent="addHashtag">
        <BFormInput v-model.trim="hashtag" class="border-0 rounded-0" />
      </BForm>
    </BCardFooter>
  </BCard>
</template>

<script lang="ts">
import { Component, Emit, ModelSync, Prop, Ref, Vue } from 'vue-property-decorator'

@Component({})
export default class CardHashtags extends Vue {
  @ModelSync('value', 'change', { type: Object }) readonly model!: string[]
  @Prop({ type: Array }) readonly value!: string[]
  @Ref('form') form!: HTMLFormElement

  protected hashtags: string[] = []
  protected hashtag = ''

  @Emit('input') protected addHashtag () {
    this.value.push(this.hashtag)
    this.form.reset()

    return this.value
  }
}
</script>

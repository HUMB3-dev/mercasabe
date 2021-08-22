<template>
  <BCard class="mb-3" header-tag="h4" no-body>
    <BCardHeader header-bg-variant="light">
      <BRow align-h="between" align-v="center">
        <BCol class="h4 mb-0">
          Hashtags
        </BCol>
      </BRow>
    </BCardHeader>
    <BCardBody>
      <ul class="list-group list-group-flush">
        <li v-for="tag in hashtags" :key="tag" class="list-group-item" v-text="tag" />
      </ul>
    </BCardBody>
    <BCardFooter class="p-0">
      <BForm ref="form" @submit.prevent="addHashtag">
        <BFormInput v-model="hashtag" />
      </BForm>
    </BCardFooter>
  </BCard>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from 'nuxt-property-decorator'

@Component({})
export default class CardHashtags extends Vue {
  @Prop({ type: Array }) readonly value!: string[]
  @Ref('form') form!: HTMLFormElement

  protected hashtags = []
  protected hashtag = ''

  protected addHashtag () {
    this.hashtags.push(this.hashtag)
    this.form.reset()
  }
}
</script>

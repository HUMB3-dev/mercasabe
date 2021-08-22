<template>
  <div class="drop-area overflow-auto" :class="colorClass" @dragover="dragover" @dragleave="dragleave" @drop="drop">
    <input ref="dropfile" :accept="accept" type="file" multiple @change="onChange">

    <BRow v-if="!hasFiles" class="mx-auto" align-content="center">
      <div class="d-flex align-items-center flex-column">
        <i class="fa fa-copy fa-3x" />
        <BBtn variant="falcon-default" class="my-3">
          Add files
        </BBtn>
        <code>or drop files to upload</code>
      </div>
    </BRow>

    <BRow v-else class="w-100 mx-auto">
      <BCol v-for="(file, key) in filelist" :key="key" class="p-2 file-preview" cols="2">
        <BCard class="h-100" no-body>
          <div class="file-menu rounded">
            <BBtn class="btn-circle float-end" variant="falcon-danger" size="sm" @click="removeFile(key)">
              <i class="small fa fa-trash" />
            </BBtn>
          </div>
          <BCardImg :src="previewImage(file)" class="h-100" style="object-fit: cover;" />
        </BCard>
      </BCol>
    </BRow>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'nuxt-property-decorator'

@Component({})
export default class FormDragFile extends Vue {
  @Ref('dropfile') readonly input: HTMLInputElement
  protected filelist: File[] = []
  protected color = 'transparent'

  get accept () {
    return 'accept.pdf,.jpg,.jpeg,.png'
  }

  get hasFiles () {
    return !!this.filelist.length
  }

  get colorClass () {
    return `border-${this.color} bg-soft-${this.color}`
  }

  protected dragover () {
    this.color = 'primary'
  }

  protected dragleave () {
    this.color = 'secondary'
  }

  protected drop (drop: DragEvent) {
    if (!drop.dataTransfer) {
      return
    }

    this.input.files = drop.dataTransfer.files

    this.dragleave()
    return this.onChange()
  }

  protected onChange () {
    // @ts-ignore
    for (const file of this.input.files) {
      this.filelist.push(file)
    }
  }

  protected removeFile (index: number) {
    this.filelist.splice(index, 1)
  }

  protected previewImage (file: File) {
    return URL.createObjectURL(file)
  }
}
</script>

<style lang="scss" scoped>
.drop-area {
  height: 300px;
  border-style: dashed !important;
  border-width: 1px;
  transition: 0.2s;
  position: relative;
  display: flex;
  border-radius: 0.25rem !important;

  &:hover {
    background-color: var(--falcon-100) !important;
  }

  input[type='file'] {
    height: 100%;
    width: 100%;
    opacity: 0;
    position: absolute;
  }

  .file-preview {
    position: relative;
    width: 150px;
    height: 150px;

    .file-menu {
      position: absolute;
      padding: 0.25em;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      opacity: 0;
      transition: 0.2s;

      .btn {
        width: 24px;
        height: 24px;
      }

      &:hover {
        opacity: 1;
        background: linear-gradient(rgba(black, 40%), transparent);
      }
    }
  }
}

</style>

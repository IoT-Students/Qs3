<template>
  <div class="form-container">
    <h1>Fag kø</h1>
    <form class="form" @submit.prevent="submit">
      <fieldset>
        <legend>Lokasjon</legend>
        <BaseInput
            class="baseInput"
            v-model="campus"
            label="Campus"
            type="text"
            :error="errors.campus"
            validateOnInput
        />

        <p></p>
        <BaseInput
            class="baseInput"
            v-model="bygning"
            label="Bygning"
            type="text"
            :error="errors.bygning"
        />

        <p></p>
        <BaseInput
            class="baseInput"
            v-model="rom"
            label="Rom"
            type="text"
            :error="errors.rom"
        />
        <BaseInput
            class="baseInput"
            v-model="bord"
            label="Bord"
            type="text"
            :error="errors.bord"
        />
      </fieldset>

      <fieldset>
        <legend>Øvinger</legend>

      </fieldset>

      <fieldset>
        <legend>Type</legend>

      </fieldset>

      <BaseButton
          type="submit"
          class="mybtn"
          :disabled ="isError"
          something="else"
      >
        Still deg i kø
      </BaseButton>
    </form>
  </div>
</template>

<script>
import BaseInput from "../components/BaseInput";
import BaseButton from "../components/BaseButton";
import { useField, useForm } from "vee-validate";
import { object, string } from 'yup'
//import { useStore } from "vuex"
//import { useRouter } from "vue-router"

export default {
  components: {
    BaseInput,
    BaseButton
  },
  data() {
    return {
      subjectQueue: {
        id: "",
        campus: "",
        bygning: "",
        rom: "",
        bord: "",
      }
    }
  },

  setup() {
    //const store = useStore()
    //const router = useRouter()

    function submit() {
      const subjectQueue ={
        ...this.subjectQueue,
        id: this.id,
        campus: this.campus,
        bygning: this.bygning,
        rom: this.rom,
        bord: this.rom
      }
      console.log(subjectQueue)
      /*
      store.dispatch('createFeedback', subjectQueue).then(()  => {
        router.push({
          name: 'FeedbackList'
        })
      })

       */

    }
    const validationSchema = object({
      campus: string().required('A campus is required'),
      bygning: string().required('A building is required'),
      rom: string().required('A room is required'),
      bord: string().required('A table is required')
    });

    const { errors } = useForm({
      validationSchema,
    })

    const { value: campus } = useField('campus')
    const { value: bygning } = useField('bygning')
    const { value: rom } = useField('rom')
    const { value: bord } = useField('bord')

    return {
      campus,
      bygning,
      rom,
      bord,
      submit,
      errors,
    }
  },
  computed: {
    isError(){
      if(this.errors.campus || this.errors.bygning || this.errors.rom || this.errors.bord) {
        return true
      }
      else{
        return false
      }
    }
  }
}
</script>
<style scoped>
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}
legend {
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
}
.mybtn,
label,
input,
select,
textarea {
  display: inline-flex;
  font-family: "Open sans", sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
.mybtn,
input {
  overflow: visible;
}
.mybtn,
select {
  text-transform: none;
}
.mybtn,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: none;
}
mybtn::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
mybtn:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 2px solid #39b982;
}
label{
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
}
input,
textarea {
  box-sizing: border-box;
  border: solid 1px rgba(0, 0, 0, 0.4);
}
input.error,
select.error {
  margin-bottom: 0;
}
input + p.errorMessage {
  margin-bottom: 24px;
}
textarea {
  width: 100%;
  overflow: auto;
  font-size: 20px;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
[type="text"],
[type="number"],
[type="search"],
[type="password"] {
  height: 52px;
  width: 40%;
  padding: 0 10px;
  font-size: 20px;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
[hidden] {
  display: none;
}
.mybtn {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 20px;
  padding: 20px;
  margin: 10px;
  background-color: lightgreen;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.2s linear;
}
.mybtn:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.mybtn:active {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
.mybtn:focus {
  outline: 0;
}
.mybtn:disabled {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}

#header {
  color: #39b982;
}

</style>

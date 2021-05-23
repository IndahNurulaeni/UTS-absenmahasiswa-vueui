<template>
  <div class="index">
    <!--img alt="Vue logo" src="../assets/logo.png">-->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createkontraks"
      >Kontrak</router-link
    >
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Mahasiswa</th>
          <th scope="col">Semester</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(kontrak, index) in kontraks" :key="index">
          <td>{{ kontrak.mahasiswa_id }}</td>
          <td>{{ kontrak.semester_id }}</td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import { onMounted, ref } from "vue";
export default {
  name: "Index",
  components: {
    Slider,
  },
  setup() {
    let kontraks = ref([]);
    onMounted(() => {
      axios
        .get('http://127.0.0.1:8000/api/kontraks')
        .then((Response) => {
          kontraks.value = Response.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
    })
    return {
      kontraks,
    };
  },
};
</script>
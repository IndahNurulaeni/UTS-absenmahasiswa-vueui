<template>
  <div class="index">
    <!--img alt="Vue logo" src="../assets/logo.png">-->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createjadwals"
      >Jadwal</router-link
    >
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Jadwal</th>
          <th scope="col">Matakuliah</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(jadwal, index) in jadwals" :key="index">
          <td>{{ jadwal.jadwal }}</td>
          <td>{{ jadwal.matakuliah_id }}</td>
          
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
    let jadwals = ref([]);
    onMounted(() => {
      axios
        .get('http://127.0.0.1:8000/api/jadwals')
        .then((Response) => {
          jadwals.value = Response.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
    })
    return {
      jadwals,
    };
  },
};
</script>
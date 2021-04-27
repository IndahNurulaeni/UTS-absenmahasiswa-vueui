<template>
  <div class="index">
    <!--img alt="Vue logo" src="../assets/logo.png">-->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createabsens"
      >Absen</router-link
    >
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Waktu Absen</th>
          <th scope="col">Mahasiswa</th>
          <th scope="col">Matakuliah</th>
          <th scope="col">Keterangan</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(absen, index) in absens" :key="index">
          <td>{{ absen.waktu_absen }}</td>
          <td>{{ absen.mahasiswa_id }}</td>
          <td>{{ absen.matakuliah_id }}</td>
          <td>{{ absen.keterangan }}</td>
          
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
    let absens = ref([]);
    onMounted(() => {
      axios
        .get('http://127.0.0.1:8000/api/absens')
        .then((Response) => {
          absens.value = Response.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
    })
    return {
      absens,
    };
  },
};
</script>
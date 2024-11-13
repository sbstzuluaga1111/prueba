import FiltroServants from '../components/FiltroServants.vue';

export default {
  name: "HelloWorld",
  components: {
    FiltroServants,
  },
  data() {
    return {
      titulo: "Fate/Grand Order",
      servants: [],
      loading: true,
    };
  },
  created() {
    fetch("https://api.atlasacademy.io/export/NA/nice_servant.json")
      .then((response) => response.json())
      .then((data) => {
        this.servants = data;
        this.loading = false;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.loading = false;
      });
  },
  methods: {
    getFaceUrl(servant) {
      return (
        servant.extraAssets?.charaGraph?.ascension[4] ||
        servant.extraAssets?.charaGraph?.ascension[3] ||
        servant.extraAssets?.charaGraph?.ascension[2] ||
        servant.extraAssets?.charaGraph?.ascension[1]
      );
    },
  },
};
